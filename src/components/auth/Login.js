import React from "react";
import { useForm } from "react-hook-form";

import { handleEmailValidation } from "../../helpers/form";
import { CheckedInput } from "./componentsAuth/CheckedInput";
import { ErrorEmail } from "./componentsAuth/ErrorEmail";
import { ErrorPassword } from "./componentsAuth/ErrorPassword";

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input
        className="text"
        id="email"
        {...register("email", {
          required: true,
          validate: handleEmailValidation,
        })}
      />
      <span>Email</span>
      <ErrorEmail errors={errors} />



      <input
        type="password"
        id="password"
        className="text"
        {...register("password", { required: true, minLength: 5 })}
      />
      <span>password</span>
      <ErrorPassword errors={errors} />

      <br />

      <CheckedInput register={register} />

      <button className="signin" type="submit">
        Sign In
      </button>

      <hr />
    </form>
  );
};
