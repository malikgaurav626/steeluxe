import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  bikes: [
    {
      tag: "Bicycles",
      name: "Kryo X26 MTB - Model K",
      price: 350,
      src: "/b1.webp",
    },
    {
      tag: "Bicycles",
      name: "Kryo X26 MTB - Model X",
      price: 350,
      src: "/b2.webp",
    },
    {
      tag: "Bicycles",
      name: "Kryo X26 MTB - Model Y",
      price: 350,
      src: "/b3.webp",
    },
    {
      tag: "Bicycles",
      name: "Kryo X26 MTB - Model Z",
      price: 350,
      src: "/b4.webp",
    },
  ],
  isActive: false,
};

const counterSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    setBikes(state, action) {
      state.bikes = action.payload;
    },
    setIsActive(state, action) {
      state.isActive = action.payload;
    },
  },
});

export const { setCart, setBikes, setIsActive } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;
