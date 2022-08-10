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
                  <span className="userName">{val.name}</span>
                  <span className="userEmail">{val.email}</span>
                </div>
              </td>
              <td>
                <span>{val.crn}</span>
              </td>
              <td>
                <span>{val.group}</span>
              </td>
              <td>
                <span>{val.Billing}</span>
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
