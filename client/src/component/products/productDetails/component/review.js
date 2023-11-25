import React, { useEffect, useRef, useCallback, useState } from "react";
import {
  Paper,
  Typography,
  Rating,
  Divider,
  Button,
  Avatar,
  Box,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Loader from "../../../UI/loader";

import {
  getReview,
  clearReview,
  increaseReviewLike,
} from "../../../../store/product-action";
import { deleteReview } from "../../../../store/admin-action";

const ReviewDeleteModal = ({ modalDetails, setModalDetails, handleDelete }) => {
  const handleClose = () => {
    setModalDetails({});
  };
  return (
    <Dialog open={modalDetails?.open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        Are you sure do you want to delete this review?
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
        <Button onClick={handleDelete}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

const Review = ({ setReviewModal, id, loggedIn }) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(0);
  const [deleteModal, setDeleteModal] = useState({});

  const { review, reviewLoading, likedReview } = useSelector((state) => state.product);

  const observer = useRef();

  const deleteHandle = (id) => {
    setDeleteModal({ open: true, id });
  };

  const handleDelete = () => {
    dispatch(deleteReview(deleteModal?.id));
    // setTimeout(() => dispatch(getReview(id)), 1500);
    setDeleteModal({});
  };

  const increaseLike = (id) => {
    if (!likedReview.includes(id)) dispatch(increaseReviewLike(id));
  };

  const lastBookElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (load === 0) {
            dispatch(getReview(id));
            setLoad(1);
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [dispatch, id, load]
  );

  useEffect(() => {
    return () => {
      dispatch(clearReview());
    };
  }, [dispatch, id]);

  return (
    <Paper style={{ width: "100%" }} ref={lastBookElementRef}>
      {deleteModal?.open && (
        <ReviewDeleteModal
          modalDetails={deleteModal}
          setModalDetails={setDeleteModal}
          handleDelete={handleDelete}
        />
      )}
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        style={{ borderBottom: "1px solid grey" }}
      >
        <Typography variant="h5">Top Reviews</Typography>
        <Button variant="outlined" onClick={setReviewModal}>
          Add Review
        </Button>
      </Box>

      {reviewLoading ? (
        <Loader />
      ) : review && review.length > 0 ? (
        review.map((item, index) => (
          <Box key={index}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                <Avatar>{item?.name && item?.name.at(0)}</Avatar>
                <Typography variant="body1">{item?.name}</Typography>
              </Box>
              <Typography variant="subtitle2">
                {moment(item?.time).fromNow()}
              </Typography>
            </Box>
            <Box width={"100%"}>
              <Rating name="read-only" value={item?.rating} readOnly />
            </Box>
            {/* <Typography variant="h6">Heading</Typography> */}
            <Typography variant="body2" gutterBottom>
              {item?.review}
            </Typography>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Button
                  color={likedReview.includes(item?._id) ? "primary" : "inherit"}
                  startIcon={<ThumbUpOffAltIcon />}
                  onClick={() => increaseLike(item?._id)}
                >
                  {item?.like || 0}
                </Button>
                {/* <Button startIcon={<ThumbDownOffAltIcon />}>{1}</Button> */}
              </Box>
              <Box>
                {loggedIn && (
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => {
                      deleteHandle(item?._id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </Box>
            </Box>
            {index < review.length - 1 && <Divider />}
          </Box>
        ))
      ) : (
        <Typography textAlign={"center"}>No Review</Typography>
      )}
    </Paper>
  );
};

export default Review;
