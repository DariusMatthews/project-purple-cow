import React from "react"
import styles from "./Avi.module.css"

const Avi = ({ image }) => (
  <div className={styles.circle}>
    <img src={image} alt="AVI" />
  </div>
)

export default Avi
