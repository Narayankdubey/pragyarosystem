import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { createProducts, checkLoginStatus } from "../../../store/admin-action";

import validateForm from "./validateCreateProduct";

const CreateProduct = () => {
  const initialState = {
    product_name: "",
    color: "",
    capacity: parseInt(""),
    purifying_technology: "",
    booster_pump: "",
    voltage: parseInt(""),
    img: "",
    price: parseInt(""),
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);
  const [error, setError] = useState({});
  const { loggedIn } = useSelector((state) => state.admin);
  const {
    product_name,
    color,
    capacity,
    purifying_technology,
    booster_pump,
    voltage,
    img,
    price,
  } = data;
  useEffect(() => {
    dispatch(checkLoginStatus());
    if (!loggedIn) {
      navigate("/admin");
    }
  }, [loggedIn]);

  const onChangeHandler = ({ target }) => {
    if (target.name === "img") {
      setData({ ...data, [target.name]: target.files[0] });
    } else {
      setData({ ...data, [target.name]: target.value });
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(data);
    const noErrors = Object.keys(validationErrors).length === 0;
    setError(validationErrors);

    if (noErrors) {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("color", color);
      formData.append("capacity", capacity);
      formData.append("purifying_technology", purifying_technology);
      formData.append("booster_pump", booster_pump);
      formData.append("voltage", voltage);
      formData.append("img", img);
      formData.append("price", price);

      dispatch(createProducts(formData));
      setData(initialState);
    }
  };
  const inputData = [
    {
      name: "product_name",
      type: "text",
      value: product_name,
      placeholder: "Enter Product Name",
    },
    { name: "color", type: "text", value: color, placeholder: "Enter Colour" },
    {
      name: "capacity",
      type: "number",
      value: capacity,
      placeholder: "Enter Capacity",
    },
    {
      name: "purifying_technology",
      type: "text",
      value: purifying_technology,
      placeholder: "Enter Purifying Technology",
    },
    {
      name: "booster_pump",
      type: "text",
      value: booster_pump,
      placeholder: "Enter Booster Pump",
    },
    {
      name: "voltage",
      type: "number",
      value: voltage,
      placeholder: "Enter Voltage",
    },
    { name: "price", type: "number", value: price, placeholder: "Enter Price" },
    // { name: "img", type: "text", value: img, placeholder: "Enter Image Link" },
  ];
  return (
    <div className="createProduct-container">
      <form
        onSubmit={onSubmitHandler}
        className="create-form"
        encType="multipart/form-data"
      >
        <div className="header">
          <Typography variant="h6">Create Product</Typography>
          <Button type="submit" variant="outlined">
            Save
          </Button>
        </div>
        {inputData.map((data, index) => {
          const { name, type, value, placeholder } = data;
          return (
            <div className="input-field-container" key={index}>
              <TextField
                name={name}
                label={placeholder}
                type={type}
                variant="outlined"
                error={error[name] ? true : false}
                value={value}
                onChange={onChangeHandler}
                size="small"
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
        <div className="uploadImg-div input-field-container">
          <label htmlFor="img">Choose product image</label>
          <input type="file" name="img" onChange={onChangeHandler} />
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
