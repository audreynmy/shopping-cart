import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {
  items: [],
  showCart: true,
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalCartState,
  reducers: {
    toggleShowCart(state){
      state.showCart = !state.showCart
    },
    addToCart(state, action){
      const modifiedItem = state.items.find((item) => item.title === action.payload.title)

      if(modifiedItem){
        modifiedItem.quantity++
        modifiedItem.totalPrice = modifiedItem.totalPrice + action.payload.price

      }else{
        state.items.push({
          title: action.payload.title,
          quantity: 1,
          totalPrice: action.payload.price,
          price: action.payload.price
        })
      }

      state.amount++
    },
    removeFromCart(state, action) {
      const modifiedItem = state.items.find((item) => item.title === action.payload)

      if(modifiedItem.quantity === 1){
        state.items = state.items.filter((item) => item.title !== action.payload)
      }

      if(modifiedItem){
        modifiedItem.quantity--
        modifiedItem.totalPrice = modifiedItem.totalPrice - modifiedItem.price
      }

      state.amount--
      
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer