import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import ExpndableUserIcon from "./ExpandableUserIcon";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="test">
      <nav>
        <ul className="nav_bar-container">
            <ExpndableUserIcon loggedInUser={loggedInUser}>
            <li id="no-hover" className="navbar__link ">
            <img id="signed-in-use-icon"
              src={loggedInUser.avatar_url}
              alt={loggedInUser.username}
              title={loggedInUser.username}
              className="navbar__link signed-in-user"
            />
          </li>
            </ExpndableUserIcon>
          
          <li>
            <Link to="/sign-in" className="navbar__link">
              {loggedInUser.username ? "Sign Out" : "Sign In"}
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <h1>NORTH CODERS NEWS</h1>
    </div>
  );
};

export default Header;
