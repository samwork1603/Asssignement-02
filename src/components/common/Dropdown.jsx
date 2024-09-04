import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const Dropdown = ({ options, onChange, value, name, label, ...rest }) => {
  return (
    <Autocomplete
      options={options}
      value={value}
      
      name={name}
      onChange={onChange}
      renderInput={(params) => (
        <TextField {...params} {...rest} label={label} variant="outlined" />
      )}
      sx={{ width: 400, m: 0.5 }}
    />
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired, // Expecting a name prop
  label: PropTypes.string,
};

export default Dropdown;
