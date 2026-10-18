"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/site";
import { href, routes, type Locale } from "@/lib/i18n";
import { logo } from "@/lib/media";
import { Icon } from "@/components/ui/Icon";

export function SiteHeader({ lang, t }: { lang: Locale; t: SiteContent }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (path: string) => !path.includes("#") && path !== "" && pathname.startsWith(href(lang, path));
  const close = () => setOpen(false);

  return (
    <header className="hdr">
      <div className="c">
        <Link className="hdr__logo" href={href(lang)}>
          <Image src={logo} alt={t.brand} priority />
        </Link>
        <ul className="nav">
          {t.nav.map((item) => {
            const path = routes[item.key];
            const current = isCurrent(path);
            return (
              <li key={item.key}>
                <Link
                  href={href(lang, path)}
                  className={current ? "is-on" : undefined}
                  aria-current={current ? "page" : undefined}
                >
                  {item.label}
                  {item.caret && <Icon name="caret" />}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hdr__act">
          <Link className="btn hdr__quote" href={href(lang, routes.quote)}>
            {t.quote}
          </Link>
          <button
            className="burger"
            type="button"
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            aria-controls="site-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="drawer" id="site-drawer" aria-label={t.mobileNav}>
          {t.nav.map((item) => (
            <Link key={item.key} href={href(lang, routes[item.key])} onClick={close}>
              {item.label} <Icon name="arrow" />
            </Link>
          ))}
          <Link className="btn btn--hivis btn--lg" href={href(lang, routes.quote)} onClick={close}>
            {t.quote}
          </Link>
        </nav>
      )}
    </header>
  );
}
