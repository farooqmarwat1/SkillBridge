import type { Locale, RouteKey } from "@/lib/i18n";

/** Contact details shown on every page. Numbers are written left to right in both languages. */
export const contact = {
  phone: { display: "+966 53 905 1475", tel: "+966539051475" },
  phone2: { display: "+966 59 880 7429", tel: "+966598807429" },
  // WhatsApp number to confirm with the client (see docs/PROJECT.md).
  whatsapp: { display: "+966 53 905 1475", url: "https://wa.me/966539051475" },
  profilePdf: "/docs/skill-bridge-profile.pdf",
  legalNameAr: "شركة سكيل بريدج للمقاولات",
  legalNameEn: "Skill Bridge Contracting Company",
} as const;

type Link = { key: RouteKey; label: string };

export type SiteContent = {
  brand: string;
  tbc: string;
  skip: string;
  util: { office: string; profile: string; language: string };
  nav: (Link & { caret?: boolean })[];
  quote: string;
  menuOpen: string;
  menuClose: string;
  mobileNav: string;
  cta: { title: string; text: string; quote: string; whatsapp: string };
  footer: {
    callUs: string;
    alsoOn: string;
    headOffice: string;
    headOfficeShort: string;
    tagline: string;
    whatsapp: string;
    profile: string;
    servicesTitle: string;
    services: Link[];
    companyTitle: string;
    company: Link[];
    officeTitle: string;
    address: [string, string];
    cr: string;
    vat: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  whatsappChat: string;
};

const en: SiteContent = {
  brand: "Skill Bridge",
  tbc: "To confirm",
  skip: "Skip to content",
  util: { office: "Al Jubail Head Office", profile: "Company profile (PDF)", language: "Language" },
  nav: [
    { key: "about", label: "About" },
    { key: "services", label: "Services", caret: true },
    { key: "equipment", label: "Equipment" },
    { key: "industries", label: "Industries" },
    { key: "projects", label: "Projects" },
    { key: "hse", label: "HSE" },
    { key: "careers", label: "Careers" },
    { key: "contact", label: "Contact" },
  ],
  quote: "Request a quote",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  mobileNav: "Mobile",
  cta: {
    title: "Need crew or equipment on site?",
    text: "Tell us the roles or machines, the site and the start date. We come back with availability and a quote.",
    quote: "Request a quote",
    whatsapp: "WhatsApp us",
  },
  footer: {
    callUs: "Call us",
    alsoOn: "Second line",
    headOffice: "Head office",
    headOfficeShort: "Al Jubail, KSA",
    tagline: "Manpower, equipment and contracting for industrial sites across Saudi Arabia.",
    whatsapp: "WhatsApp",
    profile: "Company profile",
    servicesTitle: "Services",
    services: [
      { key: "manpower", label: "Manpower Supply" },
      { key: "equipmentRental", label: "Equipment Rental" },
      { key: "contracting", label: "Civil & General Contracting" },
      { key: "maintenance", label: "Plant Maintenance" },
      { key: "fabrication", label: "Fabrication & Workshop" },
      { key: "logistics", label: "Logistics & Transport" },
      { key: "trading", label: "Trading & Supply" },
    ],
    companyTitle: "Company",
    company: [
      { key: "about", label: "About" },
      { key: "equipment", label: "Equipment fleet" },
      { key: "industries", label: "Industries" },
      { key: "projects", label: "Projects" },
      { key: "hse", label: "HSE & Quality" },
      { key: "careers", label: "Careers" },
    ],
    officeTitle: "Head office",
    address: ["Al Jubail, Eastern Province", "Kingdom of Saudi Arabia"],
    cr: "CR",
    vat: "VAT",
    rights: "Skill Bridge Contracting Company. All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
  },
  whatsappChat: "Chat on WhatsApp",
};

const ar: SiteContent = {
  brand: "سكيل بريدج",
  tbc: "بانتظار التأكيد",
  skip: "انتقل إلى المحتوى",
  util: { office: "المكتب الرئيسي في الجبيل", profile: "ملف الشركة (PDF)", language: "اللغة" },
  nav: [
    { key: "about", label: "من نحن" },
    { key: "services", label: "الخدمات", caret: true },
    { key: "equipment", label: "المعدات" },
    { key: "industries", label: "القطاعات" },
    { key: "projects", label: "المشاريع" },
    { key: "hse", label: "السلامة" },
    { key: "careers", label: "الوظائف" },
    { key: "contact", label: "اتصل بنا" },
  ],
  quote: "اطلب عرض سعر",
  menuOpen: "فتح القائمة",
  menuClose: "إغلاق القائمة",
  mobileNav: "القائمة",
  cta: {
    title: "تحتاج فرقاً أو معدات في موقعك؟",
    text: "أخبرنا بالوظائف أو المعدات والموقع وتاريخ البدء، وسنعود إليك بالتوفر وعرض السعر.",
    quote: "اطلب عرض سعر",
    whatsapp: "راسلنا على واتساب",
  },
  footer: {
    callUs: "اتصل بنا",
    alsoOn: "الخط الثاني",
    headOffice: "المقر الرئيسي",
    headOfficeShort: "الجبيل، السعودية",
    tagline: "قوى عاملة ومعدات ومقاولات للمواقع الصناعية في جميع أنحاء المملكة العربية السعودية.",
    whatsapp: "واتساب",
    profile: "ملف الشركة",
    servicesTitle: "الخدمات",
    services: [
      { key: "manpower", label: "توريد القوى العاملة" },
      { key: "equipmentRental", label: "تأجير المعدات" },
      { key: "contracting", label: "المقاولات المدنية والعامة" },
      { key: "maintenance", label: "صيانة المصانع" },
      { key: "fabrication", label: "التصنيع والورش" },
      { key: "logistics", label: "الخدمات اللوجستية والنقل" },
      { key: "trading", label: "التجارة والتوريد" },
    ],
    companyTitle: "الشركة",
    company: [
      { key: "about", label: "من نحن" },
      { key: "equipment", label: "أسطول المعدات" },
      { key: "industries", label: "القطاعات" },
      { key: "projects", label: "المشاريع" },
      { key: "hse", label: "الصحة والسلامة والجودة" },
      { key: "careers", label: "الوظائف" },
    ],
    officeTitle: "المقر الرئيسي",
    address: ["الجبيل، المنطقة الشرقية", "المملكة العربية السعودية"],
    cr: "السجل التجاري",
    vat: "الرقم الضريبي",
    rights: "شركة سكيل بريدج للمقاولات. جميع الحقوق محفوظة.",
    privacy: "الخصوصية",
    terms: "الشروط",
  },
  whatsappChat: "تواصل عبر واتساب",
};

export const siteContent: Record<Locale, SiteContent> = { en, ar };
