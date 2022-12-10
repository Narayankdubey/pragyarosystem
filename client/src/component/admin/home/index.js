// import * as React from "react";
// import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// function LinkTab(props) {
//   return (
//     <Tab
//       component={Link}
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// export default function AdminHome() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
//         <LinkTab label="Visitors" to="/admin/visitor" />
//         <Link to="/admin/visitor">visitor link</Link>
//         <Tab label="Visitors Tab" component="a" to="/admin/visitor" />
//         {/* <LinkTab label="Buy Now" href="/trash" />
//         <LinkTab label="Contact Us" href="/spam" />
//         <LinkTab label="Products" href="/spam" /> */}
//       </Tabs>
//     </Box>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Visitor from "../visitor";
import AdminProducts from "../products";
import ContactUs from "../contactUs";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1, background: "#f2f2f4de" }}>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AdminHome() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          allowScrollButtonsMobile
          aria-label="basic tabs example"
        >
          <Tab label="Visitors" {...a11yProps(0)} />
          <Tab label="Buy Now" {...a11yProps(1)} />
          <Tab label="Contact Us" {...a11yProps(2)} />
          <Tab label="Products" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Visitor />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Buy Now is Coming Soon...
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContactUs />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AdminProducts />
      </TabPanel>
    </Box>
  );
}
