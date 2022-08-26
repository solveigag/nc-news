import { Link } from "react-router-dom";

const ErrorsPage = ({status = 404, txt = "Not Found", setError}) => {

    return <div>
        <p>{status} {txt}</p>
        <Link to="/" onClick={()=> setError(null)}>Go back to Home page</Link>
        </div>
}

export default ErrorsPage;