import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  otherServicesContent,
  otherServiceSlugs,
  isOtherServiceSlug,
  type OtherServiceSlug,
} from "@/content/services";
import { homeContent, type QuoteType } from "@/content/home";
import { siteContent } from "@/content/site";
import { isLocale, locales } from "@/lib/i18n";
import { ServicePage } from "@/components/service/ServicePage";
import { StandardServiceRequestCard } from "@/components/service/StandardServiceRequestCard";

const quoteTypeMap: Record<OtherServiceSlug, QuoteType["id"]> = {
  "equipment-rental": "equipment",
  "civil-general-contracting": "other",
  "plant-maintenance-shutdowns": "maintenance",
  "fabrication-workshop": "other",
  "logistics-transport": "other",
  "trading-supply": "other",
};

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const slug of otherServiceSlugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/services/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isOtherServiceSlug(slug)) return {};
  const { meta } = otherServicesContent[slug][lang];
  return {
    title: `${meta.title} | ${siteContent[lang].brand}`,
    description: meta.description,
    alternates: {
      languages: {
        en: `/en/services/${slug}`,
        ar: `/ar/services/${slug}`,
      },
    },
  };
}

export default async function OtherServicePage({
  params,
}: PageProps<"/[lang]/services/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isOtherServiceSlug(slug)) notFound();

  const t = otherServicesContent[slug][lang];
  const home = homeContent[lang];
  const site = siteContent[lang];
  const serviceType = quoteTypeMap[slug];

  return (
    <ServicePage
      lang={lang}
      t={t}
      tbc={site.tbc}
      requestCard={
        <StandardServiceRequestCard
          serviceType={serviceType}
          t={t}
          sites={home.sites}
        />
      }
      quote={home.quote}
      sites={home.sites}
      cta={site.cta}
    />
  );
}
