"use client";
import Chatbot from "@/app/components/Chatbox";

export default function ClientPage() {
  return (
    <div>
      <div className="bg-black p-5">
        <h1 className="text-3xl text-white font-bold">Client Page</h1>
      </div>
      <Chatbot />
    </div>
  );
}
