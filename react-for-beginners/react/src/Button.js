import PropTypes from 'prop-types';
// import styles from './Button.module.css';
import styles from './Button.css';

function Button({text}) {
    // return <button className={styles.title}>{text}hi</button>;
    return <button className='btn'>hi</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;