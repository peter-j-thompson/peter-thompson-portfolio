"use client";

import { siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Terminal-style intro */}
        <div className="code-block p-4 mb-8 text-left inline-block">
          <div className="flex items-center gap-2 mb-3 text-[#888]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-xs">terminal</span>
          </div>
          <code className="text-sm md:text-base">
            <span className="text-[#888]">$</span>{" "}
            <span className="text-[#00ff88]">whoami</span>
            <br />
            <span className="text-white">{siteConfig.name.toLowerCase().replace(" ", ".")}</span>
            <span className="cursor-blink text-[#00ff88]">_</span>
          </code>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          {siteConfig.name}
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-[#888] mb-2">
          {siteConfig.title}
        </p>
        
        <p className="text-lg md:text-xl gradient-text font-semibold mb-8">
          {siteConfig.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-[#333] text-white font-semibold rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#888]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
