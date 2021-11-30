// Styles
import { DivStyler } from './Dropdown.styles';

const Dropdown = ({ genreList, selectedValue, changed }) => {
  const dropdownChanged = (e) => {
    changed(e.target.value);
  };

  return (
    <DivStyler>
      <select value={selectedValue} onChange={dropdownChanged}>
        <option hidden>Select Genre</option>
        {genreList.map((item, i) => (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </DivStyler>
  );
};

export default Dropdown;
