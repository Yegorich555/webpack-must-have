import styles from "./listResults.module.scss";

interface MyListResults {
  id: number;
  title: string;
}

interface MyProps {
  elements: MyListResults[];
}

const ListResults = (props: MyProps): JSX.Element => (
  <div className={styles.list_results}>
    <ul>
      {props.elements.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  </div>
);

export default ListResults;
