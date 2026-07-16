import { stats } from "@/data/home";

export function Hero() {
  return (
    <>
      <section id="top" className="relative flex min-h-[96vh] items-center bg-[linear-gradient(100deg,rgba(16,27,63,.93),rgba(16,27,63,.74)_45%,rgba(16,27,63,.42)),url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center pb-30 pt-38">
        <div className="container-sb w-full"><div className="animate-up max-w-[760px]">
          <p className="mb-5 font-display text-[13px] font-semibold uppercase tracking-[.18em] text-brand">Skill Bridge Contracting Company</p>
          <h1 className="mb-5 font-display text-[clamp(38px,5vw,60px)] font-extrabold leading-[1.06] tracking-[-.02em] text-white">Integrated Workforce, Equipment &amp; Contracting Solutions</h1>
          <p className="mb-8 max-w-[620px] text-[clamp(16px,1.4vw,19px)] leading-[1.7] text-white/80">Supporting Saudi Arabia&apos;s industrial, construction and infrastructure sectors with qualified manpower, reliable equipment and safe project delivery.</p>
          <div className="mb-10 flex flex-wrap gap-3.5"><a href="#services" className="button-primary">Explore Our Services →</a><a href="#cta" className="button-outline">Request a Quote</a></div>
          <div className="flex flex-wrap gap-2.5">{["Manpower Solutions", "Equipment Rental", "Industrial Contracting", "Logistics Support"].map((tag) => <span key={tag} className="rounded-md border border-white/20 bg-white/5 px-3.5 py-2 font-display text-[13px] font-medium text-white/85">{tag}</span>)}</div>
        </div></div>
      </section>
      <section className="bg-mist"><div className="container-sb"><div className="relative z-10 -mt-[58px] grid overflow-hidden rounded-xl border border-line bg-white shadow-[0_24px_60px_rgba(16,27,63,.1)] sm:grid-cols-2 lg:grid-cols-4">{stats.map((item) => <div key={item.label} className="border-b border-line p-7 text-center sm:border-r lg:border-b-0"><div className="font-display text-[clamp(30px,3.4vw,42px)] font-extrabold leading-none text-navy">{item.value}</div><div className="mt-2.5 font-display text-[13px] font-semibold uppercase tracking-[.06em] text-muted">{item.label}</div></div>)}</div></div></section>
    </>
  );
}
