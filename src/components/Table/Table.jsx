import React from "react";
import "./table.css";
import User from "../../img/Active.svg";
import Action from "../../img/action.svg";
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
                <div>
                  <img src={User} alt="user" />
                  <span>{val.name}</span>
                  <span>{val.email}</span>
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
