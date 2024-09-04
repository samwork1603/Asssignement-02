import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PROJTextfield from "../components/common/PROJTextfield";
import Dropdown from "../components/common/Dropdown";
import Calender from "../components/common/Calender";
import SubmitButton from "../components/common/SubmitButton";
import PropTypes from "prop-types";

const BasicDetails = ({
  formValues,
  handleFormChange,
  handleHome,
  handleDateChange,
  onSubmit,
}) => {
  const departmentArray = ["BYT", "Envision", "Caresmartz"];
  const worklocationArray = [
    "Chandigarh IT Park",
    "Mohali I",
    "Mohali II",
    "Gurgaon",
  ];
  const reporManagerArray = ["Nidhi", "Himmat"];
  const funcManagerArray = ["Rahul", "Sahil"];
  const workmodeArray = ["WFH", "WFO", "HYBRID"];
  return (
    <Box>
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          width={900}
          sx={{ textAlign: "left" }}
        >
          Personal Details
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          m={2}
        >
          <Grid item md={4}>
            <PROJTextfield
              value={formValues.fullName}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"fullName","b")}
              name="fullName"
              label="Full Name"
              required
            />
          </Grid>
          <Grid item md={4}>
            <PROJTextfield
              value={formValues.employeeCode}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"employeeCode","b")}
              name="employeeCode"
              label="Employee Code"
              required
            />
          </Grid>
          <Grid item md={4}>
            <Dropdown
              value={formValues.department}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"department","a")}
              name="department"
              label="Department"
              options={departmentArray}
            />
          </Grid>
          <Grid item md={4}>
            <PROJTextfield
              value={formValues.designation}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"designation","b")}
              name="designation"
              label="Designation"
              required
            />
          </Grid>
          <Grid item md={4}>
            <PROJTextfield
              value={formValues.email}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"email","b")}
              name="email"
              label="Email"
              required
            />
          </Grid>
          <Grid item md={4}>
            <PROJTextfield
              value={formValues.phoneNo}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"phoneNo","b")}
              name="phoneNo"
              label="Phone No."
              required
            />
          </Grid>
          <Grid item md={4}>
            <Dropdown
              value={formValues.funcManager}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"funcManager","a")}
              name="funcManager"
              label="Functional Manager"
              options={funcManagerArray}
            />
          </Grid>
          <Grid item md={4}>
            <Dropdown
              value={formValues.reporManager}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"reporManager","a")}
              name="reporManager"
              label="Reporting Manager"
              options={reporManagerArray}
            />
          </Grid>
          <Grid item md={4}>
            <Calender
              value={formValues.dateOfBirth}
              onChange={handleDateChange}
              name="dateOfBirth"
              label="Date of Birth"
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          width={900}
          sx={{ textAlign: "left" }}
        >
          Professional Details
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          m={2}
        >
          <Grid item xs={4}>
            <Calender
              value={formValues.careerStartDate}
              onChange={handleDateChange}
              name="careerStartDate"
              label="Career Start Date"
            />
          </Grid>
          <Grid item xs={4}>
            <Calender
              value={formValues.joiningDate}
              onChange={handleDateChange}
              name="joiningDate"
              label="Joining Date in Netsmartz"
            />
          </Grid>
          <Grid item xs={4}>
            <PROJTextfield
              value={formValues.totalExp}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"totalExp","b")}
              name="totalExp"
              label="Total Exp as on Date"
            />
          </Grid>
          <Grid item xs={4}>
            <Dropdown
              value={formValues.workLocation}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"workLocation","a")}
              name="workLocation"
              label="Work Location"
              options={worklocationArray}
            />
          </Grid>
          <Grid item xs={4}>
            <Dropdown
              value={formValues.workMode}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"workMode","a")}
              name="workMode"
              label="Work Mode"
              options={workmodeArray}
            />
          </Grid>
          <Grid item xs={4}>
            <PROJTextfield
              value={formValues.linkedinUrl}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"jiraName","b")}
              name="linkedinUrl"
              label="Linkedin URL"
            />
          </Grid>
        </Grid>
      </Box>
      <SubmitButton handleHome={handleHome} handleSubmit={onSubmit} />
    </Box>
  );
};

BasicDetails.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleFormChange: PropTypes.func.isRequired,
  handleHome: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default BasicDetails;
