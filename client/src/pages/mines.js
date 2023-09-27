import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";

export default function Mines() {
  const [mine_id,setMineId] = useState("");
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
                <label className="label">Department</label>
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
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
