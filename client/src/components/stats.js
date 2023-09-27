import React, { useState, useEffect } from "react";

export default function Stats() {
const [high, setHigh] = useState("");
const [low, setLow] = useState("");
const [medium, setMedium] = useState("");
    const getHighIncidentsPoints = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/select_count_safety_incident/High"
          );
          const data = await response.json();
          setHigh(data.count);
        } catch (err) {
          console.log(err.message);
        }
      };
      const getLowIncidentsPoints = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/select_count_safety_incident/Low"
          );
          const data = await response.json();
          setMedium(data.count);        
        } catch (err) {
          console.log(err.message);
        }
      };
      const getMediumIncidentsPoints = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/select_count_safety_incident/Medium"
          );
          const data = await response.json();
          setLow(data.count);
        } catch (err) {
          console.log(err.message);
        }
      };
    
      useEffect(() => {
        getHighIncidentsPoints();
        getLowIncidentsPoints ();
        getMediumIncidentsPoints();
      }, []);
  return (
    <>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>Low Severity Incidents</h3>
                <h1>{low}</h1>
              </div>
              <span className="icon widget-icon text-gray-500">
                <i className="mdi mdi mdi mdi-priority-low mdi-48px"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>Medium Severity Incidents</h3>
                <h1>{medium}</h1>
              </div>
              <span className="icon widget-icon text-green-500">
                <i className="mdi mdi mdi mdi-priority-low mdi-48px"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="flex items-center justify-between">
              <div className="widget-label">
                <h3>High Severity Incidents</h3>
                <h1>{high}</h1>
              </div>
              <span className="icon widget-icon text-red-500">
                <i className="mdi mdi mdi-priority-high mdi-48px"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
