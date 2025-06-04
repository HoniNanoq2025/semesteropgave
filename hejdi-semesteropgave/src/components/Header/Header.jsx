import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyShop</div>

      <nav className={styles.destopNav}>
        <NavLink to="/" className={styles.link}>
          <AiFillHome size={28} />
        </NavLink>
        <NavLink to="/products" className={styles.link}>
          Produkter
        </NavLink>
        <NavLink to="/aboutcontactpage" className={styles.link}>
          Om os
        </NavLink>
        <NavLink to="aboutcontactpage" className={styles.link}>
          Kontakt os
        </NavLink>
        <NavLink to=""
      </nav>

      <div className={styles.burgerIcon} onClick={() => setMenuOpen(true)}>
        <RxHamburgerMenu size={28} />
      </div>

      <div className={`${styles.overlay} ${menuOpen ? styles.show : ""}`}>
        <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
          <IoClose size={28} />
        </div>

        <nav className={styles.mobileNav}>
            <NavLink to="/" className={styles.mobileLink} onClick={handleLinkClick} >
            HJEM
            </NavLink>
            <NavLink to="/aboutcontactpage" className={styles.mobileLink} onClick={handleLinkClick} >
            OM OS
            </NavLink>



        </nav>
      </div>
    </header>
  );
}
