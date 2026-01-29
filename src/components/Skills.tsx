"use client";

import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-[#00ff88]">&gt;</span> Skills & Tech
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#111] border border-[#222] rounded-lg p-4 card-hover"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-[#888] text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Terminal-style tech stack display */}
        <div className="code-block p-6 mt-12">
          <div className="flex items-center gap-2 mb-4 text-[#888]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-xs">stack.json</span>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>
              <span className="text-[#888]">{"{"}</span>{"\n"}
              <span className="text-[#ff6b6b]">  &quot;frontend&quot;</span>
              <span className="text-[#888]">:</span>
              <span className="text-[#98c379]"> [&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;]</span>
              <span className="text-[#888]">,</span>{"\n"}
              <span className="text-[#ff6b6b]">  &quot;backend&quot;</span>
              <span className="text-[#888]">:</span>
              <span className="text-[#98c379]"> [&quot;Python&quot;, &quot;Node.js&quot;, &quot;FastAPI&quot;]</span>
              <span className="text-[#888]">,</span>{"\n"}
              <span className="text-[#ff6b6b]">  &quot;database&quot;</span>
              <span className="text-[#888]">:</span>
              <span className="text-[#98c379]"> [&quot;PostgreSQL&quot;, &quot;MongoDB&quot;, &quot;Redis&quot;]</span>
              <span className="text-[#888]">,</span>{"\n"}
              <span className="text-[#ff6b6b]">  &quot;devops&quot;</span>
              <span className="text-[#888]">:</span>
              <span className="text-[#98c379]"> [&quot;Vercel&quot;, &quot;AWS&quot;, &quot;Docker&quot;]</span>{"\n"}
              <span className="text-[#888]">{"}"}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
