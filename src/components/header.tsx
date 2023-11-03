import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header className="header__box">
      <nav className="nav__box">
        <h1 className="title">Best Games Market</h1>
        <div>
          <ul className="ul__box">
            <li className="li__box">
              <Link to="/">Home</Link>
            </li>
            <li className="li__box">
              <Link to="/products">Products</Link>
            </li>
            <li className="li__box">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
