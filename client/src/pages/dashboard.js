import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerImage from "../assets/images/marker.png";
import Sidebar from "../components/sidebar";
import logo from "../assets/images/logo/logo.png";
export default function Dashboard() {
  const ICON = new Icon({
    iconUrl: markerImage,
    iconSize: [32, 45],
  });
  return (
    <>
      <Sidebar />
      <section class="is-hero-bar">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <h1 class="title">Dashboard</h1>
        </div>
      </section>
      <section class="section main-section">
        <div class="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
          <div class="card">
            <div class="card-content">
              <div class="flex items-center justify-between">
                <div class="widget-label">
                  <h3>Clients</h3>
                  <h1>512</h1>
                </div>
                <span class="icon widget-icon text-green-500">
                  <i class="mdi mdi-account-multiple mdi-48px"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="flex items-center justify-between">
                <div class="widget-label">
                  <h3>Sales</h3>
                  <h1>$7,770</h1>
                </div>
                <span class="icon widget-icon text-blue-500">
                  <i class="mdi mdi-cart-outline mdi-48px"></i>
                </span>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="flex items-center justify-between">
                <div class="widget-label">
                  <h3>Performance</h3>
                  <h1>256%</h1>
                </div>
                <span class="icon widget-icon text-red-500">
                  <i class="mdi mdi-finance mdi-48px"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-6">
          <header class="card-header">
            <p class="card-header-title">
              <span class="icon">
                <i class="mdi mdi-finance"></i>
              </span>
              Performance
            </p>
            <a href="#" class="card-header-icon">
              <span class="icon">
                <i class="mdi mdi-reload"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="chart-area">
              <div class="h-full">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div></div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card has-table">
          <header class="card-header">
            <p class="card-header-title">
              <span class="icon">
                <i class="mdi mdi-account-multiple"></i>
              </span>
              Clients
            </p>
            <a href="#" class="card-header-icon">
              <span class="icon">
                <i class="mdi mdi-reload"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
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
                  <td class="image-cell">
                    <div class="image">
                      <img
                        src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                        class="rounded-full"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Rebecca Bauch</td>
                  <td data-label="Company">Daugherty-Daniel</td>
                  <td data-label="City">South Cory</td>
                  <td data-label="Progress" class="progress-cell">
                    <progress max="100" value="79">
                      79
                    </progress>
                  </td>
                  <td data-label="Created">
                    <small class="text-gray-500" title="Oct 25, 2021">
                      Oct 25, 2021
                    </small>
                  </td>
                  <td class="actions-cell">
                    <div class="buttons right nowrap">
                      <button
                        class="button small green --jb-modal"
                        data-target="sample-modal-2"
                        type="button"
                      >
                        <span class="icon">
                          <i class="mdi mdi-eye"></i>
                        </span>
                      </button>
                      <button
                        class="button small red --jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span class="icon">
                          <i class="mdi mdi-trash-can"></i>
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
