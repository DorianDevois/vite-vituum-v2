import seo from './global/seo.json';
import site from './global/site.json';
import socials from './global/socials.json';

import home from './pages/home.json';
import athletes from './pages/athletes.json';
import contacts from './pages/contacts.json';
import news from './pages/news.json';

const globalContext = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vite-vituum-v2/' : '/',
  seo,
  site,
  socials,

  home,
  contacts,
  news,
  athletes,
};

export { globalContext };
