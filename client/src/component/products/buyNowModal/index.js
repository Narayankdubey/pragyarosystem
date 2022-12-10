import React from "react";

import { Backdrop, Box, Modal, Fade, Button, Typography } from "@mui/material";

import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "400px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,

  "&>*": {
    display: "block",
    margin: "2em auto",
  },
};

export default function BuyNowModal({ buyNowModalOpen, setBuyNowModalOpen }) {
  //   const { updateModal } = useSelector((state) => state.pmo);
  //   const dispatch = useDispatch();

  const onOkHandle = () => {
    setBuyNowModalOpen(false);
    // dispatch(pmoActions.setUpdateModal());
    // dispatch(pmoActions.redirectToProjectList());
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={buyNowModalOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={buyNowModalOpen}>
          <Box sx={style}>
            <Typography
              variant="h6"
              style={{ textAlign: "center" }}
              data-test="modal-successful-message"
            >
              Thank you for your interest !!!
              <br /> <p>for more details</p>
              {/* <small>please call on 8920310622</small> */}
            </Typography>
            <div
              // className="contact-banner"
              style={{
                width: "100%",
                height: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Button
                href="tel:8920310622"
                variant="contained"
                color="secondary"
                startIcon={<CallIcon />}
              >
                8920310622
              </Button>
              <Button
                href="https://wa.me/918920310622?text=I'm%20interested"
                variant="contained"
                color="success"
                startIcon={<WhatsAppIcon />}
                // style={{ marginTop: "5px" }}
              >
                Whatsapp
              </Button>
            </div>
            <Button variant="contained" color="primary" onClick={onOkHandle}>
              Ok
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
