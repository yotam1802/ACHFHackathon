"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import achf from "/public/achf.png";
import Image from "next/image";

export default function NavbarMenu({ svgs }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <ul className="flex lg:flex-col md:gap-3 justify-around w-full">
      <div className="hidden lg:flex lg:items-center lg:mb-8 lg:mt-5">
        <Image
          src={achf}
          alt="Logo"
          width={500}
          height={500}
          className="w-44 px-1 md:px-5"
        />
      </div>
      {svgs.map((svg, key) => {
        return (
          <li key={key}>
            <Link
              href={svg.route}
              data-tip={svg.name}
              className={`tooltip lg:tooltip-right flex flex-col lg:flex-row items-center ${
                isActive(svg.route) ? "active" : ""
              } px-1 md:px-5 w-14 md:w-28 lg:w-full`}
            >
              <FontAwesomeIcon icon={svg.icon} size="lg" />
              <div className="invisible md:visible">{svg.name}</div>
            </Link>
          </li>
        );
      })}

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
