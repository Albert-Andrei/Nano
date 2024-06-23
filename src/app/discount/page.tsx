import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import socials from "@data/socials.json";
import Divider from "@components/divider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/accordion";
import discounts from "@data/discounts-data.json";

export default function Discount() {
  return (
    <main className="w-full bg-main px-[180px]">
      {/* Header */}
      <section className="mt-[280px]">
        {/* Tag */}
        <div className="bg-tag rounded-full w-[fit-content]">
          <p className="uppercase text-sm px-md py-1.5">new</p>
        </div>

        <div className="flex items-end justify-between mt-4">
          {/* Title */}
          <p className="font-semibold text-[2.625rem] max-sm:text-[2rem] leading-[50px] max-sm:leading-[40px]">
            Extravagant Savings
            <br />
            For Our Customers
          </p>

          {/* Socials */}
          <div className="flex gap-3 items-center justify-center">
            {socials.map((social) => (
              <Link href={social.link} target="_blank" key={social.id}>
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={social.size}
                  height={social.size}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Hero Image */}
      <Image
        src="/images/sale.webp"
        alt="sale hero image"
        width={3720}
        height={2328}
        priority
        className="object-cover"
      />

      {/* Content */}
      <section className="mt-[120px] flex">
        {/* Info */}
        <div className="w-[50%] pr-[130px]">
          <p className="font-semibold text-2xl max-sm:text-xl">Get discount</p>

          <p className="text-base text-text font-light mt-6">
            We are happy to give you the opportunity to save money on our services. We know that
            everyone values every penny these days, so we do our best to make our prices affordable
            for everyone.
            <br />
            <br />
            So don&apos;t miss your chance to save money and get a quality product at a bargain
            price.
          </p>
        </div>

        {/* Accordion */}
        <div className="w-[50%]">
          {discounts.map((discount, index) => (
            <Accordion
              key={"discount" + discount.id}
              type="single"
              collapsible
              className={index > 0 ? "mt-[30px]" : ""}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-2xl max-sm:text-xl">
                  {discount.label}
                </AccordionTrigger>
                <AccordionContent className="text-base text-text font-light mt-2 pb-[30px]">
                  {discount.sections.map((section, index) => (
                    <Fragment key={discount.label + index}>
                      <p className=" text-black mt-4">{section.title}</p>
                      <p className="mt-2">{section.description}</p>
                    </Fragment>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    </main>
  );
}
