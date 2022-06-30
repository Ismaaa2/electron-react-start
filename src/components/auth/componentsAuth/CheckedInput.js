import React from "react";

export const CheckedInput = ({ register }) => {
  return (
    <>
      <input
        type="checkbox"
        id="checkbox-1-1"
        className="custom-checkbox"
        {...register("check", { required: false })}
      />
      <label htmlFor="checkbox-1-1">Recordar</label>
    </>
  );
};
