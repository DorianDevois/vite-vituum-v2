import { formatLongDate, formatShortDate } from "../../utils/date.js";

function createNewsCard(article) {
  const {
    id,
    slug,
    title,
    category,
    excerpt,
    images,
    published_at: date,
  } = article;

  const shortDate = formatShortDate(date);
  const longDate = formatLongDate(date);

  return `<li class="swiper-slide" data-news-id=${id}>
  <article class="news-card">
    <!-- News Card Thumbnail -->
    <div class="news-card__thumbnail">
      <!-- News Card Image -->
      <img
        class="news-card__image"
        src="assets/images/news/${slug}/cover.jpg"
        alt="${images.cover.alt}"
        width="260"
        loading="lazy"
      />

      <!-- News Card Overlay -->
      <div class="news-card__overlay">
        <!-- News Card Excerpt(уривок) -->
        <p class="news-card__summary">${excerpt}</p>

        <a class="news-card__readmore" href="news/${slug}/">
          Read more...
          <span class="u-visually-hidden">
            about the ${title}
          </span>
        </a>
      </div>
    </div>

    <!-- News Card Content + Meta -->
    <div class="news-card__content">
      <div class="news-card__meta">
        <!-- News Card Post Date -->
        <time
          class="news-card__date"
          datetime="${date}"
        >
          <svg
            class="icon"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <use href="assets/icons/sprite.svg#icon-ui-calendar"></use>
          </svg>
          <span class="text">${longDate}</span>
        </time>

        <!-- News Category Tag/Link -->
        <a
          class="news-card__category-link"
          href="news/?category=${category.id}"
          data-news-category="${category.id}"
        >
          ${category.name}
        </a>
      </div>

      <!-- News Card Title -->
      <h3 class="news-card__title">
        <a class="link" href="news/">${title}</a>
      </h3>
    </div>
  </article>
</li>`;
}

export function createSwiperNewsCardList(news) {
  return news.map(createNewsCard).join("");
}
