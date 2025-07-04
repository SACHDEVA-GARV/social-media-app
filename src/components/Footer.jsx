import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link px-2 text-body-secondary">
              Create Post
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © 2025 Social Media App
        </p>
      </footer>
    </div>
  );
};

export default Footer;