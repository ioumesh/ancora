import React from "react";
import "./table.css";
import { Data } from "../APi/Data";
const Table = () => {
  return (
    <div className="tableWrapper">
      <table>
        <tr>
          <th>Name</th>
          <th>CRN</th>
          <th>GROUP</th>
          <th>BILLING</th>
          <th>ACTIONS</th>
        </tr>
        {Data.map((val, key) => {
          return (
            <tr>
              <td>
                <div className="userWrapper">
                  <img className="userPic" src={val.img} alt="user" />
                  <div className="userDetails">
                    <span className="userName">{val.name}</span>
                    <span className="userEmail">{val.email}</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="crn">{val.crn}</span>
              </td>
              <td>
                <span className="group">{val.group}</span>
              </td>
              <td>
                <span className="billing">{val.Billing}</span>
              </td>
              <td>
                <div className="actionDot"></div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
