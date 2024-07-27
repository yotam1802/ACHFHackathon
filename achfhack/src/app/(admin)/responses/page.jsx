import React from "react";

const ResponsesPage = () => {
  const sample = [
    { name: "John Doe", rating: 5, date: "2024-01-01" },
    { name: "John Doe", rating: 3, date: "2024-01-02" },
    { name: "John Doe", rating: 1, date: "2024-01-03" },
    { name: "Jane Doe", rating: 4, date: "2024-01-01" },
    { name: "Jane Doe", rating: 4, date: "2024-01-02" },
    { name: "Jane Doe", rating: 4, date: "2024-01-03" },
    { name: "Alice Smith", rating: 3, date: "2024-01-01" },
    { name: "Alice Smith", rating: 5, date: "2024-01-02" },
    { name: "Alice Smith", rating: 3, date: "2024-01-03" },
    { name: "Bob Brown", rating: 2, date: "2024-01-01" },
    { name: "Bob Brown", rating: 2, date: "2024-01-02" },
    { name: "Bob Brown", rating: 2, date: "2024-01-03" },
    { name: "Charlie Johnson", rating: 5, date: "2024-01-01" },
    { name: "Charlie Johnson", rating: 5, date: "2024-01-02" },
    { name: "Charlie Johnson", rating: 5, date: "2024-01-03" },
    { name: "Daisy Miller", rating: 4, date: "2024-01-01" },
    { name: "Daisy Miller", rating: 4, date: "2024-01-02" },
    { name: "Daisy Miller", rating: 4, date: "2024-01-03" },
    { name: "Edward Davis", rating: 3, date: "2024-01-01" },
    { name: "Edward Davis", rating: 3, date: "2024-01-02" },
    { name: "Edward Davis", rating: 3, date: "2024-01-03" },
    { name: "Fiona Wilson", rating: 1, date: "2024-01-01" },
    { name: "Fiona Wilson", rating: 2, date: "2024-01-02" },
    { name: "Fiona Wilson", rating: 5, date: "2024-01-03" },
    { name: "George White", rating: 5, date: "2024-01-01" },
    { name: "George White", rating: 5, date: "2024-01-02" },
    { name: "George White", rating: 5, date: "2024-01-03" },
  ];

  // Get unique users
  const users = [...new Set(sample.map((item) => item.name))];
  // Get unique dates
  const dates = [...new Set(sample.map((item) => item.date))];

  // Get color based on rating
  const getColor = (rating) => {
    switch (rating) {
      case 5:
        return "bg-green-500";
      case 4:
        return "bg-green-300";
      case 3:
        return "bg-white";
      case 2:
        return "bg-yellow-300";
      case 1:
        return "bg-red-500";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="p-5">
      <div className="p-5 bg-black rounded-xl mb-5">
        <h1 className="text-3xl font-bold text-white">Responses</h1>
      </div>
      <div className="overflow-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">User</th>
              {dates.map((date) => (
                <th key={date} className="px-4 py-2">
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user}>
                <td className="border px-4 py-2 max-w-24">{user}</td>
                {dates.map((date) => {
                  const response = sample.find(
                    (item) => item.name === user && item.date === date
                  );
                  return (
                    <td
                      key={date}
                      className={`border px-4 py-2 ${
                        response ? getColor(response.rating) : "bg-gray-200"
                      }`}
                    ></td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsesPage;
