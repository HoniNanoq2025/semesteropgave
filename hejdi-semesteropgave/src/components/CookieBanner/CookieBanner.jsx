import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  // useState hook til at styre komponentens visibility state
  const [isVisible, setIsVisible] = useState(false);

  // useEffect hook der kører når komponenten mounter
  useEffect(() => {
    // Checker om der eksisterer et cookie med navnet "cookieConsent"
    const consent = Cookies.get("cookieConsent");

    // Hvis der ikke findes samtykke cookie, så vis banneret
    if (!consent) {
      setIsVisible(true);
    }
  }, []); // Tom dependency array betyder at effecten kun kører én gang ved mount

  // Event handler function til at acceptere cookies
  const handleAccept = () => {
    // Sætter cookie med værdi "accepted" og expiry på 90 dage
    Cookies.set("cookieConsent", "accepted", { expires: 90 });
    // Opdaterer state for at skjule banneret
    setIsVisible(false);
  };

  // Event handler function til at afvise cookies
  const handleDecline = () => {
    // Sætter cookie med værdi "declined" og expiry på 90 dage
    Cookies.set("cookieConsent", "declined", { expires: 90 });
    // Opdaterer state for at skjule banneret
    setIsVisible(false);
  };

  // Early return - render ingenting hvis banneret ikke skal vises
  if (!isVisible) return null;

  return (
    <div className={styles.cookieBanner}>
      <p className={styles.message}>
        Vi bruger cookies for at forbedre din oplevelse. Ved at fortsætte med at
        benytte vores side, accepterer du vores brug af cookies i 90 dage.{" "}
        <Link to="/cookie-policy" className={styles.policyLink}>
          Læs mere om vores Cookie og privatlivspolitik.
        </Link>
      </p>
      <div className={styles.cookieButtons}>
        <button className={styles.acceptBtn} onClick={handleAccept}>
          Acceptér
        </button>
        <button className={styles.declineBtn} onClick={handleDecline}>
          Afvis
        </button>
      </div>
    </div>
  );
}
