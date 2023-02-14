import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  TextField,
  Typography,
  Rating,
  Modal
} from "@mui/material";
import { useDispatch } from "react-redux";

import { getReview, saveReview } from "../../../../store/product-action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const formValidation = (data) => {
  const { name, rating, review } = data;
  let valid = {};
  if (name.length <= 0) valid.name = "Name can't be empty";
  if (rating === 0) valid.rating = "Rating can't be 0";
  if (review.length <= 0) valid.review = "Review can't be empty";
  return valid;
};

export default function ReviewModal({ open, setOpen, id }) {
  const dispatch = useDispatch()
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [validation, setValidation] = React.useState({});

  const submitHandle = async(e) => {
    e.preventDefault();
    const data = { name, rating, review, productId:id };
    const validCheck = formValidation(data);
    setValidation(validCheck);
    if (Object.keys(validCheck).length <= 0) {
      await dispatch(saveReview(data))
      dispatch(getReview(id))
      setOpen(false);
      setName("");
      setReview("");
      setRating(0);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography variant="h5">Review</Typography>
          <FormControl
            component={"form"}
            onSubmit={submitHandle}
            sx={{ width: "100%", "& > *": { mt: 2 } }}
          >
            <TextField
              name="name"
              label="Name"
              variant={"filled"}
              placeholder="Enter your Name"
              value={name}
              onChange={({ target }) => setName(target.value)}
              error={validation.name}
            />
            <Box>
              <Typography
                component="legend"
                sx={{ color: validation?.rating ? "red" : "" }}
              >
                Rating
              </Typography>
              <Rating
                name="rating"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Box>
            <TextField
              name="review"
              label="review"
              variant={"filled"}
              multiline
              rows={2}
              maxRows={4}
              placeholder="Enter your placeholder"
              value={review}
              onChange={({ target }) => setReview(target.value)}
              error={validation.review}
            />
            <Box display={"flex"} alignSelf="flex-end">
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" variant={"contained"}>
                Submit
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
