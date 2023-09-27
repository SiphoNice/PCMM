import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import EditForm from "./edit_form";
export default function SeverityTable() {
  const [locations, setLocations] = useState([]);

  const getAllIncidentsPoints = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/select_all_safety_incident"
      );
      const data = await response.json();
      setLocations(data);

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllIncidentsPoints();
  }, []);

  const deletIncedent = async (id) => {
    try {
      await fetch(`http://localhost:3001/delete_safety_incident/${id}`, {
        method: "DELETE",
      });
      setLocations(locations.filter((location) => location.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="card has-table">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon">
              <i className="mdi mdi-account-multiple"></i>
            </span>
            Incidents
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
                <th>Mine</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Severity</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {locations.map((location) => (
                <tr key={location.id}>
                  <td data-label="Name">{location.mine_id}</td>
                  <td data-label="Company">{location.latitude}</td>
                  <td data-label="City">{location.longitude}</td>
                  <td data-label="Severity">
                    {location.severity === "High" ? (
                      <p style={{ color: "red" }}>{location.severity}</p>
                    ) : location.severity === "Low" ? (
                      <p style={{ color: "grey" }}>{location.severity}</p>
                    ) : (
                      <p style={{ color: "green" }}>{location.severity}</p>
                    )}
                  </td>

                  <td data-label="Created">
                    <small className="text-gray-500" title="Oct 25, 2021">
                      {location.description}
                    </small>
                  </td>
                  <td className="actions-cell">
                    <div className="buttons right nowrap">
                      <EditForm location={location}/>
                      <button
                        className="button small red --jb-modal"
                        data-target="sample-modal"
                        type="button"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete this?"
                            )
                          ) {
                            deletIncedent(location.id);
                          }
                        }}
                      >
                        <span className="icon">
                          <i className="mdi mdi-trash-can"></i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
