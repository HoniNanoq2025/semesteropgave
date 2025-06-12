import styles from "./PersonalDataPolicy.module.css";

export default function PersonalDataPolicy() {
  return (
    <section className={styles.policyPage}>
      <div className={styles.policyContainer}>
        <div className={styles.policyHeader}>
          <h1>Persondatapolitik hos MyShop</h1>
        </div>
        <div className={styles.policyText}>
          <p className={styles.policyParagraph}>
            Vi indhenter kun persondata i de tilfælde, hvor dette skulle være
            relevant for os, og vi vil kun indhente persondata, hvis det er
            relevant for din aktivitet hos MyShop.
          </p>
          <p className={styles.policyParagraph}>
            Ved indsamling, behandling og anvendelse af dine persondata
            overholder vi altid alle relevante lovbestemmelser.{" "}
          </p>
          <p className={styles.policyParagraph}>
            Vi vil kun opbevare dine persondata, så længe vi enten er pålagt en
            juridisk forpligtelse hertil, eller så længe det er relevant for den
            hensigt, hvormed de blev indsamlet.
          </p>
        </div>

        <div className={styles.policyText}>
          <h3>Oplysninger vi indsamler</h3>
          <p className={styles.policyParagraph}>
            Hvis du ønsker at købe og modtage et produkt eller en ydelse fra os,
            har vi brug for at indsamle visse persondata for at kunne gennemføre
            handlen og for at kunne tilbyde dig vores services. Vi kan bruge
            cookies til at holde styr på indholdet i din indkøbskurv, mens du
            bruger vores webshop.
          </p>
          <p className={styles.policyParagraph}>
            Vi kan indhente oplysninger som f.eks. navn, e-mailadresse,
            postadresse, leveringsadresse (hvis den varierer fra postadresse),
            telefonnummer og betalingsoplysninger.
          </p>
        </div>

        <div className={styles.policyText}>
          <p className={styles.policyParagraph}>
            MyShop indsamler og behandler dine persondata, når du foretager dig
            følgende:
          </p>
          <ul className={styles.policyList}>
            <li>Besøger vores hjemmeside</li>
            <li>Gennemfører et køb af vores produkter</li>
            <li>Sender os spørgsmål, reklamationer eller feedback</li>
          </ul>
        </div>
        <div className={styles.policyText}>
          <h3>Den dataansvarlige</h3>
          <p className={styles.policyParagraph}>
            Den dataansvarlige for indsamling, behandling og anvendelse af dine
            personoplysninger på www.MyShop.dk er MyShop, Skaldehøjvej 2, 8800
            Viborg, cvr nr. 12345678
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Behandlingsgrundlag og formål</h3>
          <p className={styles.policyParagraph}>
            Dine almindelige kontaktoplysninger som navn og adresse indhenter vi
            for at kunne levere det produkt eller den ydelse, som du har købt
            hos os. Din e-mailadresse indhenter vi for at kunne sende dig en
            ordrebekræftelse samt en leveringsbekræftelse.
          </p>
          <p className={styles.policyParagraph}>
            Når du betaler for dit produkt eller din ydelse indsamler vi dit
            navn, dine kortdata og IP-adresse. De oplysninger, der indsamles i
            forbindelse med betalingstransaktionen, anvendes og gemmes kun til
            betalingsafvikling og opfyldelse af den indgåede aftale. Ved
            gennemførelse af betalinger, vil nogle af dine data blive
            videregivet til DIBS, inklusiv information der er nødvendig for at
            gennemføre eller understøtte betalingen, såsom det totale købsbeløb
            og faktureringsinformation.
          </p>
          <p className={styles.policyParagraph}>
            Hvis du ikke ønsker at opgive de persondata, som er påkrævet for at
            gennemføre et køb af et produkt, vil du desværre ikke have mulighed
            for at købe produkter af os på vores hjemmeside.
          </p>
          <p className={styles.policyParagraph}>
            Dine oplysninger (undtagen din e-mailadresse, hvis du har givet
            samtykke til behandling heraf med henblik på modtagelse af tilbud)
            vil blive slettet 90 dage efter, at du har modtaget din vare eller
            ydelse.
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Andre modtagere af personoplysninger</h3>
          <p className={styles.policyParagraph}>
            Vi sælger ikke dine persondata til tredjemand, og vi overfører ikke
            dine persondata til tredjelande.
          </p>
          <p className={styles.policyParagraph}>
            Vi har vores hjemmeside hos [ Hjemmesidens webhotel ] og
            betalingssystem gennem DIBS, som fungerer som vores databehandler.
            Alle persondata som du oplyser på vores hjemmeside vil blive
            opbevaret i Hjemmesidens webhotels datacentre.
          </p>
          <p className={styles.policyParagraph}>
            Vi anvender eksterne virksomheder som leverandører for at levere
            vores ydelser bedst muligt. Disse eksterne leverandører er
            databehandlere og behandler i visse tilfælde personoplysninger i
            forbindelse med deres levering af ydelser til os. Vores
            databehandlere behandler kun personoplysninger efter vores instruks
            og i overensstemmelse med lovgivningens krav til databehandlere.
          </p>
          <p className={styles.policyParagraph}>
            Vi har indgået databehandleraftaler med vores databehandlere,
            hvilket er vores garanti for, at de overholder gældende regler om
            beskyttelse af dine personoplysninger.
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Dine rettigheder</h3>
          <p className={styles.policyParagraph}>
            Som den registrerede har du en række rettigheder, som vi til enhver
            tid skal sikre opfyldelse af. Du har ret til at anmode os om
            følgende:
          </p>
          <ul className={styles.policyList}>
            <li>At få adgang til og få rettet/ændret dine persondata</li>
            <li>At få slettet persondata</li>
          </ul>
        </div>
        <div className={styles.policyText}>
          <p className={styles.policyParagraph}>
            Du har derudover ret til at protestere over behandlingen af dine
            personlige data, og du har ret til at indgive klage til en
            databeskyttelsesmyndighed.{" "}
          </p>
          <p className={styles.policyParagraph}>
            Ønsker du ikke længere, at vi skal behandle dine personoplysninger,
            eller at vi skal begrænse behandlingen af dine personoplysninger,
            kan du også sende os en anmodning herom til vores e-mailadresse
            Contact@MyShop.me.
          </p>
        </div>
      </div>
    </section>
  );
}
