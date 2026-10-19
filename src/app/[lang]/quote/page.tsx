import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { quoteWizardContent } from "@/content/quote";
import { isLocale } from "@/lib/i18n";
import { QuotePage } from "@/components/quote/QuotePage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/quote">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = quoteWizardContent[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/quote",
        ar: "/ar/quote",
      },
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/quote">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <QuotePage
      lang={lang}
      t={quoteWizardContent[lang]}
    />
  );
}
