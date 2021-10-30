import Navbar from "./Navbar";

interface Props {
  siteName: string;
  link?: string;
}

export default function Header({ siteName, link }: Props): JSX.Element {
  return (
    <header className="navbar">
      <div>
        <a href={link || "#"} className="logo">
          {siteName}
        </a>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
}
