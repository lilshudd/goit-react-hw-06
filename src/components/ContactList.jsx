import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "../redux/contactsSlice";
import Contact from "./Contact";
import "./styles/ContactList.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="contact-list">
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
