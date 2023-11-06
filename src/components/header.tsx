import { Link } from "react-router-dom";
import style from "./header.module.scss";
import routes from "../routeConfig";

export default function Header() {
  return (
    <header className={style.headerBox}>
      <nav className={style.navBox}>
        <h1>Best Games Market</h1>
        <div>
          <ul className={style.ulBox}>
            <li className={style.liBox}>
              <Link to={routes.home}>Home</Link>
            </li>
            <li className={style.liBox}>
              <Link to={routes.products}>Products</Link>
            </li>
            <li className={style.liBox}>
              <Link to={routes.about}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
