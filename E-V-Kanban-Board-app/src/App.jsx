import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/Home-page";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCreateBarOpen, setIsCreateBarOpen] = useState(false);

  const toggleCreateBar = () => {
    setIsCreateBarOpen((prev) => !prev);
  };
  return (
    <Router>
      <NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Footer />
      <Routes>
        <Route path="/" element={<HomePage isSidebarOpen={isSidebarOpen} />} />

        <Route
          path="/kanban"
          element={
            <MainPage
              isSidebarOpen={isSidebarOpen}
              isCreateBarOpen={isCreateBarOpen}
              toggleCreateBar={toggleCreateBar}
            />
          }
        />

        <Route
          path="/about"
          element={<AboutUs isSidebarOpen={isSidebarOpen} />}
        />

        <Route path="/*" element={<NotFound isSidebarOpen={isSidebarOpen} />} />
      </Routes>
    </Router>
  );
}

export default App;
