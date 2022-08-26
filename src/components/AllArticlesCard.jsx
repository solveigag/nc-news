import { Link } from "react-router-dom";


const AllArticlesCard = ({article}) => {
 /* Try and install moment to work out time elpsed since publishing */
 let date = article.created_at.substring(0,10)

    return <section className="grid-container">
            <h3 className='grid-title '>{article.title}</h3>
            <p className='grid-topic'>Topic: {article.topic}</p>
            <p className='grid-author'>Author: {article.author}</p>
            <p className='grid-votes'>Votes: {article.votes}</p>
            <p className='grid-comment'>Comments: {article.comment_count}</p>
            <p className='grid-date'>Published: {date}</p>
            <Link to={`/article/${article.article_id}`} className="main-colour-background navbar__link grid-link">Visit</Link>
        </section>
     
}

export default AllArticlesCard;