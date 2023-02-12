import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contentIsVisible: false,
  notification: null,
  loading: false,
  skeleton: false,
  productDetailsSkeleton:true,
  filterElementLoader: false,
  searchLoader: false,
  emailSendLoader: false,
  darkMode:false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.contentIsVisible = !state.contentIsVisible;
    },
    showNotification(state, action) {
      if (action.payload) {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      } else {
        state.notification = null;
      }
    },
    toggleLoader(state, action) {
      state.loading = !state.loading;
    },
    toggleDarkMode(state, action) {
      state.darkMode = action.payload;
    },
    toggleSkeleton(state, action) {
      state.skeleton = action.payload;
    },
    toggleProductDetailsSkeleton(state, action) {
      state.productDetailsSkeleton = action.payload;
    },
    filterElementLoader(state, action) {
      state.filterElementLoader = action.payload;
    },
    searchLoader(state, action) {
      state.searchLoader = action.payload;
    },
    emailSendLoader(state, action) {
      state.emailSendLoader = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
