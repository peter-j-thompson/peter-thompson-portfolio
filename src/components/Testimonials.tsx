"use client";

import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="text-[#00ff88]">&gt;</span> What Clients Say
        </h2>
        <p className="text-[#888] mb-12">
          Don&apos;t take my word for it — here&apos;s what people I&apos;ve worked with have to say.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#111] border border-[#222] rounded-xl p-6 card-hover relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-4xl text-[#222]">&quot;</div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-[#f59e0b]">★</span>
                ))}
              </div>
              
              <p className="text-[#ccc] text-sm mb-6 leading-relaxed relative z-10">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="border-t border-[#222] pt-4">
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-[#888] text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
