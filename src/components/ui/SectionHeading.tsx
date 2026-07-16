export function SectionHeading({ eyebrow, title, centered = false, light = false }: { eyebrow: string; title: string; centered?: boolean; light?: boolean }) {
  return (
    <div className={`mb-13 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <div className={`mb-4 flex items-center gap-3 font-display text-[13px] font-semibold uppercase tracking-[.16em] text-brand ${centered ? "justify-center" : ""}`}>
        {!centered && <span className="h-0.5 w-7 bg-brand" />}{eyebrow}
      </div>
      <h2 className={`font-display text-[clamp(28px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-.02em] ${light ? "text-white" : "text-navy"}`}>{title}</h2>
    </div>
  );
}
