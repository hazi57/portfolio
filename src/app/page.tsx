import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="rounded-3xl border bg-white p-10 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-bold">Hi, I’m Hazirah</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Computer Software @ Hanyang • Cybersecurity • AI/ML • Mobile Apps
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-xl border px-4 py-2" href="/projects">Projects</Link>
          <Link className="rounded-xl border px-4 py-2" href="/about">About</Link>
          <Link className="rounded-xl border px-4 py-2" href="/contact">Contact</Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">Featured Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
