import * as React from "react";
import {
  Divider,
  Dialog,
  DialogTitle,
  Slide,
  List,
  ListItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SortDialog({
  setSortData,
  open,
  setOpen,
  handleClickOpen,
  handleSortDataChange,
}) {
  const sortItems = [
    {
      label: "by price -- low- high",
      value: "priceAsc",
      order: 1,
      sortField: "price",
    },
    {
      label: "by price -- high - low",
      value: "priceDesc",
      order: -1,
      sortField: "price",
    },
    {
      label: "By Name",
      value: "product_nameAsc",
      order: 1,
      sortField: "product_name",
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Typography>Sort</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        </DialogContent> */}
        <List sx={{ pt: 0 }}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {sortItems.map((items) => (
                <ListItem
                  button
                  key={items.value}
                  //   onClick={() => handleListItemClick(email)}
                >
                  {/* <ListItemText primary={items} /> */}

                  <FormControlLabel
                    value={items.value}
                    control={<Radio />}
                    label={items.label}
                    onClick={handleClose}
                    onChange={() => {
                      handleSortDataChange(items);
                    }}
                  />
                </ListItem>
              ))}
            </RadioGroup>
          </FormControl>
        </List>
      </Dialog>
    </div>
  );
}
