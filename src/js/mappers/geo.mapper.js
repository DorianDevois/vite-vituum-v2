/**
 * DTO(Data Transfer Object)
 *
 * Повертаємо тільки потрібні поля,
 * щоб фронт не залежав від внутрішньої структури entities.
 */
function regionDTO(region) {
  return {
    id: region.id,
    name: region.name,
    code: region.code,
  };
}

function countryDTO(country) {
  return {
    id: country.id,
    slug: country.slug,
    name: country.name,
    code: country.code,
    region: regionDTO(country.region),
    alpha2: country.alpha2,
    alpha3: country.alpha3,
    flag: country.flag,
  };
}

function cityDTO(city) {
  if (!city) {
    return null;
  }

  return {
    id: city.id,
    name: city.name,
    country: countryDTO(city.country),
  };
}

export { regionDTO, countryDTO, cityDTO };
