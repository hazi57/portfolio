// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--surface)]/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          Hazirah<span className="ml-1 text-[var(--primary)]">.dev</span>
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <Link className="rounded-lg px-3 py-1.5 hover:bg-[var(--card)]" href="/projects">Projects</Link>
          <Link className="rounded-lg px-3 py-1.5 hover:bg-[var(--card)]" href="/about">About</Link>
          <Link className="rounded-lg px-3 py-1.5 hover:bg-[var(--card)]" href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
