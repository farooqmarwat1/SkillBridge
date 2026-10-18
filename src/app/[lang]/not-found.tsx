import Link from "next/link";

/* Rendered inside the [lang] layout. It receives no params, so it shows both languages. */
export default function NotFound() {
  return (
    <section className="sec">
      <div className="c nf">
        <span className="eyebrow">404</span>
        <h1 className="h2">Page not found</h1>
        <p className="lead">This page is not ready yet, or the link has changed.</p>
        <p className="lead" lang="ar" dir="rtl">هذه الصفحة غير جاهزة بعد، أو تغيّر الرابط.</p>
        <div className="hero__ctas">
          <Link className="btn" href="/en">Back to home</Link>
          <Link className="btn btn--ghost" href="/ar" lang="ar">العودة إلى الرئيسية</Link>
        </div>
      </div>
    </section>
  );
}
