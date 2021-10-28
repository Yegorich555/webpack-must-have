import { Link } from "react-router-dom";
import "./footer.modules.scss";

const Footer = (): JSX.Element => (
  <footer>
    <span className="Textlogo">Incredible convenient</span>
    <Link className="Linkfooter" to={{ pathname: "https://www.rockstargames.com/" }} target="_blank">
      <img src="./rockstar_games_logo.png" alt="description" className="Fotterlogo" />
    </Link>
  </footer>
);

export default Footer;
