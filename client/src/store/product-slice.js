import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  products: [],
  infoModal: false,
  filterElements: {},
  searchSuggestions: [],
  review: [],
  reviewLoading: false,
  likedReview: JSON.parse(localStorage.getItem("likedReview") || "[]"),
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductsList: (state, action) => {
      state.products = action.payload;
    },
    updateInfoModalStatus: (state, action) => {
      state.infoModal = action.payload;
    },
    updateProduct: (state, action) => {
      state.product = action.payload;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (e) => e._id !== action.payload._id
      );
    },
    updatefilterElements: (state, action) => {
      state.filterElements = action.payload;
    },
    updateSearchSuggestions: (state, action) => {
      state.searchSuggestions = action.payload;
    },
    updateReviewList: (state, action) => {
      state.review = action.payload;
    },
    updateReviewLoading: (state, action) => {
      state.reviewLoading = action.payload;
    },
    updateLikedReview: (state, action) => {
      const likedReview = JSON.parse(
        localStorage.getItem("likedReview") || "[]"
      );
      likedReview.push(action.payload);
      localStorage.setItem("likedReview", JSON.stringify(likedReview));
      state.likedReview = [...state.likedReview, action.payload];
    },
  },
});
export const productActions = productSlice.actions;
export default productSlice;
