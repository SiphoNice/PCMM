import React from "react";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";
import Maps from "../components/maps";
import SeverityTable from "../components/severityTable";
import Stats from "../components/stats";
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
        <Stats />
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
                    <div id="big-line-chart"></div>
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
