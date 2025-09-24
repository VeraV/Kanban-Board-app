import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import KanbanList from "./components/List";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="Home-page">
              <NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
              <Sidebar isOpen={isSidebarOpen} />
              <Logo isSidebarOpen={isSidebarOpen} />
              <Footer />
            </div>
          }
        />

        <Route
          path="/kanban"
          element={
            <div className="Main-page">
              <NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
              <Sidebar isOpen={isSidebarOpen} />
              <KanbanList isSidebarOpen={isSidebarOpen} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
