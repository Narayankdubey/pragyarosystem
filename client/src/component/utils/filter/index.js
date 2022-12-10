import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Checkbox, AppBar } from "@mui/material";

import SpinnerLoaderComp from "../../UI/spinnerLoaderComp";

import { getFilterElements } from "../../../store/product-action";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(0),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const AntTabs = styled(Tabs)({
  backgroundColor: "#e5e8eb",
  // borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

const AntTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  color: "rgba(0, 0, 0, 0.85)",
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#1890ff",
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: "white",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function FilterDialog({
  open,
  setOpen,
  filterData,
  setFilterData,
  noOfProduct,
}) {
  const tabs = [
    // { name: "Brands", value: "brands", filterName: "uniqueBrands" },
    {
      name: "Colour",
      value: "color",
      filterName: "uniqueColors",
      icon: "color-palette-outline",
    },
    {
      name: "Capacity",
      value: "capacity",
      filterName: "capcityRange",
      icon: "beaker-outline",
    },
    {
      name: "Technology",
      value: "purifying_technology",
      filterName: "uniquePurifyingTech",
      icon: "build-outline",
    },
    {
      name: "Booster",
      value: "booster_pump",
      filterName: "uniqueBoosterPump",
      icon: "settings-outline",
    },
    {
      name: "Voltage",
      value: "voltage",
      filterName: "voltageRange",
      icon: "flash-outline",
    },
    {
      name: "Price",
      value: "price",
      filterName: "priceRange",
      icon: "card-outline",
    },
  ];
  const dispatch = useDispatch();
  const { filterElements, products } = useSelector((state) => state.product);
  const { filterElementLoader } = useSelector((state) => state.ui);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 825px)").matches
  );
  //   const [sortRadioValue, setSortRadioValue] = useState();
  useEffect(() => {
    dispatch(getFilterElements(filterData));
  }, []);
  useEffect(() => {
    window
      .matchMedia("(max-width: 825px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    dispatch(getFilterElements(filterData));
    setValue(newValue);
  };
  const onCheckHandle = (data) => {
    const dataKey = Object.keys(data);
    if (dataKey.length > 0) {
      if (filterData.hasOwnProperty(dataKey[0])) {
        if (typeof filterData[dataKey[0]][0] === "object") {
          let found = false;
          for (let i = 0; i < filterData[dataKey[0]].length; i++) {
            if (
              filterData[dataKey[0]][i].min === data[dataKey[0]].min &&
              filterData[dataKey[0]][i].max === data[dataKey[0]].max
            ) {
              found = true;
              const tempData = filterData;
              tempData[dataKey[0]].splice(i, 1);
              setFilterData({ ...tempData });
            }
          }
          if (!found) {
            const checkData = filterData;
            checkData[dataKey[0]].push(data[dataKey[0]]);
            setFilterData({ ...checkData });
          }
        } else {
          if (filterData[dataKey[0]].includes(data[dataKey[0]])) {
            const tempData = filterData;
            const index = tempData[dataKey[0]].indexOf(data[dataKey[0]]);
            if (index > -1) {
              tempData[dataKey[0]].splice(index, 1);
            }
            setFilterData({ ...tempData });
          } else {
            const checkData = filterData;
            checkData[dataKey[0]].push(data[dataKey[0]]);
            setFilterData({ ...checkData });
          }
        }
      } else {
        setFilterData({ ...filterData, [dataKey[0]]: [data[dataKey[0]]] });
      }
      // const tempData = filterData;
      // for (let i = 0; i < dataKey.length; i++) {
      //   if (tempData[dataKey[i]].length === 0) {
      //     delete tempData[dataKey[i]];
      //     setFilterData(tempData);
      //   }
      // }
    }
  };
  const checkChecked = (key, item) => {
    if (filterData.hasOwnProperty(key)) {
      for (let i = 0; i < filterData[key].length; i++) {
        if (
          filterData[key][i].hasOwnProperty("min") &&
          filterData[key][i].hasOwnProperty("max") &&
          filterData[key][i].min === item.min &&
          filterData[key][i].max === item.max
        ) {
          return true;
        }
      }
    }
    return false;
  };
  const clearHandler = () => {
    if (Object.keys(filterData).length !== 0) {
      setFilterData({});
      dispatch(getFilterElements({}));
    }
  };

  return (
    <div>
      <BootstrapDialog
        fullScreen={matches ? true : false}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            minWidth: matches ? "0px" : "600px",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Filter
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: "100%",
            }}
          >
            <SpinnerLoaderComp display={filterElementLoader} />

            <AntTabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                minWidth: "50px",
                backgroundColor: "grey",
              }}
            >
              {tabs.map((item, index) => {
                return (
                  <AntTab
                    key={index}
                    // icon={<div>0</div>}
                    // iconPosition="end"
                    label={item.name}
                    {...a11yProps(index)}
                  />
                );
              })}
            </AntTabs>

            {tabs.map((element, index) => {
              return (
                <TabPanel
                  key={index}
                  value={value}
                  index={index}
                  style={{
                    width: "calc(100% - 48px)",
                    height: matches ? "100%" : "400px",
                    overflow: "auto",
                  }}
                >
                  {filterElements.hasOwnProperty(element.filterName) &&
                    filterElements[element.filterName].length === 0 &&
                    !filterElementLoader && (
                      <Typography
                        style={{ width: "100%", textAlign: "center" }}
                      >
                        Oops! Nothing Found ☹
                      </Typography>
                    )}

                  {filterElements.hasOwnProperty(element.filterName) &&
                  typeof filterElements[element.filterName][0] !== "object"
                    ? filterElements[element.filterName].map((item, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            label={item}
                            control={
                              <Checkbox
                                checked={
                                  filterData.hasOwnProperty(element.value) &&
                                  filterData[element.value].includes(item)
                                }
                                onChange={() =>
                                  onCheckHandle({ [element.value]: item })
                                }
                              />
                            }
                            style={{ display: "block" }}
                          />
                        );
                      })
                    : filterElements.hasOwnProperty(element.filterName) &&
                      filterElements[element.filterName].map((item, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            label={
                              (element.filterName === "priceRange" &&
                                `${item.min} ₹ -- ${item.max} ₹`) ||
                              (element.filterName === "capcityRange" &&
                                `${item.min} L -- ${item.max} L`) ||
                              (element.filterName === "voltageRange" &&
                                `${item.min} VDC -- ${item.max} VDC`)
                            }
                            control={
                              <Checkbox
                                checked={checkChecked([element.value], item)}
                                onClick={() =>
                                  onCheckHandle({
                                    [element.value]: {
                                      ["min"]: item.min,
                                      ["max"]: item.max,
                                    },
                                  })
                                }
                              />
                            }
                            style={{ display: "block" }}
                          />
                        );
                      })}
                </TabPanel>
              );
            })}
          </Box>
        </DialogContent>
        <DialogActions style={{ justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h6" component="h6">
              {noOfProduct}
            </Typography>
            <Typography>Filtered Product</Typography>
          </Box>
          <Box>
            <Button variant="Outline" autoFocus onClick={clearHandler}>
              Clear
            </Button>
            <Button variant="contained" autoFocus onClick={handleClose}>
              Apply
            </Button>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
