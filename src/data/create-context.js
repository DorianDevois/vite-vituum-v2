import seo from "./global/seo.json";
import site from "./global/site.json";
import socials from "./global/socials.json";

import home from "./pages/home.json";
import about from "./pages/about-us.json";
import competitions from "./pages/competitions.json";
import disciplines from "./pages/disciplines.json";
import athletes from "./pages/athletes.json";
import results from "./pages/results.json";
import news from "./pages/news.json";
import gallery from "./pages/gallery.json";
import contacts from "./pages/contacts.json";
// Athlete Pages
import lunev_ruslan from "./pages/athletes/lunev-ruslan.json";
import kalmikov_vladislav from "./pages/athletes/kalmikov-vladislav.json";
import musayev_haji from "./pages/athletes/musayev-haji.json";
import astanov_elvin from "./pages/athletes/astanov-elvin.json";
import mammadov_rasul from "./pages/athletes/mammadov-rasul.json";
import garayev_imran from "./pages/athletes/garayev-imran.json";
import kerzhankin_oleg from "./pages/athletes/kerzhankin-oleg.json";
import huseynli_onur from "./pages/athletes/huseynli-onur.json";
import khalilov_ramiz from "./pages/athletes/khalilov-ramiz.json";
import tapdigli_uzeyir from "./pages/athletes/tapdigli-uzeyir.json";
import sofiyev_zahid from "./pages/athletes/sofiyev-zahid.json";
import aghazada_niyaz from "./pages/athletes/aghazada-niyaz.json";
import gurbanov_fuad from "./pages/athletes/gurbanov-fuad.json";
import hasanov_javid from "./pages/athletes/hasanov-javid.json";
import mustafayev_ali from "./pages/athletes/mustafayev-ali.json";
import teyublu_mahammad from "./pages/athletes/teyublu-mahammad.json";
import gurbanov_aslan from "./pages/athletes/gurbanov-aslan.json";
import asadullayev_abidin from "./pages/athletes/asadullayev-abidin.json";
import huseynli_ali from "./pages/athletes/huseynli-ali.json";
import guliyev_alimirza from "./pages/athletes/guliyev-alimirza.json";
import mammadov_tamerlan from "./pages/athletes/mammadov-tamerlan.json";
import aghazada_mirmomin from "./pages/athletes/aghazada-mirmomin.json";
import mehdizade_sabir from "./pages/athletes/mehdizade-sabir.json";
import novruzlu_murtaza from "./pages/athletes/novruzlu-murtaza.json";
import aliyev_osman from "./pages/athletes/aliyev-osman.json";
import nasirova_nigar from "./pages/athletes/nasirova-nigar.json";
import aliyeva_khanna from "./pages/athletes/aliyeva-khanna.json";
import sultanova_zeynab from "./pages/athletes/sultanova-zeynab.json";
import barkhalova_sofiya from "./pages/athletes/barkhalova-sofiya.json";
import aliyeva_leyli from "./pages/athletes/aliyeva-leyli.json";
import gambayeva_mehriban from "./pages/athletes/gambayeva-mehriban.json";
import omarova_amina from "./pages/athletes/omarova-amina.json";
import aliyeva_nurana from "./pages/athletes/aliyeva-nurana.json";
import bayramova_zhala from "./pages/athletes/bayramova-zhala.json";
import ramazanova_nigar from "./pages/athletes/ramazanova-nigar.json";
import mahmudova_aynur from "./pages/athletes/mahmudova-aynur.json";
import afsana_elvina from "./pages/athletes/afsana-elvina.json";
import jafarova_nurlana from "./pages/athletes/jafarova-nurlana.json";
import meftakhetdinova_rigina from "./pages/athletes/meftakhetdinova-rigina.json";
import najafova_sevda from "./pages/athletes/najafova-sevda.json";
import jafarova_narmin from "./pages/athletes/jafarova-narmin.json";
import jamalova_aydan from "./pages/athletes/jamalova-aydan.json";
import pashayeva_jamila from "./pages/athletes/pashayeva-jamila.json";

const globalContext = {
  baseUrl: process.env.NODE_ENV === "production" ? "/vite-vituum-v2/" : "/",
  seo,
  site,
  socials,

  home,
  about,
  competitions,
  disciplines,
  athletes,
  results,
  news,
  gallery,
  contacts,

  // Athlete Profiles
  profiles: {
    lunev_ruslan,
    kalmikov_vladislav,
    musayev_haji,
    astanov_elvin,
    mammadov_rasul,
    garayev_imran,
    kerzhankin_oleg,
    huseynli_onur,
    khalilov_ramiz,
    tapdigli_uzeyir,
    sofiyev_zahid,
    aghazada_niyaz,
    gurbanov_fuad,
    hasanov_javid,
    mustafayev_ali,
    teyublu_mahammad,
    gurbanov_aslan,
    asadullayev_abidin,
    huseynli_ali,
    guliyev_alimirza,
    mammadov_tamerlan,
    aghazada_mirmomin,
    mehdizade_sabir,
    novruzlu_murtaza,
    aliyev_osman,
    nasirova_nigar,
    aliyeva_khanna,
    sultanova_zeynab,
    barkhalova_sofiya,
    aliyeva_leyli,
    gambayeva_mehriban,
    omarova_amina,
    aliyeva_nurana,
    bayramova_zhala,
    ramazanova_nigar,
    mahmudova_aynur,
    afsana_elvina,
    jafarova_nurlana,
    meftakhetdinova_rigina,
    najafova_sevda,
    jafarova_narmin,
    jamalova_aydan,
    pashayeva_jamila,
  },
};

export { globalContext };
