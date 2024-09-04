import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const SubmitButton = ({ handleHome, handleSubmit }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "24px",
      }}
    >
      <Stack spacing={2} direction="row">
        <Button variant="text" onClick={handleHome}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="contained">Save & Continue</Button>
      </Stack>
    </Box>
  );
};
SubmitButton.propTypes = {
  handleHome: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default SubmitButton;
