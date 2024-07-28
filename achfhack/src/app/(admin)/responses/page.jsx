"use client";
import React, { useState, useEffect } from "react";

const ResponsesPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        const result = await response.json();

        // Calculate the rating by summing the values in the questionResponse array
        const calculatedData = result.map((item) => ({
          ...item,
          rating: item.questionResponse.reduce((acc, val) => acc + val, 0),
        }));

        setData(calculatedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-5">Loading...</div>;
  }

  if (!data) {
    return <div className="p-5">No data available</div>;
  }

  // Get unique users
  const users = [...new Set(data.map((item) => item.name))];
  // Get unique dates
  const dates = [...new Set(data.map((item) => item.date))];

  // Get color based on rating
  const getColor = (rating) => {
    switch (rating) {
      case 27:
      case 24:
      case 25:
      case 26:
        return "bg-green-500";

      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
        return "bg-green-300";
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
        return "bg-yellow-300";
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        return "bg-red-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="p-5">
      <div className="p-5 bg-black rounded-xl mb-5">
        <h1 className="text-3xl font-bold text-white">Responses</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">User</th>
                {dates.map((date) => (
                  <th key={date} className="px-4 py-2">
                    {date}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user}>
                  <td className="border px-4 py-2">{user}</td>
                  {dates.map((date) => {
                    const response = data.find(
                      (item) => item.name === user && item.date === date
                    );
                    return (
                      <td
                        key={date}
                        className={`border px-4 py-2 ${
                          response ? getColor(response.rating) : "bg-gray-200"
                        }`}
                      ></td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResponsesPage;
