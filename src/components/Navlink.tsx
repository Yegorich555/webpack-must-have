interface Props {
  className?: string;
  link?: string;
  text: string;
}

export default function ({ className = "", text, link = "#" }: Props): JSX.Element {
  return (
    <li className={className || ""}>
      <a href={link}>{text}</a>
    </li>
  );
}
