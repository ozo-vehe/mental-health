const API_URL = "https://romantic-dance-3636d8ed6c.strapiapp.com/api";

export const getArticles = async () => {
  const response = await fetch(`${API_URL}/articles`);
  const data = await response.json();
  return data;
};