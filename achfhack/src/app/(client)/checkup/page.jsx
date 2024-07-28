"use client";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function CheckupPage() {
  const [formData, setFormData] = useState({
    questionResponse: Array(9).fill("0"),
  });

  const [showModal, setShowModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);

  const handleChange = (e, key) => {
    const newValue = e.target.value;
    setFormData((prevFormData) => {
      const newResponses = [...prevFormData.questionResponse];
      newResponses[key] = newValue;
      return { questionResponse: newResponses };
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const names = ["John Doe", "Jane Doe", "Alice Smith"];
    const randomName = names[Math.floor(Math.random() * names.length)];

    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, name: randomName }),
      });

      if (!response.ok) {
        console.error("Error adding data:", response.statusText);
        return;
      }

      const result = await response.json();
      console.log(result);

      // Show the success modal
      setShowModal(true);

      // Hide the success modal after 3 seconds
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  const handleAlertDoctor = async () => {
    const names = ["John Doe", "Jane Doe", "Alice Smith"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const alertData = {
      message: `${randomName} Requested Help`,
      originalMessage: "Requested help from form",
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/help-needed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alertData),
      });

      if (!response.ok) {
        console.error("Error alerting doctor:", response.statusText);
        return;
      }

      const result = await response.json();
      console.log(result);

      // Show the alert modal
      setAlertModal(true);

      // Hide the alert modal after 3 seconds
      setTimeout(() => {
        setAlertModal(false);
      }, 3000);
    } catch (error) {
      console.error("Error alerting doctor:", error);
    }
  };

  const questions = [
    "Little interest or pleasure in doing things.",
    "Feeling down, depressed, or hopeless.",
    "Trouble falling or staying asleep, or sleeping too much.",
    "Feeling tired or having little energy.",
    "Poor appetite or overeating.",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down.",
    "Trouble concentrating on things, such as reading the newspaper or watching television.",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite – being so fidgety or restless that you have been moving around a lot more than usual.",
    "Thoughts that you would be better off dead or of hurting yourself in some way.",
  ];

  return (
    <div className="min-h-screen p-5 flex flex-col gap-5 w-full mb-20 md:mb-10">
      {showModal && (
        <div
          className={`fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded flex items-center space-x-2 transition-all ease-in-out duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <FaCheckCircle />
          <span>Successfully submitted</span>
        </div>
      )}
      {alertModal && (
        <div
          className={`fixed top-16 left-1/2 transform -translate-x-1/2 bg-primary text-white py-2 px-4 rounded flex items-center space-x-2 transition-all ease-in-out duration-300 ${
            alertModal ? "opacity-100" : "opacity-0"
          }`}
        >
          <FaCheckCircle />
          <span>Doctor alerted</span>
        </div>
      )}
      <h1 className="text-3xl font-bold text-black p-5">Checkup Form</h1>
      <h3 className="font-semibold text-lg px-5">
        Over the last 2 weeks, how often have you been bothered by any of the
        following problems?
      </h3>
      <form onSubmit={handleSubmit} className="w-full px-5">
        <ol className="w-full flex flex-col gap-5">
          {questions.map((question, key) => (
            <li className="flex flex-col" key={key}>
              <div className="flex gap-2">
                <span>{key + 1}.</span>
                {question}
              </div>
              <div className="flex justify-start items-center gap-5">
                <select
                  className="select select-bordered w-full max-w-2xl"
                  value={formData.questionResponse[key]}
                  onChange={(e) => handleChange(e, key)}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="0">Not at all</option>
                  <option value="1">Several days</option>
                  <option value="2">More than half the days</option>
                  <option value="3">Nearly every day</option>
                </select>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-5 flex justify-center gap-4 max-md:flex-col m-auto align-middle items-center">
          <button type="submit" className="btn btn-wide btn-primary">
            Add Data
          </button>
          <button
            type="button"
            className="btn btn-wide btn-danger"
            onClick={handleAlertDoctor}
          >
            Alert Doctor
          </button>
        </div>
      </form>
    </div>
  );
}
