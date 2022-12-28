import axios from "axios";
import Cookies from "js-cookie";

import { adminActions } from "./admin-slice";
import { productActions } from "./product-slice";
import authHeader from "../authHeader";
import { uiActions } from "./ui-slice";

// const baseURL = "http://localhost:4000/api/";
const baseURL = process.env.REACT_APP_API_BASE_URL;
// const baseURL = "https://pragyarosystem.onrender.com/api/";

export const adminLogin = (data) => {
  return async (dispatch) => {
    dispatch(uiActions.toggleLoader());
    const getData = async () => {
      const response = await axios.post(`${baseURL}login`, data, {
        headers: { "Content-type": "application/json" },
      });
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      if (data.status === 200) {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "success",
            message: "Logged In Successfully !",
          })
        );
        localStorage.setItem("jwt", data.data);
        dispatch(adminActions.loggedInStatus(true));
      }
      dispatch(adminActions.loginDetails(data));
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};

export const createProducts = (data) => {
  return async (dispatch) => {
    dispatch(uiActions.toggleLoader());
    const getData = async () => {
      const response = await axios.post(`${baseURL}products`, data, {
        headers: authHeader(),
      });
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success",
          message: "Product Added Successfully !",
        })
      );
      dispatch(adminActions.createProduct(data));
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      }
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};

export const checkLoginStatus = () => {
  return async (dispatch) => {
    dispatch(uiActions.toggleLoader());
    try {
      const auth = authHeader();
      if (auth) {
        dispatch(adminActions.loggedInStatus(true));
      } else {
        dispatch(adminActions.loggedInStatus(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("jwt");
      dispatch(adminActions.loggedInStatus(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveVisitor = (data) => {
  return async (dispatch) => {
    dispatch(uiActions.toggleLoader());
    const sendData = async () => {
      const response = await axios.post(`${baseURL}visitors`, data);
      // const response = await axios.post(`localhost:4000/visitors`, data);
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const responseData = await sendData();
      const visitorData = JSON.stringify(responseData.data);
      Cookies.set("visitorData", visitorData);
      dispatch(adminActions.visitorStatus(false));
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      }
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};

export const getAllVisitors = () => {
  return async (dispatch) => {
    // dispatch(uiActions.toggleLoader());
    const getData = async () => {
      const response = await axios.get(`${baseURL}visitors`, {
        headers: authHeader(),
      });
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      dispatch(adminActions.updateVisitorsList(data.data));
    } catch (error) {
      console.log(error);
      if (error.response) {
        // Request made and server responded
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      }
    } finally {
      // dispatch(uiActions.toggleLoader());
    }
  };
};

export const getAllContactUs = () => {
  return async (dispatch) => {
    // dispatch(uiActions.toggleLoader());
    const getData = async () => {
      const response = await axios.get(`${baseURL}api-contactus`, {
        headers: authHeader(),
      });
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      dispatch(adminActions.updateContactUsList(data.data));
    } catch (error) {
      console.log(error);
      if (error.response) {
        // Request made and server responded
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      }
    } finally {
      // dispatch(uiActions.toggleLoader());
    }
  };
};

export const updateContactUs = (id, data) => {
  return async (dispatch) => {
    // dispatch(uiActions.toggleLoader());
    const getData = async () => {
      const response = await axios.get(`${baseURL}api-contactus/${id}`, data, {
        headers: authHeader(),
      });
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      dispatch(adminActions.updateContactUsList(data.data));
    } catch (error) {
      console.log(error);
      if (error.response) {
        // Request made and server responded
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      }
    } finally {
      // dispatch(uiActions.toggleLoader());
    }
  };
};

export const getAllServiceRequests = () => {
  return async (dispatch) => {
    dispatch(adminActions.updateServiceRequestLoader(true))
    const getData = async () => {
      const response = await axios.get(`${baseURL}service`, {
        headers: authHeader(),
      });
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      dispatch(adminActions.updateServiceRequestList(data.data));
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      }
    } finally {
      dispatch(adminActions.updateServiceRequestLoader(false))
    }
  };
};

export const updateServiceRequest = (data) => {
  return async (dispatch) => {
    dispatch(adminActions.updateServiceRequestLoader(true))
    const getData = async () => {
      const response = await axios.patch(`${baseURL}service/${data?._id}`, data, {
        headers: authHeader(),
      });
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      // dispatch(adminActions.updateServiceRequestList(data.data));
    } catch (error) {
      console.log(error);
      if (error.response) {
        // Request made and server responded
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      }
    } finally {
      dispatch(adminActions.updateServiceRequestLoader(false))
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(uiActions.toggleLoader());
    const getData = async () => {
      const response = await axios.delete(`${baseURL}products/${id}`, {
        headers: authHeader(),
      });
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await getData();
      if (data.status === 200) {
        dispatch(productActions.deleteProduct(data.data));
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success",
          message: "Product Deleted Successfully !",
        })
      );
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      }
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};

export const sendAllEmail = (data) => {
  return async (dispatch) => {
    dispatch(uiActions.emailSendLoader(true));
    const sendMail = async () => {
      const response = await axios.post(`${baseURL}sendallemails`,data, {
        headers: authHeader(),
      });
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const data = await sendMail();
      if (data.status === 200) {
        dispatch(adminActions.updateSentEmailList(data.data));
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success",
          message: "Email sent Successfully !",
        })
      );
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: error.response.data,
          })
        );
      }
    } finally {
      dispatch(uiActions.emailSendLoader(false));
    }
  };
};

