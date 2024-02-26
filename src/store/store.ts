import { configureStore } from "@reduxjs/toolkit";
import { CalcultorSlice2 } from "./featurs/calcuatorSlices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: CalcultorSlice2,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
