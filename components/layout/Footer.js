import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyRight}>
        Copyright © 2023 Apple Inc. All rights reserved.
      </div>
      <div className={styles.term}>
        Privacy Policy | Terms of Use | Sales and Refunds | Legal Site Map
      </div>
      <div className={styles.location}>
        United States
      </div>
    </div>
  );
};

export default Footer;
