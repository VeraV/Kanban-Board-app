import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="Not-found">
      <h1 id="error-msg">This page was not found. Please return!</h1>
      <ol className="return-to-home">
        <li>
          <Link to="/">Home Page</Link>
        </li>
      </ol>
    </div>
  );
}

export default NotFound;
