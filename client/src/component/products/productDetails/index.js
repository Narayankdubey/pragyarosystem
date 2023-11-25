import React, { useEffect, useMemo, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../../store/product-action";
import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Typography,
  Rating,
  LinearProgress,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";

import BoltIcon from "@mui/icons-material/Bolt";
import WaterIcon from "@mui/icons-material/Water";
import SettingsIcon from "@mui/icons-material/Settings";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import StarRateIcon from "@mui/icons-material/StarRate";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import "./style.css";
import "../../style/table.css";
import ProductDetailSkeleton from "../../UI/skeleton/productDetailSkeleton";
import ReviewModal from "./component/reviewModal";
// import Review from "./component/review";
import DeleteModal from "../../admin/deleteModal";
import PageNotFound from "../../utils/PageNotFound";

const Review = lazy(() => import("./component/review"));

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [reviewModal, setReviewModal] = useState(false);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const { product } = useSelector((state) => state.product);
  const { productDetailsSkeleton } = useSelector((state) => state.ui);
  const { loggedIn } = useSelector((state) => state.admin);

  function LinearProgressWithLabel({ value, total, type }) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            display={"flex"}
            alignItems="center"
          >
            {type}
            <StarRateIcon style={{ fontSize: "15px" }} />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={type > 2 ? "success" : type === 2 ? "info" : "error"}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">
            ({total})
          </Typography>
        </Box>
      </Box>
    );
  }

  const rows = useMemo(() => {
    return [
      {
        name: "Product Name",
        value: product?.product_name || "",
        icon: <CoffeeMakerIcon />,
      },
      {
        name: "Price",
        value: `₹ ${product?.price || "N/A"} /-`,
        icon: <CurrencyRupeeIcon />,
      },
      {
        name: "Capacity",
        value: `${product?.capacity || "N/A"} L`,
        icon: <WaterIcon />,
      },
      {
        name: "Color",
        value: product?.color || "N/A",
        icon: <ColorLensIcon />,
      },
      {
        name: "Voltage",
        value: `${product?.voltage || "N/A"} VDC Volt`,
        icon: <BoltIcon />,
      },
      {
        name: "Booster Pump",
        value: product?.booster_pump || "N/A",
        icon: <SettingsIcon />,
      },
      {
        name: "Purifying Technology",
        value: product?.purifying_technology || "N/A",
        icon: <EngineeringIcon />,
      },
    ];
  }, [product]);

  const setTitle = (title) => {
    const el = document.querySelector("title");
    el.innerText = `${title}`;
  };

  const setDescription = (desc) => {
    const el = document.querySelector("meta[name='description']");
    el.setAttribute("content", desc);
  };

  const deleteHandle = (productId) => {
    setDeleteId(productId);
    setDeleteModalOpen(true);
  };

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      setTitle(product?.product_name || "pragya ro system");
      setDescription(
        `Buy ${product?.product_name} online at best price with offers in India. ${product?.product_name} (${product?.color}, ${product?.capacity}L) features and specifications include capacity of ${product?.capacity}L in ${product?.color}, purifying technology ${product?.purifying_technology}, booster pump ${product?.booster_pump} and voltage ${product?.voltage}.`
      );
    }
    return () => {
      setTitle("pragya ro system");
    };
  }, [product]);

  if (!productDetailsSkeleton && Object.keys(product).length === 0) {
    return (
      <PageNotFound />
    );
  }

  return (
    <div className="product-detail-container">
      <DeleteModal
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        productId={deleteId}
      />
      {productDetailsSkeleton ? (
        <ProductDetailSkeleton />
      ) : (
        <>
          <Paper
            component={Grid}
            elevation={3}
            container
            spacing={1}
            position={"relative"}
          >
            {loggedIn && (
              <div
                style={{
                  width: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                  position: "absolute",
                  right: 45,
                  top: -35,
                }}
              >
                <IconButton color="success">
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => {
                    deleteHandle(id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            )}
            <Box
              component={Grid}
              item
              xs={12}
              sm={12}
              md={6}
              sx={{ overflow: "hidden" }}
            >
              <img
                src={product?.img}
                alt="Product"
                className="product-detail-img"
              />
            </Box>
            <Box component={Grid} item xs={12} sm={12} md={6}>
              <h2>{product?.product_name}</h2>
              {product?.reviewDetails?.average !== 0 && (
                <Box display={"flex"} alignItems="center">
                  <Rating
                    name="read-only"
                    value={product?.reviewDetails?.average}
                    readOnly
                  />
                  ({product?.reviewDetails?.total})
                </Box>
              )}
              <Typography component={"p"} mt={2} color={"blueviolet"}>
                MRP ₹{product?.price}/-
              </Typography>
              <TableContainer>
                <Table sx={{ minWidth: 280, color: "gray" }}>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ fontWeight: "600", paddingLeft: 0 }}
                        >
                          {row?.icon} {row.name}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ paddingLeft: 0 }}
                        >
                          {row.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
          {product?.reviewDetails && (
            <Box
              p={"20px 0px"}
              width={"100%"}
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Paper style={{ width: "40%", minHeight: "165px" }}>
                <Typography variant="h4" gutterBottom>
                  {product?.reviewDetails?.average} <StarRateIcon />
                </Typography>
                <Typography variant="p">
                  {product?.reviewDetails?.total} Rating &{" "}
                  {product?.reviewDetails?.reviewCount} Reviews
                </Typography>
              </Paper>
              <Paper style={{ width: "55%", minHeight: "165px" }}>
                <LinearProgressWithLabel
                  type={5}
                  value={Math.floor(
                    (product.reviewDetails[5] / product.reviewDetails.total) *
                      100 || 0
                  )}
                  total={product.reviewDetails[5]}
                />
                <LinearProgressWithLabel
                  type={4}
                  value={Math.floor(
                    (product.reviewDetails[4] / product.reviewDetails.total) *
                      100 || 0
                  )}
                  total={product.reviewDetails[4]}
                />
                <LinearProgressWithLabel
                  type={3}
                  value={Math.floor(
                    (product.reviewDetails[3] / product.reviewDetails.total) *
                      100 || 0
                  )}
                  total={product.reviewDetails[3]}
                />
                <LinearProgressWithLabel
                  type={2}
                  value={Math.floor(
                    (product.reviewDetails[2] / product.reviewDetails.total) *
                      100 || 0
                  )}
                  total={product.reviewDetails[2]}
                />
                <LinearProgressWithLabel
                  type={1}
                  value={Math.floor(
                    (product.reviewDetails[1] / product.reviewDetails.total) *
                      100 || 0
                  )}
                  total={product.reviewDetails[1]}
                />
              </Paper>
            </Box>
          )}
        </>
      )}
      <Suspense fallback={<>Loading...</>}>
        <Review setReviewModal={setReviewModal} id={id} loggedIn={loggedIn}/>
      </Suspense>
      {reviewModal && (
        <ReviewModal {...{ open: reviewModal, setOpen: setReviewModal, id }} />
      )}
    </div>
  );
};

export default ProductDetails;
