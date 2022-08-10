import React from "react";
import "./topbar.css";
import User from "../../img/Active.svg";
import { NavLink } from "react-router-dom";
const Topbar = () => {
  return (
    <div className="topbarWrapper">
      <div className="left">
        <div className="menuWrapper">
          <ul>
            <li className="active">
              <NavLink to="/"> Customer Management</NavLink>
            </li>
            <li>
              <NavLink to="customer"> Customer List</NavLink>
            </li>
            <li>
              <NavLink to="group"> Groups</NavLink>
            </li>
            <li>
              <NavLink to="profile"> Profile</NavLink>
            </li>
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
