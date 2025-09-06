// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          Hazirah<span className="text-gray-400">.dev</span>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link className="rounded-lg px-3 py-1.5 hover:bg-gray-50" href="/projects">Projects</Link>
          <Link className="rounded-lg px-3 py-1.5 hover:bg-gray-50" href="/about">About</Link>
          <Link className="rounded-lg px-3 py-1.5 hover:bg-gray-50" href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
