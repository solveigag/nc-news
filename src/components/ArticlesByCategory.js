import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles } from "./api";
import Queries from "./ArticleQueryOptions";
import AllArticlesCard from "./AllArticlesCard";

const ArticlesByCategory =() => {
    const { topic_slug } = useParams();
    const [articles, setArticles] = useState([]);
    
        useEffect(()=> {
            getAllArticles(topic_slug).then(({allArticles}) => {
                setArticles(allArticles)
            })
    }, [topic_slug])

    return <div>
        <nav>
            <Queries />
        </nav>
        <ul className="parent-grid">
            {articles.map(article => {
              return <article key={article.article_id}>< AllArticlesCard article={article}/></article>
            })}
        </ul>
    </div>
}

export default ArticlesByCategory