const SingleArticleCard = (
  {article,
  votes,
  disableUpVote,
  disableDownVote,
  handleVoteClick}
) => {
  return (
    <section className="single-article-container">
      <h2>{article.title}</h2>
      <ul className="single-article-section main-colour-text">
        <p>Author: {article.author}</p>
        <p>Published: {article.created_at}</p>
        <p>Topic: {article.topic}</p>
        <p>Votes: {votes}</p>

        <button disabled={disableUpVote} value={1} onClick={handleVoteClick}>
          👍
        </button>

        <button disabled={disableDownVote} value={-1} onClick={handleVoteClick}>
          👎
        </button>
      </ul>
      <p className="single-article-section main-colour-background">{article.body}</p>
      
    </section>
  );
};

export default SingleArticleCard;
