import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { careersContent } from "@/content/careers";
import { siteContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { CareersPage } from "@/components/careers/CareersPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/careers">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = careersContent[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/careers",
        ar: "/ar/careers",
      },
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/careers">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <CareersPage
      lang={lang}
      t={careersContent[lang]}
      tbc={siteContent[lang].tbc}
      cta={siteContent[lang].cta}
    />
  );
}
