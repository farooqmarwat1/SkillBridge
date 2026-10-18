import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function IndustriesMosaic({ lang, t }: { lang: Locale; t: HomeContent["industries"] }) {
  return (
    <section className="sec" id="industries">
      <div className="c">
        <div className="head head--center rv">
          <div className="head__center">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
          </div>
        </div>
        <div className="ind rv">
          {t.items.map((it, i) => (
            <Link key={it.anchor} href={href(lang, `${routes.industries}#${it.anchor}`)}>
              <Image src={it.img} alt="" sizes={i === 0 ? "(max-width: 900px) 100vw, 640px" : "(max-width: 900px) 50vw, 320px"} />
              <div><strong>{it.title}</strong><small>{it.text}</small></div>
              <span className="ind__go"><Icon name="arrowUpRight" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
