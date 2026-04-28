import { getFromMap } from "../../utils/array.js";
import { resolveRelations } from "../relation-resolver.js";

function resolveEntityTags({
  entityId,
  entityTypeId,
  tagMap,
  tagGroupMap,
  tagRelations,
}) {
  return resolveRelations({
    entityId,
    entityTypeId,
    relations: tagRelations,

    mapFn: (rel) => {
      const tag = getFromMap(tagMap, rel.tag_id, "Tag", rel.id);
      const group = getFromMap(tagGroupMap, tag.group_id, "Tag group", tag.id);

      return {
        ...tag,
        group: { ...group },
      };
    },
  });
}

export { resolveEntityTags };
