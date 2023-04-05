import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import AdminTableSkeleton from "../../UI/skeleton/AdminTableSkeleton";
import UnknownVisitor from "../unknownVisitors";

const Visitor = lazy(() => import("../visitor"));
const AdminProducts = lazy(() => import("../products"));
const ContactUs = lazy(() => import("../contactUs"));
const Emails = lazy(() => import("../emails"));
const ServiceRequest = lazy(() => import("../service"));


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
          <Tab label="Contact Us" {...a11yProps(1)} />
          <Tab label="Service Requests" {...a11yProps(2)} />
          <Tab label="Emails" {...a11yProps(3)} />
          <Tab label="Unknown Visitors" {...a11yProps(4)} />
          <Tab label="Products" {...a11yProps(5)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Suspense fallback={<AdminTableSkeleton/>}>
          <Visitor />
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Suspense fallback={<AdminTableSkeleton/>}>
          <ContactUs />
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Suspense fallback={<AdminTableSkeleton/>}>
          <ServiceRequest />
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Suspense fallback={<AdminTableSkeleton/>}>
          <Emails />
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Suspense fallback={<AdminTableSkeleton/>}>
          <UnknownVisitor/>
        </Suspense>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Suspense fallback={<AdminTableSkeleton/>}>
          <AdminProducts/>
        </Suspense>
      </TabPanel>
    </Box>
  );
}
