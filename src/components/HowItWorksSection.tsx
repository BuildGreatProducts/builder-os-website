"use client";

import { useEffect, useRef, useState } from "react";
import PhaseCard from "./PhaseCard";

const phases = [
  {
    number: "01",
    title: "Ideate",
    description:
      "Discover a product idea by mining what you already know or do, then pressure-test it before you invest in building — fatal flaws, real competition, your first 10 customers, and a blunt strong / weak / pivot verdict.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "A structured vision-intake conversation generates your core product documents — strategy, a coding-agent-ready spec, and a phased roadmap — plus a design system translated from your reference images.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Executes the roadmap task by task. Nothing ships on “it compiles” — every increment is built, reviewed, tested end to end, and fixed before the agent reports done. A PR per phase.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Audits your actual codebase — stack, services, env vars, payments, deploy config — then writes a plain-English, step-by-step path from “works on my machine” to “customers can use it.”",
  },
];

export default function HowItWorksSection() {
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
    <section id="how-it-works" className="px-6 pt-12 pb-48 sm:pt-16 sm:pb-64">
      <div ref={sectionRef} className="mx-auto max-w-6xl">
        <h2
          className={`mb-16 text-center font-sans text-3xl font-medium leading-none tracking-tight transition-all duration-700 sm:text-4xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          How It{" "}
          <span className="font-pixel text-4xl tracking-[0.04em] sm:text-5xl">
            Works
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms",
              }}
            >
              <PhaseCard
                number={phase.number}
                title={phase.title}
                description={phase.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
