import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottie from "../assets/registration.json";
import AuthContext from "../Provider/AuthContext";
const Register = () => {
  const { handleRegister } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const formData = { name, email, password };
    console.log(formData);
    handleRegister(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96 lg:w-auto">
          <Lottie animationData={registerLottie} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Username</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Username"
              />
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
              <button className="btn btn-info mt-4">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
