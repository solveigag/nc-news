
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";
import AllCommentsByArticleId from "./AllCommentsByArticleId";
import {
  deleteComment,
  getArticleById,
  getCommnetsByArticleId,
  patchVotes,
  postNewComment,
} from "./api";
import ErrorsPage from "./ErrorsPage";
import ExpandableComments from "./ExpandableComments";
import ExpandCommentsForm from "./ExpandCommentsForm";
import ExpndDeleteBtn from "./ExpndDeleteBtn";
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
      setErr(null)
      const articleCopy = { ...article };
      articleCopy.created_at = article.created_at.substring(0, 10);
      setArticle(articleCopy);
      setVotes(articleCopy.votes);
    }).catch((err) => {
      setErr(err)
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
        setErr(null);
        setNewComment("");
        getCommnetsByArticleId(article_id).then(({ allComments }) =>
        setComments(allComments)
        );       
      })
      .catch((err) => {
        setErr("Something went wrong, please try again.");
      });
    
  };

  const handleCommentDeletion = (comment_id) => {

    deleteComment(comment_id).then((res) => {   
      setErr(null)
      getCommnetsByArticleId(article_id).then(({ allComments }) =>
          setComments(allComments)          
        );
    }).catch((err) => {
      setErr("Something went wrong, please try again.");
    })

  }


  if (err && err.status === 404) return <ErrorsPage status={err.status} txt={err.txt} set={setErr}/>

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
      <ExpandCommentsForm loggedInUser={loggedInUser}>
      <div>
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
              minLength="5"
              required
            ></textarea>
          </label>
          <input type="submit" value="Post!" />
        </form>
      </div>
      </ExpandCommentsForm>
      <p className="error">{err ? `${err}` : null}</p>
      <ExpandableComments comment_count={comments.length}>
        <div className="comments-parent-grid">
          {comments.map((comment) => {
            return (<div key={comment.comment_id}>
              <AllCommentsByArticleId
                comment={comment}
                
                loggedInUser={loggedInUser}
              />              
              <ExpndDeleteBtn loggedInUser={loggedInUser} author={comment.author} >
              <button onClick={() => {handleCommentDeletion(comment.comment_id)}}>Delete</button>
            </ExpndDeleteBtn>
        </div>
            );
          })}
        </div>
      </ExpandableComments>
    </section>
  );
};

export default SingleArticle;
