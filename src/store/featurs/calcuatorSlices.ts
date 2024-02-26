import { createSlice } from "@reduxjs/toolkit";

export interface calculator {
  num1: number;
  num2: number;
}
export interface mainCalculator {
  calculator2: calculator[];
}

const initialState: mainCalculator = {
  calculator2: [],
};

const CalcultorSlice = createSlice({
  name: "calculaitor",
  initialState,
  reducers: {
    Increment: (state, action) => {
      state.calculator2 = action.payload.values;
    },
    Decrement: (state, action) => {
      state.calculator2 = action.payload.values;
    },
    Multiplication: (state, action) => {
      state.calculator2 = action.payload.values;
    },
    Devide: (state, action) => {
      state.calculator2 = action.payload.values;
    },
    Surplus: (state, action) => {
      state.calculator2 = action.payload.values;
    },
  },  
});

export const CalcultorSlice2 = CalcultorSlice.reducer;
export const { Increment, Decrement, Multiplication, Devide, Surplus } =
  CalcultorSlice.actions;
