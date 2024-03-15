import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";
import "./styles/SearchBox.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="searchContainer">
      <h3>Find contacts by name</h3>
      <input
        type="text"
        placeholder="Search Contacts"
        value={value}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
};

export default SearchBox;
