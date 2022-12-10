import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { TextField, InputAdornment, IconButton, Paper } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import SimpleLoader from "../../UI/searchLoader";

import { getSearchSuggestions } from "../../../store/product-action";

const SearchProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchSuggestions } = useSelector((state) => state.product);
  const { searchLoader } = useSelector((state) => state.ui);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchInput) {
        dispatch(getSearchSuggestions(searchInput));
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  const searchChangeHandler = ({ target }) => {
    setSearchInput(target.value);
  };

  const searchButtonHandle = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/products",
      search: searchInput,
    });
  };

  return (
    <div style={{ minHeight: "calc(100% - 100px)" }}>
      <Paper
        component={"form"}
        onSubmit={searchButtonHandle}
        style={{
          width: "100%",
          padding: 5,
          marginBottom: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#efefef",
        }}
      >
        <TextField
          id="standard-basic"
          type="search"
          label="Type to Search"
          placeholder="Search for Name,Technology,Colour,Booster Pump"
          size="small"
          autoFocus
          // variant="standard"
          autoComplete="off"
          value={searchInput}
          onChange={searchChangeHandler}
          style={{
            width: "100%",
            // margin: "auto",
            // padding: "5px 10px",
            maxWidth: "600px",
            borderRadius: 8,
            backgroundColor: "white",
            // boxShadow: "0px 0px 5px grey inset",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  aria-label="search button"
                  // onClick={searchButtonHandle}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <SimpleLoader display={searchLoader} />
        <nav aria-label="secondary mailbox folders">
          <List>
            {searchSuggestions.map((item, index) => (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  component="button"
                  onClick={() => {
                    setSearchInput(item);
                    navigate({
                      pathname: "/products",
                      search: item,
                    });
                  }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
      {/* <Products searchQuery={searchInput} /> */}
    </div>
  );
};

export default SearchProduct;
