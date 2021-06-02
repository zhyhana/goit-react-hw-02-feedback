import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  options = Object.keys(options);

  return (
    <>
      <ul className={styles.list}>
        {options.map((el, i) => (
          <li key={i} className={styles.item}>
            <button
              className={styles.button}
              type="button"
              onClick={onLeaveFeedback}
            >
              {`${el[0].toUpperCase()}${el.slice(1)}`}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
