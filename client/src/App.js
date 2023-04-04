import { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blue, grey } from '@mui/material/colors';

import "./App.css";
import Header from "./component/products/header";
import Products from "./component/products/product";
import ProductDetails from "./component/products/productDetails";
import SearchProduct from "./component/products/searchProduct";
import Contact from "./component/products/contact";
import Service from "./component/products/service";
import Footer from "./component/products/footer";
import Login from "./component/admin/login";
import AdminHome from "./component/admin/home";
import CreateProduct from "./component/admin/createProducts";

import Notification from "./component/UI/Notification";
import PageLoader from "./component/UI/PageLoader";
import HomeSkeleton from "./component/UI/skeleton/HomeSkeleton";

import VisitorModal from "./component/products/visitorModal";
import InfoModal from "./component/products/infoModal";

import { checkLoginStatus, saveVisitor, saveVisitorsCount } from "../src/store/admin-action";
import { adminActions } from "../src/store/admin-slice";
import authHeader from "./authHeader";

const Home = lazy(() => import("./component/products/home"));

function App() {
  const { loggedIn } = useSelector((state) => state.admin);
  const notification = useSelector((state) => state.ui.notification);
  const loader = useSelector((state) => state.ui.loading);
  const {darkMode} = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: blue,
            divider: blue[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: grey,
            divider: grey[700],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });

  const darkTheme = createTheme(getDesignTokens(darkMode ? "dark" : "light"));

  useEffect(() => {
    dispatch(saveVisitorsCount())
    setTimeout(() => checkVisitor(), 15000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(checkLoginStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  const checkVisitor = () => {
    const auth = authHeader();
    if (!auth) {
      let newcookieValue = Cookies.get("visitorData");
      let sendData = {};
      if (newcookieValue) {
        newcookieValue = JSON.parse(newcookieValue);
        const { name, mobile } = newcookieValue;
        sendData.name = name;
        sendData.mobile = mobile;
        dispatch(saveVisitor(sendData));
      } else {
        dispatch(adminActions.visitorStatus(true));
      }
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className="App">
      {notification && !loader && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {loader && <PageLoader />}
      <VisitorModal />
      <InfoModal />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/searchproduct" element={<SearchProduct />} />
        {/* <Route
          path="/pragyarosystem"
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/pragyarosystem/home"
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <Home />
            </Suspense>
          }
        /> */}
        {/* <Route path="/pragyarosystem/products" element={<Products />} />
        <Route path="/pragyarosystem/contact" element={<Contact />} />
        <Route path="/pragyarosystem/service" element={<Service />} /> */}

        <Route path="/admin" element={<Login />} />
        {loggedIn && (
          <>
            <Route path="/admin/home" element={<AdminHome />} />
          </>
        )}
        <Route path="/admin/*" element={<Login />} />
        <Route path="/product/create" element={<CreateProduct />} />

        <Route
          path="*"
          element={() => (
            <Suspense fallback={<HomeSkeleton />}>
              <Home />
            </Suspense>
          )}
        />
      </Routes>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
