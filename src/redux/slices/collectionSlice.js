import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedItems: [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    savedItems: (state, action) => {
      const item = action.payload;

      const alreadySaved = state.savedItems.some(
        (saved) => saved.id === item.id && saved.type === item.type,
      );

      if (!alreadySaved) {
        state.savedItems.push(item);
      }
    },

    removedSavedItem: (state, action) => {
      const { id, type } = action.payload;

      state.savedItems = state.savedItems.filter(
        (item) => !(saved.id === id && saved.type === type),
      );
    },
  },
});

export const { savedItems, removedSavedItem } = collectionSlice.actions;
export default collectionSlice.reducer;
