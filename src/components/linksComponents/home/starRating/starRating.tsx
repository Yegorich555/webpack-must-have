import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import styles from "./starRating.module.scss";

interface Props {
  rating: number;
}

const StarRating = (props: Props): JSX.Element => (
  <div className={styles.stars}>
    {Array.from(Array(props.rating).keys()).map(() => (
      <span key={uuidv4()}>
        <FaStar />
      </span>
    ))}
  </div>
);

export default StarRating;
