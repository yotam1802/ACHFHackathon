"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns"; // Import the date adapter

Chart.register(...registerables);

const MyLineChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const groupedData = data.reduce((acc, { date, rating, userId }) => {
        if (!acc[userId]) {
          acc[userId] = [];
        }
        acc[userId].push({ date, rating });
        return acc;
      }, {});

      console.log(groupedData);

      const datasets = Object.keys(groupedData).map((userId) => ({
        label: userId,
        data: groupedData[userId].map((entry) => ({
          x: entry.date,
          y: entry.rating,
        })),
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1,
      }));

      setChartData({
        datasets: datasets,
      });
    }
  }, [data]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <Line
      data={chartData}
      options={{
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
            title: {
              display: true,
              text: "Rating",
            },
          },
        },
      }}
    />
  );
};

export default MyLineChart;
