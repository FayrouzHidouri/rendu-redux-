import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;
