import React from "react"
import spinner from "../../images/spinner.gif"
import * as styles from "./Spinner.module.css"

/**
 * @name Spinner
 * @returns a spinner gif when api calls are in process
 */
const Spinner = () => <img className={styles.spinner} src={spinner} alt="Loading..." />

export default Spinner
