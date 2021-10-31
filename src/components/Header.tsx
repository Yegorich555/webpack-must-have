import Dropdown from "./Dropdown";
import { NavLink, Link } from "react-router-dom";

interface Props {
  siteName: string;
  link?: string;
}

export default function Header({ siteName, link }: Props): JSX.Element {
  return (
    <header className="navbar">
      <div>
        <Link to={link || "#"} className="logo">
          {siteName}
        </Link>
      </div>
      <div>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/" exact={true}>
                Home
              </NavLink>
            </li>
            <Dropdown text="Products" link="/products" />
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/sign-in">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
