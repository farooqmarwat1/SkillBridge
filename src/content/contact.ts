import type { IconName } from "@/components/ui/Icon";
import type { Locale, RouteKey } from "@/lib/i18n";

export type ContactTopic = {
  id: string;
  label: string;
  hintText?: string;
  hintLink?: string;
  hintRoute?: RouteKey;
};

export type ContactContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    home: string;
    contact: string;
    eyebrow: string;
    title: string;
    lead: string;
  };
  cards: {
    call: { label: string; p1: string; p2: string };
    whatsapp: { label: string; phone: string; note: string };
    email: { label: string; val: string };
    hours: { label: string; val: string; tbc: string };
  };
  form: {
    eyebrow: string;
    title: string;
    topicLabel: string;
    topics: ContactTopic[];
    name: { label: string; placeholder: string };
    company: { label: string; opt: string; placeholder: string };
    phone: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
    replyWa: string;
    submit: string;
    success: {
      title: string;
      lead: string;
      reset: string;
    };
  };
  side: {
    mapAria: string;
    headOffice: string;
    city: string;
    region: string;
    addressTbc: string;
    openMaps: string;
    mapsUrl: string;
    routes: {
      title: string;
      sub: string;
      routeKey: RouteKey;
      icon: IconName;
    }[];
  };
};

const en: ContactContent = {
  meta: {
    title: "Contact Us | Skill Bridge Contracting Company",
    description: "Contact Skill Bridge Contracting Company in Al Jubail, Saudi Arabia. Phones, WhatsApp, office location and enquiry form.",
  },
  hero: {
    home: "Home",
    contact: "Contact",
    eyebrow: "Contact",
    title: "Talk to our Al Jubail office",
    lead: "Call, message us on WhatsApp or send the form. For prices and availability, the quote form is the fastest route.",
  },
  cards: {
    call: { label: "Call", p1: "+966 53 905 1475", p2: "+966 59 880 7429" },
    whatsapp: { label: "WhatsApp", phone: "+966 53 905 1475", note: "Fastest for quick questions" },
    email: { label: "Email", val: "info@skillbridge.sa" },
    hours: { label: "Office hours", val: "Saturday to Thursday", tbc: "Hours to confirm" },
  },
  form: {
    eyebrow: "Send a message",
    title: "How can we help?",
    topicLabel: "Your enquiry is about",
    topics: [
      { id: "general", label: "General enquiry" },
      {
        id: "quote",
        label: "Quote or pricing",
        hintText: "For prices and availability, the quote form gets you an answer faster.",
        hintLink: "Open the quote form",
        hintRoute: "quote",
      },
      {
        id: "careers",
        label: "Job application",
        hintText: "Applying for a role? Use the careers form so HR receives your CV.",
        hintLink: "Go to careers",
        hintRoute: "careers",
      },
      { id: "supplier", label: "Supplier or partner" },
      { id: "project", label: "Existing project" },
    ],
    name: { label: "Full name", placeholder: "Your name" },
    company: { label: "Company", opt: "(optional)", placeholder: "Company name" },
    phone: { label: "Mobile number", placeholder: "05x xxx xxxx" },
    email: { label: "Email", placeholder: "name@company.com" },
    message: { label: "Message", placeholder: "Tell us what you need" },
    replyWa: "Reply on WhatsApp",
    submit: "Send message",
    success: {
      title: "Message sent",
      lead: "Thanks. Our Al Jubail office will reply on your preferred channel.",
      reset: "Send another message",
    },
  },
  side: {
    mapAria: "Stylised map showing the Skill Bridge head office in Al Jubail",
    headOffice: "Head office",
    city: "Al Jubail",
    region: "Eastern Province, Kingdom of Saudi Arabia",
    addressTbc: "Street address to confirm",
    openMaps: "Open in Google Maps",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Al+Jubail+Saudi+Arabia",
    routes: [
      { title: "Request a quote", sub: "Manpower, equipment or site work", routeKey: "quote", icon: "doc" },
      { title: "Apply for a job", sub: "39 roles in four disciplines", routeKey: "careers", icon: "hardhat" },
      { title: "Browse the fleet", sub: "29 equipment types", routeKey: "equipment", icon: "crane" },
    ],
  },
};

const ar: ContactContent = {
  meta: {
    title: "اتصل بنا | شركة سكيل بريدج للمقاولات",
    description: "تواصل مع شركة سكيل بريدج للمقاولات في الجبيل، السعودية. أرقام الهاتف، واتساب، موقع المكتب ونموذج التواصل المباشر.",
  },
  hero: {
    home: "الرئيسية",
    contact: "اتصل بنا",
    eyebrow: "التواصل",
    title: "تواصل مع مكتبنا في الجبيل",
    lead: "اتصل بنا، راسلنا عبر واتساب أو أرسل النموذج. للأسعار والتوافر، يعد نموذج طلب السعر أسرع طريقة.",
  },
  cards: {
    call: { label: "اتصال", p1: "+966 53 905 1475", p2: "+966 59 880 7429" },
    whatsapp: { label: "واتساب", phone: "+966 53 905 1475", note: "الأسرع للاستفسارات السريعة" },
    email: { label: "البريد الإلكتروني", val: "info@skillbridge.sa" },
    hours: { label: "ساعات العمل", val: "من السبت إلى الخميس", tbc: "ساعات العمل بانتظار التأكيد" },
  },
  form: {
    eyebrow: "إرسال رسالة",
    title: "كيف يمكننا مساعدتك؟",
    topicLabel: "موضوع استفسارك يتعلق بـ",
    topics: [
      { id: "general", label: "استفسار عام" },
      {
        id: "quote",
        label: "عرض سعر أو تسعير",
        hintText: "للحصول على الأسعار والتوافر بسرعة، استخدم نموذج طلب السعر.",
        hintLink: "فتح نموذج طلب السعر",
        hintRoute: "quote",
      },
      {
        id: "careers",
        label: "طلب توظيف",
        hintText: "هل تتقدم لوظيفة؟ استخدم نموذج التوظيف ليصل ملفك للموارد البشرية مباشرة.",
        hintLink: "الانتقال لصفحة التوظيف",
        hintRoute: "careers",
      },
      { id: "supplier", label: "مورد أو شريك" },
      { id: "project", label: "مشروع قائم" },
    ],
    name: { label: "الاسم الكامل", placeholder: "اسمك الكريم" },
    company: { label: "الشركة", opt: "(اختياري)", placeholder: "اسم الشركة" },
    phone: { label: "رقم الجوال", placeholder: "05x xxx xxxx" },
    email: { label: "البريد الإلكتروني", placeholder: "name@company.com" },
    message: { label: "الرسالة", placeholder: "أخبرنا بما تحتاجه" },
    replyWa: "الرد عبر واتساب",
    submit: "إرسال الرسالة",
    success: {
      title: "تم إرسال الرسالة",
      lead: "شكراً لك. سيتواصل معك فريق مكتبنا في الجبيل عبر وسيلتك المفضلة.",
      reset: "إرسال رسالة أخرى",
    },
  },
  side: {
    mapAria: "خريطة توضيحية تظهر مقر شركة سكيل بريدج الرئيسي في الجبيل",
    headOffice: "المقر الرئيسي",
    city: "الجبيل",
    region: "المنطقة الشرقية، المملكة العربية السعودية",
    addressTbc: "العنوان التفصيلي بانتظار التأكيد",
    openMaps: "فتح في خرائط جوجل",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Al+Jubail+Saudi+Arabia",
    routes: [
      { title: "طلب عرض سعر", sub: "قوى عاملة، معدات أو أعمال موقع", routeKey: "quote", icon: "doc" },
      { title: "التقدم لوظيفة", sub: "39 مهنة في أربعة تخصصات", routeKey: "careers", icon: "hardhat" },
      { title: "استعراض الأسطول", sub: "29 نوعاً من المعدات", routeKey: "equipment", icon: "crane" },
    ],
  },
};

export const contactContent: Record<Locale, ContactContent> = { en, ar };
