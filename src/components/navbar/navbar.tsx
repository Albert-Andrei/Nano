"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SideBar from "./side-menu";
import { usePathname } from "next/navigation";

export const NavBar: FC = () => {
  const pathname = usePathname();
  const invertNavbar = pathname === "/";
  const invertLogo = pathname === "/contact";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-10 max-w-screen-2xl flex flex-row items-center justify-between mt-lg px-20 ${invertNavbar && "invert"}`}
      >
        <Link href="/">
          <div className={`flex ${invertLogo && "invert"}`}>
            <Image src="/svg/logo.svg" alt="logo" width={32} height={32} />
            <Image src="/svg/nano.svg" alt="nano" width={59} height={19} className="ml-1" />
          </div>
          <span className="sr-only">logo</span>
        </Link>

        <div className="flex justify-between items-center">
          <Link href="/about" className="p-0 mr-lg">
            <p className="text-black underline underline-offset-8">Submit you&#39;r project</p>
          </Link>

          <button aria-label="Burger menu" onClick={() => setIsOpen(true)}>
            <Image id="burger" src="/svg/general/menu.svg" alt="Menu" width={32} height={32} />
            <span className="sr-only">Open Menu</span>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
