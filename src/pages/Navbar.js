import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="default">
      <nav className="nav">
        <Link to="/" className="site-title">
          Pokemon Index
        </Link>
        <Search />
        <ul>
          <CustomLink to="/">Home</CustomLink>
          {/* <CustomLink to="/FormTeam">Form Team</CustomLink> */}
          {/* <CustomLink to="/GuessingGame">Guessing Game</CustomLink> */}
          <CustomLink to="/Login">Login</CustomLink>
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
