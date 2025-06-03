# Semesteropgave – Webshop i ReactJS

## 📌 Formål

I denne semesteropgave skal du designe og udvikle en komplet webshop ved brug af **ReactJS**. Du skal vise, at du kan arbejde med komponentbaseret udvikling, state-håndtering, datahentning fra et API, routing, formularhåndtering og dynamiske filtre. Designet skal være responsivt og lavet af dig selv.

## 🎯 Mål

- Skabe en funktionel webshop med moderne features.
- Øve og demonstrere brug af centrale ReactJS-teknikker.
- Arbejde med brugeroplevelse, struktur og datalogik i et frontend-projekt.

---

## 🛠️ Kravspecifikation

### 🔧 Funktionalitet

Din webshop **skal indeholde følgende**:

1. **Design i Figma**

   - Du skal selv stå for designet og opbygningen af siden.
   - Brug gerne wireframes som skitse.

2. **React-funktionalitet**

   - Brug `useState` og `useEffect`.
   - Data skal hentes fra et offentligt API via `fetch` med `async/await` og `try/catch`.
     👉 `https://dummyjson.com/products`
   - Routing skal bygges op med:
     - `BrowserRouter`
     - `Routes`
     - `Route`
     - `react-router-dom`

3. **Responsivt design**

   - Implementér en **burgermenu** til mobilvisning.
   - Brug `react-icons` til ikoner (f.eks. menu og luk).

4. **Sider**

   - **Forside**
   - **Produktoversigt** med filtrering og sortering
   - **Produktdetaljeside**
   - **Kontaktformular** lavet med `react-hook-form`
   - **Indkøbskurv** med en separat side
   - (Evt. ekstra sider som "Om os", "Favoritter", m.fl.)

5. **Indkøbskurv**

   - Brugeren skal kunne tilføje og fjerne produkter.
   - Vises på en separat side som liste.
   - Kurven må gerne gemmes midlertidigt i `localStorage` eller `sessionStorage`.

6. **Favoritter**

   - Brugeren skal kunne tilføje produkter som favoritter.
   - Favoritter skal gemmes i `localStorage`.

7. **Rabatkoder**

   - Webshoppen skal kunne acceptere én eller flere rabatkoder (f.eks. `SAVE10`, `FREESHIP`).
   - Rabatkoder skal give rabat i kurven.

8. **Filtrering og søgning**

   - Filtrér produkter efter **kategori**.
   - Tilføj **søgning** efter produktnavn.
   - Sortering skal kunne ske efter:
     - A–Z
     - Z–A
     - Pris stigende
     - Pris faldende
     - Bedømmelse (rating)

9. **Cookies**

   - Der skal tilføjes en cookie, som gemmer accept i localStorage.

10. **SEO**

- SEO skal tænkes ind i opgaven.

---

## 🗂️ Teknologier du skal bruge

- ReactJS
- `react-router-dom`
- `react-icons`
- `react-hook-form`
- `localStorage`
- `fetch` med `async/await` og `try/catch`
- `module.css`

---

## 📝 Tips

- Start med en skitse over designet.
- Lav en plan over komponenter og routingstruktur.
- Arbejd trin for trin og test løbende.
- Brug `localStorage` forsigtigt – sørg for fallback og data-checks.
- Kommentér gerne din kode (på dansk).

---

## 📅 Deadline

Afleveringsfrist: **12.06.2025**

Præsentation: **13.06.2025**

---
