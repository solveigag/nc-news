import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./api";

const SingleArticle = () => {

    const { article_id } = useParams();
    const [article, setArticle] = useState([]);

    useEffect(() => {
        getArticleById(article_id).then(({article}) => {
            const articleCopy = {...article}
            articleCopy.created_at = article.created_at.substring(0,10)            
            setArticle((articleCopy))
        })
        
    }, [article_id])

    return <section>
        <h2>{article.title}</h2>
        <ul className="single-article-container">
            <p>Author: {article.author}</p>
            <p>Published: {article.created_at}</p>
            <p>Topic: {article.topic}</p>
            <p>Votes: {article.votes}</p>
            <button>👍</button>
        </ul>       
        <p>{article.body}</p>
        <p>Comments: {article.comment_count}</p>
    </section>
}

export default SingleArticle