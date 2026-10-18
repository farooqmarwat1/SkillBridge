import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { homeContent } from "@/content/home";
import { siteContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { Hero } from "@/components/home/Hero";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { AboutIntro } from "@/components/home/AboutIntro";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ManpowerSection } from "@/components/home/ManpowerSection";
import { FleetSection } from "@/components/home/FleetSection";
import { MobiliseBand } from "@/components/home/MobiliseBand";
import { IndustriesMosaic } from "@/components/home/IndustriesMosaic";
import { Testimonials } from "@/components/home/Testimonials";
import { HseIntro } from "@/components/home/HseIntro";
import { Certificates } from "@/components/home/Certificates";
import { ProjectsBento } from "@/components/home/ProjectsBento";
import { CtaBand } from "@/components/home/CtaBand";
import { NewsGrid } from "@/components/home/NewsGrid";
import { FaqSection } from "@/components/home/FaqSection";
import { QuoteSection } from "@/components/home/QuoteSection";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return { title: { absolute: homeContent[lang].meta.title } };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = homeContent[lang];
  const s = siteContent[lang];

  return (
    <>
      <Hero t={t} />
      <ClientMarquee t={t.clients} />
      <AboutIntro lang={lang} t={t} />
      <ServicesGrid lang={lang} t={t.services} />
      <ManpowerSection t={t.manpower} quote={t.quote} />
      <FleetSection lang={lang} t={t.fleet} tbc={s.tbc} machinesPrefix={t.quote.machinesPrefix} />
      <MobiliseBand t={t.mobilise} />
      <IndustriesMosaic lang={lang} t={t.industries} />
      <Testimonials t={t.testimonials} />
      <HseIntro lang={lang} t={t.hse} tbc={s.tbc} />
      <Certificates lang={lang} t={t.certs} tbc={s.tbc} />
      <ProjectsBento lang={lang} t={t.projects} />
      <CtaBand lang={lang} t={s.cta} />
      <NewsGrid lang={lang} t={t.news} />
      <FaqSection t={t.faq} />
      <QuoteSection t={t.quote} sites={t.sites} tbc={s.tbc} />
    </>
  );
}
