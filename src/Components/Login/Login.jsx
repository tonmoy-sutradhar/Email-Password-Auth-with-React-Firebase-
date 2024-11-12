import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// This is SIGN-UP

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);

    setErrorMessage("");
    setSuccess(false);

    if (password < 6) {
      setErrorMessage("Password must be more than 6 char.");
      return;
    }

    if (!terms) {
      setErrorMessage("Please Accept Terms & Condition");
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

        // send email varificaiton
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Email verificaiton sent");
        });
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
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-purple-600">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="text-2xl absolute right-4 top-12"
          >
            {showPassword ? (
              <IoMdEyeOff></IoMdEyeOff>
            ) : (
              <IoEyeSharp></IoEyeSharp>
            )}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        <div className="form-control ">
          <label className="cursor-pointer label justify-start">
            <input
              type="checkbox"
              name="terms"
              className="checkbox checkbox-success"
            />
            <span className="label-text ml-2">Accept Terms and Condition</span>
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
          {/* {toast.success("Sign Up successfully")} */}
        </p>
      )}

      <p className="text-blue-500 font-thin ml-32 ">
        Already have an Account Please{" "}
        <Link
          className="text-blue-700 text-sm font-bold border-b-2 border-blue-700"
          to="/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Login;
