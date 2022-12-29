import React from "react";
import Button from "@mui/material/Button";

import SendAllModal from "./components/SendAllModal";
import { Box } from "@mui/material";

const Emails = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <Box textAlign={"center"} minHeight={"calc(100vh - 450px)"}>
      <Button variant="outlined" onClick={handleOpen}>
        Send Email to all users
      </Button>
      {open && <SendAllModal open={open} setOpen={setOpen} />}
    </Box>
  );
};

export default Emails;
