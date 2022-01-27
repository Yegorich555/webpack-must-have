import { FC } from "react";
import "./pages.css";

interface HomeProps {
  title: string;
}

const Home: FC<HomeProps> = ({ title }) => <div className="home">{title}</div>;

export default Home;
