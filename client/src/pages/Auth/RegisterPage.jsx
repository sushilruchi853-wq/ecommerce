import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddres] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, phone, address);
    toast.success("Sushil loves RRRUCHHIIIII");
  };

  return (
    <Layout title={"register - Suruchi"}>
      <div className="auth-container">
        <div className="auth-card">
          <h2>Create Account</h2>
          <p>Join us and start shopping amazing products</p>
          <form onSubmit={handelSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setaddres(e.target.value)}
                className="form-control"
                id="address"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2">
              Register
            </button>
          </form>
          <div className="auth-toggle">
            Already have an account? <a href="/login">Login here</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
