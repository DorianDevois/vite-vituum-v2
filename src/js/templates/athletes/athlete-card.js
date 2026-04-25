function createAthleteCard(athlete) {
  const {
    id,
    slug,
    role,
    images: { portrait },
    name,
    surname,
    fullname,
    country,
    residence,
    main_discipline,
  } = athlete;

  const defaultUrl = "assets/images/athletes/defaults/avatar.png";

  return `<li class="grid__item" data-athlete-id="${id}">
                <article class="team-card" data-roles="${role.id}">
                  <!-- Thumbnail -->
                  <div class="team-card__thumbnail">
                    <img
                      class="team-card__image"
                      src="${portrait?.url ?? defaultUrl}"
                      alt="Portrait of ${fullname}"
                      loading="lazy" />

                    <!-- Role Badge -->
                    <ul class="badges badges--top-right" aria-label="Team role">
                      <li class="badges__item badges__item--role">
                        <a class="badges__link" href="athletes/?discipline=${main_discipline.slug}" data-discipline="${main_discipline.id}">${main_discipline.name}</a>
                      </li>
                    </ul>

                    <!-- Country Badge -->
                    <ul class="badges badges--top-left" aria-label="Country badge">
                      <li class="badges__item badges__item--flag">
                        <a
                          class="badges__link"
                          href="athletes/?country=${country.slug}"
                          data-country="${country.id}"
                          aria-label="Filter by country: ${country.name}">
                          <svg class="badges__icon" width="43" height="32" aria-hidden="true">
                            <use href="assets/icons/sprite.svg#icon-flag-${country.alpha2}"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- CONTENT -->
                  <div class="team-card__content">
                    <!-- Meta -->
                    <div class="team-card__meta">
                      <h3 class="team-card__name">
                        <a class="team-card__name-link" href="athletes/">${fullname}</a>
                      </h3>
                      <!-- <p class="team-card__age">25 years</p> -->
                      <p class="team-card__location">${residence.name}, ${country.name}</p>
                    </div>

                    <div class="team-card__social socials">
                      <ul class="socials__list" aria-label="Social links">
                        <li>
                          <a class="socials__link" href="athletes/" aria-label="Instagram">
                            <svg class="socials__icon" width="20" height="20" aria-hidden="true">
                              <use href="assets/icons/sprite.svg#icon-social-instagram"></use>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a class="socials__link" href="athletes/" aria-label="X (Twitter)">
                            <svg class="socials__icon" width="20" height="20" aria-hidden="true">
                              <use href="assets/icons/sprite.svg#icon-social-x"></use>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a class="socials__link" href="athletes/" aria-label="Facebook">
                            <svg class="socials__icon" width="20" height="20" aria-hidden="true">
                              <use href="assets/icons/sprite.svg#icon-social-facebook"></use>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a class="socials__link" href="athletes/" aria-label="LinkedIn">
                            <svg class="socials__icon" width="20" height="20" aria-hidden="true">
                              <use href="assets/icons/sprite.svg#icon-social-linkedin"></use>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </li>`;
}

export function createAthleteCardList(athletes) {
  return athletes.map(createAthleteCard).join("");
}
