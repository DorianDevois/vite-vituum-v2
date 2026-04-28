import { fetchArticleRelations, fetchArticles } from "../api/articles-api.js";

/**
 * Отримати всі статті пов'язані з сутністю
 *
 * @param {string} entityId
 * @param {string} entityType
 */
export async function getArticlesByEntity(entityId, entityType) {
  const [articles, relations] = await Promise.all([
    fetchArticles(),
    fetchArticleRelations(),
  ]);

  // 1. Знаходимо всі relation для цієї сутності
  const relatedIds = relations
    .filter(
      (rel) =>
        rel.entity_id === entityId &&
        rel.entity_type_id === entityType &&
        rel.is_active,
    )
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((rel) => rel.article_id);

  // 2. Фільтруємо статті
  const result = articles.filter((article) => relatedIds.includes(article.id));

  // 3. Сортуємо (нові зверху)
  return result.sort((a, b) => new Date(b.published) - new Date(a.published));
}
