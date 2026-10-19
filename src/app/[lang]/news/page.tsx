import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsContent } from "@/content/news";
import { isLocale } from "@/lib/i18n";
import { NewsPage } from "@/components/news/NewsPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/news">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = newsContent[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/news",
        ar: "/ar/news",
      },
    },
  };
}

export default async function NewsRoute({
  params,
}: PageProps<"/[lang]/news">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <NewsPage lang={lang} t={newsContent[lang]} />;
}
