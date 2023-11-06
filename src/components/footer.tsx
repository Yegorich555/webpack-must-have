import { Link } from "react-router-dom";
import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footerBox}>
      <ul className={style.gamesBox}>
        <li>
          <Link to="https://www.sony.com/en/" target="_blank">
            <img src="https://cdn.logojoy.com/wp-content/uploads/20200512150824/sega-gaming-logo.png" alt="...sony" />
          </Link>
        </li>
        <li>
          <Link to="https://www.xbox.com/en-US/" target="_blank">
            <img
              src="https://play-lh.googleusercontent.com/M6mi-W7n__Fv9Y8ml4-2IoTzJJ8m6zKy2X7SsMdiPHUKinTdQ8ILgjbF-zB7REAtRxY=w240-h480"
              alt="...X-box"
            />
          </Link>
        </li>
        <li>
          <Link to="https://www.sony.com/en/" target="_blank">
            <img src="https://media.contentapi.ea.com/content/dam/eacom/en-us/common/october-ea-ring.png" alt="...EA" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
