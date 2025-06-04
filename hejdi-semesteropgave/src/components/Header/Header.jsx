import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
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
        <NavLink to="/aboutcontactpage" className={styles.link}>
        Om os
        </NavLink>
        <NavLink to="/productlistpage" className={styles.link}>
        Produkter</NavLink>

      </nav>
    </header>
  );
}
