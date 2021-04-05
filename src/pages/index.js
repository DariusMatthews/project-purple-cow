import * as React from "react"

import useAxios from "../utils/hooks/useAxios"

import { API_URL, KEY, ERROR_MSG } from "../utils/constants"

import purpleCow from "../images/Purple_cow2.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card/Card"
import Avi from "../components/avi/Avi"
import Spinner from "../components/spinner/Spinner"
import Error from "../components/error/Error"
import Results from "../components/results/Results"
import Button from "../components/button/Button"

/**
 * @name IndexPage
 * @returns Home page that displays "Project Purple Cow"
 */
const IndexPage = () => {
  const [{ response, error, loading }, request] = useAxios()

  /**
   * @name handleClick
   * @description functions that runs request when the button is clicked
   */
  const handleClick = () => {
    request("GET", `${API_URL}/hit/${KEY}`, null)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Card>
        <Avi image={purpleCow} />
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error message={ERROR_MSG} />
        ) : (
          <Results value={response.value} />
        )}
        <Button clickHandler={handleClick} text="Click for Hits!" />
      </Card>
    </Layout>
  )
}

export default IndexPage
