import Image from "next/image";
import Tag from "@components/tag";
import Footer from "@components/footer";
import Divider from "@components/divider";
import projects from "@data/projects-full.json";
import InfoLabel from "@components/info-label";
import { renderImages, renderParagraphs } from "@utils/render";
import Link from "next/link";

export default function Project({ params: { slug } }: { params: { slug: string } }) {
  const project = projects?.find((p) => p.slug === slug);

  if (!project) {
    return null;
  }

  const nextProjects = projects.filter((p) => p.slug === slug).slice(0, 4);
  const content = project.content.map((section, index) => {
    switch (section.type) {
      case "text":
        return renderParagraphs(section.sections);
      case "media":
        return renderImages(section.images, index);
      default:
        return null;
    }
  });

  return (
    <>
      <main className="w-full bg-main">
        {/* Header */}
        <section className="px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <div className="w-full mt-[320px] flex flex-row items-center gap-[120px]">
            {/* @TODO: check gaps and title width*/}
            <h1 className="text-[64px] font-light">{project?.title}</h1>

            <div className="flex gap-6">
              {project?.tags?.map((tag) => (
                <Tag
                  key={tag}
                  text={tag || "Unknown"}
                  textStyle="px-[18px] py-[12px] text-base font-light"
                />
              ))}
            </div>
          </div>

          <Divider />
        </section>

        {/* Hero Image */}
        <div className="relative w-ful h-[910px]">
          <Image
            src={project?.image}
            alt="Project hero image"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </div>

        {/* Content */}
        <section className="px-[180px] max-xl:px-[60px] max-md:px-[16px] mt-[120px] flex flex-row flex-nowrap gap-[160px]">
          <div className="w-[280px]">
            <InfoLabel label="Services" value={project?.services?.join(" • ")} />
            <Divider style="my-4" />
            <InfoLabel label="Date" value={project?.date} />
            <Divider style="my-4" />
            <InfoLabel label="Client" value={project?.client} />
          </div>

          <div className="flex-1">{content}</div>
        </section>

        <section className=" mb-[120px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <Divider />

          <div className="flex flex-row items-center gap-[160px]">
            <div className="w-[280px]">
              <Image
                src="/svg/general/arrow-down.svg"
                alt="arrow-down"
                width={42}
                height={42}
                className="rotate-[135deg]"
              />
            </div>

            <div className="flex-1 flex flex-row justify-between items-center">
              <p className="uppercase text-[42px] font-semibold">Next</p>

              <div className="flex gap-md">
                {nextProjects.map((p) => (
                  <Link
                    key={p.id + "link"}
                    href={"/project/" + p.slug}
                    className="border-b-[0px] border-black transition-all duration-500 hover:border-b-[1px]"
                  >
                    <p className="capitalize">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// <-- SSG Setup -->  If no project got to not found page
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
