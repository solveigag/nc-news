import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import ExpndableUserIcon from "./ExpandableUserIcon";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <nav>
        <ul className="nav_bar-container">
            <ExpndableUserIcon loggedInUser={loggedInUser}>
            <li className="navbar__link ">
            <img id="close"
              src={loggedInUser.avatar_url}
              alt={loggedInUser.username}
              title={loggedInUser.username}
              className="signed-in-user"
            />
          </li>
            </ExpndableUserIcon>
          
          <li>
            <Link to="/sign-in" className="navbar__link">
              {loggedInUser.username ? "Sing Out" : "Sign In"}
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <h1>NC News App</h1>
    </div>
  );
};

export default Header;
