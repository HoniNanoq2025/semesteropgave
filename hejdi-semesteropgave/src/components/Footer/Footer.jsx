import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.location}>
          <p>
            <strong>MyShop</strong>
          </p>
          <p>Skaldehøjvej 2</p>
          <p>8800 Viborg</p>
        </div>
        <div className={styles.copyright}>
          <p>Copyright 2025 Viborg</p>
        </div>
        <div className={styles.links}>
          <NavLink to="/cookie-policy" className={styles.footerLink}>
            Cookie & privatlivspolitik
          </NavLink>
          <NavLink to="/personal-data-policy" className={styles.footerLink}>
            Persondatapolitik
          </NavLink>
          <NavLink to="/terms-conditions" className={styles.footerLink}>
            Handelsbetingelser
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
