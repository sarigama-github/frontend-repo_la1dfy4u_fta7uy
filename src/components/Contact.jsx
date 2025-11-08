import React from 'react';

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-6xl py-12">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-slate-900">Get in touch</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-slate-700">Name</label>
              <input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-700">Email</label>
              <input type="email" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-200" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-700">Message</label>
              <textarea rows={4} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-200" placeholder="How can I help?" />
            </div>
            <button type="button" className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Send</button>
          </form>

          <div className="space-y-3 text-sm text-slate-700">
            <div>
              <span className="font-medium text-slate-900">Email: </span>
              <a href="mailto:get2naman@gmail.com" className="text-blue-600">get2naman@gmail.com</a>
            </div>
            <div>
              <span className="font-medium text-slate-900">Phone: </span>
              <a href="tel:+918925474810" className="text-blue-600">+91 8925474810</a>
            </div>
            <div>
              <span className="font-medium text-slate-900">GitHub: </span>
              <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="text-blue-600">github.com/get2naman-bit</a>
            </div>
            <div>
              <span className="font-medium text-slate-900">LinkedIn: </span>
              <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="text-blue-600">linkedin.com/in/naman-sinha-986511248</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
