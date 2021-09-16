import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="brand" to="/">
        <h1>MovieInfo</h1>
      </Link>
      <nav>
        <ul>
          <li className="about">
            <Link to="/about">About</Link>
          </li>
          <li className="signIn">
            <Link to="/login" className="signIn">
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
