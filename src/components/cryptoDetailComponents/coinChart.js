import React, { useState } from "react";
import styles from "./coinChart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinChart = (props) => {
  const [coinStats] = useState(props.coinStats);

  const options = {
    responsive:true,
    plugins: {
      legend: {
        display:false,
      },
      title: {
        display: true,
        text: "Price of " + coinStats.name,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Value in US$",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "January",
    "February",
    "March",
    "April",
    "May",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: coinStats.name,
        data: coinStats.sparkline,
        borderColor: coinStats.color,
        backgroundColor: coinStats.color,
      },
    ],
  };

  return (
    <div className={styles.gridBox}>
      <Line options={options} data={data} />
    </div>
  );
};
export default CoinChart;
