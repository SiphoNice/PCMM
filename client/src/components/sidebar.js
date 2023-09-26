import React from "react";
import logo from "../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside className="aside is-placed-left is-expanded">
      <div className="aside-tools">
        <div>
        <img src={logo} alt="CSRI Logo"  />
        </div>
      </div>
      <div className="menu is-menu-main">
        <p className="menu-label">General</p>
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
        <p className="menu-label">Examples</p>
        <ul className="menu-list">
          <li className="--set-active-tables-html">
            <Link to="/maps">
              <span className="icon">
                <i className="mdi mdi-square-edit-outline"></i>
              </span>
              <span className="menu-item-label">Create Incidents</span>
            </Link>
          </li>
          <li className="--set-active-forms-html">
            <Link to="/contact">
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
