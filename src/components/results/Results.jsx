import React from 'react'
import styles from './Results.module.css'

/**
 * @name Results
 * @param {Number} value the number value you want displayed 
 * @returns the value you want displayed with specific styling
 */
const Results = ({ value }) => <h2 className={styles.result}>{value}</h2>

export default Results;
