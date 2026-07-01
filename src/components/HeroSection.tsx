"use client";

import dynamic from "next/dynamic";
import CopyBlock from "./CopyBlock";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center px-6 pt-36 pb-24 sm:pt-48 sm:pb-32"
    >
      {/* Unicorn Studio WebGL background — full width */}
      <div className="absolute inset-0 z-0 hidden opacity-50">
        <UnicornScene
          projectId="GUJ5KvRM2c731uSfesyJ"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
          scale={1}
          lazyLoad={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-8 text-center">
        <p className="animate-fade-in font-mono text-sm tracking-[0.1em] opacity-0 [animation-fill-mode:forwards]">
          <span className="opacity-50">FORMERLY PLAID.BUILD</span>
        </p>

        <h1 className="animate-fade-in font-sans text-6xl font-medium leading-none tracking-tight opacity-0 sm:text-7xl md:text-[87px]">
          Builder{" "}
          <span className="font-pixel text-7xl tracking-[0.04em] sm:text-8xl md:text-[108px]">
            OS
          </span>
        </h1>

        <p className="max-w-2xl animate-fade-in-up font-sans text-lg font-medium tracking-tight opacity-0 [animation-delay:0.2s] sm:text-xl">
          An operating system for builders. Agent skills that take you from
          idea to launched product — turning coding agents from autocomplete
          into disciplined collaborators that ship reviewed, tested work.
        </p>

        <div className="animate-fade-in-up opacity-0 [animation-delay:0.4s]">
          <CopyBlock command="npx skills add BuildGreatProducts/builder-os" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://github.com/BuildGreatProducts/builder-os"
            target="_blank"
            rel="noopener noreferrer"
            className="flex animate-fade-in-up items-center gap-2 bg-[#FF2B00] px-8 py-3 font-sans font-medium text-white opacity-0 transition-colors duration-200 [animation-delay:0.6s] hover:bg-[#e62700]"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </a>

          <a
            href="https://www.skool.com/aiapps/about"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-in-up font-sans text-sm font-medium text-white/60 opacity-0 transition-colors duration-200 [animation-delay:0.8s] hover:text-white"
          >
            New to AI apps? Learn to build one in 24 hours{" "}
            <span className="text-[#FF2B00]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
