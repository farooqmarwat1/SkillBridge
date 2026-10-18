import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

/* Article topics are proposals; dates stay as [Date] until articles are written. */
export function NewsGrid({ lang, t }: { lang: Locale; t: HomeContent["news"] }) {
  return (
    <section className="sec alt">
      <div className="c">
        <div className="head rv">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
          </div>
          <div className="head__aside">
            <p className="lead">{t.lead}</p>
            <Link className="link" href={href(lang, routes.news)}>
              {t.all} <Icon name="arrow" />
            </Link>
          </div>
        </div>
        <div className="news rv">
          {t.items.map((p) => (
            <Link className="post" href={href(lang, routes.news)} key={p.title}>
              <div className="post__ph">
                <Image src={p.img} alt="" sizes="(max-width: 1000px) 100vw, 420px" />
              </div>
              <div className="post__body">
                <div className="post__meta"><span className="post__tag">{p.tag}</span><span className="label">{t.date}</span></div>
                <h3 className="h4">{p.title}</h3>
                <p>{p.text}</p>
                <span className="link">{t.read} <Icon name="arrow" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
