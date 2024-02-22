import { configureStore } from "@reduxjs/toolkit";
import { ColculateSlider } from "./featurs/cacultate";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: ColculateSlider.reducer,
});

export const useAppDispath: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
