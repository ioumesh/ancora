import React from "react";
import "./topbar.css";
import User from "../../img/Active.svg";
// import Dot from "../img/";
const Topbar = () => {
  return (
    <div className="topbarWrapper">
      <div className="left">
        <div className="menuWrapper">
          <ul>
            <li className="active">Customer Management</li>
            <li>Customer List</li>
            <li>Groups</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="profileWrapper">
          <div className="profileDetails">
            <span className="userName">John Doe</span>
            <span className="userAccess">Super Admin</span>
          </div>
          <div className="profilePic">
            <img src={User} alt="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
