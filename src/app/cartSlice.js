import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const initialState = {
  cartItems: [], // Array to hold cart items
  totalPrice: 0, // The total price of items in the cart
  totalQuantity: 0, // Total number of items in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id)

      if(existingItem){
      toast.info("Already added to Cart")
      }else{
          state.cartItems.push({...action.payload, quantity: 1})
          state.totalQuantity += 1
          toast.success("Added to cart successfully")
      }
    },
    incrementItem:(state, action) => {
      const existingItem = state.cartItems.findIndex(item => item.id === action.payload)
      if(existingItem != -1){
          state.cartItems[existingItem].quantity += 1
          state.totalQuantity += 1
      }
  },

  decrementItem:(state, action) => {
      const existingItem = state.cartItems.findIndex(item => item.id === action.payload)
      if(existingItem != -1 && state.cartItems[existingItem].quantity > 1){
          state.cartItems[existingItem].quantity -= 1
          state.totalQuantity -= 1
      }else if (existingItem != -1 && state.cartItems[existingItem].quantity === 1){
          state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);
          state.totalQuantity -= 1;
      }
  },
  removeItem:(state, action) => {
      const existingItem = state.cartItems.findIndex(item => item.id === action.payload)
      if(existingItem != -1){
          state.totalQuantity -=  state.cartItems[existingItem].quantity
          state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);
      }
  },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addItemToCart, decrementItem, removeItem , incrementItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;