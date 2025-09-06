// src/components/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{p.tagline}</p>
        </div>
        {p.href ? (
          <Link
            href={p.href}
            className="text-sm text-[var(--primary)] underline underline-offset-4 hover:no-underline"
          >
            View
          </Link>
        ) : null}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted)]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
