"use client";

import { siteConfig } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="text-[#00ff88]">&gt;</span> Let&apos;s Work Together
        </h2>
        <p className="text-[#888] mb-12 max-w-2xl">
          Have a project in mind? Need help with a tricky bug? Drop me a line 
          and let&apos;s talk about how I can help.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="code-block p-6">
              <div className="text-[#888] text-sm mb-4">// contact.ts</div>
              <pre className="text-sm">
                <code>
                  <span className="text-[#c678dd]">const</span>{" "}
                  <span className="text-[#e5c07b]">contact</span>{" "}
                  <span className="text-[#888]">=</span> {"{"}
                  {"\n"}
                  <span className="text-[#ff6b6b]">  email</span>
                  <span className="text-[#888]">:</span>{" "}
                  <span className="text-[#98c379]">&quot;{siteConfig.email}&quot;</span>
                  <span className="text-[#888]">,</span>
                  {"\n"}
                  <span className="text-[#ff6b6b]">  response</span>
                  <span className="text-[#888]">:</span>{" "}
                  <span className="text-[#98c379]">&quot;within 24 hours&quot;</span>
                  <span className="text-[#888]">,</span>
                  {"\n"}
                  <span className="text-[#ff6b6b]">  timezone</span>
                  <span className="text-[#888]">:</span>{" "}
                  <span className="text-[#98c379]">&quot;PST (flexible)&quot;</span>
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 p-4 bg-[#111] border border-[#222] rounded-lg hover:border-[#00ff88] transition-colors group"
              >
                <span className="text-2xl">✉️</span>
                <div>
                  <div className="font-medium group-hover:text-[#00ff88] transition-colors">
                    Email Me
                  </div>
                  <div className="text-[#888] text-sm">{siteConfig.email}</div>
                </div>
              </a>

              <a
                href={siteConfig.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-[#111] border border-[#222] rounded-lg hover:border-[#00ff88] transition-colors group"
              >
                <span className="text-2xl">🛒</span>
                <div>
                  <div className="font-medium group-hover:text-[#00ff88] transition-colors">
                    Hire on Fiverr
                  </div>
                  <div className="text-[#888] text-sm">Quick gigs & fixed-price work</div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Form */}
          <form
            className="space-y-4"
            action={`mailto:${siteConfig.email}`}
            method="get"
            encType="text/plain"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg focus:border-[#00ff88] focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Project Type
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg focus:border-[#00ff88] focus:outline-none transition-colors"
              >
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="Automation/Scripts">Automation / Scripts</option>
                <option value="Bug Fix">Bug Fix</option>
                <option value="API Integration">API Integration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="body" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="body"
                name="body"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg focus:border-[#00ff88] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00cc6a] transition-colors"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
