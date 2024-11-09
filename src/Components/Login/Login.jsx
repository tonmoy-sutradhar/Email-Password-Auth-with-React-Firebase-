import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../Firebase/Firebase.init";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setErrorMessage("");
    setSuccess(false);

    if (password < 6) {
      setErrorMessage("Password must be more than 6 char.");
      return;
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!regex.test(password)) {
      setErrorMessage(
        "Password must be containe one char, one number, one special char"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSignUp} className="card-body">
        <h1 className="text-5xl font-bold text-purple-600">Sing Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-purple-600">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-purple-600">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a
              href="#"
              className="label-text-alt link link-hover text-purple-600"
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      {errorMessage && (
        <p className="text-xl font-bold text-center text-red-600">
          {errorMessage}
        </p>
      )}

      {success && (
        <p className="text-xl text-green-600 ml-28">
          Sing Up Successfully. Hurray..!!!
        </p>
      )}
    </div>
  );
};

export default Login;
