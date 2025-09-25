import Sidebar from "../components/Sidebar";

function NotFound({ isSidebarOpen }) {
  return (
    <div className="Not-found">
      <h1 id="error-msg">This page was not found please return!</h1>
      <Sidebar isOpen={isSidebarOpen} />
    </div>
  );
}

export default NotFound;
