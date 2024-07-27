import MyLineChart from "../../components/ChartJS/MyLineChart";

export default function DashboardPage() {
  const data = [
    { date: "2024-01-01", rating: 5, userId: "user1" },
    { date: "2024-01-02", rating: 4, userId: "user2" },
    { date: "2024-01-03", rating: 3, userId: "user1" },
    { date: "2024-01-04", rating: 4, userId: "user2" },
    { date: "2024-01-05", rating: 5, userId: "user1" },
    { date: "2024-01-06", rating: 2, userId: "user3" },
    { date: "2024-01-07", rating: 3, userId: "user1" },
    { date: "2024-01-08", rating: 4, userId: "user2" },
    { date: "2024-01-09", rating: 1, userId: "user3" },
    { date: "2024-01-10", rating: 5, userId: "user1" },
    { date: "2024-01-11", rating: 3, userId: "user2" },
    { date: "2024-01-12", rating: 4, userId: "user3" },
    { date: "2024-01-13", rating: 5, userId: "user1" },
    { date: "2024-01-14", rating: 2, userId: "user2" },
    { date: "2024-01-15", rating: 4, userId: "user3" },
    { date: "2024-01-16", rating: 3, userId: "user1" },
    { date: "2024-01-17", rating: 5, userId: "user2" },
    { date: "2024-01-18", rating: 1, userId: "user3" },
    { date: "2024-01-19", rating: 4, userId: "user1" },
    { date: "2024-01-20", rating: 2, userId: "user2" },
    { date: "2024-01-21", rating: 3, userId: "user3" },
    { date: "2024-01-22", rating: 5, userId: "user1" },
    { date: "2024-01-23", rating: 3, userId: "user2" },
    { date: "2024-01-24", rating: 4, userId: "user3" },
    { date: "2024-01-25", rating: 2, userId: "user1" },
    { date: "2024-01-26", rating: 5, userId: "user2" },
    { date: "2024-01-27", rating: 1, userId: "user3" },
    { date: "2024-01-28", rating: 4, userId: "user1" },
    { date: "2024-01-29", rating: 3, userId: "user2" },
    { date: "2024-01-30", rating: 5, userId: "user3" },
    { date: "2024-01-31", rating: 2, userId: "user1" },
    { date: "2024-02-01", rating: 4, userId: "user2" },
    { date: "2024-02-02", rating: 3, userId: "user3" },
    { date: "2024-02-03", rating: 5, userId: "user1" },
    { date: "2024-02-04", rating: 2, userId: "user2" },
    { date: "2024-02-05", rating: 4, userId: "user3" },
    { date: "2024-02-06", rating: 3, userId: "user1" },
    { date: "2024-02-07", rating: 5, userId: "user2" },
    { date: "2024-02-08", rating: 1, userId: "user3" },
    { date: "2024-02-09", rating: 4, userId: "user1" },
    { date: "2024-02-10", rating: 2, userId: "user2" },
    { date: "2024-02-11", rating: 3, userId: "user3" },
    { date: "2024-02-12", rating: 5, userId: "user1" },
    { date: "2024-02-13", rating: 3, userId: "user2" },
    { date: "2024-02-14", rating: 4, userId: "user3" },
    { date: "2024-02-15", rating: 2, userId: "user1" },
    { date: "2024-02-16", rating: 5, userId: "user2" },
    { date: "2024-02-17", rating: 1, userId: "user3" },
    { date: "2024-02-18", rating: 4, userId: "user1" },
    { date: "2024-02-19", rating: 3, userId: "user2" },
    { date: "2024-02-20", rating: 5, userId: "user3" },
  ];

  return (
    <div className="bg-white">
      <div className="p-5 bg-black">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="p-5">
        <div className="bg-white p-5 shadow-md rounded-md">
          <h2 className="text-xl font-bold">Patient Trends</h2>
          <div className="mt-5">
            <h2>Patient Trends</h2>
            <MyLineChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
