import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginDetail: "",
  loggedIn: false,
  errMsg: "",
  visitorModal: false,
  visitors: [],
  visitorsLoader:false,
  contactUsData: [],
  contactUsLoader:false,
  serviceRequestData: [],
  serviceRequestLoader:false,
  sentEmailData : [],
  unKnownVisitors:[],
  unKnownVisitorsLoading:false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loginDetails: (state, action) => {
      if (action.payload.status === 200) {
        state.loginDetail = "Logged In";
      } else {
        state.loginDetail = "Error";
      }
    },
    createProduct: (state, action) => {
      state.errMsg = action.payload;
    },
    loggedInStatus: (state, action) => {
      state.loggedIn = action.payload;
    },
    visitorStatus: (state, action) => {
      state.visitorModal = action.payload;
    },
    visitorLoaderStatus: (state, action) => {
      state.visitorsLoader = action.payload;
    },
    updateVisitorsList: (state, action) => {
      state.visitors = action.payload;
    },
    updateContactUsList: (state, action) => {
      state.contactUsData = action.payload;
    },
    updateContactUsLoader: (state, action) => {
      state.contactUsLoader = action.payload;
    },
    updateServiceRequestList: (state, action) => {
      state.serviceRequestData = action.payload;
    },
    updateServiceRequestLoader: (state, action) => {
      state.serviceRequestLoader = action.payload;
    },
    updateSentEmailList: (state, action) => {
      state.sentEmailData = action.payload;
    },
    updateUnknownVisitors: (state, action) => {
      state.unKnownVisitors = action.payload || [];
    },
    updateUnknownVisitorsLoading: (state, action) => {
      state.unKnownVisitorsLoading = action.payload;
    },
  },
});
export const adminActions = adminSlice.actions;
export default adminSlice;
