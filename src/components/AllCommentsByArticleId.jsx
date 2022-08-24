const AllCommentsByArticleId = ({comment}) => {
    let date = comment.created_at.substring(0,10)
    return <section className="comments-grid-container">
        <p className="comments-grid-author">User: {comment.author}</p>
        <p className="comments-grid-date">Posted: {date}</p>
        <p className="comments-grid-votes">Votes: {comment.votes}</p>
        <p className="comments-grid-body">{comment.body}</p>
    </section>
}

export default AllCommentsByArticleId;