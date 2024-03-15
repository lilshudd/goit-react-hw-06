import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import "./styles/Contact.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="contact">
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button className="button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
