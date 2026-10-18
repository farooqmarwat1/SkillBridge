import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { siteContent } from "@/content/site";
import { fontVariables } from "@/lib/fonts";
import { dirOf, isLocale, locales } from "@/lib/i18n";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const ar = lang === "ar";
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: {
      default: ar ? "سكيل بريدج للمقاولات | قوى عاملة ومعدات ومقاولات" : "Skill Bridge Contracting | Manpower, Equipment & Contracting",
      template: ar ? "%s | سكيل بريدج" : "%s | Skill Bridge",
    },
    description: ar
      ? "توريد القوى العاملة وتأجير المعدات والمقاولات لمواقع النفط والغاز والبتروكيماويات والإنشاءات، من مقرنا في الجبيل."
      : "Manpower supply, equipment rental and contracting for oil & gas, petrochemical and construction sites across Saudi Arabia, from Al Jubail.",
    alternates: { languages: { en: "/en", ar: "/ar" } },
  };
}

export const viewport: Viewport = { themeColor: "#0b1220" };

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = siteContent[lang];

  return (
    <html lang={lang} dir={dirOf(lang)} className={fontVariables} data-scroll-behavior="smooth">
      <body>
        <div className="sbh-wrap">
          <div className="sbh">
            <a className="skip" href="#main">{t.skip}</a>
            <UtilityBar lang={lang} t={t} />
            <SiteHeader lang={lang} t={t} />
            <main id="main">{children}</main>
            <SiteFooter lang={lang} t={t} />
            <WhatsAppButton label={t.whatsappChat} />
          </div>
        </div>
      </body>
    </html>
  );
}
