import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import Select from "react-select";
import { config } from "../Components/GeneralFunction";

import Notify from "../Components/Notify";

import cookies from "js-cookies";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Signup = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    telephone: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
    telephone: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    let err = error;

    if (user.password.length < 8) {
      isValid = false;
      err.password = "Please enter a minimum of 8 characters";
    }

    if (user.password !== user.confirmPassword) {
      isValid = false;
      err.confirmPassword = "Passwords do not match";
    }

    setError(err);

    if (isValid) {
      const fd = new FormData();

      fd.append("fullname", user.fullname);
      fd.append("email_address", user.email);
      fd.append("password", user.password);
      fd.append("confirmPassword", user.confirmPassword);
      fd.append("city", user.city);
      fd.append("telephone", user.telephone);

      let url = "http://solidrockschool.com.ng/api/people/application/create";

      axios
        .post(url, fd, config)
        .then((response) => {
          if (response.data.status == 200) {
            Notify({
              title: "Saved",
              msg: response.data.message,
              type: "success",
            });
          } else {
            Notify({
              title: "error",
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
    }
  };

  const Alert = () => {
    cookies.setItem("name", "Joshua");

    Notify({
      title: "Saved",
      msg: "Cookies saved successfully",
      type: "success",
    });
  };

  return (
    <div>
      <Header page={"signup"} />

      <section className="job-bg user-page">
        <div className="container  text-center">
          <div className="user-account-content">
            <div className="user-account job-user-account">
              <h2>Create An Account</h2>
              {/* <ul className="nav nav-tabs text-center" role="tablist">
                <li role="presentation">
                  <a
                    className="active"
                    href="#find-job"
                    aria-controls="find-job"
                    role="tab"
                    data-toggle="tab"
                  >
                    Find A Job
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#post-job"
                    aria-controls="post-job"
                    role="tab"
                    data-toggle="tab"
                  >
                    Post A Job
                  </a>
                </li>
              </ul> */}
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active show"
                  id="find-job"
                >
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="fullname"
                        value={user.fullname}
                        onChange={handleChange}
                        // required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Id"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        // required
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
                        // required
                      />
                      {error.password ? <span>{error.password}</span> : []}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        // required
                      />
                      {error.confirmPassword ? (
                        <span>{error.confirmPassword}</span>
                      ) : (
                        []
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                        name="telephone"
                        value={user.telephone}
                        onChange={handleChange}
                        // required
                      />
                    </div>

                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />

                    {/* <select
                      className="form-control"
                      name="city"
                      value={user.city}
                      onChange={handleChange}
                      // required
                    >
                      <option value="#">Select City</option>
                      <option value="London UK">London, UK</option>
                      <option value="New York, USA">New York, USA</option>
                      <option value="Seoul, Korea">Seoul, Korea</option>
                      <option value="Beijing, China">Beijing, China</option>
                    </select> */}

                    <div className="checkbox">
                      <label className="pull-left checked" for="signing">
                        <input type="checkbox" name="signing" id="signing" /> By
                        signing up for an account you agree to our Terms and
                        Conditions{" "}
                      </label>
                    </div>
                    <button type="submit" onClick={Alert} className="btn">
                      Alert
                    </button>
                    <button type="submit" className="btn">
                      Registration
                    </button>
                  </form>
                </div>

                {/* <div role="tabpanel" className="tab-pane" id="post-job">
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Employer Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Id"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="checkbox">
                      <label className="pull-left checked" for="signing-2">
                        <input
                          type="checkbox"
                          name="signing-2"
                          id="signing-2"
                        />
                        By signing up for an account you agree to our Terms and
                        Conditions
                      </label>
                    </div>
                    <button type="submit" className="btn">
                      Registration
                    </button>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
