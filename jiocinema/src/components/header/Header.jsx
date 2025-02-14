import React from "react";
import styles from "./header.module.css";
import jio_logo from "../../assets/jc_logo_v2.svg";
import crown from "../../assets/crown.svg";
import voice from "../../assets/voice-search.svg";
import search from "../../assets/ic_search.svg";
import profile from "../../assets/avatar_guest.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <img src={jio_logo} />
          <div className={styles.premium}>
            <img src={crown} className={styles.crown} />
            Go premium
          </div>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <button className={styles.button}>Home</button>
            <hr className={styles.lineLink}></hr>
          </li>
          <li>
            <button className={styles.button}>Sports</button>
            <hr className={styles.lineLink}></hr>
          </li>
          <li>
            <button className={styles.button}>Movies</button>
            <hr className={styles.lineLink}></hr>
          </li>
          <li>
            <button className={styles.button}>TV Shows</button>
            <hr className={styles.lineLink}></hr>
          </li>
          <li>
            <button className={styles.button}>More</button>
            <hr className={styles.lineLink}></hr>
          </li>
        </ul>
      </nav>

      <div className={styles.search}>
        <div className={styles.box}>
          <div className={styles.icon_search}>
            <img src={search} />
          </div>

          <input type="text" className={styles.input} placeholder='Movies, Shows and more'/>

          <div className={styles.icon_voice}>
            <img src={voice} />
          </div>
        </div>
        <div className={styles.profile}>
            <img src={profile} className={styles.profile}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
