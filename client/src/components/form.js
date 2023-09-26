import React from "react";
export default function Form() {
  return (
    <>
      <form method="get">
      <div className="field">
          <label className="label">Mines</label>
          <div className="control">
            <div className="select">
              <select name="mines">
                <option>1</option>
                <option>2</option>
                <option>3</option>
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
            ></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Severity</label>
          <div className="control">
            <div className="select">
              <select name="severity">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
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
