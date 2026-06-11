export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-12 font-mono text-xs tracking-[0.1em] opacity-50 sm:flex-row lg:text-sm">
        <p>&copy; TELESCOPE LTD, BUILD GREAT PRODUCTS, 2026</p>

        <div className="flex items-center gap-4 lg:gap-6">
          <a
            href="https://x.com/chris_bgp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-100"
          >
            X
          </a>
          <a
            href="https://youtube.com/buildgreatproducts"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-100"
          >
            YOUTUBE
          </a>
        </div>
      </div>
    </footer>
  );
}
