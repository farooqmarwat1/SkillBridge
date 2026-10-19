import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudiesContent } from "@/content/project-case-studies";
import { siteContent } from "@/content/site";
import { isLocale, locales, projectSlugs, type ProjectSlug } from "@/lib/i18n";
import { ProjectCaseStudyPage } from "@/components/project/ProjectCaseStudyPage";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const slug of projectSlugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const caseStudy = caseStudiesContent[lang].studies[slug as ProjectSlug];
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.title} | ${siteContent[lang].brand}`,
    description: caseStudy.lead,
    alternates: {
      languages: {
        en: `/en/projects/${slug}`,
        ar: `/ar/projects/${slug}`,
      },
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const i18n = caseStudiesContent[lang];
  const p = i18n.studies[slug as ProjectSlug];
  if (!p) notFound();
  const nextProject = i18n.studies[p.nextSlug];

  return (
    <ProjectCaseStudyPage
      lang={lang}
      p={p}
      i18n={i18n}
      nextProject={nextProject}
      tbc={siteContent[lang].tbc}
      cta={siteContent[lang].cta}
    />
  );
}
