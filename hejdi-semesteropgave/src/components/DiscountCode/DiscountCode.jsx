import { useState } from "react";
import styles from "./DiscountCode.module.css";

// Objekt der indeholder alle gyldige rabatkoder med deres type og værdi
const validCodes = {
  RABAT10: { type: "percent", value: "10" },
  RABAT15: { type: "percent", value: "15" },
  FAST50: { type: "fixed", value: "50" },
  FRIFRAGT: { type: "freeShipping", value: 0 },
};

// React functional component der modtager onApply som prop
export default function DiscountCode({ onApply }) {
  // useState hook til at håndtere rabatkode input state
  const [code, setCode] = useState("");

  // useState hook til at håndtere besked om kode validitet
  const [codeMessage, setCodeMessage] = useState("");

  // Event handler funktion der validerer og anvender rabatkoden
  const handleApply = () => {
    // Trimmer whitespace og konverterer til uppercase for konsistent sammenligning
    const trimmed = code.trim().toUpperCase();

    // Checker om den indtastede kode eksisterer i validCodes objektet
    if (Object.prototype.hasOwnProperty.call(validCodes, trimmed)) {
      // Henter rabatkode data fra validCodes objektet
      const data = validCodes[trimmed];
      // Opdaterer state med success besked
      setCodeMessage(`Koden ${trimmed} er gyldig`);
      // Kalder parent component's callback prop med rabatkode data
      onApply({ ...data, code: trimmed });
    } else {
      // Opdaterer state med fejlbesked hvis koden er ugyldig
      setCodeMessage("Ugyldig rabatkode");
      // Kalder parent component's callback prop med null for at fjerne rabat
      onApply(null);
    }
  };

  return (
    <div className={styles.codeWrapper}>
      <label>Rabatkode</label>
      <div className={styles.inputDiscountGroup}>
        <input
          type="text"
          value={code} // Binder input værdi til code state
          onChange={(e) => setCode(e.target.value)} // Opdaterer state når bruger skriver
          placeholder="Indtast rabatkode"
          className={styles.inputDiscount}
        />
        <button
          type="button"
          onClick={handleApply}
          className={styles.discountBtn}
        >
          Anvend rabat
        </button>
      </div>
      {/* Conditional rendering af besked baseret på codeMessage state && operator: hvis codeMessage er true, vis <p> elementet, ellers vis intet */}
      {codeMessage && <p className={styles.discountMessage}>{codeMessage}</p>}
    </div>
  );
}
