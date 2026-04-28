function resolveRelations({
  entityId,
  entityTypeId,
  relations,
  mapFn = (x) => x,
}) {
  if (!entityId) {
    return [];
  }

  const filteredRel = relations.filter(
    (rel) =>
      rel.entity_id === entityId &&
      rel.entity_type_id === entityTypeId &&
      rel.is_active,
  );

  if (!filteredRel.length) {
    return [];
  }

  const sortedRel = filteredRel.toSorted(
    (a, b) => (a.sort_order || 0) - (b.sort_order || 0),
  );

  return sortedRel.map(mapFn);
}

export { resolveRelations };
