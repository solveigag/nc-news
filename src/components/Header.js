import { Link } from "react-router-dom"



const Header = () => {
    return <div>
       <nav>
        <ul className="nav_bar-container">
            <li><Link to="/sign-in" className="navbar__link">Sign In</Link></li>
            <li><Link to="/" className="navbar__link">Home</Link></li>
        </ul>
       </nav>
       <h1>NC News App</h1>        
    </div>
}

export default Header