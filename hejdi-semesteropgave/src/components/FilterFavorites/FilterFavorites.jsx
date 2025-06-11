import styles from "./FilterFavorites.module.css";

export default function FilterFavorites({
  selectedCategory,
  setSelectedCategory,
  categories,
  sortOption,
  setSortOption,
}) {
  return (
    <section className={styles.filterSection}>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className={styles.select}
      >
        <option value="">Alle Kategorier</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
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
