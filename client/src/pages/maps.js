import React from "react";
import Sidebar from "../components/sidebar";
import Form from "../components/form";
export default function Maps() {
  return (
    <>
      <Sidebar />
      <section className="is-hero-bar">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <h1 className="title">Create an Incident</h1>
        </div>
      </section>
      <section className="section main-section">
        <div className="card mb-6">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-ballot"></i>
              </span>
              Add new location
            </p>
          </header>
          <div className="card-content">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
