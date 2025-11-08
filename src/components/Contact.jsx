import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      setStatus('Sending...');
      await new Promise((r) => setTimeout(r, 900));
      setStatus('Thanks! Your message has been sent.');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">Let’s collaborate</h2>
          <p className="text-white/70 mb-6">Have an idea, role, or project in mind? I’d love to hear it. I respond within 24–48 hours.</p>
          <div className="space-y-3 text-white/70">
            <a href="mailto:get2naman@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" /> get2naman@gmail.com</a><br />
            <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github className="w-4 h-4" /> github.com/get2naman-bit</a><br />
            <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Linkedin className="w-4 h-4" /> linkedin.com/in/naman-sinha-986511248</a>
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit} className="space-y-4 p-5 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/50">Name</label>
                <input name="name" required placeholder="Your name" className="mt-1 w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:ring-white/20" />
              </div>
              <div>
                <label className="text-xs text-white/50">Email</label>
                <input name="email" type="email" required placeholder="Email" className="mt-1 w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:ring-white/20" />
              </div>
            </div>
            <div>
              <label className="text-xs text-white/50">Subject</label>
              <input name="subject" placeholder="Subject" className="mt-1 w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:ring-white/20" />
            </div>
            <div>
              <label className="text-xs text-white/50">Message</label>
              <textarea name="message" rows="5" required placeholder="Your message" className="mt-1 w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:ring-white/20" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)] transition-all hover:scale-[1.01] active:scale-[.99]">
              <Send className="w-4 h-4" /> Send message
            </button>
            {status && <p className="text-sm text-white/60">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
