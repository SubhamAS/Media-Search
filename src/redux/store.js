import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import collectionReducer from "./slices/collectionSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    collection: collectionReducer,
  },
});
