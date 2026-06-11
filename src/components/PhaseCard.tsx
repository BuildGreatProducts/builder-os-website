export default function PhaseCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card-shape h-full bg-[#212121] p-6 pb-16 transition-colors duration-300 hover:bg-[#2a2a2a] sm:p-8 sm:pb-20">
      <span className="mb-4 block font-mono text-sm tracking-[0.1em] opacity-50">
        {number}
      </span>
      <h3 className="mb-3 font-pixel text-2xl tracking-[0.04em]">{title}</h3>
      <p className="font-sans text-sm font-medium leading-snug tracking-tight opacity-80">
        {description}
      </p>
    </div>
  );
}
