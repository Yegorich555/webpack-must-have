import { FaStar } from "react-icons/fa";
import styles from "./starRating.module.scss";

interface Props {
  rating: number;
}

const StarRating = (props: Props): JSX.Element => (
  <div className={styles.stars}>
    {Array.from(Array(props.rating).keys()).map((e) => (
      <span>
        <FaStar key={e} />
      </span>
    ))}
  </div>
);

export default StarRating;
