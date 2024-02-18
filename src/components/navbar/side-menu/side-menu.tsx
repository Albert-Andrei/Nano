"use client";
import { FC, useState } from "react";
import Image from "next/image";
import navigationItems from "@data/navigation.json";

import chris from "../../../../public/images/team/chris.webp";
import madama from "../../../../public/images/team/madam.webp";
import petrucio from "../../../../public/images/team/petrucio.webp";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SideBar: FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const segments = useSelectedLayoutSegments();
  const pathname = segments?.[0];

  const [hovered, setHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getIsOnPage = (label: string, index: number) => {
    if (index === 0) {
      return !pathname;
    }

    return pathname === label.toLocaleLowerCase();
  };

  return (
    <>
      {/* Navigation */}
      <div
        id="drawer-navigation"
        className="fixed top-0 right-0 z-40 w-nav h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-background ease-out duration-500 flex items-center"
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
        style={{ transform: isOpen ? "translateX(0)" : "" }}
      >
        {/* Close Button */}
        <button
          aria-label="Burger menu"
          onClick={() => setIsOpen(false)}
          className="absolute top-11 right-20"
        >
          <Image src="/svg/general/cross.svg" alt="cross" width={24} height={24} />
          <span className="sr-only">Close Menu</span>
        </button>

        {/* Navigation  */}
        <nav className="px-20">
          <ul className="flex flex-col">
            {navigationItems.map((item, index) => {
              const isOnPage = getIsOnPage(item.label as string, index);

              return (
                <li
                  key={item.id}
                  onMouseOver={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onFocus={() => {}}
                >
                  <Link href={item.href as string} onClick={() => setIsOpen(false)}>
                    <p
                      className={`text-5xl font-medium ${isOnPage && !hovered ? "text-white" : "text-faded"} hover:text-white transition-colors uppercase py-4`}
                    >
                      {item.label}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Images */}
      <div
        id="drawer-navigation"
        className="fixed top-0 right-0 z-30 w-screen h-screen overflow-y-auto transition-transform translate-x-full bg-background ease-out duration-700 pr-nav"
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
        style={{ transform: isOpen ? "translateX(0)" : "" }}
      >
        <Image
          src={team[selectedIndex]}
          alt="team member image"
          width={4096}
          height={2713}
          loading="lazy"
          placeholder="blur"
          className="object-cover h-full"
          style={{ objectPosition: "-150px 0px" }}
        />

        <div className="absolute left-14 top-0 h-screen flex flex-col justify-center gap-2 ">
          {team.map((_, index) => (
            <Image
              key={index}
              src={team[index]}
              alt="team member card"
              width={70}
              height={70}
              style={{
                objectFit: "cover",
                height: "70px",
                width: "70px",
                borderRadius: "50%",
                border: `2px solid ${index === selectedIndex ? "white" : "#ffffff20"}`,
                cursor: "pointer",
              }}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const team = [madama, petrucio, chris];
