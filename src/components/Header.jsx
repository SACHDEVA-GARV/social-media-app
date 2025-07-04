import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "#22223b",
        boxShadow: "0 2px 8px rgba(34,34,59,0.08)",
        borderBottom: "2px solid #4a4e69",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: "#f2e9e4", letterSpacing: "1px" }}
        >
          Social Media App
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link${
                  location.pathname === "/" ? " active" : ""
                }`}
                to="/"
                style={{
                  color: location.pathname === "/" ? "#9a8c98" : "#f2e9e4",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${location.pathname === "/create" ? " active" : ""}`}
                to="/create"
                style={{
                  color: location.pathname === "/create" ? "#9a8c98" : "#f2e9e4",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                Create Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;