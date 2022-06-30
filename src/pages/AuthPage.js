import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

import "../css/auth.css";

export const AuthPage = () => {

  useSelector((state) => console.log(state));
  
  const [login, setLogin] = useState(true);

  return (
    <div className="auth">
      <div className="login">
        <div className="login-header">
          <h2
            className={login ? "active" : "nonactive"}
            onClick={() => setLogin(true)}
          >
            {" "}
            sign in{" "}
          </h2>
          <h2
            className={login ? "nonactive" : "active"}
            onClick={() => setLogin(false)}
          >
            {" "}
            sign up{" "}
          </h2>
        </div>
        {login ? <Login /> : <Register />}
      </div>
    </div>
  );
};
