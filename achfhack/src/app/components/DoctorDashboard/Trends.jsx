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

  // SVG components
  const TrendingUpIcon = () => (
    <svg
      width="16"
      height="16"
      fill="green"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path d="M8 3.293l3.293 3.293-1.414 1.414L8 6.121l-2.879 2.879-1.414-1.414L8 3.293z" />
    </svg>
  );

  const TrendingSameIcon = () => (
    <svg
      width="16"
      height="16"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path d="M2 8h12v2H2z" />
    </svg>
  );

  const TrendingDownIcon = () => (
    <svg
      width="16"
      height="16"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path d="M8 12.707L4.707 9.414l1.414-1.414L8 10.293l2.879-2.879 1.414 1.414L8 12.707z" />
    </svg>
  );

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-1/3 p-2">
          <h2 className="text-xl font-bold mb-2">Trending Up</h2>
          <ul className="bg-green-100 p-4 rounded">
            {trendingUp.map((name, index) => (
              <li key={index} className="flex items-center">
                <TrendingUpIcon />
                <span className="ml-2">{name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <h2 className="text-xl font-bold mb-2">About the Same</h2>
          <ul className="bg-yellow-100 p-4 rounded">
            {trendingSame.map((name, index) => (
              <li key={index} className="flex items-center">
                <TrendingSameIcon />
                <span className="ml-2">{name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <h2 className="text-xl font-bold mb-2">Trending Down</h2>
          <ul className="bg-red-100 p-4 rounded">
            {trendingDown.map((name, index) => (
              <li key={index} className="flex items-center">
                <TrendingDownIcon />
                <span className="ml-2">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trends;
