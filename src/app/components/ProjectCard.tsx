import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{p.tagline}</p>
        </div>
        {p.href ? (
          <Link href={p.href} className="text-sm underline underline-offset-4 hover:no-underline">
            View
          </Link>
        ) : null}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="rounded-full border px-2 py-0.5 text-xs">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
// src/components/ProjectCard.tsx --- IGNORE ---