"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faChartBar,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function NavbarMenu() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <ul className="flex lg:flex-col md:gap-3 justify-around w-full">
      <li>
        <Link
          href={"/dashboard"}
          data-tip="Home"
          className={`tooltip lg:tooltip-right flex flex-col lg:flex-row items-center ${
            isActive("/dashboard") ? "active" : ""
          } px-1 md:px-5 w-14 md:w-28 lg:w-full`}
        >
          <FontAwesomeIcon icon={faHome} size="lg" />
          <div className="invisible md:visible">Home</div>
        </Link>
      </li>
      <li>
        <Link
          href={"/responses"}
          data-tip="Responses"
          className={`tooltip lg:tooltip-right flex flex-col lg:flex-row items-center ${
            isActive("/responses") ? "active" : ""
          } px-1 md:px-5 w-14 md:w-28 lg:w-full`}
        >
          <FontAwesomeIcon icon={faList} size="lg" />
          <span className="invisible md:visible">Responses</span>
        </Link>
      </li>
      <li>
        <Link
          href={"/statistics"}
          data-tip="Statistics"
          className={`tooltip lg:tooltip-right flex flex-col lg:flex-row items-center ${
            isActive("/statistics") ? "active" : ""
          } px-1 md:px-5 w-14 md:w-28 lg:w-full`}
        >
          <FontAwesomeIcon icon={faChartBar} size="lg" />
          <span className="invisible md:visible">Statistics</span>
        </Link>
      </li>
      <li className="lg:hidden">
        <Link
          href={"/"}
          className={`flex flex-col items-center px-1 md:px-5 w-14 md:w-28`}
        >
          <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
          <span className="invisible md:visible">Logout</span>
        </Link>
      </li>
    </ul>
  );
}
