"use client";
import HelpNeeded from "@/app/components/DoctorDashboard/HelpNeeded";
import MyLineChart from "@/app/components/ChartJS/MyLineChart";
import TrendsPage from "@/app/components/DoctorDashboard/Trends";
import { useEffect, useState } from "react";

export default function DashboardPage({ initialData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!data || data.length === 0) {
      fetchData();
    }
  }, [data]);

  return (
    <div className="min-h-screen p-5">
      <div className="p-5 bg-black rounded-xl">
        <h1 className="text-3xl font-bold text-white">Doctor Dashboard</h1>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap rounded-xl">
        <div className="w-full md:w-1/2">
          <div className="p-5 shadow-md rounded-md h-full">
            <h2 className="text-xl font-bold">Patient Trends</h2>
            <MyLineChart data={data} />
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-xl">
          <div className="p-5 shadow-md rounded-md h-full">
            <h2 className="text-xl font-bold">Help Needed</h2>
            <HelpNeeded />
          </div>
        </div>
        <div className="w-full rounded-xl">
          <div className="p-5 shadow-md rounded-md h-full">
            <h2 className="text-xl font-bold">Patient Reports</h2>
            <TrendsPage />
          </div>
        </div>
      </div>
    </div>
  );
}
