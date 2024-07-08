import Image from "next/image";
import Footer from "@components/footer";
import team from "@data/team.json";
import steps from "@data/application-steps.json";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <main className="w-full bg-main">
        {/* Hero */}
        <h1 className="mt-[240px] uppercase text-center text-[64px] max-sm:text-[48px] font-semibold">
          Nano Team
        </h1>

        {/* Hero Image */}
        <Image
          src="/images/team.webp"
          alt="sale hero image"
          width={3720}
          height={2328}
          priority
          className="object-cover mt-[160px] max-sm:mt-[120px] max-sm:h-[500px]"
        />

        <section className="flex flex-row gap-[300px] max-xl:gap-[200px] max-lg:gap-[100px] max-md:gap-0   mt-[120px] max-sm:mt-[80px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <p className="text-background text-2xl font-semibold max-sm:hidden">About</p>

          <div>
            <p className="text-base font-light text-line">
              Welcome to a realm where creativity meets professionalism, and love for what we do is
              our second nature. Our team is not just a group of experts; we are craftsmen and
              craftswomen, weaving our passion into every project.
              <br />
              <br />
              We are a family of enthusiasts, crafting masterpieces with your project. Every pixel,
              every line of code bears the mark of our passion, infused into each detail. We
              don&apos;t just do our job; we create a work of art, filling it with soul and
              inspiration.
              <br />
              <br />
              Our aim is not merely to meet your expectations but to create something extraordinary.
              For us, each project is a small miracle that we bring to life with enthusiasm and
              professional mastery.
              <br />
              <br />
              Trust us, and witness how your idea transforms into a magnificent work of art.
              It&apos;s our calling, our passion, your dream personified!
            </p>

            {/* Team members */}
            <div className="flex flex-wrap mt-[130px] max-sm:mt-[80px] gap-[40px]">
              {team.map((item) => (
                <div key={item.id} className="flex mr-[55px] max-xl:mr-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover w-[80px] h-[80px] rounded-full"
                  />

                  <div className="flex flex-col justify-center pl-6">
                    <p className="text-lg">{item.name}</p>
                    <p className="mt-[4px] text-line text-lg font-light">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col mt-[120px] max-sm:mt-[80px] px-[180px] max-xl:px-[60px] max-md:px-[16px]">
          <p className="text-background text-2xl font-semibold uppercase">HOW WE WORK</p>

          <div
            className="flex justify-between mt-[80px] mb-[130px] gap-[40px] max-xl:gap-[16px] overflow-x-scroll snap-x"
            style={{ scrollbarWidth: "none" }}
          >
            {steps.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={item.id}
                  className={`h-[fit-content] max-sm:w-[80%] flex flex-col pl-4 border-l max-sm:shrink-0 max-sm:snap-start ${isLast ? "border-r pr-[40px] max-xl:pr-[16px]" : ""} ${isFirst ? "border-black" : ""}`}
                >
                  <p className="text-background whitespace-pre text-2xl font-light">{item.title}</p>
                  <p className="mt-[40px] text-line text-base max-lg:text-sm font-light ">
                    {item.content}
                  </p>

                  {isFirst && (
                    <Link href="/contact" className="mt-[50px]">
                      <p className="pb-1 text-base max-lg:text-sm border-b border-black w-[fit-content] ">
                        Submit you&apos;r project
                      </p>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
