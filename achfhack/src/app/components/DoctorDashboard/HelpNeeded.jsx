"use client";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the Font Awesome checkmark icon

const HelpNeeded = () => {
  const [helpNeededData, setHelpNeededData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHelpNeededData = async () => {
      try {
        const response = await fetch("/api/help-needed");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        setHelpNeededData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHelpNeededData();
  }, []);

  const handleResolve = async (_id) => {
    try {
      const response = await fetch("/api/help-needed/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Remove the resolved item from the state
      setHelpNeededData(helpNeededData.filter((item) => item._id !== _id));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {helpNeededData.length === 0 ? (
        <div className="flex items-center text-green-600 mt-3">
          <FaCheckCircle className="w-6 h-6 mr-2" />
          Up to date!
        </div>
      ) : (
        <ul className="p-2 rounded-xl bg-slate-200">
          {helpNeededData.map((item) => (
            <li key={item._id} className="flex justify-between items-center">
              <span>
                {item.message} - {new Date(item.timestamp).toLocaleString()}
              </span>
              <button
                onClick={() => handleResolve(item._id)}
                className="bg-red-500 text-white p-2 rounded ml-4"
              >
                Resolve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HelpNeeded;
