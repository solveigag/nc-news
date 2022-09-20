import { Link } from "react-router-dom";

const AllArticlesCard = ({ article }) => {
  /* Try and install moment to work out time elpsed since publishing */
  let date = article.created_at.substring(0, 10);

  return (
    <section className="article-card-container">
      <div className="article-card-title">
        <h3>{article.title}</h3>
      </div>
      <div className="article-card-info">
        <p className="type">Author: {article.author}</p>
        <p className="type">Published: {date}</p>
      </div>
      <div className="article-card-stats-link">
        <div className="stat">
          <p className="type">Votes</p>
          <p className="value">{article.votes}</p>
        </div>
        <div className="stat">
          <p className="type">Topic</p>
          <p className="value">{article.topic}</p>
        </div>
        <div className="stat">
          <p className="type">Comments</p>
          <p className="value">{article.comment_count}</p>
        </div>
        <div className="stat link">
          <Link to={`/article/${article.article_id}`} className="arrow">
            Read
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllArticlesCard;
