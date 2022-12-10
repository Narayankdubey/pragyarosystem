import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Paper,
  Typography,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Table,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { getAllProducts } from "../../../store/product-action";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Paper
        className="admin-header"
        // elevation={3}
        style={{
          padding: "5px",
          margin: "8px auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          color: "black",
          //   borderBottom: "1px solid black",
          //   borderRadius: "10px",
        }}
      >
        <Typography variant="h5">Products</Typography>

        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={() => navigate("/product/create")}
        >
          Create Product
        </Button>
      </Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell sx={{ minWidth: 150 }}>Product Name</TableCell>
              <TableCell align="right" sx={{ minWidth: 180 }}>
                Purifying Technology
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 150 }}>
                Capacity
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 120 }}>
                Volt
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }}>
                Price
              </TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((products, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}.
                </TableCell>
                <TableCell component="th" scope="row">
                  {products.product_name}
                </TableCell>
                <TableCell align="right">
                  {products.purifying_technology}
                </TableCell>
                <TableCell align="right">
                  {products.capacity}L Capacity
                </TableCell>
                <TableCell align="right">{products.voltage}VDC Volt</TableCell>
                <TableCell align="right">MRP ₹{products.price}/-</TableCell>
                <TableCell align="right">{products.img}</TableCell>
                <TableCell align="center">
                  <EditIcon sx={{ color: "green" }} />
                </TableCell>
                <TableCell align="center">
                  <DeleteForeverIcon sx={{ color: "red" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminProducts;
