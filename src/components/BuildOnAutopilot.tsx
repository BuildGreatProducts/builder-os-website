"use client";

import { useEffect, useRef, useState } from "react";

export default function BuildOnAutopilot() {
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
    <section className="px-6 pt-16 pb-24 sm:pt-24 sm:pb-36">
      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <h2
          className={`mb-12 text-center font-sans text-3xl font-medium leading-none tracking-tight transition-all duration-700 sm:text-4xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Build Anything on{" "}
          <span className="font-pixel text-4xl tracking-[0.04em] sm:text-5xl">
            Autopilot
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* The Problem */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
          >
            <h3 className="mb-4 font-mono text-sm tracking-[0.1em] opacity-50">
              THE PROBLEM
            </h3>
            <p className="font-sans text-base font-medium leading-snug tracking-tight opacity-80">
              AI coding agents are fast, but speed without discipline produces
              features that &quot;compile&quot; rather than features that work.
              Nothing gets planned, reviewed, or tested end to end — so you end
              up rewriting, redirecting, and micromanaging every decision,
              defeating the purpose of building with AI.
            </p>
          </div>

          {/* Why BuilderOS Works */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <h3 className="mb-4 font-mono text-sm tracking-[0.1em] opacity-50">
              WHY BUILDEROS WORKS
            </h3>
            <p className="font-sans text-base font-medium leading-snug tracking-tight opacity-80">
              BuilderOS encodes the habits of strong product teams —
              plan-driven work, mandatory review, end-to-end testing, honest
              reporting — as skills your agent follows automatically. Every
              skill stands alone, but they chain: each writes its output to
              your project&apos;s docs/ folder, and downstream skills pick those
              documents up automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
