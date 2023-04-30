import PropTypes from 'prop-types';
import { Notific } from './Notification.styled';
const Notification = ({ message }) => {
  return <Notific>{message}</Notific>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
