import { initHomePage } from '../pages/home.js';
import { initContactsPage } from '../pages/contacts.js';
import { initAthletesPage } from '../pages/athletes.js';

export const pageModules = {
  home: initHomePage,
  contacts: initContactsPage,
  athletes: initAthletesPage,
};
