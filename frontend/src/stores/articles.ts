import { defineStore } from "pinia";

interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  // image: string;
}

// The `defineStore` function creates a new store with the given name and
// options. It takes a single argument, an object with the following properties:
// - `id`: A unique identifier for the store. This is used internally to
export const useArticlesStore = defineStore("articles", {
  state: () => ({
    articles: [] as Article[],
  }),
  getters: {
    getArticles(state): Article[] {
      return state.articles;
    },
    getArticle: (state) => (id: string): Article | undefined => {
      return state.articles.find((article: Article) => article.id === id);
    }
  },
  actions: {
    async fetchArticles(url: any) {
      const req = await fetch(url);
      const res = await req.json();

      console.log(res.data);

      const articles: Article[] = [];

      res.data.forEach((art: any) => {
        // const content: String = "";
        const initialContent: String[] = []
        art.content.forEach ((c: any) => {
          initialContent.push(c.children[0].text);
        });
        const article: Article = {
          id: art.documentId,
          title: art.title,
          content: initialContent.join(""),
          author: art.author,
          date: art.publishedAt,
        };

        articles.push(article);
      })

      console.log(articles);
      this.articles = articles;
    }
  }
})