import { fetchAthletes } from "../api/athletes-api";
import { Filters } from "../helpers/filters/filters";
import { createAthleteCardList } from "../templates/athletes/athlete-card";
import { createSwiperAthleteCardList } from "../templates/athletes/athlete-card-swiper";
import { debounce } from "../utils/debounce";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";

const athletes = await fetchAthletes();
const athletesWithSearchName = athletes.map((a) => ({
  ...a,
  search_name: `${a.last_name} ${a.first_name}`.toLowerCase().trim(),
}));
const refs = {
  searchInput: document.querySelector(".js-athlete-search .search__input"),
  searchResults: document.querySelector(".js-search-results"),
  pistolContainer: document.querySelector(".js-pistol-container"),
  rifleContainer: document.querySelector(".js-rifle-container"),
  skeetContainer: document.querySelector(".js-skeet-container"),
  trapContainer: document.querySelector(".js-trap-container"),
};

const pistolSwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".pistol-swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
};

const rifleSwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".rifle-swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
};

const skeetSwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".skeet-swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
};

const trapSwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".trap-swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
};

export function initAthletesPage() {
  console.log("Athletes page init");

  const debouncedSearch = debounce(handleInputSearch, 600);
  refs.searchInput.addEventListener("input", debouncedSearch);

  refs.pistolContainer.insertAdjacentHTML(
    "beforeend",
    createSwiperAthleteCardList(athletes),
  );

  refs.rifleContainer.insertAdjacentHTML(
    "beforeend",
    createSwiperAthleteCardList(athletes),
  );

  refs.skeetContainer.insertAdjacentHTML(
    "beforeend",
    createSwiperAthleteCardList(athletes),
  );

  refs.trapContainer.insertAdjacentHTML(
    "beforeend",
    createSwiperAthleteCardList(athletes),
  );

  const pistolSwiper = new Swiper(".pistolSwiper", pistolSwiperOptions);
  const rifleSwiper = new Swiper(".rifleSwiper", rifleSwiperOptions);
  const skeetSwiper = new Swiper(".skeetSwiper", skeetSwiperOptions);
  const trapSwiper = new Swiper(".trapSwiper", trapSwiperOptions);

  new Filters({
    containerSelector: ".filters__list",
    toggleSelector: ".filter-toggle",
    panelSelector: ".filter-panel",
  });
}

// Search logic
function renderFilteredAthletes(athletes) {
  refs.searchResults.innerHTML = createAthleteCardList(athletes);
}

function handleInputSearch(evt) {
  const searchQuery = stringNormalize(evt.target.value);

  if (!searchQuery.length) {
    hideSearchResults();
    return;
  }

  const filteredAthletes = athletesWithSearchName.filter(({ search_name }) =>
    search_name.includes(searchQuery),
  );

  if (!filteredAthletes.length) {
    hideSearchResults();
    return;
  }

  console.log(filteredAthletes);
  renderFilteredAthletes(filteredAthletes);
  showSearchResults();
}

function showSearchResults() {
  refs.searchResults.classList.add("is-visible");
}

function hideSearchResults() {
  refs.searchResults.classList.remove("is-visible");
}

function stringNormalize(string) {
  return string.toLowerCase().trim();
}
