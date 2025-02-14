import React from "react";
import styles from "./slidebar.module.css";

const SlideBar = () => {
  return (
    <div className={styles.slide}>
      <ul className={styles.slideEle}>
        <li className={styles.navbutton}><button ></button>For You</li>
        <li className={styles.navbutton}><button ></button>Premium</li>
        <li className={styles.navbutton}><button ></button>Cricket</li>
        <li className={styles.navbutton}><button ></button>Bigg Boss</li>
        <li className={styles.navbutton}><button ></button>Movies</li>
        <li className={styles.navbutton}><button ></button>Anime</li>
        <li className={styles.navbutton}><button ></button>News</li>
        <li className={styles.navbutton}><button ></button>AUS VS IND</li>
        <li className={styles.navbutton}><button ></button>Hockey</li>
        <li className={styles.navbutton}><button ></button>TATA IPL</li>
        <li className={styles.navbutton}><button ></button>ISL</li>
        <li className={styles.navbutton}><button ></button>Kids & Family</li>
        <li className={styles.navbutton}><button ></button>Studios</li>
        <li className={styles.navbutton}><button ></button>Top 10</li>
        
        
      </ul>
    </div>
  );
};

export default SlideBar;
