"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns"; // Import the date adapter

Chart.register(...registerables);

const MyLineChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  const colors = [
    "#4A90E2", // Blue shade 1
    "#50E3C2", // Blue shade 2
    "#9013FE", // Purple shade 1
    "#BD10E0", // Purple shade 2
    "#7B61FF", // Purple shade 3
    "#5C9DF9", // Blue shade 3
  ];

  useEffect(() => {
    if (data && data.length > 0) {
      const groupedData = data.reduce((acc, { date, rating, name }) => {
        if (!acc[name]) {
          acc[name] = [];
        }
        acc[name].push({ date, rating });
        return acc;
      }, {});

      console.log(groupedData);

      const datasets = Object.keys(groupedData).map((name, index) => ({
        label: name,
        data: groupedData[name].map((entry) => ({
          x: entry.date,
          y: entry.rating,
        })),
        fill: false,
        borderColor: colors[index % colors.length],
        tension: 0.1,
      }));

      setChartData({
        datasets: datasets,
      });
    }
  }, [data]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <Line
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false, // Disable the legend
          },
        },
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            min: 0, // Set the minimum value for the y-axis
            max: 27, // Set the maximum value for the y-axis
            title: {
              display: true,
              text: "Rating",
            },
          },
        },
      }}
      style={{ height: "100%" }}
    />
  );
};

export default MyLineChart;
