import { useState } from "react";
import styles from ".DiscountCode.module.css";

const validCodes = {
  RABAT10: { type: "percent", value: "10" },
  RABAT15: { type: "percent", value: "15" },
  FAST50: { type: "fixed", value: "50" },
  FRIFRAGT: { type: "freeShipping", value: 0 },
};

export default function DiscountCode({ onApply }) {
  const [code, setCode] = useState("");
  const [codeMessage, setCodeMessage] = useState("");

  const handleApply = () => {
    const trimmed = code.trim().toUpperCase();

    if (Object.prototype.hasOwnProperty.call(validCodes, trimmed)) {
      const data = validCodes[trimmed];
      setCodeMessage(`Koden ${trimmed} er gyldig`);
      onApply({ ...data, code: trimmed });
    } else {
      setCodeMessage("Ugyldig rabatkode");
      onApply(null);
    }
  };

  return (
    <div className={styles.codeWrapper}>
      <h5>Rabatkode:</h5>
      <div className={styles.inputDiscountGroup}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
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
      {codeMessage && <p className={styles.discountMessage}>{codeMessage}</p>}
    </div>
  );
}
