import React from "react";
import MyLineChart from "../components/ChartJS/MyLineChart";

const data = [
  { date: "2024-01-01", rating: 5, userId: "user1" },
  { date: "2024-01-02", rating: 4, userId: "user2" },
  { date: "2024-01-03", rating: 3, userId: "user1" },
  { date: "2024-01-04", rating: 4, userId: "user2" },
  { date: "2024-01-05", rating: 5, userId: "user1" },
];

const page = () => {
  return (
    <div>
      <h1>Patient Trends</h1>
      <MyLineChart data={data} />
    </div>
  );
};

export default page;
