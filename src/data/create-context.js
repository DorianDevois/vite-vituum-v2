import seo from './global/seo.json';
import site from './global/site.json';
import socials from './global/socials.json';

import home from './pages/home.json';
import competitions from './pages/competitions.json';
import disciplines from './pages/disciplines.json';
import athletes from './pages/athletes.json';
import results from './pages/results.json';
import news from './pages/news.json';
import gallery from './pages/gallery.json';
import contacts from './pages/contacts.json';

const globalContext = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vite-vituum-v2/' : '/',
  seo,
  site,
  socials,

  home,
  competitions,
  disciplines,
  athletes,
  results,
  news,
  gallery,
  contacts,
};

export { globalContext };
