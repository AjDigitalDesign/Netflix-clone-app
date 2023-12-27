"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";

interface linksProps {
  name: string;
  href: string;
  id: string;
}

const links: linksProps[] = [
  { id: "01", name: "Home", href: "/home" },
  {
    id: "02",
    name: "Tv Shows",
    href: "/home/tv-shows",
  },
  {
    id: "03",
    name: "Movies",
    href: "/home/movies",
  },
  {
    id: "04",
    name: "Recently Added",
    href: "/home/recently-added",
  },
  {
    id: "05",
    name: "My List",
    href: "/home/my-list",
  },
];

function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="logo" priority />
        </Link>

        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={link.id}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white uppercase underline font-semibold text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-300 font-normal text-sm uppercase tracking-tight"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-4 w-5 text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;