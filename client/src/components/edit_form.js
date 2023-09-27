import React, { useState } from "react";

export default function EditForm({ location }) {
  
  const [latitude, setLatitude] = useState(location.latitude);
  const [longitude, setLongitude] = useState(location.longitude);
  const [description, setDescription] = useState(location.description);
  const [severity, setSeverity] = useState(location.severity);

  const updateIncident = async (e) => {
    e.preventDefault();
    try {
      const body = { latitude, longitude, description, severity };
      const response = await fetch(
        `http://localhost:3001/update_safety_incident/${location.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="button small blue --jb-modal"
        data-bs-toggle="modal"
        data-bs-target={`#id${location.id}`}
      >
        <span className="icon">
          <i className="mdi mdi mdi-table-edit"></i>
        </span>
      </button>
      <form method="get">
        <div
          className="modal fade"
          id={`id${location.id}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Incident Mine ID {location.id}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="field">
                  <label className="label">Latitude</label>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Latitude"
                          name="latitude"
                          value={latitude}
                          onChange={(e) => setLatitude(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Longitude</label>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Longitude"
                          name="longitude"
                          value={longitude}
                          onChange={(e) => setLongitude(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Severity</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="severity"
                        value={severity}
                        onChange={(e) => setSeverity(e.target.value)}
                      >
                        {location.severity === "High" ||
                        location.severity === "high" ? (
                          <>
                            <option value="High">High</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                          </>
                        ) : location.severity === "Low" ||
                          location.severity === "low" ? (
                          <>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                          </>
                        ) : (
                          <>
                            <option value="Medium">Medium</option>
                            <option value="High">Low</option>
                            <option value="Medium">High</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={(e)=> updateIncident(e)}>
                  Update Incident
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
