// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 leading-7 text-gray-700">
        I’m a Computer Software Engineering student at Hanyang University.
        I build human-centered products with a focus on cybersecurity, machine learning,
        and mobile apps.
      </p>
      <ul className="mt-6 space-y-2 text-gray-700">
        <li>• FYP: Deepfake Voice Phishing Detection (Python, PyTorch)</li>
        <li>• HCI: PULSE & LastBite (React Native, Expo)</li>
        <li>• Hackathon: ImpactIQ dashboard (React, FastAPI, PostgreSQL)</li>
      </ul>
    </main>
  );
}
