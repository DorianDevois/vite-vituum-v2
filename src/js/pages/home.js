import { createSwiperAthleteCardList } from "../templates/athletes/athlete-card-swiper.js";
import { createSwiperCompetitionCardList } from "../templates/competitions/competition-card-swiper.js";
import { fetchAthletes } from "../api/athletes-api.js";
import { initHeroSlider } from "../modules/hero-slider/hero-slider.js";
import { initTeamSlider } from "../modules/team-slider/team-slider.js";
import { initDisciplinesSlider } from "../modules/disciplines-slider/disciplines-slider.js";
import { initCompetitionsSlider } from "../modules/competitions-slider/competitions-slider.js";
import { initNewsSlider } from "../modules/news-slider/news-slider.js";
import { initPartnersSlider } from "../modules/partners-slider/partners-slider.js";

const refs = {
  athleteList: document.querySelector(".js-team-list"),
  competitionList: document.querySelector(".js-competition-list"),
  newsList: document.querySelector(".js-news-list"),
  partnerList: document.querySelector(".js-partner-list"),
};

const athletes = await fetchAthletes();

export function initHomePage() {
  console.log("Home page init");
  refs.athleteList.innerHTML = createSwiperAthleteCardList(athletes);
  refs.competitionList.innerHTML = createSwiperCompetitionCardList();
  // refs.newsList.innerHTML

  initHeroSlider();
  initTeamSlider();
  initDisciplinesSlider();
  initCompetitionsSlider();
  initNewsSlider();
  initPartnersSlider();
}
