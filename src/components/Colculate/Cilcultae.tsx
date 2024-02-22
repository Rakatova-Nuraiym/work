import React, { useState } from "react";
import { useAppDispath, useAppSelector } from "../../store/stote";
import { addColc } from "../../store/featurs/cacultate";
// import { Result } from "../../store/featurs/cacultate";

const Cilcultae = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const dispatch = useAppDispath();

  const cul = useAppSelector((state) => state.colculate2);

  const Solve = () => {
    dispatch(addColc(value1, value2));
  };
  return (
    <div>
      <input
        type="text"
        value={value1}
        onClick={(e) => setValue1(e.target.value)}
      />
      <input
        type="text"
        value={value2}
        onClick={(e) => setValue2(e.target.value)}
      />

      <button onClick={Solve}>solve</button>
    </div>
  );
};

export default Cilcultae;
