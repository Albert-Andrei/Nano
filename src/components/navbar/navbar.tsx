"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SideBar from "./side-menu";
import { usePathname } from "next/navigation";

export const NavBar: FC = () => {
  const pathname = usePathname();

  // const mql = window.matchMedia("(max-width: 768px)");

  const invertNavbar = pathname === "/";
  const invertLogo = pathname === "/contact";
  // const invertBurger = pathname === "/contact" && mql.matches;
  const invertBurger = pathname === "/contact";

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const invertible = document.querySelectorAll(".logo");

    const checkSectionInView = () => {
      const scrollPos = window.scrollY || window.scrollY;
      const windowHeight = window.innerHeight;

      // Skip scroll event condition
      if (invertBurger) {
        // Check which section is in view
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const sectionTop = section.getBoundingClientRect().top + scrollPos - 50;
          const sectionHeight = section.offsetHeight;

          // Check if the section is in view
          if (scrollPos >= sectionTop - windowHeight && scrollPos < sectionTop + sectionHeight) {
            const firstClassName = section.getAttribute("class")?.split(" ")[0];

            // Check if the section is dark or light
            if (firstClassName === "dark-bg") {
              invertible.forEach((element) => {
                element.classList.add("invert");
              });
            } else {
              invertible.forEach((element) => {
                element.classList.remove("invert");
              });
            }
            break; // Stop checking other sections
          }
        }
      }
    };

    window.addEventListener("scroll", checkSectionInView);

    return () => {
      window.removeEventListener("scroll", checkSectionInView);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-screen max-w-screen-2xl flex flex-row items-center justify-between mt-lg px-20 max-xl:px-[60px] max-md:px-[16px] ${invertNavbar && "invert"}`}
      >
        <Link href="/">
          <div className={`logo flex ${invertLogo && "invert"}`}>
            <Image src="/svg/logo.svg" alt="logo" width={32} height={32} />
            <Image
              src="/svg/nano.svg"
              alt="nano"
              priority
              width={59}
              height={19}
              className="ml-1"
            />
          </div>
          <span className="sr-only">logo</span>
        </Link>

        <div className={`logo flex justify-between items-center ${invertBurger && "invert"}`}>
          <Link href="/contact" className="p-0 mr-lg max-sm:hidden">
            <p className="text-black underline underline-offset-8">Submit you&#39;r project</p>
          </Link>

          <button
            aria-label="Burger menu"
            onClick={() => setIsOpen(true)}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
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
