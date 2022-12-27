import React, { useState, useEffect, useMemo } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";

import { sendAllEmail } from "../../../../store/admin-action";
import { Typography } from "@mui/material";

const thisSessionId = Math.random().toString(36).substr(2, 9);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

const columns = [
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => {
      const value = params.row.status;
      return (
        <Typography sx={{ color: value === "Failed" ? "red" : "green" }}>
          {value}
        </Typography>
      );
    },
  },
];

function DataTable({ data, loading }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        loading={loading}
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row?.email}
      />
    </div>
  );
}

export default function ConfirmModal({ open, setOpen, inputValue }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ui.emailSendLoader);
  const { sentEmailData } = useSelector((state) => state.admin);
  const [progress, setProgress] = useState({ value: 0, length: 100 });
  const [isConnected, setIsConnected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => setOpen(false);

  const onConfirmHandler = () => {
    dispatch(sendAllEmail({ ...inputValue, socketSessionId: thisSessionId }));
    setIsSubmitted(true);
  };

  const progressValue = useMemo(() => {
    return Math.round((progress.value / progress.length) * 100);
  }, [progress]);

  useEffect(() => {
    const socket = io(process.env.URL);
    socket.on("connect", () => {
      setIsConnected(true);
    });
    socket.emit("connectInit", thisSessionId);
    socket.on("sendEmail", (data) => {
      setProgress(data);
    });
  }, []);
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
            minWidth={"300px"}
          >
            <Typography>Send Email To All Emails</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          {isSubmitted ? (
            <>
              {isConnected ? (
                <Box sx={{ flexGrow: 1 }}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    width={"100%"}
                  >
                    <Typography>
                      {progress.value}/{progress.length}
                    </Typography>
                    <Typography>{progressValue}%</Typography>
                  </Box>
                  <BorderLinearProgress
                    variant="determinate"
                    value={progressValue}
                  />
                  <DataTable data={sentEmailData} loading={loading} />
                </Box>
              ) : (
                <Box sx={{ flexGrow: 1 }}>
                  <FacebookCircularProgress />
                </Box>
              )}
            </>
          ) : (
            <DialogContentText>
              Email will be sent to all the email address present in database.
            </DialogContentText>
          )}
        </DialogContent>
        {!isSubmitted && (
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              type="submit"
              onClick={onConfirmHandler}
              endIcon={loading && <CircularProgress size={"small"} />}
            >
              Agree
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
