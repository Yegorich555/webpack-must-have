import { FC } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/header/navbar";
import "./header.css";

const Header: FC = () => (
  <div className="header">
    <Link to="/" className="header__title">
      Magic Game Store
    </Link>
    <NavBar />
  </div>
);

export default Header;
