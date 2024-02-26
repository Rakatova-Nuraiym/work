import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";

import scss from "./culculator.module.scss";
import {
  Decrement,
  Devide,
  Increment,
  Multiplication,
  Surplus,
} from "../../store/featurs/calcuatorSlices";

const Culculator = () => {
  const dispatch = useAppDispatch();
  const calculator = useAppSelector((state) => state.calculator2);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const increment = () => {
    dispatch(Increment({ values: +value1 + +value2 }));
    setValue1(calculator.toString());
    setValue2("");
  };
  const decrement = () => {
    dispatch(Decrement({ values: +value1 - +value2 }));
    setValue1(calculator.toString());
    setValue2("");
  };
  const multiplication = () => {
    dispatch(Multiplication({ values: +value1 * +value2 }));
    setValue1(calculator.toString());
    setValue2("");
  };
  const devide = () => {
    dispatch(Devide({ values: +value1 / +value2 }));
    setValue1(calculator.toString());
    setValue2("");
  };
  const surplus = () => {
    dispatch(Surplus({ values: +value1 % +value2 }));
    setValue1(calculator.toString());
    setValue2("");
  };

  return (
    <div className={scss.Culculator}>
      <div className={scss.minicalc}>
        <div className={scss.inputs}>
          <input
            placeholder="0"
            type="text"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
          <input
            placeholder="0"
            type="text"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
        </div>

        <div className={scss.buttons}>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={multiplication}>*</button>
          <button onClick={devide}>/</button>
          <button onClick={surplus}>%</button>
        </div>

        <h1>{calculator}</h1>
      </div>
    </div>
  );
};

export default Culculator;

