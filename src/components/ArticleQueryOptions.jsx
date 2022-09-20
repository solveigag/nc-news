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
    <div className="queries-container">
      <li className="dropdown">
      <option className="dropbtn" href="void(0)" htmlFor="categories">Categories</option>
      <div className="dropdown-content" name="categories" onClick={handleCategory}>
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
      </div>
      </li>
      <li className="dropdown">
      <option className="dropbtn" href="void(0)" htmlFor="sort_by">Sort By</option>
      <div className="dropdown-content" name="sort_by" onClick={(e) => {setSortBy(e.target.value)}}>
        
        <option value="created_at">Date</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="topic">Topic</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </div>
      </li>
     <li className="dropdown">
     <option className="dropbtn" href="void(0)" htmlFor="order_by">Order By</option>
      <div className="dropdown-content" name="order_by" onClick={(e) => {setOrderBy(e.target.value)}}>
        
        <option value="desc">DESC</option>
        <option value="asc">ASC</option>
      </div>
     </li>
    </div>
  );
};

export default Queries;
