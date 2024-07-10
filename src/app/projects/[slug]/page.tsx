import Footer from "@components/footer";
import projects from "@data/projects.json";

export default function Project({ params: { slug } }: { params: { slug: string[] } }) {
  return (
    <>
      <main className="w-full bg-main">
        <p>{slug}</p>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
