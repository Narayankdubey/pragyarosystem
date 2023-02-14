import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  SwipeableDrawer,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  CardActionArea,
} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CallIcon from "@mui/icons-material/Call";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTheme, styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { checkLoginStatus, logout } from "../../../store/admin-action";

import { uiActions } from "../../../store/ui-slice";

import "./style.css";
import Logo from "../../UI/logo";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const pages = [
  {
    link: "",
    title: "Home",
    icon: (
      <HomeIcon
        className="menu-icon"
        style={{
          backgroundImage: "linear-gradient(#81c784, #388e3c)",
          fontSize: "30px",
        }}
      />
    ),
  },
  {
    link: "products",
    title: "Products",
    icon: (
      <ProductionQuantityLimitsIcon
        className="menu-icon"
        style={{
          backgroundImage: "linear-gradient(#ce93d8, #ab47bc)",
          fontSize: "30px",
        }}
      />
    ),
  },
  {
    link: "contact",
    title: "Contact Us",
    icon: (
      <ContactMailIcon
        className="menu-icon"
        style={{
          backgroundImage: "linear-gradient(#ffb74d, #f57c00)",
          fontSize: "30px",
        }}
      />
    ),
  },
  {
    link: "service",
    title: "Service",
    icon: (
      <MiscellaneousServicesIcon
        className="menu-icon"
        style={{
          backgroundImage: "linear-gradient(#e57373, #d32f2f)",
          fontSize: "30px",
        }}
      />
    ),
  },
];
const settings = ["Settings", "Logout"];

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.admin);
  const { darkMode } = useSelector((state) => state.ui);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    dispatch(checkLoginStatus());
    // eslint-disable-next-line
  }, [loggedIn]);

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event &&
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSettingClick = (value) => {
    handleCloseUserMenu();
    if (value === "Logout") {
      dispatch(logout());
    }
  };

  return (
    <>
      {/* <h1 className="top-heading">Pragya RO System</h1> */}
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        padding={"8px 24px"}
        bgcolor={
          darkMode ? theme.palette.background.paper : theme.palette.primary.main
        }
      >
        {/* <Typography variant="h5" color={"white"}>Pragya Ro System</Typography> */}
        <Logo />
        {/* <FormGroup>
      <FormControlLabel
        control={}
        label={""}
        onChange={({target})=>dispatch(uiActions.toggleDarkMode(target.checked))}
      /></FormGroup> */}
        <MaterialUISwitch
          onChange={({ target }) =>
            dispatch(uiActions.toggleDarkMode(target.checked))
          }
        />
      </Box>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                borderRadius: "45px",
                padding: "5px",
                boxShadow: "0px 10px 11px black",
              }}
            >
              Pragya RO System
            </Typography> */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(false)}
                onOpen={() => {}}
                PaperProps={{
                  sx: {
                    width: 250,
                    borderRadius: "0px 25px 25px 0px",
                    borderRight: "10px solid #1976d2",
                    overflowX: "hidden",
                  },
                }}
              >
                <Box padding={3} display={"flex"} justifyContent={"center"}>
                  <Logo />
                </Box>
                {/* <Typography
                  variant="h6"
                  style={{
                    padding: 15,
                    fontSize: 17,
                    textAlign: "center",
                    fontWeight: 600,
                    color: "white",
                    backgroundImage: "linear-gradient(45deg, #f37880, #0a58ca)",
                    boxShadow: "inset 0px 0px 14px 0px #4a4949",
                  }}
                >
                  Pragya RO System
                </Typography> */}
                {/* <Divider /> */}
                <Button
                  onClick={() => setAnchorElNav(false)}
                  style={{
                    position: "absolute",
                    bottom: "50px",
                    right: "-17px",
                    backgroundColor: "#1976d2",
                    color: "white",
                    padding: 10,
                    minWidth: 0,
                    borderRadius: "90% 0px 0px 90%",
                    boxShadow: "-2px 0px 2px grey",
                    // transform:"rotate(90deg)",
                    zIndex: 10,
                  }}
                >
                  <ArrowBackIosIcon style={{ fontSize: "20px" }} />
                </Button>
                <List>
                  {pages.map((page, index) => {
                    return (
                      <CardActionArea
                        key={index}
                        style={{
                          width: "90%",
                          borderRadius: "0px 45px 45px 0px",
                          marginTop: "10px",
                        }}
                      >
                        <NavLink
                          to={"/" + page.link}
                          className="drawer-nav-menu"
                          onClick={() => setAnchorElNav(false)}
                        >
                          <ListItemIcon>{page.icon}</ListItemIcon>
                          <ListItemText primary={page.title} />
                        </NavLink>
                      </CardActionArea>
                    );
                  })}
                  <Divider style={{ marginTop: "15px" }} />
                  <div
                    className="contact-banner contact-drawer-nav"
                    // style={{ margin: "5px auto", flexDirection: "column"  }}
                  >
                    <Button
                      href="tel:8920310622"
                      variant="contained"
                      color="secondary"
                      startIcon={<CallIcon />}
                    >
                      8920310622
                    </Button>
                    <Button
                      href="https://wa.me/918920310622?text=I'm%20interested"
                      variant="contained"
                      color="success"
                      startIcon={<WhatsAppIcon />}
                    >
                      Whatsapp
                    </Button>
                  </div>
                </List>
              </SwipeableDrawer>
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                    <NavLink
                      to={"/" + page.link}
                      style={{
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                      <Typography textAlign="center">{page.title}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              {/* Pragya RO System */}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <NavLink
                  key={page.link}
                  to={"/" + page.link}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  style={{
                    marginLeft: "5px",
                    padding: "5px",
                    fontSize: "15px",
                    textDecoration: "none",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0px",
                    transition: "0.3s",
                    fontWeight: "bold",
                  }}
                >
                  {page.icon}
                  {page.title}
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                aria-label="delete"
                style={{ color: "white" }}
                onClick={() => navigate("/searchproduct")}
              >
                <SearchIcon />
              </IconButton>
              {!loggedIn ? (
                <a
                  href="https://wa.me/918920310622?text=I'm%20interested"
                  style={{ color: "white" }}
                >
                  <WhatsAppIcon />
                </a>
              ) : (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={() => handleSettingClick(setting)}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;
