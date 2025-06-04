import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);
  const location = useLocation();
  const shouldShow = (route) => location.pathname !== route;

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
        <NavLink to="/about-contact#about" className={styles.link}>
          Om os
        </NavLink>
        <NavLink to="about-contact#contact" className={styles.link}>
          Kontakt os
        </NavLink>
        {shouldShow("/favorites") && (
          <NavLink to="favorites" className={styles.favLink}>
            <FaHeart size={28} />
          </NavLink>
        )}
        {shouldShow("/cart") && (
          <NavLink to="cart" className={styles.cartLink}>
            <FaShoppingCart size={28} />
          </NavLink>
        )}
      </nav>

      <div className={styles.burgerIcon} onClick={() => setMenuOpen(true)}>
        <RxHamburgerMenu size={28} />
      </div>

      <div className={`${styles.overlay} ${menuOpen ? styles.show : ""}`}>
        <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
          <IoClose size={28} />
        </div>

        <nav className={styles.mobileNav}>
          <NavLink
            to="/"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            HJEM
          </NavLink>
          <NavLink
            to="/about-contact#about"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            OM OS
          </NavLink>
          <NavLink
            to="/products"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            PRODUKTER
          </NavLink>
          <NavLink
            to="/about-contact#contact"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            KONTAKT OS
          </NavLink>
          <NavLink
            to="/favorites"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            FAVORITTER
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
