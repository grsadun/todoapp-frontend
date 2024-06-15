"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000");
        const data = await response.json();
        setMessage(data.message); // Assuming the response has a 'message' field
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-red-800 font-bold">{message}</h1>
    </div>
  );
};

export default Page;
