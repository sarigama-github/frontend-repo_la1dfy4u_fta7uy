import React from 'react';
import { Code2, Layers, Smartphone, Figma } from 'lucide-react';

const skills = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-5 h-5" />,
    items: ['C', 'Python', 'Java']
  },
  {
    title: 'Web Development',
    icon: <Layers className="w-5 h-5" />,
    items: ['HTML', 'CSS', 'ReactJS']
  },
  {
    title: 'Android & Cross‑platform',
    icon: <Smartphone className="w-5 h-5" />,
    items: ['React Native', 'Flutter']
  },
  {
    title: 'Design & Tools',
    icon: <Figma className="w-5 h-5" />,
    items: ['Figma', 'Canva', 'Wix', 'Visily', 'VS Code']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.title} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-800">
                {group.icon}
                <h3 className="font-medium">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span key={s} className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-100 text-sm text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
