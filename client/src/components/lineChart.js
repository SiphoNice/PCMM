import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function LineChat() {
  const [year, setYear] = useState("");
  const [yearData, setYearsData] = useState([]);
  const [productionFigures, ProductionFigures] = useState([]);
  

  const listOfYears = async () => {
    try {
      const response = await fetch("http://localhost:3001/select_all_production_figures");
      const data = await response.json();
      setYearsData(data);
    } catch (err) {
      console.error(err.message);
    }
  };






  const getProductionFigures = async (year) => {
    try {
      const response = await fetch(
        `http://localhost:3001/select_all_production_figures/${year}`
      );
      const data = await response.json();
      console.log(data);
      ProductionFigures(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    listOfYears();
  }, []);

  return (
    <>
      <div className="card mb-6">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon">
              <i className="mdi mdi-finance"></i>
            </span>
            Performance {year}
          </p>
        </header>
        <div className="card-content">
          <div className="chart-area">
            <div className="h-full">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div>
                    <div className="table-responsive">
                      <form method="get">
                        <div className="field">
                          <label className="label">Select the year</label>
                          <div className="control">
                            <div className="select">
                              <select
                                name="mine_id"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                              >
                                <option value="">Select mine</option>
                                {yearData.map((year,index) => (
                                  <option key={index} value={year.year}>
                                    {year.year}
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
                              onClick={() => getProductionFigures(year)}
                            >
                              Load data
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="card-content table">
                  <p>Hello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
