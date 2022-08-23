import { useState, useEffect } from "react";
import AllArticlesCard from "./AllArticlesCard";
import { getAllArticles } from "./api";
import Queries from "./ArticleQueryOptions";

const AllArticles = () => {
  const [articles, setAllArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then(({ allArticles }) => {
      setAllArticles(allArticles);
    });
  }, []);

  return (
    <div>
      <nav>
        <Queries />
      </nav>
      <ul className="parent-grid">
        {articles.map((article) => {
          return (
            <article key={article.article_id}>
              <AllArticlesCard article={article} />
            </article>
          );
        })}
      </ul>
    </div>
  );
};

export default AllArticles;
