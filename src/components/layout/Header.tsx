"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";

const links = [["Home", "#top"], ["About", "#intro"], ["Services", "#services"], ["Industries", "#industries"], ["Equipment", "#equipment"], ["Projects", "#projects"], ["Contact", "#cta"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="border-b border-white/10 bg-navy text-[12.5px] text-white/70">
          <div className="container-sb flex h-10 items-center justify-between">
            <div className="flex gap-6"><span className="hidden sm:inline">✆ +966 53 905 1475</span><span className="hidden md:inline">✉ Engrzksoule@gmail.com</span><span>◆ Al Jubail, Saudi Arabia</span></div>
            <div className="font-display font-semibold"><button className="text-brand">EN</button><span className="mx-2 text-white/30">|</span><button className="text-white/60">AR</button></div>
          </div>
        </div>
        <div className={`border-b transition ${scrolled ? "border-line bg-white shadow-lg" : "border-white/15 bg-transparent"}`}>
          <div className="container-sb flex h-[74px] items-center justify-between gap-6">
            <Logo dark={scrolled} />
            <nav className="hidden items-center gap-7 lg:flex">{links.map(([label, href]) => <a key={label} href={href} className={`font-display text-[15px] font-medium transition hover:text-brand ${scrolled ? "text-navy" : "text-white"}`}>{label}</a>)}</nav>
            <div className="flex items-center gap-3">
              <a href="#cta" className="hidden rounded-lg bg-brand px-5 py-3 font-display text-sm font-semibold text-white transition hover:bg-brand-dark sm:inline-flex">Request a Quote</a>
              <button onClick={() => setOpen(true)} className={`grid size-11 place-items-center lg:hidden ${scrolled ? "text-navy" : "text-white"}`} aria-label="Open menu"><span className="text-2xl">☰</span></button>
            </div>
          </div>
        </div>
      </header>
      <div className={`fixed inset-0 z-50 flex flex-col bg-navy px-7 py-6 text-white transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between"><Logo /><button onClick={() => setOpen(false)} className="size-11 text-3xl" aria-label="Close menu">×</button></div>
        <nav className="mt-8 flex flex-col">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3 font-display text-2xl font-semibold">{label}</a>)}</nav>
        <a href="#cta" onClick={() => setOpen(false)} className="mt-7 rounded-lg bg-brand p-4 text-center font-display font-semibold">Request a Quote</a>
        <div className="mt-auto space-y-2 text-sm text-white/60"><p>+966 53 905 1475</p><p>Engrzksoule@gmail.com</p><p>Al Jubail, Saudi Arabia</p></div>
      </div>
    </>
  );
}
