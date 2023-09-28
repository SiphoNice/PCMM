import React from "react";
import Sidebar from "../components/sidebar";
import Maps from "../components/maps";
import SeverityTable from "../components/severityTable";
import Stats from "../components/stats";
import LineChat from "../components/lineChart";
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
        <LineChat />
        <SeverityTable />
      </section>
    </>
  );
}
