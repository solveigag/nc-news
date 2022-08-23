import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTopics } from "./api";

const Queries = () => {
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
    <div>
      <label htmlFor="categories">Categories:</label>
      <select name="ctegories" onChange={handleCategory}>
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
      <select>
        <option value="">Sort By:</option>
        <option value="created_at">Date</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="topic">Topic</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>

      <select>
        <option value="">Order By:</option>
        <option value="desc">DESC</option>
        <option value="asc">ASC</option>
      </select>
    </div>
  );
};

export default Queries;
