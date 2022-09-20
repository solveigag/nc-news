const SingleArticleCard = ({
  article,
  votes,
  disableUpVote,
  disableDownVote,
  handleVoteClick,
}) => {
  return (
    <section className="single-article-container">
      <div className="single-article-card-title">
        <h2>{article.title}</h2>
      </div>
      <div className="single-article-card-info">
        <p>Author: {article.author}</p>
        <p>Published: {article.created_at}</p>
      </div>
      <div className="single-article-card-body">
         <p >{article.body}</p>
      </div>
      <div className="single-article-card-stats-vote">
        <div className="stats-vote-container">
        <div className=" stat ">
      
          <p className="value">{article.topic}</p>
        </div>
        <div className="stat ">
          <p className="value">Votes: {votes}</p>
        </div>
        </div>
        <div className="stats-vote-container">
        <div className="stat">
          <button className="like-button"
            disabled={disableUpVote}
            value={1}
            onClick={handleVoteClick}
          >
            👍
          </button>
        </div>
        <div className="stat">
          <button className="like-button"
            disabled={disableDownVote}
            value={-1}
            onClick={handleVoteClick}
          >
            👎
          </button>
        </div> 
        </div>     
     </div>
      
    </section>
  );
};

export default SingleArticleCard;
