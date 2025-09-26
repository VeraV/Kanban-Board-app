import Sidebar from "../components/Sidebar";
import veraImg from "../assets/Vera.jpg";
import emidioImg from "../assets/Emidio.jpeg";

function AboutUs({ isSidebarOpen }) {
  return (
    <div className="about-us-page">
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className="about-us-container"
        style={{
          transition: "transform 0.3s ease",
          transform: isSidebarOpen ? "translateX(250px)" : "translateX(0)",
        }}
      >
        <p>
          <strong>Kanban Single Page Application</strong> is a lightweight and
          intuitive tool designed to help users organize tasks, track progress,
          and improve productivity.
        </p>
        <p>
          Inspired by the Kanban methodology, it provides a simple and visual
          way to manage workflows in real time.
        </p>
        <a href="https://github.com/emidiop-05/Emidio-Vera-Kanban-Board-app">
          Project Code here
        </a>
        <h1>Our Team</h1>
        <section className="team-section">
          <article>
            <h2>Emidio Pedro</h2>
            <img src={emidioImg} alt="Emidio Pedro" />
            <a href="https://github.com/emidiop-05">GitHub profile</a>
          </article>

          <article>
            <h2>Vera Fileyeva</h2>
            <img src={veraImg} alt="Vera Fileyeva" />
            <a href="https://github.com/VeraV">GitHub profile</a>
          </article>
        </section>
        <p>Don't forget to like and subscribe.</p>
      </div>
    </div>
  );
}

export default AboutUs;
