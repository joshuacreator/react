import React from "react";

const UserProfile = (props) => {
  return (
    <div>
      <div className="profile section clearfix">
        <div className="profile-logo">
          <img className="img-fluid" src={props.img} alt="Image" />
        </div>
        <div className="profile-info">
          <h1>{props.name}</h1>
          <address>
            <p>
              Address: {props.address} <br /> Phone: {props.phone} <br /> Email:
              <a href="#">
                <span
                  className="__cf_email__"
                  data-cfemail="167f62657b73566563646c7f7a737173737d3875797b"
                >
                  {props.email}
                </span>
              </a>
            </p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
