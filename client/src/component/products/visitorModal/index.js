import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

import { saveVisitor } from "../../../store/admin-action";
import { adminActions } from "../../../store/admin-slice";

import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,

  "&>*": {
    display: "block",
    margin: "2em auto",
  },
};

export default function VisitorModal() {
  const { visitorModal } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({ name: "", mobile: "" });
  const [error, setError] = useState({});
  const { name, mobile } = inputData;

  const formValidation = () => {
    let errors = {};
    // const nameReg = /^[a-zA-Z ]/;
    const nameReg = /^[a-zA-Z]([a-z A-Z]){2,}$/;
    const mobileReg = /^[6789]([0-9]){9}/;
    if (!inputData.name.trim()) {
      errors.name = "Name Required";
    } else if (!nameReg.test(inputData.name)) {
      errors.name = "Enter a valid name";
    }
    if (!mobileReg.test(inputData.mobile)) {
      errors.mobile = "Enter a valid mobile number";
    }

    return errors;
  };

  const onChangeHandler = ({ target }) => {
    setInputData({ ...inputData, [target.name]: target.value });
  };

  const closeModalHandler = () => {
    dispatch(adminActions.visitorStatus(false));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const errorCheck = formValidation();
    const noErrors = Object.keys(errorCheck).length === 0;
    setError(errorCheck);

    if (noErrors) {
      dispatch(saveVisitor(inputData));
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={visitorModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={visitorModal}>
          <Box sx={style}>
            <div
              style={{
                width: "100%",
                margin: 0,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="outlined"
                color="error"
                endIcon={<CloseIcon />}
                onClick={closeModalHandler}
              >
                Close
              </Button>
            </div>
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItem: "center",
              }}
            >
              <TextField
                error={error["name"] ? true : false}
                helperText={error["name"] ? error.name : " "}
                label="Enter your name"
                name="name"
                size="small"
                value={name}
                onChange={onChangeHandler}
                style={{ marginTop: "10px" }}
              />
              <TextField
                error={error["mobile"] ? true : false}
                helperText={error["mobile"] ? error.mobile : " "}
                label="Enter your Mobile Number"
                name="mobile"
                size="small"
                type="number"
                value={mobile}
                onChange={onChangeHandler}
                style={{ marginTop: "10px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={onSubmitHandler}
                style={{ marginTop: "10px" }}
              >
                Send
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
