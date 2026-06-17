"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  {
    stage: "IDEATE",
    skills: [
      {
        name: "Idea Generator",
        description:
          "Guided discovery of a product idea by mining what you already know or do. Scores candidate directions and sharpens the winner.",
        output: "product-idea.md",
      },
      {
        name: "Idea Validator",
        description:
          "Pressure-tests an idea before you build — fatal flaws, real competition, your first 10 customers, a 2-week MVP test, and a blunt verdict.",
        output: "validation-report.md",
      },
    ],
  },
  {
    stage: "PLAN & DESIGN",
    skills: [
      {
        name: "Product Planner",
        description:
          "A structured 8-section vision intake, then generates your strategy & brand, a coding-agent-ready spec, and a phased build plan.",
        output: "product-vision.md, prd.md, product-roadmap.md",
      },
      {
        name: "Design System",
        description:
          "Translates screenshots, mockups, or Figma URLs into a design.md spec — design tokens plus rationale any agent can build from.",
        output: "design.md",
      },
    ],
  },
  {
    stage: "BUILD",
    skills: [
      {
        name: "Build MVP",
        description:
          "Executes the entire roadmap end to end — implementing, testing, and verifying each task in order, opening a PR per phase.",
        output: "working product",
      },
      {
        name: "Build Loop",
        description:
          "Tighter, review-gated increments for Claude Code, Codex, or Cursor. Nothing ships on “it compiles” — built, reviewed, tested, fixed.",
        output: "reviewed, tested code",
      },
    ],
  },
  {
    stage: "LAUNCH",
    skills: [
      {
        name: "Launch Checklist",
        description:
          "Audits your actual codebase, then writes a plain-English, step-by-step path from “works on my machine” to “customers can use it.”",
        output: "launch-checklist.md",
      },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div ref={sectionRef} className="mx-auto max-w-6xl">
        <h2
          className={`mb-4 text-center font-sans text-3xl font-medium leading-none tracking-tight transition-all duration-700 sm:text-4xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          The{" "}
          <span className="font-pixel text-4xl tracking-[0.04em] sm:text-5xl">
            Skills
          </span>
        </h2>

        <p
          className={`mx-auto mb-16 max-w-2xl text-center font-sans text-base font-medium tracking-tight opacity-80 transition-all duration-700 [transition-delay:100ms] ${
            isVisible ? "translate-y-0 opacity-80" : "translate-y-4 opacity-0"
          }`}
        >
          Every skill is fully standalone — but they chain. Each writes its
          output to your project&apos;s docs/ folder, and downstream skills pick
          it up automatically.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((group, i) => (
            <div
              key={group.stage}
              className={`flex flex-col gap-4 transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${(i + 2) * 120}ms` : "0ms",
              }}
            >
              <p className="font-mono text-sm tracking-[0.1em] text-[#FF2B00]">
                {group.stage}
              </p>
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="card-shape flex h-full flex-col bg-[#212121] p-6 pb-12 transition-colors duration-300 hover:bg-[#2a2a2a]"
                >
                  <h3 className="mb-2 font-sans text-lg font-medium tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="mb-4 flex-1 font-sans text-sm font-medium leading-snug tracking-tight opacity-70">
                    {skill.description}
                  </p>
                  <p className="font-mono text-xs tracking-[0.05em] opacity-40">
                    → {skill.output}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
