import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Notify from "../Components/Notify";

import { config } from "../Components/GeneralFunction";

import axios from "axios";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BallTriangle } from "react-loader-spinner";

function Signin() {
  const navigator = useNavigate();

  const [user, setUser] = useState({
    email_address: "",
    password: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Swal.fire({
    //   // imageUrl: "/images/logo.png",
    //   // imageHeight: 200,

    //   icon: BallTriangle({
    //     color: "#4fa94d",
    //     height: 80,
    //     width: 80,
    //   }),
    // });

    const fd = new FormData();

    fd.append("email_address", user.email_address);
    fd.append("password", user.password);

    let url = "http://solidrockschool.com.ng/api/people/applicant/login";

    axios
      .post(url, fd, config)
      .then((response) => {
        if (response.data.status == 200) {
          Cookies.setItem("email", user.email_address);

          Cookies.setItem("token", response.data.token, {
            expires: response.data.expires_in,
          });

          navigator("/profile");
        } else {
          Notify({
            title: "Error",
            msg: response.data.message,
            type: "danger",
          });
        }
      })
      .catch((error) => {
        Notify({
          title: "Unexpected error",
          msg: `An unexpected error occurred: ${error}`,
          type: "danger",
        });
      });
  };

  return (
    <div>
      <Header page={"signin"} />
      <section className="clearfix job-bg user-page">
        <div className="container text-center">
          <div className="user-account-content">
            <div className="user-account">
              <h2>User Login</h2>

              <form action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    name="email_address"
                    value={user.email_address}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn">
                  Login
                </button>
              </form>

              <div className="user-option">
                <div className="checkbox pull-left">
                  <label for="logged">
                    <input type="checkbox" name="logged" id="logged" /> Keep me
                    logged in{" "}
                  </label>
                </div>
                <div className="pull-right forgot-password">
                  <a href="#">Forgot password</a>
                </div>
              </div>
            </div>
            <a href="#" className="btn-primary">
              Create a New Account
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Signin;
