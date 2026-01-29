"use client";

import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="text-[#00ff88]">&gt;</span> About Me
        </h2>
        
        <p className="text-xl md:text-2xl text-[#ccc] mb-8 leading-relaxed">
          {about.headline}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {about.bio.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-[#888] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="code-block p-6">
            <div className="text-[#888] text-sm mb-4">// what I bring to the table</div>
            <ul className="space-y-3">
              {about.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#00ff88] mt-1">✓</span>
                  <span className="text-white">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
