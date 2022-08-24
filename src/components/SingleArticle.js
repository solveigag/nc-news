import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, patchVotes } from "./api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState();
  const [err, setErr] = useState(null);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disableDownVote, setDisableDownVote] = useState(false);

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      const articleCopy = { ...article };
      articleCopy.created_at = article.created_at.substring(0, 10);
      setArticle(articleCopy);
      setVotes(articleCopy.votes);
    });
  }, [article_id]);

  const handleClick = (event) => {
    let vote = parseInt(event.target.value);
    setVotes((currVotes) => currVotes + vote);
    setErr(null);
    patchVotes(article_id, vote).catch((err) => {
      setVotes((currVotes) => currVotes - vote);
      setErr("Something went wrong, please try again.");
    });

    if (vote > 0) setDisableUpVote(true);
    if (vote < 0) setDisableDownVote(true);
    if ((vote > 0 && disableDownVote) || (vote < 0 && disableUpVote)) {
      setDisableUpVote(false);
      setDisableDownVote(false);
    }
  };

  if (err) return <p>{err}</p>;

  return (
    <section>
      <h2>{article.title}</h2>
      <ul className="single-article-container">
        <p>Author: {article.author}</p>
        <p>Published: {article.created_at}</p>
        <p>Topic: {article.topic}</p>
        <p>Votes: {votes}</p>
       
        <button disabled={disableUpVote} value={1} onClick={handleClick}>
          👍
        </button>

        <button disabled={disableDownVote} value={-1} onClick={handleClick}>
          👎
        </button>
      </ul>
      <p>{article.body}</p>
      <p>Comments: {article.comment_count}</p>
    </section>
  );
};

export default SingleArticle;
