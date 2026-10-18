import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { equipmentContent } from "@/content/equipment";
import { homeContent } from "@/content/home";
import { siteContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { EquipmentPage } from "@/components/equipment/EquipmentPage";

export async function generateMetadata({ params }: PageProps<"/[lang]/equipment">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = equipmentContent[lang];
  return { title: meta.title, description: meta.description, alternates: { languages: { en: "/en/equipment", ar: "/ar/equipment" } } };
}

export default async function EquipmentFleetPage({ params }: PageProps<"/[lang]/equipment">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <EquipmentPage lang={lang} t={equipmentContent[lang]} sites={homeContent[lang].sites} tbc={siteContent[lang].tbc} cta={siteContent[lang].cta} />;
}
