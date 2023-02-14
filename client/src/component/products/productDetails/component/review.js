import React, { useEffect, useRef, useCallback, useState } from "react";
import {
  Paper,
  Typography,
  Rating,
  Divider,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Loader from "../../../UI/loader";

import { getReview, clearReview } from "../../../../store/product-action";

const Review = ({ setReviewModal, id }) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(0);

  const { review, reviewLoading } = useSelector((state) => state.product);

  const observer = useRef();

  const lastBookElementRef = useCallback(
    (node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting ) {
            if(load === 0){
                dispatch(getReview(id));
                setLoad(1);
            }
          }
        });
        if (node) observer.current.observe(node);
    },
    []
  );

    // useEffect(() => {
    //   return(()=> {dispatch(clearReview())})
    // }, [dispatch, id]);

  return (
    <Paper style={{ width: "100%" }}>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        style={{ borderBottom: "1px solid grey" }}
        ref={lastBookElementRef}
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
            </Typography>{" "}
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
