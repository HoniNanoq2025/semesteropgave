import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("React Hook Form formular", data);
    alert("Tak for din besked, vi vender tilbage snarest muligt.");
    reset();
  };

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className={styles.formHeading}>Kontakt os</h2>
      <input
        type="text"
        {...register("firstname", { required: "Fornavn er påkrævet" })}
        placeholder="Fornavn"
        className={`${styles.input} ${
          errors.firstname ? styles.inputError : ""
        }`}
        aria-invalid={errors.firstname ? "true" : "false"}
      />
      <input
        type="text"
        {...register("lastname", { required: "Efternavn er påkrævet" })}
        placeholder="Efternavn"
        className={`${styles.input} ${
          errors.lastname ? styles.inputError : ""
        }`}
        aria-invalid={errors.lastname ? "true" : "false"}
      />
      <input
        {...register("email", {
          required: "Email er påkrævet",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Ugyldig email",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && (
        <p role="alert" className={styles.errors}>
          {errors.email.message}
        </p>
      )}

      <textarea
        {...register("message", { required: "Skriv en besked" })}
        placeholder="Din besked..."
        name="message"
        id="message"
        className={`${styles.input} ${errors.message ? styles.inputError : ""}`}
        aria-invalid={errors.message ? "true" : "false"}
      />
      {errors.message && (
        <p role="alert" className={styles.errors}>
          {errors.message.message}
        </p>
      )}

      <button type="submit" className={styles.contactBtn}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
