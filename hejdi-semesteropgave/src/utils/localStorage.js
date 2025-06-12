// Const variabel der definerer key til localStorage - bruges som identifier for vores data
const FAVORITES_KEY = "favoriteProductsIds";

export function getFavoritesFromStorage() {
  try {
    // localStorage.getItem() returnerer string eller null - vi parser JSON til JavaScript object/array
    const favs = localStorage.getItem(FAVORITES_KEY);
    // Ternary operator: returnerer parsed JSON array eller fallback til tom array
    return favs ? JSON.parse(favs) : [];
  } catch (e) {
    // Error handling med console.error for debugging - vigtig ved localStorage fejl
    console.error("Kunne ikke hente favoritter fra localStorage", e);
    // Returnerer default value (tom array) så component state ikke crasher
    return [];
  }
}

export function saveFavoritesToStorage(favorites) {
  try {
    // JSON.stringify() konverterer JavaScript array/object til string format for localStorage
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error("Kunne ikke gemme favoritter i localStorage", e);
  }
}
