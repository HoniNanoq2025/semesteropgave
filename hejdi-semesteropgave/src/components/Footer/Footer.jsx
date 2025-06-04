import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.location}>
        <p><strong>MyShop</strong></p>
        <p>Skaldehøjvej 2</p>
        <p>8800 Viborg</p>
      </div>
      <div className={styles.copyright}>
        <p>Copyright 2025 Viborg</p>
      </div>
    </footer>
  );
}
