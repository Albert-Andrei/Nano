import { Fragment } from "react";

import Card from "@components/card";
import Footer from "@components/footer";
import services from "@data/studio-services.json";
import projects from "@data/showcase-projects.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/accordion";
import HowWeWork from "@components/how-we-work";

export default function Home() {
  return (
    <Fragment>
      <main>
        {/* Hero */}
        <section className="w-full flex flex-col items-center">
          {/* Title */}
          <h1 className="mt-[300px] uppercase text-white text-center text-[96px] font-semibold tracking-[-4px]">
            Nano <span className="font-[200]">Studio</span>
          </h1>
          <p className="text-white text-center text-base font-light max-w-[615px]">
            Big ideas, small studio. We design impactful brands, products, and apps that grow with
            you.
          </p>

          {/* Projects */}
          <div className="w-full mt-[200px] pb-[60px]">
            <p className="uppercase text-white px-[180px] max-xl:px-[60px] max-md:px-[16px]">
              ENGAGED IN
            </p>

            <div
              className="mt-[42px] flex flex-row gap-[20px] px-[180px] max-xl:px-[60px] max-md:px-[16px] overflow-x-scroll snap-x"
              style={{ scrollbarWidth: "none" }}
            >
              {projects.map((proj) => (
                <Card key={proj.id} {...proj} />
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white w-full pt-[120px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <p className="text-base font-light uppercase">Services</p>

          <div className="mt-[42px] flex flex-row justify-between gap-[180px]">
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
        <section className="bg-white  w-full flex flex-col pt-[120px] pb-[190px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <p className="text-background text-base font-light  uppercase">HOW WE WORK</p>
          <p className="mt-[42px] text-background text-2xl font-semibold">
            From Research to Success
          </p>

          <HowWeWork />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}
