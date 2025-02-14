import React from 'react';
import styles from './content2.module.css';
import h1 from '../../assets/H1.avif';
import h2 from '../../assets/H2.avif';
import h3 from '../../assets/H3.avif';
import h4 from '../../assets/H4.jpg';

const Content2 = () => {
  return (
    <div className={styles.Content2}>
        <h1 className={styles.header}>Hot Right Now 🔥</h1>
        <div className={styles.images}>
            <img src={h1}/>
            <img src={h2}/>
            <img src={h3}/>
            <img src={h4}/>
        </div>
    </div>
  )
}

export default Content2