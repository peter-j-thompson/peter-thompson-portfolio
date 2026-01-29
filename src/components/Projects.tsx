"use client";

import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="text-[#00ff88]">&gt;</span> Projects
        </h2>
        <p className="text-[#888] mb-12 max-w-2xl">
          A selection of projects I&apos;ve built. Each one solves a real problem 
          with clean, maintainable code.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-[#111] border border-[#222] rounded-xl overflow-hidden card-hover group"
            >
              {/* Colored accent bar */}
              <div
                className="h-1"
                style={{ backgroundColor: project.color }}
              />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-[#00ff88] transition-colors">
                    {project.name}
                  </h3>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-[#888] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#888] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
