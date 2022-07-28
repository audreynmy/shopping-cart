import { createSlice, configureStore } from "@reduxjs/toolkit";

const initalCartState = {
  items: {},
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
      if(state.items[action.payload]){
        state.items[action.payload]++
      }else{
        state.items[action.payload] = 1
      }

      state.amount++
    },
    removeFromCart(state, action) {
      state.items[action.payload]--      
      state.amount--
    }
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  }  
});

export const cartActions = cartSlice.actions;

export default store;
