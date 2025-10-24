import React, { useEffect, useState } from "react";

const statsData = [
  { label: "Projects Completed", number: 100 },
  { label: "Years Experience", number: 3 },
  { label: "Happy Clients", number: 50 },
];

const CounterSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((item, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < item.number) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch bg-gray-100 p-6 md:p-10 rounded-lg gap-6">
      {statsData.map((item, index) => (
        <div
          key={index}
          className="bg-white flex-1 min-w-[200px] max-w-[300px] p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary/70 mb-2">
            {counts[index]}+
          </h2>
          <p className="text-lg text-gray-700 font-medium">{item.label}</p>
          <div className="mt-3 h-1 w-16 mx-auto bg-blue-300 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default CounterSection;
