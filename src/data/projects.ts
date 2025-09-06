// src/data/projects.ts
export type Project = {
  title: string;
  tagline: string;
  tech: string[];
  href?: string; // GitHub/demo link
};

export const projects: Project[] = [
  {
    title: "Deepfake Voice Phishing Detection",
    tagline: "CNN on Mel spectrograms to detect voice deepfakes",
    tech: ["Python", "PyTorch"],
    href: "#",
  },
  {
    title: "PULSE – Study with Rhythm",
    tagline: "Pomodoro, mood check-in, AI study plan",
    tech: ["React Native", "Expo"],
    href: "#",
  },
  {
    title: "LastBite – Fridge Reminder & Meal Planner",
    tagline: "Expiry tracking, barcode scan, meal planning",
    tech: ["React Native", "Expo Router"],
    href: "#",
  },
  {
    title: "ImpactIQ (UNDP Hackathon)",
    tagline: "AI-powered dashboard for ODA project success",
    tech: ["React", "FastAPI", "PostgreSQL"],
    href: "#",
  },
];
