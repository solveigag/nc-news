export const getAllArticles = () => {
    return fetch("https://solveiga-nc-news-be.herokuapp.com/api/articles").then(
      (res) => {
        return res.json();
      }
    );
  };