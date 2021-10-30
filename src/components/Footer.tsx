interface Props {
  siteName: string;
}

export default function Footer({ siteName }: Props): JSX.Element {
  return (
    <footer>
      <p>&copy; 2021 {siteName}</p>
    </footer>
  );
}
