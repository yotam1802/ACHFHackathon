"use client";
import React, { useEffect, useState } from "react";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul>
        {helpNeededData.map((item, index) => (
          <li key={index}>
            {item.message} - {new Date(item.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpNeeded;
