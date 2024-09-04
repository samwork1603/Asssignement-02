import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import BasicDetails from "../Forms/BasicDetails";
import WorkDetails from "../Forms/WorkDetails";
import ProjectDetails from "../Forms/ProjectDetails";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsForm() {
  const initFormState = {
    fullName: "",
    employeeCode: "",
    department: "",
    designation: "",
    email: "",
    phoneNo: "",
    funcManager: null,
    reporManager: null,
    dateOfBirth: dayjs(),
    careerStartDate: dayjs(),
    joiningDate: dayjs(),
    totalExp: "",
    workLocation: "",
    workMode: "",
    linkedinUrl: "",
    jiraName: "",
    clientJira: "",
    internalJiraExamption: "",
    projectMode: "",
    shadowTo: "",
    bytLead: "",
    trainingToBeAssigned: "",
    secondarySkillSetTraining: "",
    comments: "",
    week: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    },
    tech: [{ technologyName: "", rating: "", level: "", techCheckbox: "" }],
    company: [{ companyName: "", duration: "" }],
  };

  const [formValues, setFormValues] = useReducer(
    (currVals, newVals) => ({ ...currVals, ...newVals }),
    initFormState
  );

  
  const [errors, setErrors] = useState({});

  const validation = () => {
    const errors = {};

    if (!formValues.fullName.trim()) {
      errors.fullName = "Full Name cannot be empty!";
    }

    if (!formValues.designation.trim()) {
      errors.designation = "Designation cannot be empty!";
    }

    if (!formValues.employeeCode.trim()) {
      errors.employeeCode = "Employee Code cannot be empty!";
    }

    if (!formValues.email.trim()) {
      errors.email = "Email cannot be empty!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      errors.email = "Invalid email address!";
    }

    if (!formValues.phoneNo.trim()) {
      errors.phoneNo = "Phone Number cannot be empty!";
    } else if (!/^\d{10}$/.test(formValues.phoneNo)) {
      errors.phoneNo = "Invalid phone number! It should be 10 digits.";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(validation()){
      console.log(formValues)
    }else{
      console.log(errors)
    }
  };

  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleHome = () => {
    navigate("/");
  };

  const addCompany = () => {
    setFormValues({
      company: [...formValues.company, { companyName: "", duration: "" }],
    });
  };
  const removeCompany = (index) => {
    if (formValues.company.length > 1) {
      setFormValues({
        company: [...formValues.company.filter((_, i) => i !== index)],
      });
    }
  };
  const addTech = () => {
    setFormValues({
      tech: [
        ...formValues.tech,
        { technologyName: "", rating: "", level: "", techCheckbox: "" },
      ],
    });
  };
  const removeTech = (index) => {
    setFormValues({
      tech: [...formValues.tech.filter((_, i) => i !== index)],
    });
  };
  const onHandleCheckBox = (e) => {
    const { name, checked } = e.target;
    setFormValues({
      week: {
        ...formValues.week,
        [name]: checked,
      },
    });
  };
  // const dynaDropdown = (newValue, index, type) => {
  //   setFormValues({
  //     ...formValues,
  //     company: formValues.company.map((company, i) =>
  //       i === index ? { ...company, [type]: newValue } : company
  //     ),
  //   });
  // };
  const handleCompany = (e, newValue, index, type) => {
    console.log("handleCompany");
    console.log(newValue, index, type, e.target.value);
    setFormValues({
      ...formValues,
      company: formValues.company.map((company, i) =>
        i === index
          ? {
              ...company,
              [type]: type === "companyName" ? newValue : e.target.value,
            }
          : company
      ),
    });
  };

  const handleTech = (e, newValue, index, type) => {
    console.log("handletech");
    console.log(newValue, index, type, e.target.value);
    setFormValues({
      ...formValues,
      tech: formValues.tech.map((tech, i) =>
        i === index
          ? {
              ...tech,
              [type]:
                type === "techCheckbox"
                  ? e.target.checked
                  : type === "rating"
                  ? e.target.value
                  : newValue,
            }
          : tech
      ),
    });
  };

  const handleFormChange = (e, newValue, type, id) => {
    setFormValues({ [type]: id === "a" ? newValue : e.target.value });
  };

  // const staticDropdown = (newValue,type)=>{
  //   setFormValues({
  //     [type]:newValue
  //   })
  // }

  const handleDateChange = (name, date) => {
    setFormValues({ [name]: date });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <Button sx={{ width: 200, textAlign: "center" }} onClick={handleHome}>
          Back to Home
        </Button>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Basic Details" {...a11yProps(0)} />
            <Tab label="Work Details" {...a11yProps(1)} />
            <Tab label="Project Details" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <BasicDetails
          formValues={formValues}
          handleFormChange={handleFormChange}
          handleDateChange={handleDateChange}
          onSubmit={onSubmit}
          handleHome={handleHome}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <WorkDetails
          formValues={formValues}
          handleFormChange={handleFormChange}
          handleDateChange={handleDateChange}
          onSubmit={onSubmit}
          onHandleCheckBox={onHandleCheckBox}
          addCompany={addCompany}
          handleHome={handleHome}
          removeCompany={removeCompany}
          addTech={addTech}
          removeTech={removeTech}
          handleCompany={handleCompany}
          handleTech={handleTech}

          // staticDropdown={staticDropdown}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ProjectDetails
          formValues={formValues}
          handleFormChange={handleFormChange}
          handleDateChange={handleDateChange}
          handleHome={handleHome}
        />
      </CustomTabPanel>
    </Box>
  );
}
