import { fetchAthletes } from "../api/athletes-api.js";
import { getArticlesByEntity } from "../services/article-service.js";
import { renderAthlete } from "../templates/athletes/athlete-page.js";
import { createSwiperNewsCardList } from "../templates/news/news-card-swiper.js";

const refs = {
  main: document.querySelector(".js-athlete-page"),
  newsList: document.querySelector(".js-athlete-news"),
};

export async function initAthletePage() {
  console.log("init Athlete Page");
  console.log("TagMain:", refs.main);

  const slug = getAthleteSlugFromURL();
  console.log("MySlug:", slug);

  // if (!slug) {
  //   redirectTo404();
  //   return;
  // }

  const athletes = await fetchAthletes();
  const pageSlug = getSlugFromPath().trim().toLocaleLowerCase();

  const myAthlete = athletes.find((ath) => ath.slug === slug);

  // if (!myAthlete) {
  //   redirectTo404();
  //   return;
  // }

  // renderAthletePage(myAthlete);

  const athlete = athletes.find((a) => {
    return a.slug.trim().toLowerCase() === pageSlug;
  });

  if (!athlete) {
    console.error("Athlete not found");
    return;
  }

  // Знаходимо пов'язані з атлетом новини
  const articles = await getArticlesByEntity(athlete.id, "person");
  console.log("articles:", articles);
}

export function getSlugFromPath() {
  // window.location.pathname: /athletes/lunev-ruslan/
  const parts = location.pathname.split("/");

  return parts[parts.length - 2]; // lunev-ruslan
}

function getValueFromSearchParams(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  const fromSearchQuery = params.get("ath");

  if (fromSearchQuery) {
    console.log("fromSearchQuery:", fromSearchQuery);

    return fromSearchQuery;
  }

  const parts = window.location.pathname.split("/");
  console.log("parts.at(-1):", parts.at(-1));
  return parts.at(-1);
}

/**
 * Отримує slug з URL
 * /athletes/lunev-ruslan/ → lunev-ruslan
 */
function getAthleteSlugFromURL() {
  const parts = window.location.pathname.split("/").filter(Boolean);

  return parts[1];
  // ["athletes", "lunev-ruslan"]
}

/**
 * Редірект на 404
 */
function redirectTo404() {
  window.location.href = "/404.html";
}

// Рендер сторінки
function renderAthletePage(athlete) {
  const container = document.querySelector(".js-athlete-page");

  if (!container) {
    console.error("❌ .js-athlete-page not found");
    return;
  }

  container.insertAdjacentHTML("beforeend", renderAthlete(athlete));
}
