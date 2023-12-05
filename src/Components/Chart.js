import React, { useState,useEffect } from "react";
import { Pie,Bar,Line,Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import classes from '../Styles/charts.module.css';
import { Colors } from 'chart.js';

Chart.register(Colors);
Chart.register(CategoryScale);

export function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}
export function Doughnutchart({ chartData }) {
  return (
    <div className={classes.dchart}>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}
export function BarChart({ chartData }) {
    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Performance"
              },
              legend: {
                display: false
              }
            
            }
          }}
        />
      </div>
    );
  };
//   Chart.defaults.borderColor = '#36A2EB';
  export  function LineChart({ chartData ,dispdat}) {
    const[d,setd]=useState(chartData);
    var chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(231,233,237)'
      };
     
    return (
      <div className={classes.charts}>
        <Line
          data={chartData}
          options={{
            borderColor: 'rgb(255, 99, 132)',
            // backgroundColor:'green',
            // showLine:false,
           
            responsive:true,
            plugins: {
                     
              title: {
                display: false,
                
              },
              legend: {
                display: false,
             
              },
              layout:{
                padding:20
              }, 
              filler: {
                propagate: false,
              },           
            },
           
            scales: {
                
                y:{
                    grid:{
                        color:'grey'
                    },
                    ticks:{
                        color:'pink',
                        font:{
                            size:18
                        },
                    

                    }
                
                },
                x:{
                    grid:{
                        color:"transparent"
                    },
                    ticks:{
                        color:'pink',
                        font:{
                            size:10,
                            family:" 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                            
                        },
                        

                    }
                }

                
            },
            // devicePixelRatio:2,
        }
        } 
        />
      </div>
    );
  }