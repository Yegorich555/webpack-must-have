import Navlink from "./Navlink";
import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
  link?: string;
  text: string;
}

export default function Dropdown({ className = "", link = "#", text }: Props): JSX.Element {
  return (
    <li className={"" || className}>
      <NavLink to={link}>
        {text} <span>&#11206;</span>
      </NavLink>
      <ul className="dropdown">
        <Navlink text="PC" link="#" className={""} />
        <Navlink text="Console" link="#" className={""} />
        <Navlink text="Mobile" link="#" className={""} />
      </ul>
    </li>
  );
}
