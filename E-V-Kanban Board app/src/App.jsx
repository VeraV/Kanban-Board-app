import "./App.css";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Logo from "./components/Logo";
function App() {
  return (
    <div className="Home-page">
      <NavBar />
      <Sidebar />
      <Logo />
      <Footer />
    </div>
  );
}

export default App;
