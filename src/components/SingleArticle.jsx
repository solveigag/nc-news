
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import AllCommentsByArticleId from "./AllCommentsByArticleId";
import {
  getArticleById,
  getCommnetsByArticleId,
  patchVotes,
  postNewComment,
} from "./api";
import ExpandableComments from "./ExpandableComments";
import ExpandableCommentsForm from "./ExpandableCommentsFom";
import SingleArticleCard from "./SingleArticleCard";

const SingleArticle = () => {
  const { loggedInUser } = useContext(UserContext);
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState();
  const [err, setErr] = useState(null);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disableDownVote, setDisableDownVote] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState();

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      const articleCopy = { ...article };
      articleCopy.created_at = article.created_at.substring(0, 10);
      setArticle(articleCopy);
      setVotes(articleCopy.votes);
    });
    getCommnetsByArticleId(article_id).then(({ allComments }) => {
      setComments(allComments);
    });
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

  const handleNewComment = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    let postComment = { username: event.target.name, body: newComment };
    postNewComment(article_id, postComment)
      .then(() => {
        setNewComment("");
        getCommnetsByArticleId(article_id).then(({ allComments }) =>
          setComments(allComments)
        );
      })
      .catch((err) => {
        setErr("Something went wrong, please try again.");
      });
    
  };

  

  return (
    <section>
      <div>
        <SingleArticleCard
          article={article}
          votes={votes}
          disableUpVote={disableUpVote}
          disableDownVote={disableDownVote}
          handleVoteClick={handleVoteClick}
        />
      </div>
      <ExpandableCommentsForm loggedInUser={loggedInUser}>
      <div>
        <p className="error">{err ? `${err}` : null}</p>
        <form name={loggedInUser.username} onSubmit={handleSubmitComment}>
          <label htmlFor="comment-form">
            Add a comment:
            <textarea
              onChange={handleNewComment}
              id="comment-form"
              name="comment-form"
              rows="6"
              cols="50"
              value={newComment}
            ></textarea>
          </label>
          <input type="submit" value="Post!" />
        </form>
      </div>
      </ExpandableCommentsForm>
      
      <ExpandableComments comment_count={comments.length}>
        <div className="comments-parent-grid">
          {comments.map((comment) => {
            return (
              <AllCommentsByArticleId
                comment={comment}
                key={comment.comment_id}
              />
            );
          })}
        </div>
      </ExpandableComments>
    </section>
  );
};

export default SingleArticle;
