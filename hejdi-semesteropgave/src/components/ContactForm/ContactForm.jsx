import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";

// ContactForm component - en funktionel React component til kontaktformular
const ContactForm = () => {
  // useForm hook fra react-hook-form biblioteket til at håndtere formular state og validering
  const {
    register, // Funktion til at registrere input felter
    handleSubmit, // Funktion til at håndtere form submission
    formState: { errors }, // Object der indeholder validation errors
    reset, // Funktion til at nulstille formularen
  } = useForm();

  // onSubmit funktion der kaldes når formularen submittes
  const onSubmit = (data) => {
    // Logger form data til console
    console.log("React Hook Form formular", data);
    // Viser en alert besked til brugeren
    alert("Tak for din besked, vi vender tilbage snarest muligt.");
    // Nulstiller alle form felter
    reset();
  };

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit(onSubmit)} // Event handler for form submission
      noValidate // Deaktiverer browser's indbyggede validering
    >
      {/* Form overskrift */}
      <h2 className={styles.formHeading}>Kontakt os</h2>
      <input
        {...register("name", { required: "Navn er påkrævet" })} // Registrerer feltet med validation rule
        type="text"
        placeholder="Navn"
        className={`${styles.input} ${errors.name ? styles.inputError : ""}`} // Conditional CSS class baseret på error state
        aria-invalid={errors.name ? "true" : "false"} // Accessibility attribut
      />
      {/* Conditional rendering af error besked for navn */}
      {errors.name && (
        <p role="alert" className={styles.errors}>
          {errors.name.message}
        </p>
      )}
      {/* Efternavn input felt */}
      <input
        {...register("lastname", { required: "Efternavn er påkrævet" })} // Spread operator til at tilføje register props
        type="text"
        placeholder="Efternavn"
        className={`${styles.input} ${
          errors.lastname ? styles.inputError : ""
        }`}
        aria-invalid={errors.lastname ? "true" : "false"}
      />
      {/* Error besked hvis der ikke er data i efternavn felt */}
      {errors.lastname && (
        <p role="alert" className={styles.errors}>
          {errors.lastname.message}
        </p>
      )}
      {/* Email input felt med pattern validation */}
      <input
        {...register("email", {
          required: "Email er påkrævet", // Required validation rule
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regex pattern til email validering
            message: "Ugyldig email", // Fejlbesked
          },
        })}
        type="email"
        placeholder="Email"
        className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {/* Conditional fejlbesked hvis ingen eller ugyldig email data */}
      {errors.email && (
        <p role="alert" className={styles.errors}>
          {errors.email.message}
        </p>
      )}

      {/* Textarea element til indsendelse af besked */}
      <textarea
        {...register("message", { required: "Skriv en besked" })}
        placeholder="Din besked..."
        name="message"
        id="message"
        className={`${styles.input} ${errors.message ? styles.inputError : ""}`}
        aria-invalid={errors.message ? "true" : "false"}
      />
      {/* Fejl besked for beskedfelt */}
      {errors.message && (
        <p role="alert" className={styles.errors}>
          {errors.message.message}
        </p>
      )}

      {/* Submit button */}
      <button type="submit" className={styles.contactBtn}>
        Send
      </button>
    </form>
  );
};

// Default export af ContactForm komponent
export default ContactForm;
