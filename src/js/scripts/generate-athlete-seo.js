import fs from "fs";
import path from "path";

import { readJSON } from "../utils/fs.js";
import { buildAthleteBreadcrumbs } from "../utils/breadcrumbs.js";

// Папка з сирими даними
const SRC = "public/assets/data";

const OUT_DIR = "src/data/pages/athletes";

const athletes = readJSON(path.join(SRC, "athletes.json"));

athletes.forEach((athlete) => {
  // створюємо context
  const content = `{
  "code": "${athlete.code}",
  "slug": "${athlete.slug}",
  "url": "athletes/${athlete.slug}/",
  "title": "Athlete ${athlete.fullname}",
  "description": "",
  "keywords": "",
  "breadcrumbs": [
    { "label": "Home", "path": "/" },
    { "label": "Athletes", "path": "/athletes/" },
    { "label": "${athlete.fullname}" }
  ]
}
`;

  fs.writeFileSync(path.join(OUT_DIR, `${athlete.slug}.json`), content);
});

console.log("✅ Athlete SEO generated");
