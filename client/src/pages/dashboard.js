import React from "react";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";
import Maps from "../components/maps";
import SeverityTable from "../components/severityTable";
export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <section className="is-hero-bar">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <h1 className="title">Dashboard</h1>
        </div>
      </section>
      <section className="section main-section">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
          <div className="card">
            <div className="card-content">
              <div className="flex items-center justify-between">
                <div className="widget-label">
                  <h3>Number of Mines</h3>
                  <h1>14</h1>
                </div>
                <span className="icon widget-icon text-green-500">
                  <i className="mdi mdi mdi-hospital-building mdi-48px"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="flex items-center justify-between">
                <div className="widget-label">
                  <h3>Incidents</h3>
                  <h1>3000</h1>
                </div>
                <span className="icon widget-icon text-blue-500">
                  <i className="mdi mdi mdi-image-filter-hdr mdi-48px"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="flex items-center justify-between">
                <div className="widget-label">
                  <h3>High severity</h3>
                  <h1>12</h1>
                </div>
                <span className="icon widget-icon text-red-500">
                  <i className="mdi mdi mdi-priority-high mdi-48px"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Maps />
        <div className="card mb-6">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-finance"></i>
              </span>
              Performance
            </p>
            <Link to="/" className="card-header-icon">
              <span className="icon">
                <i className="mdi mdi-reload"></i>
              </span>
            </Link>
          </header>
          <div className="card-content">
            <div className="chart-area">
              <div className="h-full">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div></div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <SeverityTable />
      </section>
    </>
  );
}
