import React, { useState } from "react";
import classes from "../../Styles/company.module.css";
// import { Pie,Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { LineChart, PieChart } from "../Chart";

Chart.register(CategoryScale);

const Companystats = ({ chartdata }) => {
  // const [chartData, setChartData] = useState();
  const [d, setd] = useState(chartdata.map((data) => data.Investments));
  const [d2, setd2] = useState(chartdata.map((data) => data.month));
  const chartData = {
    labels: d2,
    datasets: [
      {
        label: "Investments",
        
        data: d,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor:"#AF8DD9FF",
        borderWidth: 2,
      },
      
    ],
    
  };
  function handleoptions(e) {
    e.preventDefault();
    console.log(e.target.value);
    const val = e.target.value;
    if (val == "lastweek") {
      setd(chartdata.map((dat) => dat.userLost));
      setd2(chartdata.map((dat) => dat.day));
    } else {
      setd(chartdata.map((dat) => dat.Investments));
      setd2(chartdata.map((dat) => dat.month));
    }
  }
  return (
    <div className={classes.companystats}>
      <span className={classes.drop}>
        <h5 style={{ marginLeft: "2rem" }}>Investments</h5>
        <select
          name="charts"
          id={classes.chartdropdown}
          onChange={handleoptions}
        >
          <option value="Lastmonth" className={classes.option}>
            Monthly
          </option>
          <option value="lastweek" className={classes.option}>
            Last Week
          </option>
        </select>
      </span>
      <LineChart chartData={chartData} dispdat={d} />
    </div>
  );
};

export default Companystats;
