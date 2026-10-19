import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsContent } from "@/content/projects";
import { siteContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { ProjectsPage } from "@/components/projects/ProjectsPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = projectsContent[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/en/projects",
        ar: "/ar/projects",
      },
    },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/projects">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <ProjectsPage
      lang={lang}
      t={projectsContent[lang]}
      cta={siteContent[lang].cta}
    />
  );
}
