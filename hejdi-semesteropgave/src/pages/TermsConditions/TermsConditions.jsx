import styles from "./TermsConditions.module.css";

export default function TermsConditions() {
  return (
    <section className={styles.policyPage}>
      <div className={styles.policyContainer}>
        <div className={styles.policyHeader}>
          <h1>Handelsbetingelser hos MyShop</h1>
        </div>
        <div className={styles.policyText}>
          <h3>Generelle oplysninger</h3>
          <p className={styles.address}>MyShop</p>
          <p className={styles.address}>Skaldehøjvej 2</p>
          <p className={styles.address}>8800 Viborg</p>
          <p className={styles.address}>CVR nr.: 12345678</p>
          <p className={styles.address}>Telefon: 00 00 00 00</p>
          <p className={styles.address}>Email: Contact@MyShop.me</p>
        </div>
        <div className={styles.policyText}>
          <h3>Priser</h3>
          <p className={styles.policyParagraph}>
            Hos MyShop er alle priserne i danske kroner og angivet inkl. moms og
            afgifter. Vi forbeholder os ret til fra dag til dag at ændre i
            priserne uden forudgående samtykke. Der tages forbehold for udsolgte
            varer.
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Betaling</h3>
          <p className={styles.policyParagraph}>
            MyShop modtager betaling med VISA-Dankort, VISA, VISA Electron,
            Mastercard. Betalingen vil først blive trukket på din konto, når
            varen afsendes. Alle beløb er i DKK. Danske kroner og incl. moms.
            Der tages forbehold for prisfejl og udsolgte/udgåede varer.
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Levering</h3>
          <p className={styles.policyParagraph}>
            MyShop tilstræber at afsende ordre indgået inden kl. 17 samme dag,
            ordre herefter sendes næstfølgende hverdag.
          </p>
          <p className={styles.policyParagraph}>
            Vi sender til hele Danmark. Fragtpriser fra 50 kr. Varer vil blive
            leveret på leveringsadressen, der angives ved bestillingen.
          </p>
          <p className={styles.policyParagraph}>
            Vi leverer ikke til udlandet og ikke til Færøerne og Grønland.
          </p>
          <p className={styles.policyParagraph}>
            Dine varer sendes med Post Nord eller GLS.
          </p>
          <p className={styles.policyParagraph}>
            <strong>OBS:</strong> Hvis der ikke er plads på udleveringsstedet
            bliver pakken flyttet til nærmeste udleveringssted, hvilket du får
            besked om. Opstår der problemer, kontakt da kundeservice.
          </p>
          <p className={styles.policyParagraph}>
            Der leveres varer alle ugens hverdage. Din vare vil blive leveret
            1-3 hverdage efter bestillingen.
          </p>
          <p className={styles.policyParagraph}>
            For visse varer gælder særlige leveringsvilkår. Betingelserne vil
            fremgå specifikt forud for køb af disse varer.
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Reklamationsret</h3>
          <p className={styles.policyParagraph}>
            Der gives 2 års reklamationsret i henhold til købeloven. Vores
            reklamationsret gælder for fejl i materiale og/eller fabrikation. Du
            kan få varen repareret, ombyttet, pengene retur eller afslag i
            prisen, afhængig af den konkrete situation. Reklamationen gælder
            ikke fejl eller skader begået ved forkert håndtering af
            produktet/ydelsen. Du skal reklamere i "rimelig tid" efter du har
            opdaget manglen/fejlen. MyShop vil dække returneringsomkostninger i
            et rimeligt omfang.
          </p>
          <p className={styles.policyParagraph}>
            Ved returnering, reklamationer og benyttelse af fortrydelsesretten
            sendes til:
          </p>
          <p className={styles.address}>MyShop</p>
          <p className={styles.address}>Skaldehøjvej 2</p>
          <p className={styles.address}>8800 Viborg</p>
          <p className={styles.policyParagraph}>
            Der modtages ikke forsendelser pr. efterkrav.
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Refusion</h3>
          <p className={styles.policyParagraph}>
            Hvis der er tale om refusion, bedes du medsende bankoplysninger i
            form af regnr og kontonr, så det aftalte beløb kan overføres. Disse
            oplysninger kan uden risiko oplyses pr. mail eller anden elektronisk
            form, da det ikke er følsomme oplysninger og kun vil blive anvendt
            til vores opfyldelse af refusionen.
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Fortrydelsesret</h3>
          <p className={styles.policyParagraph}>
            Der gives 14 dages fuld returret på varer købt i vores webshop.
          </p>
          <p className={styles.policyParagraph}>Perioden regnes fra den dag;</p>
          <ul>
            <li>Hvor du modtager ordren.</li>
            <li>
              Får den sidste vare i fysisk besiddelse, når det drejer sig om en
              aftale om flere forskellige varer, bestilt i én ordre, men leveres
              enkeltvis eller af flere omgange.
            </li>
            <li>
              Får det sidste parti, eller sidste del i fysisk besiddelse, når
              det drejer sig om aftale af levering af varer der består af flere
              partier/dele.
            </li>
            <li>
              Den første vare i fysisk besiddelse, når det drejer sig om
              regelmæssig levering af varer over en bestemt periode.
            </li>
          </ul>
          <p className={styles.policyParagraph}>
            Returneringsomkostninger skal du selv afholde.
          </p>
          <p className={styles.policyParagraph}>
            Fortrydelse skal anmeldes til os senest 14 efter købet og fra
            fortrydelsen skal I senest 14 dage efter returnere forsendelsen.
            Meddelelsen skal gives pr. mail på Contact@MyShop.me. I meddelelsen
            skal du gøre tydeligt opmærksom på, at du ønsker at benytte din
            fortrydelsesret. Ønsker du at sende varen retur til os, skal du
            udfylde den vedlagte Returseddel og sende varen til:
          </p>
          <p className={styles.address}>MyShop</p>
          <p className={styles.address}>Skaldehøjvej 2</p>
          <p className={styles.address}>8800 Viborg</p>
          <p className={styles.policyParagraph}>
            Du kan ikke fortryde ved blot at nægte modtagelse af varen, uden
            samtidig at give tydelig meddelelse herom.
          </p>
        </div>

        <div className={styles.policyText}>
          <h3>Varer undtaget fortrydelsesretten</h3>
          <p className={styles.policyParagraph}>
            Følgende varetyper indgår ikke i fortrydelsesretten:
          </p>
          <ul>
            <li>
              Varer, som er fremstillet efter forbrugerens specifikationer eller
              har fået et tydeligt personligt præg.
            </li>
            <li>
              Forseglede varer, som af sundhedsbeskyttelses- eller
              hygiejnemæssige årsager ikke er egnet til at blive returneret, og
              hvor forseglingen er brudt efter leveringen.
            </li>
            <li>
              Varer, der grundet sin art bliver uløseligt blandet sammen med
              andre ved levering.
            </li>
            <li>Varer, hvor plomberingen er brudt.</li>
            <li>
              Udførte ikke-finansielle tjenesteydelser, hvis levering af
              tjenesteydelsen er påbegyndt med forbrugerens forudgående
              udtrykkelige samtykke og anderkendelse af, at fortrydelsesretten
              ophører, når tjenesteydelsen er fuldt udført.
            </li>
            <li>
              Levering af digitalt indhold, som ikke leveres på et fysisk
              medium, hvis udførelsen er påbegyndt med forbrugerens forudgående
              udtrykkelige samtykke og anerkendelse heraf, at vedkommende dermed
              mister sin fortrydelsesret.
            </li>
            <li>
              Aviser, tidskrifter eller magasiner dog undtaget
              abonnementsaftaler for sådanne publikationer.
            </li>
            <li>Aftaler indgået på offentlig auktion.</li>
            <li>Varer, der forringes eller forældes hurtigt.</li>
          </ul>
        </div>
        <div className={styles.policyText}>
          <h3>Returnering</h3>
          <p className={styles.policyParagraph}>
            Du skal sende din ordre retur uden unødig forsinkelse og senest 14
            dage efter, at du har gjort brug af din fortrydelsesret. Du skal
            afholde de direkte udgifter i forbindelse med returnering. Ved
            returnering er du ansvarlig for, at varen er pakket ordentligt ind.
            Du skal vedlægge en kopi af ordrebekræftelsen. Ekspeditionen går
            hurtigere, hvis du ligeledes udfylder og vedlægger vores
            Fortrydelsesformular.
          </p>
          <p className={styles.policyParagraph}>
            Du bærer risikoen for varen fra tidspunktet for varens levering og
            til, vi har modtaget den retur.
          </p>
          <p className={styles.policyParagraph}>
            Vi modtager ikke pakker sendt pr. efterkrav.
          </p>
        </div>

        <div className={styles.policyText}>
          <h3>Varens stand ved returnering</h3>
          <p className={styles.policyParagraph}>
            Du hæfter kun for eventuel forringelse af varens værdi, som skyldes
            anden håndtering, end hvad der er nødvendigt for at fastslå varens
            art, egenskaber og den måde, hvorpå den fungerer. Du kan med andre
            ord prøve varen, som hvis du prøvede den i en fysisk butik.
          </p>
          <p className={styles.policyParagraph}>
            Hvis varen er prøvet udover, det ovenfor beskrevet, betragtes den
            som brugt. Hvilket betyder, at du ved fortrydelse af købet kun får
            en del eller intet af købsbeløbet retur, afhængig af varens
            handelsmæssige værdi på modtagelsestidspunktet - af returneringen.
            For at modtage hele købsbeløbet retur må du altså afprøve varen uden
            egentlig at tage den i brug.
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Tilbagebetaling</h3>
          <p className={styles.policyParagraph}>
            Fortryder du dit køb, får du naturligvis det beløb du har indbetalt
            til os retur.
          </p>
          <p className={styles.policyParagraph}>
            I tilfælde af en værdiforringelse, som du hæfter for, fratrækkes
            denne købs-beløbet.
          </p>
          <p className={styles.policyParagraph}>
            Ved anvendelse af fortrydelsesretten, refunderes alle betalinger
            modtaget fra dig, herunder leveringsomkostninger (undtaget ekstra
            omkostninger som følge af dit valg af en anden leveringsform end den
            billigste form for standardlevering, som vi tilbyder), uden unødig
            forsinkelse og senest 14 dage fra den dato, hvor vi har modtaget
            meddelelse om din beslutning om at gøre brug af fortrydelsesretten.
            Tilbagebetaling gennemføres med samme betalingsmiddel, som du
            benyttede ved den oprindelige transaktion, medmindre du udtrykkeligt
            har indvilget i noget andet.
          </p>
          <p className={styles.policyParagraph}>
            Vi kan tilbageholde beløbsrefunderingen, indtil vi har modtaget
            varen retur, med mindre du inden da har fremlagt dokumentation for
            at have returneret den.
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Persondatapolitik</h3>
          <p className={styles.policyParagraph}>
            For at du kan indgå aftale med os og handle på vores hjemmeside, har
            vi brug for følgende oplysninger om dig:
          </p>
          <p className={styles.address}>Navn</p>
          <p className={styles.address}>Adresse</p>
          <p className={styles.address}>Telefonnummer</p>
          <p className={styles.address}>E-mailadresse</p>
          <p className={styles.address}>Oplysning om hvad du har købt</p>
          <p className={styles.policyParagraph}>
            Vi behandler dine personoplysninger med det formål, at kunne levere
            varen til dig, og for at kunne behandle henvendelser vedrørende dit
            køb. Behandlingen sker efter reglerne i vores persondatapolitik for
            MyShop. Heri kan du læse mere om, hvordan dine oplysninger
            behandles, hvornår de slettes, og hvilke rettigheder du har som
            registreret.
          </p>
        </div>
        <div className={styles.policyText}>
          <h3>Klagemuligheder – oversigt og links:</h3>
          <p className={styles.policyParagraph}>
            Har du en klage over et produkt, købt i vores Webshop, kan der
            sendes en klage til:
          </p>
          <p className={styles.address}>
            Konkurrence- og Forbrugerstyrelsens Center for Klageløsning
          </p>
          <p className={styles.address}>Carl Jacobsens Vej 35</p>
          <p className={styles.address}>2500 Valby</p>
          <p className={styles.address}>
            Link: <a href="www.forbrug.dk">www.forbrug.dk</a>
          </p>
        </div>

        <div className={styles.policyText}>
          <p className={styles.policyParagraph}>
            Hvis du er forbruger med bopæl i et andet EU-land, kan du angive din
            klage i EU Kommissionens online klageplatform.
          </p>
          <p className={styles.policyParagraph}>
            Platformen findes her:{" "}
            <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DA">
              https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DA
            </a>
          </p>
          <p className={styles.policyParagraph}>
            Angiver du en klage her, skal du oplyse vores E-mail adresse:
            Contact@MyShop.me
          </p>
        </div>
      </div>
    </section>
  );
}
