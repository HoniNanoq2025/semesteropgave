import styles from "./FilterPanel.module.css";

export default function FilterPanel({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  sortOption,
  setSortOption,
}) {
  return (
    <section className={styles.filterPanel}>
      <input
        type="text"
        placeholder="Søg produkter..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.input}
      />

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
      </select>
    </section>
  );
}
