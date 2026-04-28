export function renderAthlete(athlete) {
  const { fullname, images, country, role, main_discipline } = athlete;

  const portrait = images?.portrait;

  return `
    <section class="athlete">
      <div class="athlete__container">

        <!-- Image -->
        <div class="athlete__image">
          ${
            portrait
              ? `
              <img
                src="${portrait.url}"
                alt="${portrait.alt || fullname}"
                width="${portrait.width}"
                height="${portrait.height}"
                loading="lazy"
              />
            `
              : `<div class="athlete__placeholder">No Image</div>`
          }
        </div>

        <!-- Info -->
        <div class="athlete__info">
          <h1 class="athlete__name">${fullname}</h1>

          <ul class="athlete__meta">
            ${role ? `<li><strong>Role:</strong> ${role.name}</li>` : ""}

            ${
              country
                ? `<li><strong>Country:</strong> ${country.name}</li>`
                : ""
            }

            ${
              main_discipline
                ? `<li><strong>Discipline:</strong> ${main_discipline.name}</li>`
                : ""
            }
          </ul>
        </div>

      </div>
    </section>
  `;
}
