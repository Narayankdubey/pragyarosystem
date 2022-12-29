import React, { useEffect } from "react";
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
} from "@mui/material";
import { Box } from "@mui/system";

import BoltIcon from "@mui/icons-material/Bolt";
import WaterIcon from "@mui/icons-material/Water";
import SettingsIcon from "@mui/icons-material/Settings";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';

import "./style.css";
import "../../style/table.css"

const rows = [
  {
    name: "Product Name",
    key: "product_name",
    icon:<CoffeeMakerIcon/>
  },
  {
    name: "Price",
    key: "price",
    icon:<CurrencyRupeeIcon/>,
  },
  {
    name: "Capacity",
    key: "capacity",
    icon:<WaterIcon />,
  },
  {
    name: "Color",
    key: "color",
    icon:<ColorLensIcon/>
  },
  {
    name: "Voltage",
    key: "voltage",
    icon:<BoltIcon />,
  },
  {
    name: "Booster Pump",
    key: "booster_pump",
    icon:<SettingsIcon /> 
  },
  {
    name: "Purifying Technology",
    key: "purifying_technology",
    icon:<EngineeringIcon/>
  },
];

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id));
    }
  }, [dispatch, id]);
  console.log(product, "product");
  return (
    <div className="product-detail-container"> 
    <Paper component={Grid} elevation={3} container spacing={1}>
      <Box component={Grid} item xs={12} sm={12} md={6} sx={{overflow:"hidden"}}>
        <img src={product?.img} alt="Product" className="product-detail-img" />
      </Box>
      <Box component={Grid} item xs={12} sm={12} md={6}>
        <h2 >{product?.product_name}</h2>
        <Typography component={"p"} mt={2} color={"blueviolet"}>MRP ₹{product?.price}/-</Typography>
        <TableContainer>
          <Table sx={{ minWidth: 300, color:"gray" }}>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "600",paddingLeft:0 }}
                  >
                   {row?.icon}{" "} {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{paddingLeft:0}}>
                    {product[row.key]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
    </div>
  );
};

export default ProductDetails;
