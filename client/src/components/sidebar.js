import React from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside className="aside is-placed-left is-expanded">
      <div className="aside-tools">
        <div>
          <Link to="/">
            <img src={logo} alt="CSRI Logo" />
          </Link>
        </div>
      </div>
      <div className="menu is-menu-main">
        <ul className="menu-list">
          <li className="active">
            <Link to="/">
              <span className="icon">
                <i className="mdi mdi-desktop-mac"></i>
              </span>
              <span className="menu-item-label">Dashboard</span>
            </Link>
          </li>
        </ul>
        <ul className="menu-list">
          <li className="--set-active-tables-html">
            <Link to="/create-incidents">
              <span className="icon">
                <i className="mdi mdi-square-edit-outline"></i>
              </span>
              <span className="menu-item-label">Create Incidents</span>
            </Link>
          </li>
          <li className="--set-active-tables-html">
            <Link to="/mines">
              <span className="icon">
                <i className="mdi mdi mdi-hospital-building"></i>
              </span>
              <span className="menu-item-label">Mines</span>
            </Link>
          </li>
          <li className="--set-active-forms-html">
            <Link to="/contacts">
              <span className="icon">
                <i className="mdi mdi-table"></i>
              </span>
              <span className="menu-item-label">Contacts</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
