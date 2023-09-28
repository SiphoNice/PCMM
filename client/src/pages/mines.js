import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";

export default function Mines() {
  const [mine_id, setMineId] = useState("");
  const [minesData, setMinesData] = useState([]);
  const [mineDetails, setMinedetails] = useState([]);
  const listOfMines = async () => {
    try {
      const response = await fetch("http://localhost:3001/select_all_mines");
      const data = await response.json();
      setMinesData(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  const getMineData = async (mine_id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/select_all_mines/${mine_id}`
      );
      const data = await response.json();
      console.log(data);
      setMinedetails(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    listOfMines();
  }, []);

  return (
    <>
      <Sidebar />
      <section className="is-hero-bar">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <h1 className="title">Mines information</h1>
        </div>
      </section>
      <section className="section main-section">
        <div className="card ">
          <header className="card-header">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi  mdi-hospital-building"></i>
              </span>
              Select mine below
            </p>
          </header>
          <div className="card-content">
            <form method="get">
              <div className="field">
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
              <div className="field grouped">
                <div className="control">
                  <button
                    type="button"
                    className="button green"
                    onClick={() => getMineData(mine_id)}
                  >
                    Get Mine
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="card-content table">
            {mineDetails.map((mineDetail, index) => (
              <div className="card" key={index}>
                <div className="card-header">Contact Person</div>
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Name:</b> {mineDetail.name}
                  </h5>
                  <h5 className="card-title">
                    <b>Surname:</b> {mineDetail.surname}
                  </h5>
                  <h5 className="card-title">
                    <b>Contact No:</b> +27 {mineDetail.contact_number}
                  </h5>
                  <h5 className="card-title">
                    <b>Contact Email:</b> +27 {mineDetail.email}
                  </h5>
                </div>
                <div className="card-header">Mine Details</div>
                <div className="card-body">
                  <h5 className="card-title">
                    <b>Mine Type: </b>
                    <span className="text-danger">{mineDetail.type}</span>
                  </h5>
                  <h5 className="card-title">
                    <b>Mine Latitude: </b>
                    <span className="text-danger">{mineDetail.latitude}</span>
                  </h5>
                  <h5 className="card-title">
                    <b>Mine Longitude: </b>
                    <span className="text-danger">{mineDetail.longitude}</span>
                  </h5>
                  <h5 className="card-title">
                    <b>Production Material: </b>
                    <span className="text-danger">
                      {mineDetail.production_material}
                    </span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
