"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { QuoteWizardContent } from "@/content/quote";
import { contact } from "@/content/site";
import { href, routes, type Locale } from "@/lib/i18n";
import { QUOTE_EVENT, takeQueuedQuotePrefill, type QuotePrefill } from "@/lib/quote-bus";
import { Icon } from "@/components/ui/Icon";

export function QuoteWizard({
  lang,
  t,
}: {
  lang: Locale;
  t: QuoteWizardContent;
}) {
  const [step, setStep] = useState<number>(1);
  const [services, setServices] = useState<Record<string, boolean>>({
    manpower: true,
    equipment: true,
  });
  const [roles, setRoles] = useState<Record<string, boolean>>({
    [t.step2.roles[0] || ""]: true,
    [t.step2.roles[1] || ""]: true,
  });
  const [equipment, setEquipment] = useState<Record<string, boolean>>({
    [t.step2.equipment[0] || ""]: true,
    [t.step2.equipment[1] || ""]: true,
  });
  const [site, setSite] = useState<string>(t.step3.sites[0] || "Al Jubail");
  const [start, setStart] = useState<string>("");
  const [duration, setDuration] = useState<string>(t.step3.durations[1] || "1 to 3 months");
  const [shift, setShift] = useState<number>(0);
  const [extras, setExtras] = useState<Record<string, boolean>>({
    [t.step3.extras[0] || ""]: true,
  });

  useEffect(() => {
    function applyPrefill(d: QuotePrefill) {
      if (d.type) setServices({ [d.type]: true });
      if (d.site) setSite(d.site);
      if (d.start) setStart(d.start);
      if (d.duration) setDuration(d.duration);
    }
    function onPrefill(e: Event) {
      applyPrefill((e as CustomEvent<QuotePrefill>).detail);
    }
    window.addEventListener(QUOTE_EVENT, onPrefill);
    const queued = takeQueuedQuotePrefill();
    if (queued) {
      window.setTimeout(() => applyPrefill(queued), 0);
    }
    return () => window.removeEventListener(QUOTE_EVENT, onPrefill);
  }, []);

  const toggleService = (id: string) => {
    setServices((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  };

  const toggleRole = (r: string) => {
    setRoles((prev) => {
      const next = { ...prev };
      if (next[r]) delete next[r];
      else next[r] = true;
      return next;
    });
  };

  const toggleEquipment = (eq: string) => {
    setEquipment((prev) => {
      const next = { ...prev };
      if (next[eq]) delete next[eq];
      else next[eq] = true;
      return next;
    });
  };

  const toggleExtra = (ex: string) => {
    setExtras((prev) => {
      const next = { ...prev };
      if (next[ex]) delete next[ex];
      else next[ex] = true;
      return next;
    });
  };

  const selectedServicesCount = Object.keys(services).length;
  const hasManpower = !!services["manpower"];
  const hasEquipment = !!services["equipment"];

  const handleNext = () => {
    if (step < 4) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else if (step === 4) {
      setStep(5);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const formatList = (record: Record<string, boolean>, max = 3) => {
    const keys = Object.keys(record);
    if (!keys.length) return t.summary.noneSelected;
    if (keys.length > max) {
      return `${keys.slice(0, max).join(", ")} +${keys.length - max}`;
    }
    return keys.join(", ");
  };

  return (
    <div className="qz">
      <div className="qz__main">
        {/* Stepper */}
        <ol className="qz-steps" aria-label="Progress">
          {t.steps.map((label, idx) => {
            const stepNum = idx + 1;
            const isDone = stepNum < step;
            const isOn = stepNum === step;
            const cls = isDone ? "is-done" : isOn ? "is-on" : "";
            return (
              <li key={label} className={cls}>
                <span className="qz-steps__n">{isDone ? "✓" : stepNum}</span>
                <span className="qz-steps__t">{label}</span>
              </li>
            );
          })}
        </ol>

        <div className="qz-card">
          {/* Step 1: Services */}
          {step === 1 && (
            <div className="qz-pane">
              <div className="qz-pane__head">
                <span className="label">{t.step1.badge}</span>
                <h2 className="h3s">{t.step1.title}</h2>
                <p>{t.step1.lead}</p>
              </div>
              <div className="qz-svcs">
                {t.step1.services.map((s) => (
                  <button
                    key={s.id}
                    className="qz-svc"
                    type="button"
                    aria-pressed={!!services[s.id]}
                    onClick={() => toggleService(s.id)}
                  >
                    <span className="qz-svc__tick" aria-hidden="true">
                      <Icon name="check" />
                    </span>
                    <b>{s.name}</b>
                    <span>{s.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="qz-pane">
              <div className="qz-pane__head">
                <span className="label">{t.step2.badge}</span>
                <h2 className="h3s">{t.step2.title}</h2>
                <p>{t.step2.lead}</p>
              </div>

              {hasManpower && (
                <div className="qz-block">
                  <div className="qz-block__head">
                    <b className="h4">{t.step2.manpowerTitle}</b>
                    <span className="label">
                      {t.step2.selectedFormat.replace("{n}", String(Object.keys(roles).length))}
                    </span>
                  </div>
                  <div className="chips">
                    {t.step2.roles.map((r) => (
                      <button
                        key={r}
                        className="chip"
                        type="button"
                        aria-pressed={!!roles[r]}
                        onClick={() => toggleRole(r)}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                  <div className="qf__grid qz-mt">
                    <div className="fld">
                      <label htmlFor="qz-head">{t.step2.headcountLabel}</label>
                      <input
                        id="qz-head"
                        className="inp"
                        type="number"
                        min="1"
                        defaultValue="12"
                      />
                    </div>
                    <div className="fld">
                      <label htmlFor="qz-other">
                        {t.step2.otherRolesLabel}{" "}
                        <span className="qf__opt">{t.step2.otherRolesOpt}</span>
                      </label>
                      <input
                        id="qz-other"
                        className="inp"
                        placeholder={t.step2.otherRolesPlaceholder}
                      />
                    </div>
                  </div>
                </div>
              )}

              {hasEquipment && (
                <div className="qz-block">
                  <div className="qz-block__head">
                    <b className="h4">{t.step2.equipmentTitle}</b>
                    <span className="label">
                      {t.step2.selectedFormat.replace("{n}", String(Object.keys(equipment).length))}
                    </span>
                  </div>
                  <div className="chips">
                    {t.step2.equipment.map((eq) => (
                      <button
                        key={eq}
                        className="chip"
                        type="button"
                        aria-pressed={!!equipment[eq]}
                        onClick={() => toggleEquipment(eq)}
                      >
                        {eq}
                      </button>
                    ))}
                  </div>
                  <p className="qz-note">
                    {t.step2.eqNote}
                    <Link
                      className="link"
                      href={href(lang, routes.equipment)}
                    >
                      {t.step2.eqFleetLink}
                    </Link>
                    .
                  </p>
                </div>
              )}

              <div className="fld">
                <label htmlFor="qz-scope">{t.step2.scopeLabel}</label>
                <textarea
                  id="qz-scope"
                  className="inp inp--area"
                  placeholder={t.step2.scopePlaceholder}
                />
              </div>
            </div>
          )}

          {/* Step 3: Site & Schedule */}
          {step === 3 && (
            <div className="qz-pane">
              <div className="qz-pane__head">
                <span className="label">{t.step3.badge}</span>
                <h2 className="h3s">{t.step3.title}</h2>
                <p>{t.step3.lead}</p>
              </div>

              <div className="qf__grid">
                <div className="fld">
                  <label htmlFor="qz-site">{t.step3.siteLabel}</label>
                  <select
                    id="qz-site"
                    className="inp"
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                  >
                    {t.step3.sites.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="fld">
                  <label htmlFor="qz-start">{t.step3.startLabel}</label>
                  <input
                    id="qz-start"
                    className="inp"
                    type="date"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                  />
                </div>
                <div className="fld">
                  <label htmlFor="qz-dur">{t.step3.durLabel}</label>
                  <select
                    id="qz-dur"
                    className="inp"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  >
                    {t.step3.durations.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="fld">
                  <span className="fld__lbl">{t.step3.patternLabel}</span>
                  <div className="seg" role="group" aria-label="Working pattern">
                    {t.step3.shifts.map((sh, idx) => (
                      <button
                        key={sh}
                        type="button"
                        aria-pressed={shift === idx}
                        onClick={() => setShift(idx)}
                      >
                        {sh}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="fld qz-mt">
                <span className="fld__lbl">{t.step3.extrasLabel}</span>
                <div className="chips">
                  {t.step3.extras.map((ex) => (
                    <button
                      key={ex}
                      className="chip"
                      type="button"
                      aria-pressed={!!extras[ex]}
                      onClick={() => toggleExtra(ex)}
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Your details */}
          {step === 4 && (
            <div className="qz-pane">
              <div className="qz-pane__head">
                <span className="label">{t.step4.badge}</span>
                <h2 className="h3s">{t.step4.title}</h2>
                <p>{t.step4.lead}</p>
              </div>

              <div className="qf__grid">
                <div className="fld">
                  <label htmlFor="qz-name">{t.step4.name.label}</label>
                  <input
                    id="qz-name"
                    className="inp"
                    autoComplete="name"
                    placeholder={t.step4.name.placeholder}
                    required
                  />
                </div>
                <div className="fld">
                  <label htmlFor="qz-co">{t.step4.company.label}</label>
                  <input
                    id="qz-co"
                    className="inp"
                    autoComplete="organization"
                    placeholder={t.step4.company.placeholder}
                    required
                  />
                </div>
                <div className="fld">
                  <label htmlFor="qz-title">
                    {t.step4.jobTitle.label}{" "}
                    <span className="qf__opt">{t.step4.jobTitle.opt}</span>
                  </label>
                  <input
                    id="qz-title"
                    className="inp"
                    placeholder={t.step4.jobTitle.placeholder}
                  />
                </div>
                <div className="fld">
                  <label htmlFor="qz-proj">
                    {t.step4.project.label}{" "}
                    <span className="qf__opt">{t.step4.project.opt}</span>
                  </label>
                  <input
                    id="qz-proj"
                    className="inp"
                    placeholder={t.step4.project.placeholder}
                  />
                </div>
                <div className="fld">
                  <label htmlFor="qz-mob">{t.step4.mobile.label}</label>
                  <input
                    id="qz-mob"
                    className="inp"
                    type="tel"
                    autoComplete="tel"
                    placeholder={t.step4.mobile.placeholder}
                    required
                  />
                </div>
                <div className="fld">
                  <label htmlFor="qz-email">{t.step4.email.label}</label>
                  <input
                    id="qz-email"
                    className="inp"
                    type="email"
                    autoComplete="email"
                    placeholder={t.step4.email.placeholder}
                    required
                  />
                </div>
              </div>
              <label className="qf__check qz-mt">
                <input id="qz-wa" type="checkbox" defaultChecked /> {t.step4.waCheckbox}
              </label>
            </div>
          )}

          {/* Step 5: Done */}
          {step === 5 && (
            <div className="qz-pane qz-done">
              <span className="qf__tick">
                <Icon name="check" />
              </span>
              <h2 className="h2">{t.step5.title}</h2>
              <p className="lead">{t.step5.lead}</p>
              <div className="qz-ref">
                <span className="label">{t.step5.refLabel}</span>
                <b className="data">{t.step5.refCode}</b>
              </div>
              <ol className="qz-next">
                {t.step5.nextSteps.map((stepText, idx) => (
                  <li key={stepText}>
                    <span>{idx + 1}</span>
                    {stepText}
                  </li>
                ))}
              </ol>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" }}>
                <Link className="btn" href={href(lang, routes.home)}>
                  {t.step5.homeBtn}
                </Link>
                <Link className="btn btn--ghost" href={href(lang, routes.projects)}>
                  {t.step5.projectsBtn}
                </Link>
              </div>
            </div>
          )}

          {/* Step Navigation Bar */}
          {step < 5 && (
            <div className="qz-nav">
              <button
                className={step === 1 ? "btn btn--ghost is-hidden" : "btn btn--ghost"}
                type="button"
                onClick={handleBack}
              >
                <Icon name="arrowBack" /> {t.nav.back}
              </button>
              <span className="qz-nav__hint">
                {step === 1
                  ? selectedServicesCount
                    ? selectedServicesCount === 1
                      ? t.nav.serviceSelectedSingular
                      : t.nav.serviceSelectedPlural.replace("{n}", String(selectedServicesCount))
                    : t.nav.selectHint
                  : t.nav.stepOfFormat.replace("{n}", String(step))}
              </span>
              <button
                className={
                  selectedServicesCount
                    ? "btn btn--lg"
                    : "btn btn--lg is-off"
                }
                type="button"
                onClick={handleNext}
              >
                {step === 4 ? t.nav.submit : t.nav.continue}{" "}
                <Icon name="arrow" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Summary sidebar */}
      <aside className="qz-sum">
        <div className="qz-sum__card">
          <div className="ql__head">
            <strong>{t.summary.title}</strong>
            <span className="ql__count">
              {step === 5
                ? t.summary.badgeSent
                : t.summary.badgeStepFormat.replace("{n}", String(Math.min(step, 4)))}
            </span>
          </div>

          <dl className="qz-sum__list">
            <div>
              <dt className="label">{t.summary.servicesLabel}</dt>
              <dd>
                {Object.keys(services).length
                  ? Object.keys(services)
                      .map((id) => t.step1.services.find((s) => s.id === id)?.name || id)
                      .join(", ")
                  : t.summary.noneSelected}
              </dd>
            </div>
            {hasManpower && (
              <div>
                <dt className="label">{t.summary.rolesLabel}</dt>
                <dd>{formatList(roles)}</dd>
              </div>
            )}
            {hasEquipment && (
              <div>
                <dt className="label">{t.summary.equipmentLabel}</dt>
                <dd>{formatList(equipment)}</dd>
              </div>
            )}
            <div>
              <dt className="label">{t.summary.whenLabel}</dt>
              <dd>
                {site} · {duration}
              </dd>
            </div>
            <div>
              <dt className="label">{t.summary.patternLabel}</dt>
              <dd>{t.step3.shifts[shift]}</dd>
            </div>
            <div>
              <dt className="label">{t.summary.extrasLabel}</dt>
              <dd>{formatList(extras)}</dd>
            </div>
          </dl>
        </div>

        <div className="qz-help">
          <span className="label">{t.summary.helpEyebrow}</span>
          <a
            className="data"
            href={`tel:${contact.phone.tel}`}
            dir="ltr"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <b>{t.summary.helpTitle}</b>
          </a>
          <span>{t.summary.helpSub}</span>
        </div>

        <div className="qz-trust">
          <span className="label">{t.summary.trustTitle}</span>
          <p>{t.summary.trustLead}</p>
        </div>
      </aside>
    </div>
  );
}
