import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./AboutContactPage.module.css";

export default function AboutContact() {
  return (
    <div className={styles.aboutContact}>
      <section id="about" className={styles.aboutSection}>
        <h1>Om os</h1>
        <p>
          MyShop er en alsidig og moderne webshop, der har betjent kunder i to
          år med et imponerende udvalg af produkter.
        </p>
        <p>
          Fra dagligvarer og parfumer til elegante ure og endda motorcykler -
          MyShop gør det nemt og bekvemt at handle alt på ét sted online.
          <br />
          Webshoppen tilbyder noget for enhver smag og behov, og det brede
          sortiment afspejler virksomhedens mål om at skabe en one-stop-shop for
          både hverdagens nødvendigheder og luksusvarer.
        </p>
        <p>
          Siden opstarten har MyShop haft fokus på at give kunderne en
          problemfri og behagelig oplevelse.
        </p>
        <p>
          Med en brugervenlig hjemmeside og pålidelig levering sikrer MyShop, at
          det er hurtigt og nemt at finde præcis det, man søger - uanset om det
          er friske dagligvarer, yndlingsparfumen, et nyt ur eller en
          motorcykel.
          <br />
          Kundetilfredshed og kvalitet er altid i højsædet, hvilket har skabt en
          trofast kundekreds.
        </p>
      </section>
      <section id="contact" className={styles.contactSection}>
        <ContactForm />
      </section>
    </div>
  );
}
