import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hseContent } from "@/content/hse";
import { siteContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { HsePage } from "@/components/hse/HsePage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/hse">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = hseContent[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/hse",
        ar: "/ar/hse",
      },
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/hse">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <HsePage
      lang={lang}
      t={hseContent[lang]}
      tbc={siteContent[lang].tbc}
      cta={siteContent[lang].cta}
    />
  );
}
