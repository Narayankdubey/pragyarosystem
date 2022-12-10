import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import adminSlice from "./admin-slice";
import uiSlice from "./ui-slice";

export default configureStore({
  reducer: {
    product: productSlice.reducer,
    admin: adminSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
