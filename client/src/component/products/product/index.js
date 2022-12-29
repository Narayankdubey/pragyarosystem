import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Button,
  IconButton,
  Fab,
  Badge,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BoltIcon from "@mui/icons-material/Bolt";
import WaterIcon from "@mui/icons-material/Water";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";

import "./style.css";
import BuyNowModal from "../buyNowModal/index";
import ProductSkeleton from "../../UI/skeleton/ProductSkeleton";
import DeleteModal from "../../admin/deleteModal";
// import Tpagination from "../../UI/Pagination";
import SortDialog from "../../utils/sort";
import FilterDialog from "../../utils/filter";

import { getAllProducts, clearProduct } from "../../../store/product-action";

const Products = ({ filterData }) => {
  const filter = filterData || "";
  const { search } = useLocation();
  const searchInput = search.substring(1) || "";
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const { products } = useSelector((state) => state.product);
  const { loggedIn } = useSelector((state) => state.admin);

  const [buyNowModalOpen, setBuyNowModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [page, setPage] = React.useState(1);
  const [filterQuery, setFilteQuery] = useState({});
  const [openSortDialog, setOpenSortDialog] = React.useState(false);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [sortData, setSortData] = useState({ sortField: "", sortOrder: 1 });
  const [loadData, setLoadData] = useState(false);

  let rawData;
  useEffect(() => {
    dispatch(getAllProducts(filterQuery, 1, 5, searchInput, sortData));
    setPage(1);
    if (path.includes("searchproduct")) {
    } else {
    }
    return () => dispatch(clearProduct());
  }, [path, sortData, filterQuery]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (loadData && page < products.pageCount) {
      setPage(page + 1);
      dispatch(getAllProducts(filterQuery, page + 1, 5, searchInput, sortData));
      setLoadData(false);
    }
  }, [loadData]);

  useEffect(() => {
    dispatch(clearProduct());
    const delayDebounceFn = setTimeout(() => {
      if (searchInput) {
        dispatch(getAllProducts(filterQuery, 1, 5, searchInput, sortData));
        setPage(1);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  function handleScroll() {
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        262 <=
      document.documentElement.clientHeight
    )
      setLoadData(true);
    else setLoadData(false);
    return;
  }

  rawData = products;

  const data =
    rawData.hasOwnProperty("results") && rawData.results.length > 0
      ? rawData.results.filter((data) => data.product_name.includes(filter))
      : [];

  const buyNowHandler = (e) => {
    // e.stopPropagation();
    setBuyNowModalOpen(true);
  };

  const deleteHandle = (productId) => {
    setDeleteId(productId);
    setDeleteModalOpen(true);
  };

  const handleClickSortDialogOpen = () => {
    setOpenSortDialog(true);
  };
  const handleClickFilterDialogOpen = () => {
    setOpenFilterDialog(true);
  };

  const handleSortDataChange = (items) => {
    setSortData({ sortField: items.sortField, sortOrder: items.order });
    setOpenSortDialog(false);
    setPage(1);
  };

  // const handlePageChange = (event, value) => {
  //   window.scrollTo(0, 0);
  //   const pageNoValue = value;
  //   setPage(pageNoValue);
  //   dispatch(getAllProducts(filterQuery, pageNoValue, 5));
  // };
  return (
    <>
      <BuyNowModal
        buyNowModalOpen={buyNowModalOpen}
        setBuyNowModalOpen={setBuyNowModalOpen}
      />
      <DeleteModal
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        productId={deleteId}
      />
      <div style={{ minHeight: "calc(100% - 256px)", paddingTop:"20px" }}>
        <Grid
          container
          spacing={2}
          p={2}
          gap={4}
          justifyContent={"center"}
        >
          {data.map((data, index) => {
            return (
              <Link to={"/products/"+data._id} className="products-link">
              <Paper
                key={index}
                sx={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* {loggedIn && (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton aria-label="delete" color="success">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={(e) => {
                        // e.stopPropagation();
                        deleteHandle(data._id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                )} */}
                <div className="product-inside-container">
                  <div className="img-product-container">
                    <img
                      src={data.img}
                      width="110"
                      height="200"
                      alt={data.img}
                    />
                  </div>
                  <div className="detail-product-container">
                    <Typography variant="h6" style={{ textAlign: "center" }}>
                      {data.product_name}
                    </Typography>
                    <Typography variant="body2" style={{ textAlign: "center" }}>
                      ({data.purifying_technology})
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: "5px" }}>
                      <WaterIcon /> {data.capacity}L Capacity
                    </Typography>
                    <Typography variant="body2">
                      <BoltIcon /> {data.voltage}VDC Volt
                    </Typography>
                    <Typography variant="body2">
                      <SettingsIcon /> {data.booster_pump} Booster Pump
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "600",
                        textAlign: "center",
                        marginTop: "5px",
                      }}
                    >
                      MRP ₹{data.price}/-
                    </Typography>
                    {/* <Button
                      variant="contained"
                      onClick={buyNowHandler}
                      style={{ marginTop: "10px", width: "100%" }}
                    >
                      Buy Now
                    </Button> */}
                  </div>
                </div>
              </Paper>
              </Link>
            );
          })}

          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </Grid>
        {/* <Stack spacing={2}>
          <Tpagination
            count={rawData.pageCount}
            // page={page}
            changePage={handlePageChange}
            visi={true}
          />
        </Stack> */}
        <div className="fav-container">
          <Badge
            color="success"
            badgeContent={sortData.sortField !== "" ? "" : 0}
            overlap="circular"
          >
            <Fab
              color="secondary"
              aria-label="add"
              onClick={handleClickSortDialogOpen}
            >
              <SortIcon />
            </Fab>
          </Badge>
          <Badge
            color="success"
            badgeContent={Object.keys(filterQuery).length}
            overlap="circular"
          >
            <Fab
              color="secondary"
              aria-label="add"
              onClick={handleClickFilterDialogOpen}
            >
              <FilterAltIcon />
            </Fab>
          </Badge>
        </div>
        <SortDialog
          setSortData={setSortData}
          open={openSortDialog}
          setOpen={setOpenSortDialog}
          handleClickOpen={handleClickSortDialogOpen}
          handleSortDataChange={handleSortDataChange}
        />
        <FilterDialog
          open={openFilterDialog}
          setOpen={setOpenFilterDialog}
          filterData={filterQuery}
          setFilterData={setFilteQuery}
          noOfProduct={
            products.hasOwnProperty("totalCount")
              ? products.totalCount
              : "loading..."
          }
        />
      </div>
    </>
  );
};

export default Products;
