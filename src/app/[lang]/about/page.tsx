import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aboutContent } from "@/content/about";
import { siteContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { AboutPage } from "@/components/about/AboutPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = aboutContent[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/about",
        ar: "/ar/about",
      },
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <AboutPage
      lang={lang}
      t={aboutContent[lang]}
      tbc={siteContent[lang].tbc}
      cta={siteContent[lang].cta}
    />
  );
}
