import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import links from "@/components/header/links";

const NavBar: FC = () => (
  <nav className="navbar">
    <NavLink to={links.home} className="navbar__links">
      Home
    </NavLink>
    <NavLink to={links.products} className="navbar__links">
      Products
    </NavLink>
    <NavLink to={links.about} className="navbar__links">
      About
    </NavLink>
    <NavLink to={links.signIn} className="navbar__links">
      SignIn
    </NavLink>
    <NavLink to={links.signUp} className="navbar__links">
      SignUp
    </NavLink>
  </nav>
);

export default NavBar;
