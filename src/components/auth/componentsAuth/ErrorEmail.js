import React from "react";

export const ErrorEmail = ({ errors }) => {
  return (
    <>
      {errors.email?.type === "required" && (
        <p className="alert-red">El email es requerido</p>
      )}
      {errors.email?.type === "validate" && (
        <p className="alert-red">El email no es válido</p>
      )}
    </>
  );
};
