"use client";

import React, { FC } from "react";
import Link from "next/link";
import socials from "@data/socials.json";
import Divider from "@components/divider";
import useInView from "@hooks/useInView";
import Image from "next/image";
import madama from "@public/images/team/madam.webp";
import petro from "@public/images/team/petrucio.webp";

export const Footer: FC = () => {
  const { ref, isInView } = useInView();

  return (
    <footer className="dark-bg w-full px-[180px] bg-background">
      {/* Content */}
      <div className="mt-[142px] flex justify-between items-center">
        {/* Heading */}
        <div className="max-w-[45%]">
          <p className="text-base font-light tracking-[2px] uppercase text-white">
            Innovate your business
          </p>
          <p className="uppercase text-[76px] font-semibold mt-6 text-white">
            Let&apos;s collaborate
          </p>

          <Link
            href="/contact"
            className="w-[fit-content] mt-lg px-[32px] py-[14px] flex justify-center items-center rounded-full bg-white"
          >
            <p className="text-base font-medium">Submit your project</p>
          </Link>
        </div>

        {/* Cards */}
        <div ref={ref} className="relative w-[50%] flex justify-center items-center">
          <Image
            src={petro}
            alt="petro"
            style={{
              objectFit: "cover",
            }}
            className={`absolute z-10 flex w-[300px] h-[370px] transition-all duration-700 rounded-3xl  ${isInView ? "-rotate-[15deg] -left-10 -top-[-40px]" : "-rotate-[0deg] -left-[0px] -top-[0px]"}`}
          />

          <div className="z-20 flex flex-col px-6 py-11 text-base rounded-3xl bg-main max-w-[327px]">
            <Image
              src="svg/general/discount.svg"
              alt="discount"
              loading="lazy"
              width={48}
              height={48}
              className="w-12 aspect-square"
            />
            <div className="uppercase mt-12 text-4xl font-semibold text-background">OFFER</div>
            <div className="mt-6 font-light leading-6 text-line">
              So don&quot;t miss your chance to save money and get a quality product at a bargain
              price.
            </div>
            <Link
              href="/contact"
              className="w-[fit-content] justify-center py-px mt-14 text-background border-b-background border-b"
            >
              Get Discount
            </Link>
          </div>

          <Image
            src={madama}
            alt="petro"
            style={{
              objectFit: "cover",
              objectPosition: "80% 50%",
            }}
            className={`absolute z-10 flex w-[300px] h-[370px] transition-all duration-700 rounded-3xl ${isInView ? "-right-10 -top-[-40px] -rotate-[-15deg]" : "-right-[0px] -top-[0px] -rotate-[0deg]"} `}
          />
        </div>
      </div>

      {/* References */}
      <div className="mt-[150px] mb-lg">
        <div className="flex gap-lg">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="flex items-center justify-center"
            >
              <p className="capitalize text-line">{social.label}</p>
            </Link>
          ))}
        </div>

        <Divider style="my-md bg-line" />

        <div className="flex justify-between items-center">
          <p className="text-line">© 2023 Nano Studio. All rights reserved.</p>
          <div className="flex gap-lg">
            <Link href="/">
              <p className="text-line">Privacy</p>
            </Link>
            <Link href="/">
              <p className="text-line">Terms</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
