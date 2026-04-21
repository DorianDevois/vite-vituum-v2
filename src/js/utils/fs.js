import fs from "fs";

// Читаємо JSON файл
/**
 * Безпечне читання JSON файлу
 * - читає файл
 * - перевіряє, що він не пустий
 * - парсить у JS-обʼєкт
 */
function readJSON(filePath) {
  console.log(`📄 Reading: ${filePath}`);

  const raw = fs.readFileSync(filePath, "utf-8");

  if (!raw.trim()) {
    throw new Error(`❌ File is empty: ${filePath}`);
  }

  return JSON.parse(raw);
}

export { readJSON };
