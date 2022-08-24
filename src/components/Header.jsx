import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/User"



const Header = () => {
    const {loggedInUser} = useContext(UserContext);
    
    return <div>
       <nav>
        <ul className="nav_bar-container">
            <li><Link to="/sign-in" className="navbar__link">Sign In</Link></li>
            <li><Link to="/" className="navbar__link">Home</Link></li>       
        </ul>
        <div>
            <p >User: {loggedInUser.username}</p>
            <img src={loggedInUser.avatar_url} alt={loggedInUser.username}/>
        </div>
       </nav>
       <h1>NC News App</h1>        
    </div>
}

export default Header