import React from "react";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";
export default function Contacts() {
  return (
    <>
      <Sidebar />
      <section className="is-hero-bar">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <h1 className="title">Create an Incident</h1>
        </div>
      </section>
      <section className="section main-section">
        <div className="card has-table">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-account-multiple"></i>
              </span>
              Contact Information
            </p>
            <Link to="/" className="card-header-icon">
              <span className="icon">
                <i className="mdi mdi-reload"></i>
              </span>
            </Link>
          </header>
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                  <th>Contact No</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="image-cell">
                    <div className="image">
                      <img
                        src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                        className="rounded-full"
                        alt=""
                      />
                    </div>
                  </td>
                  <td data-label="Name">Rebecca Bauch</td>
                  <td data-label="Company">Daugherty-Daniel</td>
                  <td data-label="email">South Cory</td>
                  <td data-label="contact">South Cory</td>
                  <td className="actions-cell">
                    <div className="buttons right nowrap">
                      <button
                        className="button small green --jb-modal"
                        data-target="sample-modal-2"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-eye"></i>
                        </span>
                      </button>
                      <button
                        className="button small red --jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-trash-can"></i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
