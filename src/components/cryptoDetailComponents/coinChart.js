import React, { useState } from "react";
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
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Price of "+coinStats.name,
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

  return <Line options={options} data={data} />;
};
export default CoinChart;
