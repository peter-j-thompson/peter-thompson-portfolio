"use client";

import { useState } from "react";
import { siteConfig } from "@/data/content";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#222]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-bold text-xl">
            <span className="text-[#00ff88]">&lt;</span>
            {siteConfig.name.split(" ")[0]}
            <span className="text-[#00ff88]">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#888] hover:text-[#00ff88] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-4 py-2 bg-[#00ff88] text-black text-sm font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-[#222] mt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-[#888] hover:text-[#00ff88] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="block mt-4 px-4 py-2 bg-[#00ff88] text-black text-center font-semibold rounded-lg"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
