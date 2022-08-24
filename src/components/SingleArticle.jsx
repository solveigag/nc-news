import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllCommentsByArticleId from "./AllCommentsByArticleId";
import { getArticleById, getCommnetsByArticleId, patchVotes } from "./api";
import ExpandableComments from "./ExpandableComments";
import SingleArticleCard from "./SingleArticleCard";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState();
  const [err, setErr] = useState(null);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disableDownVote, setDisableDownVote] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      const articleCopy = { ...article };
      articleCopy.created_at = article.created_at.substring(0, 10);
      setArticle(articleCopy);
      setVotes(articleCopy.votes);
    });
    getCommnetsByArticleId(article_id).then(({allComments}) => {
      setComments(allComments)
    })
  }, [article_id]);

  const handleVoteClick = (event) => {
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

  return <section>
    <div>
    <SingleArticleCard 
      article={article}
      votes={votes}
      disableUpVote={disableUpVote}
      disableDownVote={disableDownVote}
      handleVoteClick={handleVoteClick}
    />
  </div>
    <ExpandableComments comment_count={article.comment_count}>
    <div className="comments-parent-grid">{comments.map(comment => {
      return <AllCommentsByArticleId comment={comment} key={comment.comment_id}/>
    })}
  </div>
    </ExpandableComments>
    </section>
};

export default SingleArticle;
