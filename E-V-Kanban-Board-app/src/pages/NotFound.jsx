import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function NotFound({ isSidebarOpen }) {
  return (
    <div className="Not-found">
      <h1 id="error-msg">This page was not found please return!</h1>
      <ol className="return-to-home">
        <li>
          <Link to="/">Home Page</Link>
        </li>
      </ol>
      <Sidebar isOpen={isSidebarOpen} />
    </div>
  );
}

export default NotFound;
