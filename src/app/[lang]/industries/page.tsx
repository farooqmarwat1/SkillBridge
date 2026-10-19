import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industriesContent } from "@/content/industries";
import { siteContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { IndustriesPage } from "@/components/industries/IndustriesPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/industries">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = industriesContent[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/industries",
        ar: "/ar/industries",
      },
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/industries">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <IndustriesPage
      lang={lang}
      t={industriesContent[lang]}
      cta={siteContent[lang].cta}
    />
  );
}
