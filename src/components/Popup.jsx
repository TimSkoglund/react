import { Link } from 'react-router-dom';

const Popup = ({ onClose }) => {
  return (
    <div className="popup" onClick={(e) => e.stopPropagation()}>
      <ul>
        <li>
          <Link to="/contact" onClick={onClose}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/" onClick={onClose}>
            Homepage
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Popup;
