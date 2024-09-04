// import { Box, Stack } from "@mui/material";
// import PROJTextfield from "../components/common/PROJTextfield";
// import Dropdown from "../components/common/Dropdown";
// import Calender from "../components/common/Calender";
// import { useForm } from "react-hook-form";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import Button from "@mui/material/Button";

import { Autocomplete, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const ProjectDetails = () => {
  // const TempOptions = ["Yes", "No"];
  // const { control, handleSubmit } = useForm();
  // const onSubmit = (data, e) => {
  //   console.log("Data:", data, e);
  // };
  const arry = ["yes", "no"];

  return (
    // <Box component="form" onSubmit={handleSubmit(onSubmit)}>
    //   <Stack direction="row">
    //     <Dropdown
    //       control={control}
    //       name="shadowTo"
    //       label="Shadow To"
    //       options={TempOptions}
    //     />
    //     <Calender
    //       control={control}
    //       name="joiningDate"
    //       label="Joining Date in Netsmartz"
    //     />
    //     <Calender
    //       control={control}
    //       name="joiningDate"
    //       label="Joining Date in Netsmartz"
    //     />
    //     <Dropdown
    //       control={control}
    //       name="shadowTo"
    //       label="Shadow To"
    //       options={TempOptions}
    //     />
    //     <Dropdown
    //       control={control}
    //       name="shadowTo"
    //       label="Shadow To"
    //       options={TempOptions}
    //     />
    //     <PROJTextfield
    //       control={control}
    //       name="phoneNo"
    //       label="Phone No."
    //       required
    //     />
    //     <Button>
    //       <RemoveIcon />
    //     </Button>
    //     <Button>
    //       <AddIcon />
    //     </Button>
    //   </Stack>
    // </Box>

    <Box>
      <Autocomplete
        disablePortal
        name="movie"
        options={arry}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        onChange={(event, newValue) => {
          
          console.log("Event:", event);
          console.log("New Value:", newValue);
        }}
      />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(event, newValue) => {
          
          console.log("Event:", event.target.value);
          console.log("New Value:", newValue);
        }} />
    </Box>
  );
};

export default ProjectDetails;
