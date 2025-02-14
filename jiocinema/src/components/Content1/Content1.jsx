import React from 'react';
import styles from './content1.module.css';
import spotlight from '../../assets/Spotlight.webp'

const Content1 = () => {
  return (
    <div className={styles.content1}>
        <h1 className={styles.header}>in The Spotlight</h1>
        <img src={spotlight} className={styles.spotlight}/>
    </div>
  )
}

export default Content1