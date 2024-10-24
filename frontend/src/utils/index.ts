const API_URL = "http://localhost:1337/api";

export const getArticles = async () => {
  const response = await fetch(`${API_URL}/articles`);
  const data = await response.json();
  return data;
};