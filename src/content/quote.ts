import type { Locale } from "@/lib/i18n";

export type QuoteWizardContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    home: string;
    quote: string;
    title: string;
    lead: string;
  };
  steps: [string, string, string, string];
  step1: {
    badge: string;
    title: string;
    lead: string;
    services: {
      id: string;
      name: string;
      sub: string;
    }[];
  };
  step2: {
    badge: string;
    title: string;
    lead: string;
    manpowerTitle: string;
    equipmentTitle: string;
    headcountLabel: string;
    otherRolesLabel: string;
    otherRolesOpt: string;
    otherRolesPlaceholder: string;
    eqNote: string;
    eqFleetLink: string;
    scopeLabel: string;
    scopePlaceholder: string;
    selectedFormat: string;
    roles: string[];
    equipment: string[];
  };
  step3: {
    badge: string;
    title: string;
    lead: string;
    siteLabel: string;
    startLabel: string;
    durLabel: string;
    patternLabel: string;
    sites: string[];
    durations: string[];
    shifts: string[];
    extrasLabel: string;
    extras: string[];
  };
  step4: {
    badge: string;
    title: string;
    lead: string;
    name: { label: string; placeholder: string };
    company: { label: string; placeholder: string };
    jobTitle: { label: string; opt: string; placeholder: string };
    project: { label: string; opt: string; placeholder: string };
    mobile: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    waCheckbox: string;
  };
  step5: {
    title: string;
    lead: string;
    refLabel: string;
    refCode: string;
    nextSteps: [string, string, string];
    homeBtn: string;
    projectsBtn: string;
  };
  nav: {
    back: string;
    continue: string;
    submit: string;
    stepOfFormat: string;
    selectHint: string;
    serviceSelectedSingular: string;
    serviceSelectedPlural: string;
  };
  summary: {
    title: string;
    badgeStepFormat: string;
    badgeSent: string;
    servicesLabel: string;
    rolesLabel: string;
    equipmentLabel: string;
    whenLabel: string;
    patternLabel: string;
    extrasLabel: string;
    noneSelected: string;
    helpEyebrow: string;
    helpTitle: string;
    helpSub: string;
    trustTitle: string;
    trustLead: string;
  };
};

const en: QuoteWizardContent = {
  meta: {
    title: "Request a Quote | Skill Bridge Contracting Company",
    description: "Request a quote for manpower supply, equipment rental, maintenance or civil works across Saudi Arabia. Fast response from our Al Jubail office.",
  },
  hero: {
    home: "Home",
    quote: "Request a quote",
    title: "Request a quote",
    lead: "Four short steps. We reply with availability, CVs or equipment specs, and a priced quote.",
  },
  steps: ["Services", "Details", "Site and schedule", "Your details"],
  step1: {
    badge: "Step 1 of 4",
    title: "What does your project need?",
    lead: "Pick one or more service lines. You can combine manpower, plant and contracting on one quote.",
    services: [
      { id: "manpower", name: "Manpower Supply", sub: "39 roles, short or long term" },
      { id: "equipment", name: "Equipment Rental", sub: "29 types, bare or operated" },
      { id: "contracting", name: "Civil & General Contracting", sub: "Civil works, design-build" },
      { id: "maintenance", name: "Plant Maintenance & Shutdowns", sub: "Refineries, power plants" },
      { id: "fabrication", name: "Fabrication & Workshop", sub: "Steel, machining, repairs" },
      { id: "logistics", name: "Logistics & Transport", sub: "Low-beds, buses, haulage" },
      { id: "trading", name: "Trading & Supply", sub: "Site and safety materials" },
    ],
  },
  step2: {
    badge: "Step 2 of 4",
    title: "Tell us the details",
    lead: "Pick what applies. Add anything else in the scope box.",
    manpowerTitle: "Manpower roles",
    equipmentTitle: "Equipment",
    headcountLabel: "Total headcount",
    otherRolesLabel: "Other roles",
    otherRolesOpt: "(optional)",
    otherRolesPlaceholder: "e.g. 2 instrument technicians",
    eqNote: "Need quantities or a specific model? Add them below, or build a detailed list on the ",
    eqFleetLink: "equipment fleet page",
    scopeLabel: "Scope of work",
    scopePlaceholder: "Describe the work, quantities, site conditions or anything we should know",
    selectedFormat: "{n} selected",
    roles: [
      "Civil Engineer",
      "Safety Engineer",
      "QA/QC Engineer",
      "Piping Engineer",
      "Document Controller",
      "Pipe Fitter",
      "3G Welder",
      "Rigger L1–L3",
      "Crane Operator",
      "Scaffolder (TAoV)",
      "Steel Erector",
      "Mason",
      "Carpenter",
      "Heavy Driver",
      "Electrical Engineer",
      "Assistant Safety Officer",
    ],
    equipment: [
      "Excavator",
      "Backhoe loader",
      "Wheel loader",
      "Dump truck",
      "Grader",
      "Mobile crane",
      "Crawler crane",
      "Forklift",
      "Low-bed trailer",
      "Generator",
      "55-seat bus",
      "Pickups",
    ],
  },
  step3: {
    badge: "Step 3 of 4",
    title: "Site and schedule",
    lead: "Where and when you need us.",
    siteLabel: "Site location",
    startLabel: "Start date",
    durLabel: "Duration",
    patternLabel: "Working pattern",
    sites: ["Al Jubail", "Dammam", "Ras Tanura", "Abqaiq / SPARK", "Riyadh", "NEOM", "Other"],
    durations: ["Under 1 month", "1 to 3 months", "3 to 6 months", "6 months or more", "Shutdown period"],
    shifts: ["Day shift", "Night shift", "24-hour"],
    extrasLabel: "We should also provide",
    extras: ["Crew transport", "Accommodation", "Machine operators", "Site supervision"],
  },
  step4: {
    badge: "Step 4 of 4",
    title: "Your details",
    lead: "So we can send the quote to the right person.",
    name: { label: "Full name", placeholder: "Your name" },
    company: { label: "Company", placeholder: "Company or contractor" },
    jobTitle: { label: "Job title", opt: "(optional)", placeholder: "e.g. Procurement manager" },
    project: { label: "Project", opt: "(optional)", placeholder: "Project or package name" },
    mobile: { label: "Mobile number", placeholder: "05x xxx xxxx" },
    email: { label: "Work email", placeholder: "name@company.com" },
    waCheckbox: "Send the quote on WhatsApp as well",
  },
  step5: {
    title: "Request received",
    lead: "Our Al Jubail team is checking availability. You will hear from us with CVs, equipment specs and a priced quote.",
    refLabel: "Your reference",
    refCode: "SB-Q-26-0142",
    nextSteps: [
      "We confirm availability and ask any questions.",
      "You receive CVs, specs and the priced quote.",
      "On approval, we mobilise to your site.",
    ],
    homeBtn: "Back to home",
    projectsBtn: "See our projects",
  },
  nav: {
    back: "Back",
    continue: "Continue",
    submit: "Send request",
    stepOfFormat: "Step {n} of 4",
    selectHint: "Select at least one service",
    serviceSelectedSingular: "1 service selected",
    serviceSelectedPlural: "{n} services selected",
  },
  summary: {
    title: "Your request",
    badgeStepFormat: "Step {n} of 4",
    badgeSent: "Sent",
    servicesLabel: "Services",
    rolesLabel: "Roles",
    equipmentLabel: "Equipment",
    whenLabel: "When",
    patternLabel: "Shift",
    extrasLabel: "Extras",
    noneSelected: "None selected",
    helpEyebrow: "Need help fast?",
    helpTitle: "+966 53 905 1475",
    helpSub: "Call or message our Al Jubail team on WhatsApp.",
    trustTitle: "Why Skill Bridge",
    trustLead: "Supplying major projects for L&T, Nesma, Kalpataru and Sendan with gate-ready crews and inspected equipment.",
  },
};

const ar: QuoteWizardContent = {
  meta: {
    title: "طلب عرض سعر | شركة سكيل بريدج للمقاولات",
    description: "اطلب عرض سعر لتوريد القوى العاملة أو تأجير المعدات أو أعمال الصيانة والمقاولات في السعودية. استجابة سريعة من مكتبنا في الجبيل.",
  },
  hero: {
    home: "الرئيسية",
    quote: "طلب عرض سعر",
    title: "طلب عرض سعر",
    lead: "أربع خطوات بسيطة وسريعة. نرد عليك بالتوافر والسير الذاتية ومواصفات المعدات وعرض السعر المالي.",
  },
  steps: ["الخدمات", "التفاصيل", "الموقع والجدول", "بياناتك"],
  step1: {
    badge: "الخطوة 1 من 4",
    title: "ما الذي يحتاجه مشروعك؟",
    lead: "اختر خدمة واحدة أو أكثر. يمكنك الجمع بين القوى العاملة والمعدات والمقاولات في عرض سعر واحد.",
    services: [
      { id: "manpower", name: "توريد القوى العاملة", sub: "39 مهنة، لفترات قصيرة أو طويلة" },
      { id: "equipment", name: "تأجير المعدات", sub: "29 نوعاً، مع أو بدون مشغلين" },
      { id: "contracting", name: "المقاولات العامة والمدنية", sub: "أعمال مدنية، تصميم وتنفيذ" },
      { id: "maintenance", name: "صيانة المنشآت والإغلاقات", sub: "المصافي ومحطات الطاقة" },
      { id: "fabrication", name: "التصنيع والورش الصناعية", sub: "هياكل حديدية، تشغيل وإصلاح" },
      { id: "logistics", name: "الخدمات اللوجستية والنقل", sub: "مقطورات منخفضة، حافلات ونقل" },
      { id: "trading", name: "التجارة والتوريد", sub: "مواد البناء ومهمات السلامة" },
    ],
  },
  step2: {
    badge: "الخطوة 2 من 4",
    title: "أخبرنا بالتفاصيل",
    lead: "حدد التخصصات والمعدات المطلوبة. أضف أي متطلبات أخرى في صندوق نطاق العمل.",
    manpowerTitle: "القوى العاملة المطلوبة",
    equipmentTitle: "المعدات والآليات",
    headcountLabel: "إجمالي العدد المطلوب",
    otherRolesLabel: "تخصصات أخرى",
    otherRolesOpt: "(اختياري)",
    otherRolesPlaceholder: "مثال: 2 فني أجهزة دقيقة",
    eqNote: "هل تحتاج لكميات محددة أو طرازات معينة؟ أضفها أدناه أو أنشئ قائمتك من ",
    eqFleetLink: "صفحة أسطول المعدات",
    scopeLabel: "نطاق العمل",
    scopePlaceholder: "صف طبيعة العمل، الكميات، ظروف الموقع أو أي معلومات تود إضافتها",
    selectedFormat: "تم تحديد {n}",
    roles: [
      "مهندس مدني",
      "مهندس سلامة",
      "مهندس ضبط جودة",
      "مهندس أنابيب",
      "مراقب وثائق",
      "فني أنابيب",
      "لحام 3G",
      "فني ريجر (المستوى 1–3)",
      "مشغل رافعة",
      "فني سقالات (TAoV)",
      "مركب هياكل فولاذية",
      "بناء",
      "نجار",
      "سائق ثقيل",
      "مهندس كهربائي",
      "مساعد ضابط سلامة",
    ],
    equipment: [
      "حفار",
      "حفار خلفي (JCB)",
      "شيول (لودر)",
      "شاحنة قلاب",
      "جريدر",
      "رافعة متحركة",
      "رافعة مجنزرة",
      "رافعة شوكية",
      "مقطورة منخفضة (لوبد)",
      "مولد كهرباء",
      "حافلة 55 راكب",
      "سيارات بيك آب",
    ],
  },
  step3: {
    badge: "الخطوة 3 من 4",
    title: "الموقع والجدول الزمني",
    lead: "أين ومتى تحتاج خدماتنا؟",
    siteLabel: "موقع العمل",
    startLabel: "تاريخ البدء المتوقع",
    durLabel: "المدة المتوقعة",
    patternLabel: "نظام ورديات العمل",
    sites: ["الجبيل", "الدمام", "رأس تنورة", "بقيق / سبارك", "الرياض", "نيوم", "موقع آخر"],
    durations: ["أقل من شهر", "من 1 إلى 3 أشهر", "من 3 إلى 6 أشهر", "6 أشهر أو أكثر", "فترة إغلاق وصيانة"],
    shifts: ["وردية نهارية", "وردية ليلية", "عمل متواصل 24 ساعة"],
    extrasLabel: "خدمات مساندة تود توفيرها",
    extras: ["نقل العمالة", "الإعاشة والسكن", "مشغلو آليات", "إشراف ميداني"],
  },
  step4: {
    badge: "الخطوة 4 من 4",
    title: "بيانات التواصل",
    lead: "لنتمكن من إرسال عرض السعر للشخص المسؤول مباشرة.",
    name: { label: "الاسم الكامل", placeholder: "اسمك الكريم" },
    company: { label: "اسم الشركة", placeholder: "الشركة أو المقاول" },
    jobTitle: { label: "المسمى الوظيفي", opt: "(اختياري)", placeholder: "مثال: مدير المشتريات" },
    project: { label: "اسم المشروع", opt: "(اختياري)", placeholder: "اسم المشروع أو الحزمة" },
    mobile: { label: "رقم الجوال", placeholder: "05x xxx xxxx" },
    email: { label: "البريد الإلكتروني للعمل", placeholder: "name@company.com" },
    waCheckbox: "إرسال نسخة من عرض السعر عبر واتساب أيضاً",
  },
  step5: {
    title: "تم استلام طلبك بنجاح",
    lead: "يقوم فريقنا في الجبيل بمراجعة التوافر حالياً. سنتواصل معك بالسير الذاتية ومواصفات المعدات وعرض السعر المعتمد.",
    refLabel: "رقم المرجع الخاص بك",
    refCode: "SB-Q-26-0142",
    nextSteps: [
      "نؤكد التوافر ونناقش أي تفاصيل فنية إضافية.",
      "تستلم السير الذاتية ومواصفات المعدات وعرض السعر.",
      "عند الاعتماد، نحشد الكوادر والمعدات إلى موقعكم فوراً.",
    ],
    homeBtn: "العودة للرئيسية",
    projectsBtn: "استعراض مشاريعنا",
  },
  nav: {
    back: "رجوع",
    continue: "متابعة",
    submit: "إرسال الطلب",
    stepOfFormat: "الخطوة {n} من 4",
    selectHint: "يرجى تحديد خدمة واحدة على الأقل",
    serviceSelectedSingular: "تم تحديد خدمة واحدة",
    serviceSelectedPlural: "تم تحديد {n} خدمات",
  },
  summary: {
    title: "ملخص طلبك",
    badgeStepFormat: "الخطوة {n} من 4",
    badgeSent: "تم الإرسال",
    servicesLabel: "الخدمات",
    rolesLabel: "القوى العاملة",
    equipmentLabel: "المعدات",
    whenLabel: "الموعد والمدة",
    patternLabel: "نظام العمل",
    extrasLabel: "إضافات مساندة",
    noneSelected: "لم يتم التحديد",
    helpEyebrow: "هل تحتاج رداً سريعاً؟",
    helpTitle: "+966 53 905 1475",
    helpSub: "اتصل بنا أو راسلنا عبر واتساب من مكتب الجبيل.",
    trustTitle: "لماذا سكيل بريدج",
    trustLead: "نورد لكبرى المشاريع لصالح L&T ونسما وكالباتارو وسندان بكوادر جاهزة ومعدات مفحوصة.",
  },
};

export const quoteWizardContent: Record<Locale, QuoteWizardContent> = { en, ar };
