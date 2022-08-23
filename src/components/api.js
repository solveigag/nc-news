export const getAllArticles = (topic) => {
  if (topic) {
    //console.log(topic)
    return fetch(`https://solveiga-nc-news-be.herokuapp.com/api/articles?topic=${topic}`).then(
      (res) => {
       return res.json();
      }
    );
  } else {
    return fetch("https://solveiga-nc-news-be.herokuapp.com/api/articles").then(
      (res) => {
        return res.json();
      }
    );
  }   
  };

  export const getTopics = () => {
    return fetch("https://solveiga-nc-news-be.herokuapp.com/api/topics").then(
      (res) => {
        return res.json();
      }
    );
  }