import axios from "axios";

export const getAllArticles = (topic, sortBy, orderBy) => {

 
  if (topic) {
    return fetch(
      `https://solveiga-nc-news-be.herokuapp.com/api/articles?topic=${topic}&sort_by=${sortBy}&order_by=${orderBy}`
    ).then((res) => {
      return res.json();
    });
  } else {
    return fetch(`https://solveiga-nc-news-be.herokuapp.com/api/articles?sort_by=${sortBy}&order_by=${orderBy}`).then(
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
};

export const getArticleById = (article_id) => {
  return fetch(
    `https://solveiga-nc-news-be.herokuapp.com/api/articles/${article_id}`
  ).then((res) => {
    return res.json();
  });
};

export const patchVotes = (article_id, vote) => {
  return axios
    .patch(
      `https://solveiga-nc-news-be.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: vote}
    )
    .then((res) => {
      return res;
    });
};

export const getCommnetsByArticleId = (article_id) => {
  return fetch(
    `https://solveiga-nc-news-be.herokuapp.com/api/articles/${article_id}/comments`
  ).then((res) => {
    return res.json();
  });
}

export const getUsers = () => {
  return fetch(
    `https://solveiga-nc-news-be.herokuapp.com/api/users`
  ).then((res) => {
    return res.json();
  });
}

export const postNewComment = (article_id, comment) => {
  return axios
    .post(
      `https://solveiga-nc-news-be.herokuapp.com/api/articles/${article_id}/comments`, comment
    )
    .then((res) => {
      return res;
    });
}

export const deleteComment = (comment_id) => {
  return axios.delete(`https://solveiga-nc-news-be.herokuapp.com/api/comments/${comment_id}`).then((res) => {
    return res
  })
}