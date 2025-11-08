import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      setStatus('Sending...');
      // Demo handler: just wait slightly to simulate send
      await new Promise((r) => setTimeout(r, 700));
      setStatus('Thanks! I will get back to you soon.');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">Let’s collaborate</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:ring-white/20" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:ring-white/20" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:ring-white/20" />
          <textarea name="message" rows="5" required placeholder="Your message" className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:ring-white/20" />
          <button type="submit" className="inline-flex justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)] transition-shadow">Send message</button>
          {status && <p className="text-sm text-white/60">{status}</p>}
        </form>
      </div>
    </section>
  );
}
