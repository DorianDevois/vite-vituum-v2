// Перетворюємо масив у map для швидкого lookup { id: obj }
/**
 * Convert Array → Map by id
 *
 * [{ id: "x", ... }] →
 * {
 *   x: { id: "x", ... }
 * }
 *
 * Навіщо:
 * - O(1) доступ
 * - зручно резолвити залежності
 */

/**
 * Преобразует массив объектов в объект-карту (Map), используя поле `id` в качестве ключа.
 *
 * @param {Array<Object>} arr - Массив объектов для преобразования. Каждый объект должен иметь уникальное поле `id`.
 * @param {string} label - Название коллекции (используется для детализации текста ошибки).
 * @returns {Record<string|number, Object>} Объект, где ключи — это ID, а значения — исходные объекты.
 * @throws {Error} Если у элемента отсутствует поле `id` или найден дубликат ID.
 *
 * @example
 * const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
 * const userMap = arrayToMap(users, 'Users');
 * // Результат: { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }
 */
function arrayToMap(arr, label) {
  const map = {};

  for (const item of arr) {
    if (!item.id) {
      throw new Error(`❌ "${label}" item without id`);
    }

    if (map[item.id]) {
      throw new Error(`❌ Duplicate "${label}" id: "${item.id}"`);
    }

    map[item.id] = item;
  }

  return map;
}

export { arrayToMap };
