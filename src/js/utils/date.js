// Формат DD MMM YYYY → Aug 05 2024
// export function formatLongDate(dateStr) {
//   const date = new Date(dateStr);
//   return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
// }

// Формат DD MMM → 26 Jul
/**
 * Форматує рядок дати у короткий вигляд "DD MMM" (наприклад, "24 Apr").
 *
 * @param {string | number | Date} dateStr - Вхідна дата (рядок, timestamp або об'єкт Date).
 * @returns {string} Відформатована дата у форматі "день місяць".
 *
 * @example
 * formatShortDate("2026-04-24"); // Поверне "24 Apr"
 */
export function formatShortDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
}

// Формат DD MMM YYYY → 05 Aug 2024
/**
 * Форматує рядок дати у вигляд "DD MMM, YYYY" (наприклад, "24 Apr, 2026").
 *
 * @param {string | number | Date} dateStr - Вхідна дата (рядок, timestamp або об'єкт Date).
 * @returns {string} Відформатована дата у форматі "день місяць, рік".
 *
 * @example
 * formatLongDate("2026-04-24"); // Поверне "24 Apr, 2026"
 */
export function formatLongDate(dateStr) {
  const date = new Date(dateStr);
  const [month, day, year] = date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .split(" ");

  return `${day} ${month}, ${year}`;
}
