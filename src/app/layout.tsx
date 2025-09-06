// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Hazirah | Portfolio",
  description: "Cybersecurity • AI/ML • Mobile apps • Hanyang University",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
        <Header />
        {children}
        <footer className="mt-16 border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Hazirah. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
