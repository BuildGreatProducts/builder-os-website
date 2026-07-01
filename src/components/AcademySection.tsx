"use client";

import { useEffect, useRef, useState } from "react";

const includes = [
  "Full BuilderOS setup & walkthrough — install it and build with it",
  "The Claude Code Crash Course — go from zero to shipping",
  "The Builder’s Blueprint — idea, design, build & launch in 21 days",
  "Weekly Q&A calls, 24h support & a growing skills library",
];

export default function AcademySection() {
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
    <section id="academy" className="px-6 pb-24 sm:pb-36">
      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <div
          className={`card-shape bg-[#212121] p-8 transition-all duration-700 sm:p-12 lg:p-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="mb-5 font-mono text-sm tracking-[0.1em] text-[#FF2B00]">
            THE AI APP ACADEMY
          </p>

          <h2 className="max-w-3xl font-sans text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Learn to build any app in{" "}
            <span className="font-pixel text-4xl tracking-[0.04em] sm:text-5xl lg:text-6xl">
              24 hours
            </span>{" "}
            with BuilderOS
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base font-medium leading-snug tracking-tight opacity-80 sm:text-lg">
            The AI App Academy is the complete, step-by-step course for shipping
            real apps with AI — including a full walkthrough of setting up and
            using BuilderOS. Master Claude Code, Cursor and Codex, take your idea
            from blank repo to launched product, and land your first customers.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-sans text-sm font-medium leading-snug tracking-tight opacity-80"
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#FF2B00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="https://www.skool.com/aiapps/about"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#FF2B00] px-8 py-3 font-sans font-medium text-white transition-colors duration-200 hover:bg-[#e62700]"
            >
              Join the Academy
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>

            <p className="font-mono text-xs tracking-[0.05em] opacity-50">
              Join 250+ builders · Includes the Claude Code Crash Course
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
