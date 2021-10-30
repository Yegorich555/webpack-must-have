import Dropdown from "./Dropdown";
import Navlink from "./Navlink";

export default function Navbar(): JSX.Element {
  return (
    <nav className="navigation">
      <ul>
        <Navlink text="Home" className="active" link="#" />
        <Dropdown text="Products" />
        <Navlink text="About" />
        <Navlink text="Sign In" />
        <Navlink text="Sign Up" />
      </ul>
    </nav>
  );
}
