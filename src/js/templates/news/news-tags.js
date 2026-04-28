const TAG_COLOR_MAP = {
  competition: "tag--gold",
  discipline: "tag--dark",
  location: "tag--blue",
  achievement: "tag--green",
  age: "tag--purple",
  content: "tag--gray",
  organization: "tag--red",
};

function createTagList(tags) {
  return tags
    .map((tag) => {
      const colorClass = TAG_COLOR_MAP[tag.group.id] || "tag--default";

      return `
        <li class="tag ${colorClass}">
          <a class="tags__link" href="news/?tag=${tag.slug}">
            ${tag.name}
          </a>
        </li>
      `;
    })
    .join("");
}

function renderTags(tags) {
  if (!tags || !tags.length) {
    return "";
  }

  return `
    <ul class="news-card__tags tags">
      ${createTagList(tags)}
    </ul>
  `;
}

export { renderTags };
