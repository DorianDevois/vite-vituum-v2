// =======================================
// build-athletes.js
// Скрипт для генерації фінального athletes.json
// з усіх source файлів та першорівневих сутностей
// =======================================

import fs from "fs";
import path from "path";

import { readJSON } from "../utils/fs.js";
import { arrayToMap } from "../utils/array.js";
import {
  resolve,
  resolveCityDeep,
  resolveCountryDeep,
  resolveMainDiscipline,
  resolvePersonPortrait,
} from "../services/data-resolver.js";
import { regionDTO, countryDTO, cityDTO } from "../mappers/geo.mapper.js";
import { roleDTO, genderDTO } from "../mappers/user.mapper.js";
import { portraitDTO } from "../mappers/image.mapper.js";

// Папка з сирими даними
const SRC = "src/database/raw";
// Папка з довідниками (entities)
const ENTITIES = path.join(SRC, "entities");
const REFERENCE = path.join(SRC, "reference");
const RELATIONS = path.join(SRC, "relations");
// Папка для згенерованих файлів
const OUT = "src/database/generated";
const OUT_PUBLIC = "public/assets/data";

/**
 * Шлях до вхідного та вихідного файлу
 */
const paths = {
  people: path.join(ENTITIES, "people.json"),
  output: path.join(OUT_PUBLIC, "athletes.json"),
};

/**
 *
 * Мапа усіх довідників.
 * Усі довідники, від яких залежать Athletes.
 * Сюди додаємо всі довідники, які будемо резолвити
 */
const dependencies = {
  media: path.join(ENTITIES, "media.json"),
  entityMediaRels: path.join(RELATIONS, "entity-media-relations.json"),
  primaryDisciplines: path.join(
    RELATIONS,
    "athlete-primary-discipline.temp.json",
  ),
  regions: path.join(REFERENCE, "regions.json"),
  countries: path.join(REFERENCE, "countries.json"),
  cities: path.join(REFERENCE, "cities.json"),
  roles: path.join(REFERENCE, "roles.json"),
  genders: path.join(REFERENCE, "genders.json"),
  shootingHands: path.join(REFERENCE, "shooting-hands.json"),
  // сюди можна додати будь-які нові файли
};

// Будуємо вихідний файл
function buildAthletes() {
  console.log("📄 Читаємо базові дані...");

  // 1️⃣ Завантажуємо всі довідники і робимо з них map
  /**
   * Мапа усіх довідників, від яких залежать Athletes.
   */
  const maps = {};

  for (const key in dependencies) {
    // Назва колекції(довідника) для деталізації тексту помилки
    const label = key[0].toUpperCase() + key.slice(1);

    maps[key] = arrayToMap(readJSON(dependencies[key]), label);
  }

  // 2️⃣ Парсимо базовий JSON файл і зберігаємо у змінну
  /**
   * Базовий вхідний масив з JSON файлу
   */
  const peopleBase = readJSON(paths.people);

  // Парсимо массив зв'язків між сутностями та медиа-файлами.
  const entityMediaRels = readJSON(dependencies.entityMediaRels);
  const primaryDisciplines = readJSON(dependencies.primaryDisciplines);

  /**
   * 3️⃣ Валідація базових даних
   */
  for (const person of peopleBase) {
    if (!person.id) {
      throw new Error("❌ Person without id");
    }

    if (!person.first_name) {
      throw new Error(`❌ Person "${person.id}" missing first_name`);
    }

    if (!person.last_name) {
      throw new Error(`❌ Person "${person.id}" missing last_name`);
    }

    if (!person.gender_id) {
      throw new Error(`❌ Person "${person.id}" missing gender_id`);
    }
  }

  /**
   * 4️⃣ Будуємо фінальний масив атлетів з резолвом залежностей
   */
  const athletes = peopleBase.map((person) => {
    const gender = resolve(maps.genders, person.gender_id, "Gender", person.id);
    const role = resolve(maps.roles, person.role_id, "Role", person.id);

    const country = resolveCountryDeep(maps, person.country_id, person.id);
    const birthPlace = resolveCityDeep(maps, person.birth_place_id, person.id);
    const hometown = resolveCityDeep(maps, person.hometown_id, person.id);
    const residence = resolveCityDeep(maps, person.residence_id, person.id);

    const mainDiscipline = resolveMainDiscipline({
      personId: person.id,
      payload: primaryDisciplines,
    });

    const portrait = resolvePersonPortrait({
      mediaMap: maps.media,
      personId: person.id,
      entityMedia: entityMediaRels,
    });

    if (!person.code) {
      throw new Error(`Person without code! id: ${person.id}`);
    }

    // Структура фінального об'єкта
    return {
      // Базові поля
      id: person.id,
      slug: person.slug,
      code: person?.code ?? null,
      name: person.first_name,
      surname: person.last_name,
      fullname: `${person.last_name} ${person.first_name}`,
      date_of_birth: person.date_of_birth,
      height: person.height,
      weight: person.weight,
      profession: person.profession,

      // Resolved fields
      role: roleDTO(role),
      gender: genderDTO(gender),
      country: countryDTO(country),
      birth_place: cityDTO(birthPlace),
      hometown: cityDTO(hometown),
      residence: cityDTO(residence),

      main_discipline: mainDiscipline,

      images: {
        portrait: portraitDTO(portrait),
      },
    };
  });

  /**
   * 5️⃣ Захищаємо від випадкових мутацій.
   */
  Object.freeze(athletes);

  /**
   * 6️⃣ Гарантуємо, що папка generated існує.
   * Створюємо папку, якщо її ще немає
   */
  fs.mkdirSync(OUT, { recursive: true });

  // 7️⃣ Записуємо фінальний файл
  fs.writeFileSync(paths.output, JSON.stringify(athletes, null, 2), "utf-8");

  console.log(`✅ Generated: ${athletes.length} Athletes`);
  console.log(`✅ Saved to: ${paths.output}`);
}

// Запускаємо script
try {
  buildAthletes();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
