import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { adminLogin, checkLoginStatus } from "../../../store/admin-action";
import validateForm from "./validateLogin";
import "./style.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.admin);

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(checkLoginStatus());
    if (loggedIn) {
      navigate("/admin/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(data);
    const noErrors = Object.keys(validationErrors).length === 0;
    setError(validationErrors);

    if (noErrors) {
      dispatch(adminLogin(data));
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <Typography variant="h5" sx={{ borderBottom: "1px solid black" }}>
          Log In
        </Typography>
        <TextField
          name="email"
          label="usernane"
          // size="small"
          variant="standard"
          error={error.email ? true : false}
          onChange={onChangeHandler}
          style={{ marginTop: "30px" }}
        />
        <TextField
          name="password"
          type="password"
          label="password"
          // size="small"
          variant="standard"
          error={error.password ? true : false}
          onChange={onChangeHandler}
          style={{ marginTop: "30px" }}
        />
        <Button
          type="submit"
          variant="contained"
          style={{ margin: "30px auto", width: "50%" }}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
