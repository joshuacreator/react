import React, { useState } from "react";

import HeaderComp from "../Components/Header";
import FooterComp from "../Components/Footer";
import { config } from "../Components/GeneralFunction";
import Notify from "../Components/Notify";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";

function JobPost() {
  const navigator = useNavigate();

  const [post, setPost] = useState({
    jobCategory: "",
    jobType: "",
    jobTitle: "",
    jobDescription: "",
    jobLocation: "",
    jobMinSalary: "",
    jobMaxSalary: "",
    experience: "",
    jobFunction: "",
    industry: "",
    companyName: "",
    companyEmailAddress: "",
    companyPhoneNumber: "",
    companyAddress: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Swal.fire({
      imageUrl: "/images/logo.png",
      imageHeight: 200,
    });

    const fd = new FormData();

    // fd.append("slug", post.);
    // fd.append("category_code", post.);
    // fd.append("company_code", post.);
    fd.append("job_type", post.jobType);
    fd.append("experience", post.experience);
    fd.append("description", post.jobDescription);
    // fd.append("fees", post.);
    // fd.append("staff", post.);
    fd.append("location", post.jobLocation);
    fd.append("min_salary", post.jobMinSalary);
    fd.append("max_salary", post.jobMaxSalary);
    // fd.append("closing_date", post.);
    fd.append("title", post.jobTitle);

    let url = "http://solidrockschool.com.ng/api/job/add";

    axios
      .post(url, fd, config)
      .then((response) => {
        if (response.data.status == 200) {
          Notify({
            title: "Job created successfully",
            msg: response.data.message,
            type: "success",
          });

          // Cookies.setItem("email", user.email_address);

          // Cookies.setItem("token", response.data.token, {
          //   expires: response.data.expires_in,
          // });

          // navigator("/profile");
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
      <HeaderComp page="post" />

      <section className=" job-bg ad-details-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>Job Post </li>
            </ol>
            <h2 className="title">Post Your Job</h2>
          </div>

          <div className="job-postdetails">
            <div className="row">
              <div className="col-lg-8">
                <form action="#" onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="section postdetails">
                      <h4>
                        Post Your Job
                        <span className="pull-right">* Mandatory Fields</span>
                      </h4>
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Job Category
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">
                                Select a category
                              </span>{" "}
                              <i className="fa fa-angle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Select a category</a>
                              </li>
                              <li>
                                <a href="#">Software Engineer</a>
                              </li>
                              <li>
                                <a href="#">Program Development</a>
                              </li>
                              <li>
                                <a href="#">Project Manager</a>
                              </li>
                              <li>
                                <a href="#">Graphics Designer</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3">
                          Job Type<span className="required">*</span>
                        </label>
                        <div className="col-sm-9 user-type">
                          <input
                            type="radio"
                            name="sellType"
                            value="full-time"
                            id="full-time"
                          />{" "}
                          <label for="full-time">Full Time</label>
                          <input
                            type="radio"
                            name="sellType"
                            value="part-time"
                            id="part-time"
                          />{" "}
                          <label for="part-time">Part Time</label>
                          <input
                            type="radio"
                            name="sellType"
                            value="freelance"
                            id="freelance"
                          />{" "}
                          <label for="freelance">Freelance</label>
                          <input
                            type="radio"
                            name="sellType"
                            value="contract"
                            id="contract"
                          />{" "}
                          <label for="contract">Contract</label>
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Title for your job<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ex, Human Resource Manager"
                            name="jobTitle"
                            value={post.jobTitle}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row form-group item-description">
                        <label className="col-sm-3 label-title">
                          Description<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            className="form-control"
                            id="textarea"
                            placeholder="Write few lines about your jobs"
                            rows="8"
                            name="jobDescription"
                            onChange={handleChange}
                            value={post.jobDescription}
                          ></textarea>
                        </div>
                      </div>
                      <div className="row characters">
                        <div className="col-sm-9 col-sm-offset-3">
                          <p>5000 characters left</p>
                        </div>
                      </div>
                      <div className="row form-group add-title location">
                        <label className="col-sm-3 label-title">
                          Location<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown pull-left">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">Country</span>{" "}
                              <i className="fa fa-angle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Argentina</a>
                              </li>
                              <li>
                                <a href="#">Australia</a>
                              </li>
                              <li>
                                <a href="#">Belgium</a>
                              </li>
                              <li>
                                <a href="#">Brazil</a>
                              </li>
                              <li>
                                <a href="#">Cambodia</a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown category-dropdown pull-right">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">State</span>{" "}
                              <i className="fa fa-angle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">State 1</a>
                              </li>
                              <li>
                                <a href="#">State 2</a>
                              </li>
                              <li>
                                <a href="#">State 3</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group select-price">
                        <label className="col-sm-3 label-title">
                          Salary<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <label>$USD</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Min"
                            name="jobMinSalary"
                            onChange={handleChange}
                            value={post.jobMinSalary}
                          />
                          <span>-</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Max"
                            name="jobMaxSalary"
                            onChange={handleChange}
                            value={post.jobMaxSalary}
                          />
                          <input
                            type="radio"
                            name="price"
                            value="negotiable"
                            id="negotiable"
                          />
                          <label for="negotiable">Negotiable </label>
                        </div>
                      </div>
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Salary Type<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">Per Hour</span>{" "}
                              <i className="fa fa-angle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Per Hour</a>
                              </li>
                              <li>
                                <a href="#">Daily</a>
                              </li>
                              <li>
                                <a href="#">Monthly</a>
                              </li>
                              <li>
                                <a href="#">Yearly</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Exprience<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">Mid Level</span>{" "}
                              <i className="fa fa-angle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Entry Level</a>
                              </li>
                              <li>
                                <a href="#">Mid Level</a>
                              </li>
                              <li>
                                <a href="#">Mid-Senior Level</a>
                              </li>
                              <li>
                                <a href="#">Top Level</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group brand-name">
                        <label className="col-sm-3 label-title">
                          Job Function<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="human, reosurce, job, hrm"
                            name="jobFunction"
                            onChange={handleChange}
                            value={post.jobFunction}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="section company-information">
                      <h4>Company Information</h4>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Industry<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="industry"
                            className="form-control"
                            onChange={handleChange}
                            value={post.industry}
                            placeholder="Marketing and Advertising"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Company Name<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="companyName"
                            className="form-control"
                            onChange={handleChange}
                            value={post.companyName}
                            placeholder="ex, Jhon Doe"
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">Email ID</label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            name="companyEmailAddress"
                            className="form-control"
                            placeholder="ex, jhondoe@mail.com"
                            onChange={handleChange}
                            value={post.companyEmailAddress}
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Mobile Number<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="companyPhoneNumber"
                            className="form-control"
                            onChange={handleChange}
                            value={post.companyPhoneNumber}
                            placeholder="ex, +912457895"
                          />
                        </div>
                      </div>
                      <div className="row form-group address">
                        <label className="col-sm-3 label-title">
                          Address<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="companyAddress"
                            className="form-control"
                            onChange={handleChange}
                            value={post.companyAddress}
                            placeholder="ex, alekdera House, coprotec, usa"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="section">
                      <h4>Make Your Post Premium</h4>
                      <p>
                        More replies means more interested buyers. With lots of
                        interested buyers, you have a better chance of selling
                        for the price that you want.<a href="#">Learn more</a>
                      </p>
                      <ul className="premium-options">
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-one"
                            id="day-one"
                          />
                          <label for="day-one">Regular Post</label>
                          <span>$20.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-two"
                            id="day-two"
                          />
                          <label for="day-two">Regular Post</label>
                          <span>$30.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-three"
                            id="day-three"
                          />
                          <label for="day-three">Top Post for 7 days</label>
                          <span>$50.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-four"
                            id="day-four"
                          />
                          <label for="day-four">Daily Bump Up for 7 days</label>
                          <span>$100.00</span>
                        </li>
                      </ul>
                    </div>
                    <div className="checkbox section agreement">
                      <label for="send">
                        <input type="checkbox" name="send" id="send" />
                        You agree to our <a href="#">Terms of Use</a> and{" "}
                        <a href="#">Privacy Policy</a> and acknowledge that you
                        are the rightful owner of this item and using Jobs to
                        find a genuine buyer.
                      </label>
                      <button type="submit" className="btn btn-primary">
                        Post Your Job
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>

              <div className="col-lg-4">
                <div className="section quick-rules">
                  <h4>Quick rules</h4>
                  <p className="lead">
                    Posting an ad on <a href="#">jobs.com</a> is free! However,
                    all ads must follow our rules:
                  </p>
                  <ul>
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                    <li>
                      Do not put your email or phone numbers in the title or
                      description.
                    </li>
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComp />
    </div>
  );
}

export default JobPost;
