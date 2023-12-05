import React, { useEffect } from "react";
import classes from "../../Styles/company.module.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import {  Doughnutchart } from "../Chart";
Chart.register(CategoryScale);
const Companyinfo = () => {
  const d2=["Income","Expenses"]

  const chartData = {
    datasets: [
      {
        data: [1800,4000],
        backgroundColor: [
          "#ecf0f1",
          "#AF8DD9FF",
        ],
        borderColor: "#AF8DD9FF",
        borderWidth: 1,
        options:{
          plugins:{
            legend:{
              display:false
            }
          }
        }
      },
    ],
  };
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = `$ ${Math.floor(progress * (end - start) + start)}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  useEffect(() => {
    const objValue = document.getElementById("value");
    animateValue(objValue, 0, 4000, 2000);

    const objExpense = document.getElementById("expense");
    animateValue(objExpense, 0, 1800, 3000);
  }, []);

  return (
    <div className={classes.container}>
      <div>
        <label htmlFor="value">Total Income</label>
        <p name="value" id="value">
          4000
        </p>
      </div>
      <Doughnutchart chartData={chartData}/>
      <div>
        <label htmlFor="expense">Total expense</label>
        <p name="expense" id="expense">
          1800
        </p>
      </div>
    </div>
  );
};

export default Companyinfo;
