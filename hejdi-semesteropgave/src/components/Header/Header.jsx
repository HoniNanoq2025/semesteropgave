import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  // useState hook til at styre om mobilmenuen er åben eller lukket
  const [menuOpen, setMenuOpen] = useState(false);

  // Funktion der lukker mobilmenuen når et link klikkes
  const handleLinkClick = () => setMenuOpen(false);

  // useLocation hook giver os den aktuelle route/sti
  const location = useLocation();

  // Helper funktion der bestemmer om et link skal vises
  // Returnerer false hvis vi er på den aktuelle route (skjuler linket)
  const shouldShow = (route) => location.pathname !== route;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyShop</div>

      {/* Desktop navigation - kun synlig på større skærme */}
      <nav className={styles.desktopNav}>
        {/* Conditional rendering - vis kun home link hvis vi ikke er på home siden */}
        {shouldShow("/") && (
          <NavLink to="/" className={styles.link}>
            <AiFillHome size={28} />
          </NavLink>
        )}
        {/* Produkter link - vis kun hvis vi ikke er på produkter siden */}
        {shouldShow("/products") && (
          <NavLink to="/products" className={styles.link}>
            Produkter
          </NavLink>
        )}
        {/* Om os link med anchor tag til specifik sektion */}
        {shouldShow("/about-contact") && (
          <NavLink to="/about-contact#about" className={styles.link}>
            Om os
          </NavLink>
        )}
        {/* Kontakt link med anchor tag */}
        {shouldShow("/about-contact") && (
          <NavLink to="about-contact#contact" className={styles.link}>
            Kontakt os
          </NavLink>
        )}
        {/* Favoritter link med hjerte ikon */}
        {shouldShow("/favorites") && (
          <NavLink to="favorites" className={styles.favLink}>
            <FaHeart size={28} />
          </NavLink>
        )}
        {/* Indkøbskurv link med kurv ikon */}
        {shouldShow("/cart") && (
          <NavLink to="cart" className={styles.cartLink}>
            <FaShoppingCart size={28} />
          </NavLink>
        )}
      </nav>

      {/* Hamburger menu ikon - kun synlig på mobile enheder */}
      <div className={styles.burgerIcon} onClick={() => setMenuOpen(true)}>
        <RxHamburgerMenu size={28} />
      </div>

      {/* Mobile menu overlay - vises kun når menuOpen state er true */}
      <div className={`${styles.overlay} ${menuOpen ? styles.show : ""}`}>
        {/* Luk knap for mobilmenu */}
        <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
          <IoClose size={28} />
        </div>

        {/* Mobile navigation links */}
        <nav className={styles.mobileNav}>
          {/* Alle mobile links bruger handleLinkClick onClick handler */}
          <NavLink
            to="/"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            HJEM
          </NavLink>
          <NavLink
            to="/products"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            PRODUKTER
          </NavLink>
          <NavLink
            to="/cart"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            KURV
          </NavLink>
          <NavLink
            to="/favorites"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            FAVORITTER
          </NavLink>
          <NavLink
            to="/about-contact#about"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            OM OS
          </NavLink>
          <NavLink
            to="/about-contact#contact"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            KONTAKT OS
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
