import React from 'react';
import { Code2, Boxes, Layers, Smartphone, Figma, Github, Cpu, Wrench } from 'lucide-react';

const skills = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-5 h-5" />,
    items: [
      { name: 'C', logo: <Cpu className="w-4 h-4" /> },
      { name: 'Python', logo: <Cpu className="w-4 h-4" /> },
      { name: 'Java', logo: <Cpu className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Web Development',
    icon: <Layers className="w-5 h-5" />,
    items: [
      { name: 'HTML', logo: <Boxes className="w-4 h-4" /> },
      { name: 'CSS', logo: <Boxes className="w-4 h-4" /> },
      { name: 'ReactJS', logo: <Boxes className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Android & Cross‑platform',
    icon: <Smartphone className="w-5 h-5" />,
    items: [
      { name: 'React Native', logo: <Smartphone className="w-4 h-4" /> },
      { name: 'Flutter', logo: <Smartphone className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Design & Tools',
    icon: <Figma className="w-5 h-5" />,
    items: [
      { name: 'Figma', logo: <Figma className="w-4 h-4" /> },
      { name: 'Canva', logo: <Wrench className="w-4 h-4" /> },
      { name: 'Wix', logo: <Wrench className="w-4 h-4" /> },
      { name: 'Visily', logo: <Wrench className="w-4 h-4" /> },
      { name: 'VS Code', logo: <Github className="w-4 h-4" /> },
      { name: 'Code::Blocks', logo: <Github className="w-4 h-4" /> },
      { name: 'Flutter (SDK)', logo: <Github className="w-4 h-4" /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <div className="flex items-center gap-2 text-white/80">
                {group.icon}
                <h3 className="font-medium">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span key={s.name} className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm text-white/70">
                    {s.logo}
                    {s.name}
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
