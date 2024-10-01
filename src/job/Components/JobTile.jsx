import React from "react";

const JobTile = (props) => {
  return (
    <div key={props.key}>
      <div className="job-ad-item">
        <div className="item-info">
          <div className="item-image-box">
            <div className="item-image">
              <a href="/job-details">
                <img src={props.image} alt="Image" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="ad-info">
            <span>
              <a href="/job-details" className="title">
                {props.title}
              </a>{" "}
              @ <a href="#">{props.company}</a>
            </span>
            <div className="ad-meta">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    {props.location}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    {props.level}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-money" aria-hidden="true"></i>$
                    {props.minPay} - ${props.maxPay}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    {props.department}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="button">
            <a href={"/job-details/" + props.id} className="btn btn-primary">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTile;
