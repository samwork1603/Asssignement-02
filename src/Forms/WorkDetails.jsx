import { Box, Stack } from "@mui/material";
import PROJTextfield from "../components/common/PROJTextfield";
import Dropdown from "../components/common/Dropdown";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import SubmitButton from "../components/common/SubmitButton";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const WorkDetails = ({
  formValues,
  handleFormChange,
  handleHome,
  onSubmit,
  onHandleCheckBox,
  addCompany,
  removeCompany,
  addTech,
  removeTech,
  handleCompany,
  handleTech,
  // dynaDropdown,
  // staticDropdown,
}) => {
  const TempOptions = ["Yes", "No"];

  

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Box>
      <Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          m={2}
        >
          <Grid item md={4}>
            <PROJTextfield
              name="jiraName"
              label="Jira Name"
              
              value={formValues.jiraName}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"jiraName","b")}
            />
          </Grid>
          <Grid item md={4}>
            <Dropdown
              name="clientJira"
              label="Client Jira"
              options={TempOptions}
              value={formValues.clientJira}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"clientJira","a")}
            />
          </Grid>
          <Grid item md={4}>
            <Dropdown
              name="internalJiraExamption"
              label="Internal Jira Examption"
              options={TempOptions}
              value={formValues.internalJiraExamption}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"internalJiraExamption","a")}
            />
          </Grid>
          <Grid item md={4}>
            <Dropdown
              name="projectMode"
              label="Project Mode"
              options={TempOptions}
              value={formValues.projectMode}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"projectMode","a")}
            />
          </Grid>
          <Grid item md={4}>
            <Dropdown
              name="shadowTo"
              label="Shadow To"
              options={TempOptions}
              value={formValues.shadowTo}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"shadowTo","a")}
            />
          </Grid>
          <Grid item md={4}>
            <Dropdown
              name="bytLead"
              label="BYT Lead "
              options={TempOptions}
              value={formValues.bytLead}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"bytLead","a")}
            />
          </Grid>
          <Grid item md={4}>
            <Dropdown
              name="trainingToBeAssigned"
              label="Training to be Assigned"
              options={TempOptions}
              value={formValues.trainingToBeAssigned}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"trainingToBeAssigned","a")}
            />
          </Grid>
          <Grid item md={4}>
            <Dropdown
              name="secondarySkillSetTraining"
              label="Secondary Skill Set Training"
              options={TempOptions}
              value={formValues.secondarySkillSetTraining}
              onChange={(e,newValue)=>handleFormChange(e,newValue,"secondarySkillSetTraining","a")}
            />
          </Grid>
          <Grid item md={4}>
            <PROJTextfield
              name="comments"
              label="Comments"
              
              onChange={(e,newValue)=>handleFormChange(e,newValue,"comments","b")}
            />
          </Grid>
        </Grid>
      </Box>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Typography
        variant="h6"
        gutterBottom
        width={900}
        sx={{ textAlign: "left" }}
      >
        Weeks
      </Typography>
      <Stack direction="row">
        {weekDays.map((name, index) => {
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  name={name}
                  checked={formValues.week[name]}
                  onChange={(e) => onHandleCheckBox(e)}
                />
              }
              label={name}
            />
          );
        })}
      </Stack>
      ;
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Typography
        variant="h6"
        gutterBottom
        width={900}
        sx={{ textAlign: "left" }}
      >
        Previous Company Details
      </Typography>
      {formValues.company.map((company, index) => (
        <Stack key={index} direction="row">
          <Dropdown
            name="companyName"
            label="Company Name"
            // value={company.companyName}
            options={TempOptions}
            onChange={(e, newValue) =>
              handleCompany(e, newValue, index, "companyName")
            }
            // onChange={(e, newValue) =>
            //   handleCompanyChange(newValue, "companyName", index)
            // }
          />
          <PROJTextfield
            name="duration"
            label="Duration in Months"
            // value={company.duration}
            onChange={(e) => handleCompany(e, null, index, "duration")}
            // onChange={(e, newValue) =>
            //   handleCompanyChange(newValue, "duration", index)
            // }
          />
          {formValues.company.length > 1 ? (
            <Button onClick={() => removeCompany(index)}>
              <RemoveIcon />
            </Button>
          ) : null}
          {/* <Button onClick={removeCompany}>
            <RemoveIcon />
          </Button> */}
          <Button onClick={addCompany}>
            <AddIcon />
          </Button>
        </Stack>
      ))}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Typography
        variant="h6"
        gutterBottom
        width={900}
        sx={{ textAlign: "left" }}
      >
        Technology Details
      </Typography>
      {formValues.tech.map((technology, index) => (
        <Stack key={index} direction="row">
          <Dropdown
            name="technologyName"
            label="Technology Name"
            options={TempOptions}
            onChange={(e,newValue) => handleTech(e,newValue, index,"technologyName")}
          />
          <Typography component="legend">Rating</Typography>
          <Rating name="rating" onChange={(e) => handleTech(e, null,index,"rating")} />
          <Dropdown
            name="level"
            label="Level"
            options={TempOptions}
            onChange={(e,newValue) => handleTech(e,newValue, index,"level")}
          />
          <FormControlLabel
            name="techCheckbox"
            control={<Checkbox />}
            label="Primary Skill"
            onChange={(e,newValue) => handleTech(e,newValue, index,"techCheckbox")}
          />
          {formValues.tech.length > 1 ? (
            <Button onClick={() => removeTech(index)}>
              <RemoveIcon />
            </Button>
          ) : null}

          <Button onClick={addTech}>
            <AddIcon />
          </Button>
        </Stack>
      ))}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <SubmitButton handleHome={handleHome} handleSubmit={onSubmit} />
    </Box>
  );
};

WorkDetails.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleFormChange: PropTypes.func.isRequired,
  handleHome: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  addCompany: PropTypes.func.isRequired,
  onHandleCheckBox: PropTypes.func.isRequired,
  removeCompany: PropTypes.func.isRequired,
  addTech: PropTypes.func.isRequired,
  removeTech: PropTypes.func.isRequired,
  handleCompany: PropTypes.func.isRequired,
  handleTech: PropTypes.func.isRequired,
};
export default WorkDetails;
// const handleCompanyChange = (newValue, type, index) => {
//   // const temp = e.target.value;
//   const newCompanies = [...previousCompanies];
//   newCompanies[index][type] = newValue;
//   setPreviousCompanies(newCompanies);
//   console.log("newValue", newValue, "type", type);
//   console.log("Company", newCompanies);
// };

// const handleTechnologyChange = (newValue, type, index) => {
//   // const temp = e.target.value;
//   const newTechnologies = [...technologyDetails];
//   newTechnologies[index][type] = newValue;
//   setTechnologyDetails(newTechnologies);
//   // console.log("newValue", newValue, "type", type);
//   console.log("Technology", newTechnologies);
// };

// const addCompany = () => {
//   setPreviousCompanies([
//     ...previousCompanies,
//     { companyName: "", duration: "" },
//   ]);
// };

// const removeCompany = (index) => {
//   if (previousCompanies.length > 1) {
//     const newCompanies = [...previousCompanies];
//     newCompanies.splice(index, 1);
//     setPreviousCompanies(newCompanies);
//   } else {
//     console.log("Cannot remove last field");
//   }
// };

// const addTechnology = () => {
//   setTechnologyDetails([
//     ...technologyDetails,
//     { technologyName: "", rating: "", level: "", techCheckbox: "" },
//   ]);
// };

// const removeTechnology = (index) => {
//   if (technologyDetails.length > 1) {
//     const newTechnologies = [...technologyDetails];
//     newTechnologies.splice(index, 1);
//     setTechnologyDetails(newTechnologies);
//   } else {
//     console.log("Cannot remove last field");
//   }
// };

// const [previousCompanies, setPreviousCompanies] = useState([
//   { companyName: "", duration: "" },
// ]);

// const [technologyDetails, setTechnologyDetails] = useState([
//   { technologyName: "", rating: "", level: "", techCheckbox: "" },
// ]);
