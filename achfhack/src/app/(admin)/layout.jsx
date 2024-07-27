import Navbar from "../components/DashboardNavbar/DashboardNavbar/Navbar";
import { faHome, faList, faChartBar } from "@fortawesome/free-solid-svg-icons";

const svgs = [
  { name: "Home", icon: faHome, route: "/dashboard" },
  { name: "Responses", icon: faList, route: "/responses" },
  { name: "Statistics", icon: faChartBar, route: "/statistics" },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-full min-w-full">
      <Navbar svgs={svgs} />
      <div className="lg:flex-1 lg:ml-56">{children}</div>
    </div>
  );
}
