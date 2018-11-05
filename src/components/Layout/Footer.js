import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Creator}>
        <div>
          <span>
            Developed by
          </span>
          {" "}
          <a
            className={styles.Link}
            href="https://github.com/SergeiKaptelin"
          >
            SergeiKaptelin
          </a>
        </div>
        <div className={styles.Rectangle}/>
        <a
          className={styles.Link}
          href="https://github.com/SergeiKaptelin/income-expenses"
        >
          Source code
        </a>
      </div>
    </div>
  );
};

export default Footer;
