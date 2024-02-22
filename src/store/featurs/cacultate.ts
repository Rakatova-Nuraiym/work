import { createSlice } from "@reduxjs/toolkit";

export interface colculate {
  id: number;
  num1: number;
  num2: number;
}

export interface mainCulculate {
  colculate2: colculate[];
}

const initialState: mainCulculate = {
  colculate2: [],
};

export const ColculateSlider = createSlice({
  name: "cul",
  initialState,
  reducers: {
    addColc: (state, action) => {
      
    },
  },
});

export default ColculateSlider.reducer;
export const { addColc } = ColculateSlider.action;
