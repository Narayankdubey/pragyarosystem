import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { getProduct } from "../../../store/product-action";
import { deleteProduct } from "../../../store/admin-action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "600px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,

  "&>*": {
    display: "block",
    margin: "2em auto",
  },
};

export default function DeleteModal({
  deleteModalOpen,
  setDeleteModalOpen,
  productId,
}) {
  const deleteProductId = productId || "";

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [deleteActive, setDeleteActive] = useState(false);

  useEffect(() => {
    if (deleteProductId) {
      dispatch(getProduct(deleteProductId));
    }
  }, [deleteProductId]);

  const onCancelHandle = () => {
    setDeleteModalOpen(false);
    // dispatch(pmoActions.setUpdateModal());
    // dispatch(pmoActions.redirectToProjectList());
  };

  const checkboxHandle = (event) => {
    setDeleteActive(event.target.checked);
  };

  const onConfirmHandle = () => {
    setDeleteModalOpen(false);
    dispatch(deleteProduct(deleteProductId));
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={deleteModalOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={deleteModalOpen}>
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                style={{ margin: 0, textAlign: "center" }}
                data-test="modal-successful-message"
              >
                Are you sure do you want to delete?
              </Typography>
              <div
                style={{
                  margin: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={product.img}
                  width="100"
                  height="150"
                  alt={product.img}
                />
                <Typography
                  variant="h5"
                  style={{ margin: 0, textAlign: "center" }}
                  data-test="modal-successful-message"
                >
                  {product.product_name}
                </Typography>
              </div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox color="error" onChange={checkboxHandle} />}
                  label="It will be permanently deleted from Database"
                  style={{ width: "100%", color: "red", textAlign: "center" }}
                />
              </FormGroup>

              <div
                style={{
                  marginTop: "10px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "300px",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={onCancelHandle}
                >
                  Cancel
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  disabled={!deleteActive}
                  onClick={() => onConfirmHandle()}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
