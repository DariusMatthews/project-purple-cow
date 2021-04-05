import { useState, useEffect } from "react"
import axios from "axios"

/**
 * @name useAxios
 * @description a custom hook that uses axios to make API calls
 * @returns state of response, loading, and error variables, and a request function to use axios
 */
const useAxios = () => {
  const [response, setResponse] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [method, setMethod] = useState("")
  const [url, setUrl] = useState("")
  const [data, setData] = useState("")
  const [call, setCall] = useState(false)

  /**
   * @name request
   * @description function to init the API call
   * @param {String} method type of API request
   * @param {String} url API URL
   * @param {Object} data data object for POST, PUT methods
   */
  const request = (method, url, data) => {
    setCall(true)
    setLoading(true)
    setMethod(method)
    setUrl(url)
    setData(data)
  }

  useEffect(() => {
    if (call) {
      /**
       * @name apiCall
       * @description async function that calls api using axios and sets loading and error life cycle
       */
      const apiCall = async () => {
        try {
          const res = await axios({
            method,
            url,
            data,
          })

          setResponse(res.data)
          setLoading(false)
        } catch (err) {
          setLoading(false)
          setError(true)
        }
      }

      setCall(false)
      apiCall()
    }
  }, [method, url, data, call])

  return [{ response, error, loading }, request]
}

export default useAxios
