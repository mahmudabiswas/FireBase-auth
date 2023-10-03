import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "./FireBase/Firebase.config";

const RegisterHero = () => {
  const [registerError, setRegisterError] = useState("");
  const [successFully, setSuccessFully] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    //   reset successful massage
    setRegisterError("");
    setSuccessFully("");
    if (password.length < 6) {
      setRegisterError("must be 6 character digit in input field");
      return;
    } else if (!/[0-9]/.test(password)) {
      setRegisterError("please enter a digit in your password field");
      return;
    }

    //   create auth email, password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccessFully("User Create successfully");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="m-16">
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Your Form</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmitForm}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <span
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "showPassword" : "password"}
                  </span>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {registerError && (
        <p className="text-red-700 text-5xl"> {registerError} </p>
      )}
      {successFully && (
        <p className="text-green-700 text-5xl"> {successFully} </p>
      )}
    </div>
  );
};

export default RegisterHero;
