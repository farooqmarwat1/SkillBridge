import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalContent } from "@/content/legal";
import { isLocale } from "@/lib/i18n";
import { LegalPage } from "@/components/legal/LegalPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/terms">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = legalContent[lang].terms;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/terms",
        ar: "/ar/terms",
      },
    },
  };
}

export default async function TermsRoute({
  params,
}: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <LegalPage lang={lang} doc={legalContent[lang].terms} />;
}
