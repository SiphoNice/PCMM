import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import markerImage from "../assets/images/marker.png";
import { Link } from "react-router-dom";
export default function Maps() {
  const [locations, setLocations] = useState([]);
  const ICON = new Icon({
    iconUrl: markerImage,
    iconSize: [32, 45],
  });

  const getAllIncidentsPoints = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/select_all_safety_incident"
      );
      const data = await response.json();
      setLocations(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllIncidentsPoints();
  }, []);

  return (
    <>
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
                    center={[-26.205, 28.049722]}
                    zoom={7}
                    haveUsersLocation={false}
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
                    {locations.map((location, index) => (
                      <Marker
                        key={index}
                        icon={ICON}
                        position={[location.latitude, location.longitude]}
                      >
                        <Popup>
                          <h4 style={{ fontWeight: "bold" }}>Mine Name</h4>
                          {/* <p style={{ margin: "0px" }}>{location.name}</p> */}
                          <h4 style={{ fontWeight: "bold" }}>Description</h4>
                          <p style={{ margin: "0px" }}>
                            {location.description}
                          </p>
                          <h4 style={{ fontWeight: "bold" }}>Severity</h4>
                          {location.severity === "High" ||
                          location.severity === "high" ? (
                            <p style={{ color: "red" }}>{location.severity}</p>
                          ) : location.severity === "Low" ||
                            location.severity === "low" ? (
                            <p style={{ color: "grey" }}>{location.severity}</p>
                          ) : (
                            <p style={{ color: "green" }}>
                              {location.severity}
                            </p>
                          )}
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
