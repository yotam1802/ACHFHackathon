import HelpNeeded from "@/app/components/DoctorDashboard/HelpNeeded";
import MyLineChart from "../../components/ChartJS/MyLineChart";

export default function DashboardPage() {
  const data = [
    { date: "2024-01-01", rating: 5, userId: "John Cena" },
    { date: "2024-01-02", rating: 4, userId: "Talaal Monkey" },
    { date: "2024-01-03", rating: 3, userId: "John Cena" },
    { date: "2024-01-04", rating: 4, userId: "Talaal Monkey" },
    { date: "2024-01-05", rating: 5, userId: "John Cena" },
    { date: "2024-01-06", rating: 2, userId: "Yotam Ape" },
    { date: "2024-01-07", rating: 3, userId: "John Cena" },
    { date: "2024-01-08", rating: 4, userId: "Talaal Monkey" },
    { date: "2024-01-09", rating: 1, userId: "Yotam Ape" },
    { date: "2024-01-10", rating: 5, userId: "John Cena" },
    { date: "2024-01-11", rating: 3, userId: "Talaal Monkey" },
    { date: "2024-01-12", rating: 4, userId: "Yotam Ape" },
    { date: "2024-01-13", rating: 5, userId: "John Cena" },
    { date: "2024-01-14", rating: 2, userId: "Talaal Monkey" },
    { date: "2024-01-15", rating: 4, userId: "Yotam Ape" },
    { date: "2024-01-16", rating: 3, userId: "John Cena" },
    { date: "2024-01-17", rating: 5, userId: "Talaal Monkey" },
    { date: "2024-01-18", rating: 1, userId: "Yotam Ape" },
    { date: "2024-01-19", rating: 4, userId: "John Cena" },
    { date: "2024-01-20", rating: 2, userId: "Talaal Monkey" },
    { date: "2024-01-21", rating: 3, userId: "Yotam Ape" },
    { date: "2024-01-22", rating: 5, userId: "John Cena" },
    { date: "2024-01-23", rating: 3, userId: "Talaal Monkey" },
    { date: "2024-01-24", rating: 4, userId: "Yotam Ape" },
    { date: "2024-01-25", rating: 2, userId: "John Cena" },
    { date: "2024-01-26", rating: 5, userId: "Talaal Monkey" },
    { date: "2024-01-27", rating: 1, userId: "Yotam Ape" },
    { date: "2024-01-28", rating: 4, userId: "John Cena" },
    { date: "2024-01-29", rating: 3, userId: "Talaal Monkey" },
    { date: "2024-01-30", rating: 5, userId: "Yotam Ape" },
    { date: "2024-01-31", rating: 2, userId: "John Cena" },
    { date: "2024-02-01", rating: 4, userId: "Talaal Monkey" },
    { date: "2024-02-02", rating: 3, userId: "Yotam Ape" },
    { date: "2024-02-03", rating: 5, userId: "John Cena" },
    { date: "2024-02-04", rating: 2, userId: "Talaal Monkey" },
    { date: "2024-02-05", rating: 4, userId: "Yotam Ape" },
    { date: "2024-02-06", rating: 3, userId: "John Cena" },
    { date: "2024-02-07", rating: 5, userId: "Talaal Monkey" },
    { date: "2024-02-08", rating: 1, userId: "Yotam Ape" },
    { date: "2024-02-09", rating: 4, userId: "John Cena" },
    { date: "2024-02-10", rating: 2, userId: "Talaal Monkey" },
    { date: "2024-02-11", rating: 3, userId: "Yotam Ape" },
    { date: "2024-02-12", rating: 5, userId: "John Cena" },
    { date: "2024-02-13", rating: 3, userId: "Talaal Monkey" },
    { date: "2024-02-14", rating: 4, userId: "Yotam Ape" },
    { date: "2024-02-15", rating: 2, userId: "John Cena" },
    { date: "2024-02-16", rating: 5, userId: "Talaal Monkey" },
    { date: "2024-02-17", rating: 1, userId: "Yotam Ape" },
    { date: "2024-02-18", rating: 4, userId: "John Cena" },
    { date: "2024-02-19", rating: 3, userId: "Talaal Monkey" },
    { date: "2024-02-20", rating: 5, userId: "Yotam Ape" },
  ];

  return (
    <div className="min-h-screen p-5">
      <div className="p-5 bg-black rounded-xl">
        <h1 className="text-3xl font-bold text-white">Doctor Dashboard</h1>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap rounded-xl">
        <div className="w-full md:w-1/2">
          <div className="p-5 shadow-md rounded-md h-full">
            <h2 className="text-xl font-bold">Patient Trends</h2>
            <MyLineChart data={data} />
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-xl">
          <div className="p-5 shadow-md rounded-md h-full">
            <h2 className="text-xl font-bold">Help Needed</h2>
            <HelpNeeded />
          </div>
        </div>
        <div className="w-full rounded-xl">
          <div className="p-5 shadow-md rounded-md h-full">
            <h2 className="text-xl font-bold">Bottom Component</h2>
            <p>Placeholder content</p>
          </div>
        </div>
      </div>
    </div>
  );
}
