import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="#top" className="flex items-center gap-2.5" aria-label="Skill Bridge home">
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M5 26 Q20 6 35 26" stroke="#F2C84B" strokeWidth="3.4" strokeLinecap="round" />
        <rect x="3" y="26" width="34" height="5.5" rx="2.75" fill="#20AEDD" />
        <rect x="11" y="27" width="3" height="8" rx="1" fill="#20AEDD" />
        <rect x="26" y="27" width="3" height="8" rx="1" fill="#20AEDD" />
        <rect x="18.5" y="24.5" width="3" height="10.5" rx="1" fill="#20AEDD" />
      </svg>
      <span className={`font-display text-xl font-extrabold tracking-[.04em] ${dark ? "text-navy" : "text-white"}`}>
        SKILL<span className="text-brand">BRIDGE</span>
      </span>
    </Link>
  );
}
