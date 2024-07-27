import Navbar from "../components/DashboardNavbar/DashboardNavbar/Navbar";
import {
  faHome,
  faStethoscope,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const svgs = [
  { name: "Home", icon: faHome, route: "/dashboard-client" },
  { name: "Checkup", icon: faStethoscope, route: "/checkup" },
  { name: "Resources", icon: faBook, route: "/resources" },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-full min-w-full">
      <Navbar svgs={svgs} />
      <div className="lg:flex-1 lg:ml-56">{children}</div>
    </div>
  );
}
