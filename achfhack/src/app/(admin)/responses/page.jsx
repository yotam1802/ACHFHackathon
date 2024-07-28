"use client";
import React, { useState, useEffect } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const ResponsesPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({
    key: "question",
    direction: "ascending",
  });

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

  const calculateAverageAndTotalPoints = (data) => {
    const questionPoints = {};
    const questionCounts = {};

    data.forEach((item) => {
      item.questionResponse.forEach((response, index) => {
        if (!questionPoints[index]) {
          questionPoints[index] = 0;
          questionCounts[index] = 0;
        }
        questionPoints[index] += response;
        questionCounts[index] += 1;
      });
    });

    const pointsData = Object.keys(questionPoints).map((index) => ({
      question: `Q${parseInt(index) + 1}`,
      average: questionPoints[index] / questionCounts[index],
      total: questionPoints[index],
    }));

    return pointsData;
  };

  const sortData = (data, key, direction) => {
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <FaSortUp />
      ) : (
        <FaSortDown />
      );
    }
    return <FaSort />;
  };

  if (loading) {
    return <div className="p-5">Loading...</div>;
  }

  if (!data) {
    return <div className="p-5">No data available</div>;
  }

  // Get unique users
  const users = [...new Set(data.map((item) => item.name))];

  // Get unique dates and sort them in descending order, then slice to get the 10 most recent dates
  const dates = [...new Set(data.map((item) => item.date))]
    .sort((a, b) => new Date(b) - new Date(a))
    .slice(0, 10);

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
        return "bg-gray-100";
    }
  };

  const pointsData = calculateAverageAndTotalPoints(data);
  const sortedPointsData = sortData(
    pointsData,
    sortConfig.key,
    sortConfig.direction
  );

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-black mb-4 p-5">Responses</h1>
      <div className="mt-5 p-5 bg-gray-200 rounded-lg mb-3">
        <h2 className="text-2xl font-bold mb-3">Legend</h2>
        <div className="flex flex-wrap">
          <div className="flex items-center mb-2 mr-4">
            <div className="w-4 h-4 bg-green-500 mr-2"></div>
            <span>24-27: Excellent</span>
          </div>
          <div className="flex items-center mb-2 mr-4">
            <div className="w-4 h-4 bg-green-300 mr-2"></div>
            <span>18-23: Good</span>
          </div>
          <div className="flex items-center mb-2 mr-4">
            <div className="w-4 h-4 bg-yellow-300 mr-2"></div>
            <span>12-17: Average</span>
          </div>
          <div className="flex items-center mb-2 mr-4">
            <div className="w-4 h-4 bg-red-500 mr-2"></div>
            <span>0-11: Poor</span>
          </div>
          <div className="flex items-center mb-2 mr-4">
            <div className="w-4 h-4 bg-gray-100 mr-2"></div>
            <span>No Data</span>
          </div>
        </div>
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
                          response ? getColor(response.rating) : "bg-gray-100"
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
      <div className="mt-5 p-5 bg-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold mb-3">
          Average and Total Points per Question
        </h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("question")}
              >
                <div className="flex items-center justify-center">
                  Question {getSortIcon("question")}
                </div>
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("average")}
              >
                <div className="flex items-center justify-center">
                  Average Points {getSortIcon("average")}
                </div>
              </th>
              <th
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort("total")}
              >
                <div className="flex items-center justify-center">
                  Total Points {getSortIcon("total")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedPointsData.map((item) => (
              <tr key={item.question}>
                <td className="border px-4 py-2 text-center">
                  {item.question}
                </td>
                <td className="border px-4 py-2 text-center">
                  {item.average.toFixed(2)}
                </td>
                <td className="border px-4 py-2 text-center">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsesPage;
