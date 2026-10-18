"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { swapLocale, type Locale } from "@/lib/i18n";

/* Remember the choice so "/" sends the visitor back to the same language next time. */
const remember = (lang: Locale) => {
  document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
};

/** EN | عربي toggle in the utility bar. Links to the same page in the other language. */
export function LangSwitch({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  return (
    <span className="lang" aria-label={label}>
      <Link
        href={swapLocale(pathname, "en")}
        className={lang === "en" ? "is-on" : undefined}
        lang="en"
        hrefLang="en"
        aria-current={lang === "en" ? "true" : undefined}
        onClick={() => remember("en")}
      >
        EN
      </Link>
      <Link
        href={swapLocale(pathname, "ar")}
        className={lang === "ar" ? "is-on" : undefined}
        lang="ar"
        hrefLang="ar"
        aria-current={lang === "ar" ? "true" : undefined}
        onClick={() => remember("ar")}
      >
        عربي
      </Link>
    </span>
  );
}

/** Plain text link to the same page in the other language (footer). */
export function OtherLangLink({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const to: Locale = lang === "en" ? "ar" : "en";
  return (
    <Link href={swapLocale(pathname, to)} lang={to} hrefLang={to} onClick={() => remember(to)}>
      {to === "ar" ? "عربي" : "English"}
    </Link>
  );
}
