import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer__box">
      <ul className="games__box">
        <li>
          <Link to="https://www.sony.com/en/" target="_blank">
            <div className="img__box">
              <img src="https://cdn.logojoy.com/wp-content/uploads/20200512150824/sega-gaming-logo.png" alt="...sony" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="https://www.xbox.com/en-US/" target="_blank">
            <div className="img__box">
              <img
                src="https://play-lh.googleusercontent.com/M6mi-W7n__Fv9Y8ml4-2IoTzJJ8m6zKy2X7SsMdiPHUKinTdQ8ILgjbF-zB7REAtRxY=w240-h480"
                alt="...X-box"
              />
            </div>
          </Link>
        </li>
        <li>
          <Link to="https://www.sony.com/en/" target="_blank">
            <div className="img__box">
              <img
                src="https://media.contentapi.ea.com/content/dam/eacom/en-us/common/october-ea-ring.png"
                alt="...EA"
              />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
