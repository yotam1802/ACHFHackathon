"use client";
import React, { useEffect, useState } from "react";

const Trends = () => {
  const [trendingUp, setTrendingUp] = useState([]);
  const [trendingSame, setTrendingSame] = useState([]);
  const [trendingDown, setTrendingDown] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/trends");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);

        // Process data
        const userMap = new Map();
        data.forEach((item) => {
          if (!userMap.has(item.name)) {
            userMap.set(item.name, []);
          }
          userMap
            .get(item.name)
            .push(item.questionResponse.reduce((a, b) => a + b, 0));
        });

        const up = [];
        const same = [];
        const down = [];

        userMap.forEach((scores, name) => {
          const lastThree = scores.slice(-3);
          if (lastThree.length === 3) {
            if (lastThree[0] < lastThree[1] && lastThree[1] < lastThree[2]) {
              up.push(name);
            } else if (
              lastThree[0] > lastThree[1] &&
              lastThree[1] > lastThree[2]
            ) {
              down.push(name);
            } else {
              same.push(name);
            }
          } else {
            same.push(name);
          }
        });

        setTrendingUp(up);
        setTrendingSame(same);
        setTrendingDown(down);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-1/3 p-2">
          <h2 className="text-xl font-bold mb-2">Trending Up</h2>
          <ul className="bg-green-100 p-4 rounded">
            {trendingUp.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <h2 className="text-xl font-bold mb-2">About the Same</h2>
          <ul className="bg-yellow-100 p-4 rounded">
            {trendingSame.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <h2 className="text-xl font-bold mb-2">Trending Down</h2>
          <ul className="bg-red-100 p-4 rounded">
            {trendingDown.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trends;
