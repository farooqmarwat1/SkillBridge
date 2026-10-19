"use client";

import { useState } from "react";
import type { CareersContent } from "@/content/careers";
import { Icon } from "@/components/ui/Icon";

export function CareersForm({
  t,
}: {
  t: CareersContent["form"];
  disciplines: CareersContent["roles"]["disciplines"];
}) {
  const [selectedCerts, setSelectedCerts] = useState<Record<string, boolean>>({
    [t.step2.certs[0] || ""]: true,
  });
  const [fileName, setFileName] = useState<string>("");
  const [sent, setSent] = useState(false);

  const toggleCert = (cert: string) => {
    setSelectedCerts((prev) => ({
      ...prev,
      [cert]: !prev[cert],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="qf" id="apply">
      <aside className="qf__side">
        <span className="eyebrow">{t.side.eyebrow}</span>
        <h2 className="h2">{t.side.title}</h2>
        <p className="qf__lead">{t.side.lead}</p>
        <ul className="qf__list">
          <li>
            <span className="qf__ic">
              <Icon name="whatsapp" />
            </span>
            <div>
              <span className="label">{t.side.waLabel}</span>
              <a
                className="data"
                href="https://wa.me/966598807429"
                target="_blank"
                rel="noopener"
                dir="ltr"
              >
                {t.side.waNumber}
              </a>
            </div>
          </li>
          <li>
            <span className="qf__ic">
              <Icon name="pin" />
            </span>
            <div>
              <span className="label">{t.side.officeLabel}</span>
              <b>{t.side.officeVal}</b>
            </div>
          </li>
        </ul>
      </aside>

      <div className="qf__card">
        {!sent ? (
          <form className="qf__form" onSubmit={handleSubmit}>
            <fieldset className="qf__set">
              <legend className="qf__legend">
                <span className="qf__step">1</span> {t.step1.legend}
              </legend>
              <div className="qf__grid">
                <div className="fld">
                  <label htmlFor="c-name">{t.step1.name.label}</label>
                  <input
                    id="c-name"
                    className="inp"
                    autoComplete="name"
                    placeholder={t.step1.name.placeholder}
                    required
                  />
                </div>
                <div className="fld">
                  <label htmlFor="c-phone">{t.step1.phone.label}</label>
                  <input
                    id="c-phone"
                    className="inp"
                    type="tel"
                    autoComplete="tel"
                    placeholder={t.step1.phone.placeholder}
                    required
                  />
                </div>
                <div className="fld">
                  <label htmlFor="c-email">
                    {t.step1.email.label}{" "}
                    <span className="qf__opt">{t.step1.email.opt}</span>
                  </label>
                  <input
                    id="c-email"
                    className="inp"
                    type="email"
                    autoComplete="email"
                    placeholder={t.step1.email.placeholder}
                  />
                </div>
                <div className="fld">
                  <label htmlFor="c-loc">{t.step1.location.label}</label>
                  <select id="c-loc" className="inp">
                    {t.step1.location.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className="qf__set">
              <legend className="qf__legend">
                <span className="qf__step">2</span> {t.step2.legend}
              </legend>
              <div className="qf__grid">
                <div className="fld">
                  <label htmlFor="c-role">{t.step2.roleLabel}</label>
                  <select id="c-role" className="inp" required>
                    {t.step2.certs && (
                      <>
                        <optgroup label="Engineering">
                          <option>Mechanical Engineer</option>
                          <option>Civil Engineer</option>
                          <option>Construction Engineer</option>
                          <option>Safety Engineer</option>
                          <option>Electrical Engineer</option>
                          <option>Material Engineer</option>
                          <option>Computer Engineer</option>
                          <option>QA/QC Engineer</option>
                          <option>Piping Engineer</option>
                          <option>Planner</option>
                          <option>HVAC Engineer</option>
                          <option>Instrumentation Engineer</option>
                        </optgroup>
                        <optgroup label="Office & admin">
                          <option>Executive Secretary</option>
                          <option>Data Entry</option>
                          <option>Document Controller</option>
                          <option>Office Boy</option>
                          <option>Admin Assistant</option>
                          <option>Computer Operator</option>
                          <option>AutoCAD Draftsman</option>
                          <option>Time Keeper</option>
                          <option>Janitor</option>
                          <option>Telephone Operator</option>
                          <option>Office Driver</option>
                        </optgroup>
                        <optgroup label="Skilled trades">
                          <option>Millwright Fitter</option>
                          <option>Instrument Fitter</option>
                          <option>Pipe Fitter</option>
                          <option>Carpenter</option>
                          <option>3G Welder</option>
                          <option>Crane Operator</option>
                          <option>Rigger L1–L3</option>
                          <option>Mason</option>
                          <option>Steel Erector</option>
                          <option>Plumber</option>
                          <option>Light Driver</option>
                          <option>Forklift Operator</option>
                        </optgroup>
                        <optgroup label="Site & HSE">
                          <option>Heavy Driver</option>
                          <option>Scaffolder (TAoV)</option>
                          <option>Manhole Watch</option>
                          <option>Assistant Safety Officer</option>
                        </optgroup>
                      </>
                    )}
                  </select>
                </div>
                <div className="fld">
                  <label htmlFor="c-exp">{t.step2.exp.label}</label>
                  <select id="c-exp" className="inp" defaultValue={t.step2.exp.options[1]}>
                    {t.step2.exp.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="fld">
                <span className="fld__lbl">
                  {t.step2.certsLabel}{" "}
                  <span className="qf__opt">{t.step2.certsOpt}</span>
                </span>
                <div className="chips cr-certs">
                  {t.step2.certs.map((c) => (
                    <button
                      key={c}
                      className="chip"
                      type="button"
                      aria-pressed={!!selectedCerts[c]}
                      onClick={() => toggleCert(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <label className="cr-drop" htmlFor="c-cv">
                <Icon name="download" />
                <span>
                  <b>{fileName || t.step2.cv.uploadTitle}</b>
                  <span>{fileName ? "File selected" : t.step2.cv.uploadSub}</span>
                </span>
                <input
                  id="c-cv"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
            </fieldset>

            <div className="qf__foot">
              <label className="qf__check">
                <input id="c-consent" type="checkbox" required /> {t.consent}
              </label>
              <button className="btn btn--lg" type="submit">
                {t.submit} <Icon name="arrow" />
              </button>
            </div>
          </form>
        ) : (
          <div className="qf__done">
            <span className="qf__tick">
              <Icon name="check" />
            </span>
            <h3 className="h2">{t.success.title}</h3>
            <p className="lead">{t.success.lead}</p>
            <button
              className="btn btn--ghost"
              type="button"
              onClick={() => {
                setSent(false);
                setFileName("");
              }}
            >
              {t.success.reset}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
