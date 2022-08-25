import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTopics } from "./api";

const Queries = ({setSortBy, setOrderBy}) => {
  const navigate = useNavigate();

  const [allTopics, setTopics] = useState([]);
  

  useEffect(() => {
    getTopics().then(({ allTopics }) => {
      const topics = allTopics.map((topic) => {
        return topic.slug;
      });
      setTopics(topics);
    });
  }, []);

  const handleCategory = (event) => {
    const category = event.target.value;
    if (category === "") {      
      navigate("/");
    } else {
      navigate(`/articles/${category}`);
    }
  };

  return (
    <div className="parent-grid">
      <label htmlFor="categories">Categories:</label>
      <select name="categories" onChange={handleCategory}>
        <option key="all" value="">
          All
        </option>
        {allTopics.map((topic) => {
          return (
            <option key={topic} value={topic}>
              {topic[0].toUpperCase() + topic.substring(1)}
            </option>
          );
        })}
      </select>
      <label htmlFor="sort_by">Sort By:</label>
      <select name="sort_by" onChange={(e) => {setSortBy(e.target.value)}}>
        
        <option value="created_at">Date</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="topic">Topic</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>
      <label htmlFor="order_by">Order By:</label>
      <select name="order_by" onChange={(e) => {setOrderBy(e.target.value)}}>
        
        <option value="desc">DESC</option>
        <option value="asc">ASC</option>
      </select>
    </div>
  );
};

export default Queries;
