import { FC } from "react";
import "./pages.css";

interface AboutProps {
  title: string;
}

const About: FC<AboutProps> = ({ title }) => <div className="about">{title}</div>;

export default About;
