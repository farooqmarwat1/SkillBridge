import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalContent } from "@/content/legal";
import { isLocale } from "@/lib/i18n";
import { LegalPage } from "@/components/legal/LegalPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = legalContent[lang].privacy;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/privacy",
        ar: "/ar/privacy",
      },
    },
  };
}

export default async function PrivacyRoute({
  params,
}: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <LegalPage lang={lang} doc={legalContent[lang].privacy} />;
}
