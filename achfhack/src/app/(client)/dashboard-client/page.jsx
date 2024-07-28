"use client";
import Chatbot from "../../components/Chatbox";

export default function ClientPage() {
  return (
    <div className="p-5 flex flex-col gap-5 mb-20 lg:mb-10">
      <h1 className="text-3xl font-bold text-black p-5">Patient Dashboard</h1>
      <div className="p-5">
        <div role="alert" className="alert shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">Next Appointment!</h3>
            <div className="text-xs">
              Your next appointment is Monday July 29, 2024.
            </div>
          </div>
          <button className="btn btn-sm">View details</button>
        </div>
      </div>
      <Chatbot />
      <div className="divider my-0"></div>
      <div className="flex flex-col items-center md:flex-row gap-5 p-5">
        <div
          className="radial-progress"
          style={{ "--value": 40 }}
          role="progressbar"
        >
          40%
        </div>
        <div>You have improved by 40% this month!</div>
      </div>
    </div>
  );
}
