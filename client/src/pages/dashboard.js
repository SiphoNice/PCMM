import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerImage from "../assets/images/marker.png";
import Sidebar from "../components/sidebar";
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const ICON = new Icon({
    iconUrl: markerImage,
    iconSize: [32, 45],
  });
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
                  <h3>Clients</h3>
                  <h1>512</h1>
                </div>
                <span className="icon widget-icon text-green-500">
                  <i className="mdi mdi-account-multiple mdi-48px"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="flex items-center justify-between">
                <div className="widget-label">
                  <h3>Sales</h3>
                  <h1>$7,770</h1>
                </div>
                <span className="icon widget-icon text-blue-500">
                  <i className="mdi mdi-cart-outline mdi-48px"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="flex items-center justify-between">
                <div className="widget-label">
                  <h3>Performance</h3>
                  <h1>256%</h1>
                </div>
                <span className="icon widget-icon text-red-500">
                  <i className="mdi mdi-finance mdi-48px"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-6">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-finance"></i>
              </span>
              Maps
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
                    <MapContainer
                      center={[51.762718, -0.22471]}
                      zoom={13}
                      scrollwheelzoom={false}
                      style={{
                        height: "650px",
                        backgroundcolor: "red",
                        margintop: "80px",
                        marginbottom: "90px",
                      }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker icon={ICON} position={[51.762718, -0.22471]}>
                        <Popup>Man information</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="card has-table">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-account-multiple"></i>
              </span>
              Clients
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
                  <th>Company</th>
                  <th>City</th>
                  <th>Progress</th>
                  <th>Created</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="image-cell">
                    <div className="image">
                      <img
                        src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                        className="rounded-full" alt=""
                      />
                    </div>
                  </td>
                  <td data-label="Name">Rebecca Bauch</td>
                  <td data-label="Company">Daugherty-Daniel</td>
                  <td data-label="City">South Cory</td>
                  <td data-label="Progress" className="progress-cell">
                    <progress max="100" value="79">
                      79
                    </progress>
                  </td>
                  <td data-label="Created">
                    <small className="text-gray-500" title="Oct 25, 2021">
                      Oct 25, 2021
                    </small>
                  </td>
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
