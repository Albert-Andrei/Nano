"use client";

import { Fragment, useState } from "react";
import Tag from "@components/tag";
import Footer from "@components/footer";
import Divider from "@components/divider";
import projects from "@data/projects.json";
import { PROJECT_FILTERS, ProjectFilters } from "@constants/constants";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilters>(ProjectFilters.All);

  return (
    <>
      <main className="w-full bg-main">
        {/* Hero */}
        <h1 className="mt-[240px] text-center text-[64px] max-sm:text-[48px] font-semibold">
          Projects
        </h1>

        {/* Filter Bar */}
        <div className="mt-[240px] px-[120px] max-xl:px-[60px] max-md:px-[16px]">
          <div className="flex flex-row items-center justify-between">
            <p className="uppercase text-2xl font-light">Case studies</p>

            <div className="flex flex-row gap-3">
              {PROJECT_FILTERS.map((f) => {
                const isActive = f.value === selectedFilter;

                return (
                  <button key={f.id} onClick={() => setSelectedFilter(f.value)}>
                    <Tag
                      text={f.label}
                      containerStyle={`hover:scale-[1.1] ${isActive ? "bg-background" : ""}`}
                      textStyle={`font-light text-base ${isActive ? "text-white" : ""}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <Divider style="mt-[20px] mb-[32px] bg-light-line" />

          {projects.map((project) => (
            <Fragment key={project.id}>
              <Link
                href={project.href}
                className="flex flex-row justify-between items-center transition-all duration-500 hover:scale-[1.05]"
              >
                <p className="w-[22%] text-[56px] font-light">{project.title}</p>
                <Tag text={project.type} textStyle="text-base font-light" />
                <p className="text-base font-light">{project.date}</p>

                <Image
                  src={project.image}
                  alt={project.title}
                  width={280}
                  height={170}
                  className="object-cover rounded-[20px]"
                />
              </Link>

              <Divider style="my-[32px] bg-light-line" />
            </Fragment>
          ))}

          <p className="mt-[80px] mb-[120px] text-center text-base font-light">More coming soon</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
