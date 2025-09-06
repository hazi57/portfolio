// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="mt-6 space-y-4 rounded-2xl border bg-white p-6 shadow-sm"
      >
        {/* Netlify needs these hidden fields */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <label className="block">
          <span className="text-sm">Name</span>
          <input className="mt-1 w-full rounded-xl border px-3 py-2" name="name" required />
        </label>
        <label className="block">
          <span className="text-sm">Email</span>
          <input className="mt-1 w-full rounded-xl border px-3 py-2" type="email" name="email" required />
        </label>
        <label className="block">
          <span className="text-sm">Message</span>
          <textarea className="mt-1 w-full rounded-xl border px-3 py-2" name="message" rows={5} required />
        </label>
        <button type="submit" className="rounded-xl border px-4 py-2 hover:bg-gray-50">
          Send
        </button>
      </form>
    </main>
  );
}
