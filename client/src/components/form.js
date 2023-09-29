import React, { useState, useEffect } from "react";
import { locationSchema } from "../validation/locationValidation";

export default function Form() {
  const [mine_id, setMineId] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [minesData, setMinesData] = useState([]);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  
  const onSumbitLocation = async (e) => {
    e.preventDefault();
    let formData = {
      mine_id: e.target[0].value,
      latitude: e.target[1].value,
      longitude: e.target[2].value,
      description: e.target[3].value,
      severity: e.target[4].value,
    };
    const isValid = await locationSchema.isValid(formData);
    if (isValid === true) {
      try {
        const body = { mine_id, latitude, longitude, description, severity };
        const response = await fetch(
          "http://localhost:3001/create_safety_incident",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );
       
        if(response.status === "200")
        {
          setFormSuccess("Location added succesfully");
        }
        else{
          setFormSuccess("Encounted an error");
        }
      } catch (err) {
        console.error(err.message);
      }
    }
    else{
      setFormError("Please populate all form fields");
    }
  };
  const listOfMines = async () => {
    try {
      const response = await fetch("http://localhost:3001/select_all_mines");
      const data = await response.json();
      setMinesData(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    listOfMines();
  }, []);
  return (
    <>
      <form method="get" onSubmit={onSumbitLocation}>
        <div className="field">
          {formError && (
            <div className="alert alert-danger">{formError}</div>
          )}
          {formSuccess && (
            <div className="alert alert-success">{formSuccess}</div>
          )}
          <label className="label">Mines</label>
          <div className="control">
            <div className="select">
              <select
                name="mine_id"
                value={mine_id}
                onChange={(e) => setMineId(e.target.value)}
              >
                <option value="">Select mine</option>
                {minesData.map((mine) => (
                  <option key={mine.id} value={mine.id}>
                    {mine.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
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
