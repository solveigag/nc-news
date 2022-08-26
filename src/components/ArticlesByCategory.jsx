import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles } from "./api";
import Queries from "./ArticleQueryOptions";
import AllArticlesCard from "./AllArticlesCard";

const ArticlesByCategory = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");

  useEffect(() => {
    getAllArticles(topic, sortBy, orderBy).then(({ allArticles }) => {
      setArticles(allArticles);
    });
  }, [topic, sortBy, orderBy]);


  return (
    <div>
      <nav>
        <Queries setSortBy={setSortBy} setOrderBy={setOrderBy} />
      </nav>
      <section className="parent-grid">
        {articles.map((article) => {
          return <AllArticlesCard article={article} key={article.article_id} />;
        })}
      </section>
    </div>
  );
};

export default ArticlesByCategory;
