"use client";

import { useState } from "react";
import Link from "next/link";
import type { ContactContent } from "@/content/contact";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function ContactForm({
  lang,
  t,
}: {
  lang: Locale;
  t: ContactContent["form"];
}) {
  const [topicIndex, setTopicIndex] = useState(0);
  const [sent, setSent] = useState(false);

  const activeTopic = t.topics[topicIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="ct-form">
      <span className="eyebrow">{t.eyebrow}</span>
      <h2 className="h2">{t.title}</h2>

      {!sent ? (
        <form className="qf__form" onSubmit={handleSubmit}>
          <div className="fld">
            <span className="fld__lbl">{t.topicLabel}</span>
            <div className="ct-topics" role="group" aria-label="Enquiry type">
              {t.topics.map((item, idx) => (
                <button
                  key={item.id}
                  className="filter"
                  type="button"
                  aria-pressed={topicIndex === idx}
                  onClick={() => setTopicIndex(idx)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {activeTopic?.hintText && activeTopic?.hintRoute && activeTopic?.hintLink && (
              <p className="ct-hint">
                {activeTopic.hintText}{" "}
                <Link
                  className="link"
                  href={href(lang, routes[activeTopic.hintRoute])}
                >
                  {activeTopic.hintLink} <Icon name="arrow" />
                </Link>
              </p>
            )}
          </div>

          <div className="qf__grid">
            <div className="fld">
              <label htmlFor="ct-name">{t.name.label}</label>
              <input
                id="ct-name"
                className="inp"
                autoComplete="name"
                placeholder={t.name.placeholder}
                required
              />
            </div>
            <div className="fld">
              <label htmlFor="ct-company">
                {t.company.label}{" "}
                <span className="qf__opt">{t.company.opt}</span>
              </label>
              <input
                id="ct-company"
                className="inp"
                autoComplete="organization"
                placeholder={t.company.placeholder}
              />
            </div>
            <div className="fld">
              <label htmlFor="ct-phone">{t.phone.label}</label>
              <input
                id="ct-phone"
                className="inp"
                type="tel"
                autoComplete="tel"
                placeholder={t.phone.placeholder}
                required
              />
            </div>
            <div className="fld">
              <label htmlFor="ct-email">{t.email.label}</label>
              <input
                id="ct-email"
                className="inp"
                type="email"
                autoComplete="email"
                placeholder={t.email.placeholder}
                required
              />
            </div>
          </div>

          <div className="fld">
            <label htmlFor="ct-msg">{t.message.label}</label>
            <textarea
              id="ct-msg"
              className="inp inp--area"
              placeholder={t.message.placeholder}
              required
            />
          </div>

          <div className="qf__foot">
            <label className="qf__check">
              <input id="ct-wa" type="checkbox" defaultChecked /> {t.replyWa}
            </label>
            <button className="btn btn--lg" type="submit">
              {t.submit} <Icon name="arrow" />
            </button>
          </div>
        </form>
      ) : (
        <div className="qf__done ct-done">
          <span className="qf__tick">
            <Icon name="check" />
          </span>
          <h3 className="h2">{t.success.title}</h3>
          <p className="lead">{t.success.lead}</p>
          <button
            className="btn btn--ghost"
            type="button"
            onClick={() => setSent(false)}
          >
            {t.success.reset}
          </button>
        </div>
      )}
    </div>
  );
}
