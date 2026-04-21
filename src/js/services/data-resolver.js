/**
 * Резолвит сущность из мапы по её ID.
 *
 * @param {Record<string, any>} map - Объект-справочник, где ключи — это ID.
 * @param {string|number|null|undefined} id - Идентификатор сущности, которую ищем.
 * @param {string} entityName - Название типа сущности (используется для сообщения об ошибке).
 * @param {string|number} parentId - ID родителя или контекст, в котором произошла ошибка.
 * @returns {any|null} Найденная сущность или null, если id не передан.
 * @throws {Error} Выбрасывает ошибку, если id передан, но сущность в мапе отсутствует.
 */
function resolve(map, id, entityName, parentId) {
  // Деякі поля можуть бути опціональні
  if (!id) {
    return null;
  }

  const entity = map[id];

  if (!entity) {
    throw new Error(
      `❌ ${entityName} with id: "${id}" not found (parent: ${parentId})`,
    );
  }

  return entity;
}

/**
 * Резолвит полные данные города, включая вложенную страну и регион.
 *
 * @param {Object} maps - Объект со справочниками (cities, countries, regions).
 * @param {string|number} cityId - ID города, который нужно найти.
 * @param {string|number} parentId - ID родительской сущности (для логирования ошибок).
 * @returns {Object|null} Объект города с глубокими зависимостями или null, если cityId не передан.
 * @throws {Error} Если город, страна или регион не найдены в мапах.
 */
function resolveCityDeep(maps, cityId, parentId) {
  if (!cityId) {
    return null;
  }

  const city = resolve(maps.cities, cityId, "City", parentId);
  const country = resolve(maps.countries, city.country_id, "Country", parentId);
  const region = resolve(maps.regions, country.region_id, "Region", parentId);

  return {
    ...city,
    country: {
      ...country,
      region,
    },
  };
}

/**
 * Резолвит полные данные страны, включая вложенный регион.
 *
 * @param {Object} maps - Объект со справочниками (countries, regions).
 * @param {string|number} countryId - ID страны, которую нужно найти.
 * @param {string|number} parentId - ID родительской сущности (для логирования ошибок).
 * @returns {Object|null} Объект страны с привязанным регионом или null, если countryId не передан.
 * @throws {Error} Если страна или регион не найдены в мапах.
 */
function resolveCountryDeep(maps, countryId, parentId) {
  if (!countryId) {
    return null;
  }

  const country = resolve(maps.countries, countryId, "Country", parentId);
  const region = resolve(maps.regions, country.region_id, "Region", parentId);

  return {
    ...country,
    region,
  };
}

/**
 * Находит URL портрета человека на основе связей медиа-файлов.
 *
 * @param {Object} params - Объект параметров функции.
 * @param {Record<string|number, Object>} params.mediaMap - Мапа всех медиа-файлов (результат ф-ции arrayToMap).
 * @param {string|number} params.personId - ID человека, для которого ищется портрет.
 * @param {Array<Object>} params.entityMedia - Массив связей между сущностями и медиа.
 *
 * @returns {string|null} `URL` изображения или `null`, если портрет не найден или связь отсутствует.
 *
 * @example
 * const portraitUrl = resolvePersonPortrait({
 *   personId: 'ath_0001',
 *   mediaMap: { media_0001: { id: 'media_0001', url: 'https://cdn.com', type_id: 'image' } },
 *   entityMedia: [{ id: 'ety_media_0001', entity_id: 'ath_0001', entity_type: 'person', media_id: 'media_0001', usage_type_id: 'portrait', is_active: true }]
 * });
 */
function resolvePersonPortrait({ mediaMap, personId, entityMedia }) {
  const relation = entityMedia.find(
    (item) =>
      item.entity_id === personId &&
      item.entity_type === "person" &&
      item.usage_type_id === "portrait" &&
      item.is_active,
  );

  if (!relation) {
    return null;
  }

  return mediaMap[relation.media_id] ?? null;
}

export { resolve, resolveCityDeep, resolveCountryDeep, resolvePersonPortrait };
