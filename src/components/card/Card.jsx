import React from "react"
import * as styles from "./Card.module.css"

const Card = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Card
