/**
 * DTO(Data Transfer Object)
 *
 * Повертаємо тільки потрібні поля,
 * щоб фронт не залежав від внутрішньої структури entities.
 */
function portraitDTO(portrait) {
  if (!portrait) {
    return null;
  }

  return {
    url: portrait.url,
  };
}

export { portraitDTO };
