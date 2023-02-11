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
import MenuItem from "@mui/material/MenuItem";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CallIcon from "@mui/icons-material/Call";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { checkLoginStatus, logout } from "../../../store/admin-action";

import "./style.css";

const pages = [
  {
    link: "home",
    title: "Home",
    icon: <HomeIcon className="menu-icon" style={{backgroundImage:"linear-gradient(white, #1b5e20)", fontSize:"30px"}}/>,
  },
  {
    link: "products",
    title: "Products",
    icon: <ProductionQuantityLimitsIcon className="menu-icon" style={{backgroundImage:"linear-gradient(white, #e65100)", fontSize:"30px"}}/>,
  },
  {
    link: "contact",
    title: "Contact Us",
    icon: <ContactMailIcon className="menu-icon" style={{backgroundImage:"linear-gradient(white, #7b1fa2)", fontSize:"30px"}}/>,
  },
  {
    link: "service",
    title: "Service",
    icon: <MiscellaneousServicesIcon className="menu-icon" style={{backgroundImage:"linear-gradient(white, #c62828)", fontSize:"30px"}}/>,
  },
];
const settings = ["Settings", "Logout"];

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.admin);
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
      <h1 className="top-heading">Pragya RO System</h1>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
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
            </Typography>

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
                    overflowX:"hidden"
                  },
                }}
              >
                <Typography
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
                </Typography>
                <Divider />
                <Button 
                onClick={() => setAnchorElNav(false)}
                style={{
                  position:"absolute",
                   top:"350px",right:"-17px",
                   backgroundColor:"#1976d2",
                   color:"white",
                   padding:10,
                   minWidth:0,
                   borderRadius:"90% 0px 0px 90%",
                   boxShadow:"-2px 0px 2px grey",
                   fontSize:"30px",
                   zIndex:10,
                }}><ArrowBackIosIcon /></Button>
                <List>
                  {pages.map((page, index) => {
                    return (
                      <CardActionArea
                        key={index}
                        style={{
                          width: "90%",
                          borderRadius: "0px 45px 45px 0px",
                          marginTop:"10px"
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
              Pragya RO System
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
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    gap:"0px",
                    transition:"0.3s",
                    fontWeight:"bold"
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
