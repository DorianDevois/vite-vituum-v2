import { initHomePage } from '../pages/home.js';
import { initCompetitionsPage } from '../pages/competitions.js';
import { initDisciplinesPage } from '../pages/disciplines.js';
import { initAthletesPage } from '../pages/athletes.js';
import { initResultsPage } from '../pages/results.js';
import { initNewsPage } from '../pages/news.js';
import { initGlleryPage } from '../pages/gallery.js';
import { initContactsPage } from '../pages/contacts.js';

export const pageModules = {
  home: initHomePage,
  competitions: initCompetitionsPage,
  disciplines: initDisciplinesPage,
  athletes: initAthletesPage,
  results: initResultsPage,
  news: initNewsPage,
  gallery: initGlleryPage,
  contacts: initContactsPage,
};
