import styles from "./FilterPanel.module.css";

// Funktionel React-komponent der modtager props fra parent-komponenten
export default function FilterPanel({
  searchTerm,        // prop: nuværende søgeterm (string)
  setSearchTerm,     // prop: state setter hook til at opdatere søgeterm
  selectedCategory,  // prop: valgte kategori (string)
  setSelectedCategory, // prop: state setter hook til at opdatere kategori
  categories,        // prop: array af tilgængelige kategorier
  sortOption,        // prop: valgte sorteringsindstilling (string)
  setSortOption,     // prop: state setter hook til at opdatere sortering
}) {
  return (
    <section className={styles.filterPanel}>
      {/* Søgefelt - controlled component med value og onChange handler */}
      <input
        type="text"
        placeholder="Søg produkter..."
        value={searchTerm} // input-værdi styres af state
        onChange={(e) => setSearchTerm(e.target.value)} // event handler der kalder state-sætter-hook
        className={styles.input}
      />

      {/* Kategori dropdown - select element */}
      <select
        value={selectedCategory} // select-værdi styres af state
        onChange={(e) => setSelectedCategory(e.target.value)} // event handler for kategori-ændring
        className={styles.select}
      >
        {/* Default option for at vise alle kategorier */}
        <option value="">Alle Kategorier</option>
        {/* Dynamisk rendering af kategori-options ved hjælp af map() */}
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {" "}
            {/* Key prop til React's virtual DOM optimering */}
            {cat}
          </option>
        ))}
      </select>

      {/* Sorterings dropdown - controlled select element */}
      <select
        value={sortOption} // select-værdi styres af state
        onChange={(e) => setSortOption(e.target.value)} // event handler til sorterings-ændring
        className={styles.select}
      >
        {/* Default option */}
        <option value="">Sorter efter</option>
        {/* Statiske options for forskellige sorterings-muligheder */}
        <option value="priceAsc">Pris (Lav til høj)</option>
        <option value="priceDesc">Pris (Høj til lav)</option>
        <option value="alphaAsc">A-Å</option>
        <option value="alphaDesc">Å-A</option>
        <option value="ratingHigh">Rating (Høj til lav)</option>
        <option value="ratingLow">Rating (Lav til høj)</option>
      </select>
    </section>
  );
}
