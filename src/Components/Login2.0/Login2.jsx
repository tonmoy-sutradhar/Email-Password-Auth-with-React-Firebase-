import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login2 = () => {
  const [successfull, setSuccessFull] = useState(false);
  const [loginError, setLoginError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // UseState
    setSuccessFull(false);
    setLoginError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        if (!result.user.emailVerified) {
          setLoginError("Please verify your Email.");
        } else {
          setSuccessFull(true);
        }
      })
      .catch((error) => {
        console.log("Error", error);
        setLoginError(error.message);
      });
  };
  return (
    <div className="max-w-lg rounded-2xl   mx-auto shadow-2xl">
      <form onSubmit={handleLogin} className="card-body py-12">
        <h1 className="text-5xl font-bold text-purple-600 my-4">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
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
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {successfull && (
        <p className="text-xl text-green-500 ml-36 -mt-7">
          Login Successfully Done.
        </p>
      )}
      {loginError && (
        <p className="text-xl text-red-500 ml-36 -mt-7">{loginError}</p>
      )}

      <p className="text-blue-500 font-thin ml-32 ">
        New to this website please{" "}
        <Link
          className="text-blue-700 text-sm font-bold border-b-2 border-blue-700"
          to="/signup"
        >
          SIGN UP
        </Link>
      </p>
    </div>
  );
};

export default Login2;
