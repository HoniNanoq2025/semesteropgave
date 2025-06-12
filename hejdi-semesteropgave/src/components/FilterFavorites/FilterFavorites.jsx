import styles from "./FilterFavorites.module.css";

// Funktionel komponent til filtrering og sortering af favoritter
export default function FilterFavorites({
  selectedCategory, // prop: den aktuelt valgte kategori
  setSelectedCategory, // prop: state setter function til at opdatere valgte kategori
  categories, // prop: array med alle tilgængelige kategorier
  sortOption, // prop: den aktuelt valgte sorteringsmulighed
  setSortOption, // prop: state setter function til at opdatere sortering
}) {
  return (
    <section className={styles.filterSection}>
      {/* Dropdown select til kategori filtrering */}
      <select
        value={selectedCategory} // værdien kommer fra props
        onChange={(e) => setSelectedCategory(e.target.value)} // Event handler der kalder state sætter
        className={styles.select}
      >
        <option value="">Alle Kategorier</option>
        {/* Map over categories array for at generere option elementer */}
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Dropdown select til sortering */}
      <select
        value={sortOption} // værdien kommer fra props
        onChange={(e) => setSortOption(e.target.value)} // Event handler der kalder state sætter - e.target.value giver os den værdi som brugeren har valgt i dropdown menuen
        className={styles.select}
      >
        <option value="">Sorter efter</option>
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
