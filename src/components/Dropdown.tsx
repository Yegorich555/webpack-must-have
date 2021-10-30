import Navlink from "./Navlink";

interface Props {
  className?: string;
  link?: string;
  text: string;
}

export default function Dropdown({ className = "", link = "#", text }: Props): JSX.Element {
  return (
    <li className={"" || className}>
      <a href={link}>
        {text} <span>&#11206;</span>
      </a>
      <ul className="dropdown">
        <Navlink text="PC" link="#" className={""} />
        <Navlink text="Console" link="#" className={""} />
        <Navlink text="Mobile" link="#" className={""} />
      </ul>
    </li>
  );
}
