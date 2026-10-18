import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { manpowerContent } from "@/content/service-manpower";
import { homeContent } from "@/content/home";
import { siteContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { ServicePage } from "@/components/service/ServicePage";
import { ManpowerDirectory, ManpowerRequestCard, ManpowerSelectionProvider } from "@/components/service/ManpowerSelection";

export async function generateMetadata({ params }: PageProps<"/[lang]/services/manpower-supply">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = manpowerContent[lang];
  return { title: meta.title, description: meta.description, alternates: { languages: { en: "/en/services/manpower-supply", ar: "/ar/services/manpower-supply" } } };
}

export default async function ManpowerSupplyPage({ params }: PageProps<"/[lang]/services/manpower-supply">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = manpowerContent[lang];
  const home = homeContent[lang];
  const site = siteContent[lang];

  return <ManpowerSelectionProvider t={t} sites={home.sites}>
    <ServicePage lang={lang} t={t} tbc={site.tbc} requestCard={<ManpowerRequestCard t={t} sites={home.sites} />} directory={<ManpowerDirectory t={t} />} quote={home.quote} sites={home.sites} cta={site.cta} />
  </ManpowerSelectionProvider>;
}
