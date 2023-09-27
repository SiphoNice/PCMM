import React, { useState, useEffect } from "react";
export default function EditForm() {
  const [mine_id, setMineId] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [minesData, setMinesData] = useState([]);

  const onSumbitLocation = async (e) => {
    e.preventDefault();
    try {
      const body = {mine_id, latitude, longitude, description, severity};
      const response = await fetch(
        "http://localhost:3001/create_safety_incident",
        {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <form method="get" onSubmit={onSumbitLocation}>
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
                <option value=""></option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field grouped">
          <div className="control">
            <button type="submit" className="button green">
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
