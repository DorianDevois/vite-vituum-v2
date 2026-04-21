/**
 * DTO(Data Transfer Object)
 *
 * Повертаємо тільки потрібні поля,
 * щоб фронт не залежав від внутрішньої структури entities.
 */
function genderDTO(gender) {
  return {
    id: gender.id,
    name: gender.name,
  };
}

function roleDTO(role) {
  if (!role) {
    return null;
  }

  return {
    id: role.id,
    name: role.name,
    code: role.code,
  };
}

export { roleDTO, genderDTO };
