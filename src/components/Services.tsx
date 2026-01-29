"use client";

import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="text-[#00ff88]">&gt;</span> Services
        </h2>
        <p className="text-[#888] mb-12 max-w-2xl">
          Whether you need a quick fix or a complete solution, I&apos;m here to help.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#111] border border-[#222] rounded-xl p-6 card-hover"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="code-block inline-block p-6">
            <code className="text-sm">
              <span className="text-[#888]">$</span>{" "}
              <span className="text-[#00ff88]">npm run</span>{" "}
              <span className="text-white">hire-peter</span>
              <br />
              <span className="text-[#888]">→ Fast. Reliable. Quality code delivered.</span>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
