import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contactContent } from "@/content/contact";
import { siteContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { ContactPage } from "@/components/contact/ContactPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = contactContent[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/contact",
        ar: "/ar/contact",
      },
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <ContactPage
      lang={lang}
      t={contactContent[lang]}
      tbc={siteContent[lang].tbc}
    />
  );
}
