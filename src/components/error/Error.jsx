import React from "react"
import * as styles from "./Error.module.css"

/**
 * @name error
 * @description Component that displays an input error message
 * @component
 * @param {String} message error string
 * @returns an error message
 */
const Error = ({ message }) => <span className={styles.error}>{message}</span>

export default Error
