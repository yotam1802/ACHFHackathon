"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", rating: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error("Error adding data:", response.statusText);
        return;
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  return (
    <div className="">
      <h1>Add Data to MongoDB</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          required
          className="w-10"
        />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}
