/**
 * Генерує breadcrumb для athlete сторінки
 */
export function buildAthleteBreadcrumbs(athlete) {
  return [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Athletes",
      url: "/athletes/",
    },
    {
      label: `${athlete.name} ${athlete.surname}`,
      url: null, // останній елемент без лінка
    },
  ];
}
