import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li className={styles.list}>Good: {good}</li>
        <li className={styles.list}>Neutral: {neutral}</li>
        <li className={styles.list}>Bad: {bad}</li>
        <br />
        <li className={styles.list}>Total: {total}</li>
        <br />
        <li className={styles.list}>
          Positive feedback:&nbsp;
          {good > 0 ? positivePercentage : ' 0'}%
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
