import logoImage from "../assets/Image20250923162739.png";

function Logo({ isSidebarOpen }) {
  return (
    <div
      className="logo-image"
      style={{
        transition: "transform 0.3s ease",
        transform: isSidebarOpen ? "translateX(250px)" : "translateX(0)",
      }}
    >
      <img src={logoImage} alt="Logo" />
    </div>
  );
}

export default Logo;
