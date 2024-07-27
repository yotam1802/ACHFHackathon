"use client";
import Chatbot from "../../components/Chatbox";

export default function ClientPage() {
  return (
    <div className="p-5">
      <div className="bg-black p-5 rounded-xl">
        <h1 className="text-3xl text-white font-bold">Client Page</h1>
      </div>
      <Chatbot />
    </div>
  );
}
