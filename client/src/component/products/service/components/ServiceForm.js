import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  Box,
} from "@mui/material";

// import "./style.css";
import { saveServiceRequest } from "../../../../store/product-action";

const initialState = {
  name: "",
  mobile: "",
  email: "",
  address: "",
  issue: "",
  productName: "",
};

const ServiceForm = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState(initialState);
  const [error, setError] = useState({});
  const { name, mobile, email, address, issue, productName } = inputData;
  const formFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter Name",
      value: name,
      label: "Name",
    },
    {
      name: "mobile",
      type: "number",
      placeholder: "Enter Mobile Number",
      value: mobile,
      label: "Mobile No.",
    },
    {
      name: "email",
      type: "text",
      placeholder: "Enter Email",
      value: email,
      label: "Email",
    },
    {
      name: "address",
      type: "text",
      placeholder: "Enter Your Address",
      value: address,
      label: "Address",
    },
    {
      name: "productName",
      type: "text",
      placeholder: "Enter Your Product Name",
      value: productName,
      label: "Product Name",
    },
    {
      name: "issue",
      type: "text",
      placeholder: "Enter Your Issues",
      value: issue,
      label: "Issues",
    },
  ];

  const onChangeHandler = ({ target }) => {
    setInputData({ ...inputData, [target.name]: target.value });
  };

  const formValidation = () => {
    let errors = {};
    // const nameReg = /^[a-zA-Z ]/;
    const nameReg = /^[a-zA-Z]([a-z A-Z]){2,}$/;
    const mobileReg = /^[6789]([0-9]){9}/;
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!inputData.name.trim()) {
      errors.name = "Name Required";
    } else if (!nameReg.test(inputData.name)) {
      errors.name = "Enter a valid name";
    }
    if (!mobileReg.test(inputData.mobile)) {
      errors.mobile = "Enter a valid mobile number";
    }
    if (inputData.email.trim().length > 0 && !emailReg.test(inputData.email)) {
      errors.email = "Enter a valid email";
    }
    if (!inputData.productName.trim()) {
      errors.productName = "Product Name Required";
    } else if (!nameReg.test(inputData.productName)) {
      errors.productName = "Enter a valid Product Name";
    }

    return errors;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const errorCheck = formValidation();
    const noErrors = Object.keys(errorCheck).length === 0;
    setError(errorCheck);

    if (noErrors) {
      dispatch(saveServiceRequest(inputData));
      setInputData(initialState);
    }
  };
  return (
    <div className="contact-form-container">
      <Box>
        <Typography variant="h3">Request Service</Typography>
        <Typography variant="body1">Give your email to get updates</Typography>
      </Box>
      <Paper
        component="form"
        onSubmit={onSubmitHandler}
        style={{ backgroundColor: "#f1f1f1" }}
      >
          {formFields.map((data, index) => {
            return (
              <TextField
                error={error[data.name] ? true : false}
                key={index}
                type={data.type}
                label={data.label}
                name={data.name}
                value={data.value}
                placeholder={data.placeholder}
                multiline={data.name === "feedback" ? true : false}
                rows={data.name === "feedback" ? 3 : null}
                fullWidth
                variant="standard"
                size="small"
                onChange={onChangeHandler}
                InputProps={
                  data.name === "mobile"
                    ? {
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        ),
                      }
                    : null
                }
              />
            );
          })}
          <Button type="submit" variant="contained">
            Submit
          </Button>
      </Paper>
    </div>
  );
};

export default ServiceForm;
