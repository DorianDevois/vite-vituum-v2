function createCompetitionCard(id) {
  // const { id, name, location, status, images } = competition;
  return `<li class="swiper-slide" data-competition-id="${id}">
  <article class="competition-card" data-status="completed" data-types="national">
    <!-- Competition Card Media Thumb -->
    <div class="competition-card__thumb">
      <!-- Competition Card Image -->
      <img
        class="competition-card__image"
        src="assets/images/competitions/test-competition/thumbnail.jpg"
        alt="Textual replacement for the image"
        width="260"
        loading="lazy"
      />

      <!-- Competition Card Thumb Overlay -->
      <div class="competition-card__overlay">
        <a class="link" href="competitions/"> View event </a>
      </div>

      <!-- Competition Age category badge -->
      <ul class="badges badges--top-left" aria-label="Age category">
        <li>
          <a
            class="badges__link"
            href="competitions/?age-gategory=senior"
            data-age-category="senior"
          >
            Senior
          </a>
        </li>
      </ul>
    </div>

    <!-- Competition Card Category -->
    <p class="competition-card__category">ISSF World Cup</p>

    <!-- Competition Card Content -->
    <div class="competition-card__content">
      <h3 class="competition-card__title">
        <a class="link" href="competitions/"> Munich ISSF World Cup 2024 </a>
      </h3>
      <ul class="competition-card__event-list">
        <li class="competition-card__event">
          <a class="link" href="competitions/?discipline=pistol">Pistol</a>
        </li>
        <li class="competition-card__event">
          <a class="link" href="competitions/?discipline=rifle">Rifle</a>
        </li>
        <li class="competition-card__event">
          <a class="link" href="competitions/?discipline=shotgun">Shotgun</a>
        </li>
      </ul>
      <p class="competition-card__description">Precision, speed, and control: The core focus of elite rifle and pistol competition.</p>
      <div class="competition-card__info">
        <!-- Competition Card Flag -->
        <svg
          class="competition-card__flag"
          width="43"
          height="32"
          aria-hidden="true"
        >
          <use href="assets/icons/sprite.svg#icon-flag-de"></use>
        </svg>
        <div class="competition-card__meta">
          <!-- Competition Card Location -->
          <p class="competition-card__location">
            <a
              class="link"
              href="competitions/?city=munich&country=de"
              data-city="munich"
              data-country="de"
            >
              Munich, Germany
            </a>
          </p>
          <!-- Competition Card Date -->
          <p class="competition-card__date">
            <time datetime="2026-05-31">31 May</time> -
            <time datetime="2026-06-08">Jun 08, 2024</time>
          </p>
        </div>
      </div>
    </div>
  </article>
</li>`;
}

export function createSwiperCompetitionCardList(athletes) {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(createCompetitionCard(i));
  }
  return arr.join("");
}
