import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, Box, Modal, Fade, Button, Typography } from "@mui/material";

import { productActions } from "../../../store/product-slice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,

  "&>*": {
    display: "block",
    margin: "2em auto",
  },
};

export default function InfoModal() {
  const { infoModal } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const onOkHandle = () => {
    dispatch(productActions.updateInfoModalStatus(false));
    // dispatch(pmoActions.setUpdateModal());
    // dispatch(pmoActions.redirectToProjectList());
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={infoModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={infoModal}>
          <Box sx={style}>
            <Typography
              variant="h4"
              style={{ textAlign: "center" }}
              data-test="modal-successful-message"
            >
              Thank you !!! 🤗
            </Typography>
            <Typography variant="p" component="p">
              our executive will contact you soon.
            </Typography>
            <Button variant="contained" color="primary" onClick={onOkHandle}>
              Ok
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
