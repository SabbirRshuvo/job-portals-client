import React, { useContext } from "react";
import loginAnimation from "../assets/login.json";
import Lottie from "lottie-react";
import AuthContext from "../Provider/AuthContext";
import { useLocation, useNavigate } from "react-router";
const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const formData = { email, password };
    console.log(formData);
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96 lg:w-auto">
          <Lottie animationData={loginAnimation} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
