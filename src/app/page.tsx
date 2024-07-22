import { Fragment } from "react";

import Image from "next/image";
import Card from "@components/card";
import Footer from "@components/footer";
import services from "@data/studio-services.json";
import projects from "@data/showcase-projects.json";
import team from "@data/team.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/accordion";
import HowWeWork from "@components/how-we-work";
import { Reviews } from "@components/reviews/reviews";

export default function Home() {
  return (
    <Fragment>
      <main>
        {/* Hero */}
        <section className="w-full flex flex-col items-center">
          {/* Title */}
          <h1 className="mt-[300px] max-md:mt-[280px] uppercase text-white text-center text-[96px] max-md:text-[48px] font-semibold tracking-[-4px]">
            Nano <span className="font-[200]">Studio</span>
          </h1>
          <p className="text-white text-center text-base font-light max-w-[615px] max-md:hidden">
            Big ideas, small studio. We design impactful brands, products, and apps that grow with
            you.
          </p>
          <p className="uppercase text-center text-[12px] font-light w-[250px] text-line md:hidden">
            Your personal makeup artist for the virtual world!
          </p>

          {/* Projects */}
          <div className="w-full mt-[200px] max-md:mt-[170px] pb-[60px]">
            <p className="uppercase text-white px-[180px] max-xl:px-[60px] max-md:px-[16px]">
              ENGAGED IN
            </p>

            <div
              className="mt-[42px] flex flex-row gap-[20px] px-[180px] max-xl:px-[60px] max-md:px-[16px] overflow-x-scroll snap-x"
              style={{ scrollbarWidth: "none" }}
            >
              {projects.map((proj) => (
                <Card
                  key={proj.id}
                  {...proj}
                  titleStyle="max-md:text-[20px]"
                  subtitleStyle="max-md:text-[10px]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white w-full pt-[120px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <p className="text-base font-light uppercase">Services</p>

          <div className="mt-[42px] max-md:mt-[32px] flex flex-row max-md:flex-col justify-between gap-[180px] max-xl:gap-[130px] max-lg:gap-[100px] max-md:gap-[80px]">
            <div className="flex-1">
              <p className="text-6 font-semibold">What are we good at ...</p>
              <p className="mt-6 text-base text-line font-light">
                Whether you&apos;re looking for a new website, mobile app, or interactive marketing
                campaign, we can help you create something truly remarkable. We&apos;re not afraid
                to push the boundaries of design, and we&apos;re always looking for new ways to
                surprise and delight our clients.
              </p>
            </div>

            <div className="flex-1">
              {services.map((service, index) => (
                <Accordion
                  key={service.id}
                  type="single"
                  collapsible
                  defaultValue="item-1"
                  className={index > 0 ? "mt-[30px]" : ""}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="font-semibold text-2xl max-sm:text-xl">
                      {service.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-text font-light mt-2 pb-[30px]">
                      <p className="text-base text-line font-light whitespace-pre-wrap">
                        {service.text}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="max-md:hidden bg-white w-full flex flex-col pt-[120px] pb-[60px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <p className="text-background text-base font-light  uppercase">HOW WE WORK</p>
          <p className="mt-[42px] text-background font-semibold">From Research to Success</p>

          <HowWeWork />
        </section>

        {/* MOBILE:  About  */}
        <section className="md:hidden pt-[120px] pb-[120px] bg-white">
          <div className=" max-md:px-[16px]">
            <p className="text-background text-base font-light  uppercase">ABOUT</p>
            <p className="mt-[32px] text-background font-semibold">What the ai says about us</p>
            <p className="mt-6 text-line font-light">
              We are a team of crazy geniuses who turn pixels into magic and code into creativity.
            </p>
          </div>

          <div
            className="mt-[42px] flex flex-row gap-[20px] px-[180px] max-xl:px-[60px] max-md:px-[16px] overflow-x-scroll snap-x"
            style={{ scrollbarWidth: "none" }}
          >
            {team.map((per) => (
              <Card
                key={per.id}
                title={per.name}
                type={per.title}
                progress={per.position}
                image={per.image}
                titleStyle="text-[12px] font-medium"
                subtitleStyle="text-line text-[8px]"
                tagStyle="bg-white"
                tagTextStyle="text-black"
              />
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="w-full flex flex-col items-center pt-[120px] pb-[120px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <p className="text-white text-base font-light tracking-[0px] uppercase">Reviews</p>
          <p className="mt-[32px] text-white text-2xl font-semibold tracking-[0px]">
            We always value your opinion!
          </p>
          <p className="mt-6 text-line text-base text-center font-light tracking-[0px] max-w-[550px]">
            We appreciate every piece of feedback and strive to create projects that inspire you.
          </p>

          <Reviews />
        </section>

        <div className="relative w-ful h-[1010px] max-md:h-[840px]">
          <Image
            src="/images/thinker.webp"
            alt="Some image"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
