import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authRegisterWithEmailPassword } from "../../actions/authActions";
import { handleEmailValidation } from "../../helpers/form";
import { CheckedInput } from "./componentsAuth/CheckedInput";
import { ErrorEmail } from "./componentsAuth/ErrorEmail";
import { ErrorName } from "./componentsAuth/ErrorName";
import { ErrorPassword } from "./componentsAuth/ErrorPassword";

export const Register = () => {
 
  const dispatch = useDispatch();

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);

    if (data.check) localStorage.setItem("email-music", data.email);

    //TODO: Dispatch
    dispatch(authRegisterWithEmailPassword( data ))

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="text"
        id="name"
        {...register("name", { required: true, minLength: 2 })}
      />
      <span>Nombre</span>
      <ErrorName errors={errors} />
      <br />

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

      <br />

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
        Sign Up
      </button>

      <hr />
    </form>
  );
};
