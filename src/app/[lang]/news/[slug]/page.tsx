import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  newsContent,
  newsSlugs,
  isNewsSlug,
} from "@/content/news";
import { siteContent } from "@/content/site";
import { isLocale, locales } from "@/lib/i18n";
import { NewsDetailPage } from "@/components/news/NewsDetailPage";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const slug of newsSlugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/news/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isNewsSlug(slug)) return {};
  const t = newsContent[lang];
  const article = t.articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | ${siteContent[lang].brand}`,
    description: article.lead,
    alternates: {
      languages: {
        en: `/en/news/${slug}`,
        ar: `/ar/news/${slug}`,
      },
    },
  };
}

export default async function NewsArticlePage({
  params,
}: PageProps<"/[lang]/news/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isNewsSlug(slug)) notFound();

  const t = newsContent[lang];
  const article = t.articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = t.articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <NewsDetailPage
      lang={lang}
      article={article}
      t={t}
      related={related}
    />
  );
}
