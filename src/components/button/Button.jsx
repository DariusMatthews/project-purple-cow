import React from "react"
import * as styles from "./Button.module.css"

/**
 * @name Button
 * @param {Function} clickHandler - on click function
 * @param {Boolean} submit - submit boolean
 * @param {String} text - text string
 * @returns a button component
 */
const Button = ({ clickHandler, submit, text }) => (
  <button
    type={submit ? "submit" : "button"}
    onClick={clickHandler}
    className={styles.btn}
  >
    {text}
  </button>
)

export default Button
