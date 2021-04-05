import React from "react"
import * as styles from "./Avi.module.css"

const Avi = ({ image }) => (
  <div className={styles.container}>
    <img className={styles.image} src={image} alt="AVI" />
  </div>
)

export default Avi
