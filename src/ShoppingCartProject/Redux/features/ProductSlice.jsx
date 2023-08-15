import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentStatus: "idle",
  error: null,
  products: [],
  cartItems: [],
};

const PRODUCT_URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(PRODUCT_URL);
    return response.data;
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    // Add the selected products to the cart arry
    addedToCart(state, action) {
      const clickedProduct = state.products.find(
        (product) => product.id === action.payload
      );

      clickedProduct.isAdded = true;
      clickedProduct.count = 1;
      clickedProduct.totalAmount = clickedProduct.price * clickedProduct.count;

      state.cartItems.push(clickedProduct);
    },

    // Remove the selected product from the cart
    removeFromCart(state, action) {
      const newItems = state.cartItems.filter(
        (product) => product.id !== action.payload
      );
      state.cartItems = newItems;

      const removedItem = state.products.find(
        (product) => product.id === action.payload
      );
      removedItem.isAdded = false;
    },

    // Add the amount of selected product
    addCountCartItems(state, action) {

      const addAmountProduct = state.cartItems.find( product => product.id === action.payload);
      addAmountProduct.count += 1;
      addAmountProduct.totalAmount = addAmountProduct.price * addAmountProduct.count

    },

    // Reduce the amount of selected products
    reduceCountCartItems(state, action) {

      const item = state.cartItems.find(
        // First find the excat object to modify
        (product) => product.id === action.payload

      );

      item.count -= 1; // reduce the count
      item.totalAmount = item.price * item.count; // update the amount of total price

      if (item.count === 0) {
        // if count = 0 remove from the cart

        const reducedItem = state.products.find(
          (product) => product.id === item.id
        ); // we find the item(product) to make it's isAdded value to be false again
        reducedItem.isAdded = false;

        const newItems = state.cartItems.filter(
          // and we filter the count 0 from the cart array
          (product) => product.id !== item.id
        );

        state.cartItems = newItems; // make new selected cart array;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.currentStatus = "loading";
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.currentStatus = "succeed";
        action.payload.map((product) => {
          product.isAdded = false;
        });
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.currentStatus = "failed";
        state.error = "There is an error";
      });
  },
});

export const currentStatus = (state) => state.product.currentStatus;
export const error = (state) => state.product.error;
export const selectAllProducts = (state) => state.product.products;
export const selectedCartProducts = (state) => state.product.cartItems;

export default ProductSlice.reducer;
export const { addedToCart, removeFromCart, reduceCountCartItems, addCountCartItems } =
  ProductSlice.actions;
