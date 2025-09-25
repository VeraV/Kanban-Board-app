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

  return (
    <Router>
      <NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Footer />
      <Routes>
        <Route path="/" element={<HomePage isSidebarOpen={isSidebarOpen} />} />

        <Route
          path="/kanban"
          element={<MainPage isSidebarOpen={isSidebarOpen} />}
        />

        <Route
          path="/about"
          element={
            <div className="About-us">
              <Sidebar isOpen={isSidebarOpen} />
              <AboutUs />
            </div>
          }
        />

        <Route path="/*" element={<NotFound isSidebarOpen={isSidebarOpen} />} />
      </Routes>
    </Router>
  );
}

export default App;
