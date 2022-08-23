import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles } from "./api";
import Queries from "./ArticleQueryOptions";
import AllArticlesCard from "./AllArticlesCard";

const ArticlesByCategory =() => {
    const { topic } = useParams();
    const [articles, setArticles] = useState([]);
    
        useEffect(()=> {
            getAllArticles(topic).then(({allArticles}) => {
                setArticles(allArticles)
            })
    }, [topic])

    return <div>
        <nav>
            <Queries />
        </nav>
        <section className="parent-grid">
            {articles.map(article => {
              return < AllArticlesCard article={article} key={article.article_id}/>
            })}
        </section>
    </div>
}

export default ArticlesByCategory