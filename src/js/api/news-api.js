async function fetchArticles() {
  try {
    const response = await fetch("assets/data/articles.json");

    if (!response.ok) {
      throw new Error(`Failed to fetch statuses: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching Articles:", error);
    return [];
  }
}

export { fetchArticles };
