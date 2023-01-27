import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; },
    incrementSome: (state, action) => {
      state.value += action.payload;
    },
    decrementSome: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementSome,
  decrementSome,
} = counterSlice.actions;

export default counterSlice.reducer;
