import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n";
import { site, stock } from "@/lib/media";

export type NewsArticle = {
  slug: string;
  tag: string;
  category: "all" | "guides" | "checklists" | "safety" | "regulations";
  title: string;
  lead: string;
  date: string;
  isoDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  image: StaticImageData;
  imageAlt: string;
  keyPointsTitle: string;
  keyPoints: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    checklist?: string[];
  }[];
  conclusion: string;
};

export type NewsContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    home: string;
    news: string;
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
  };
  filters: { id: string; label: string }[];
  readArticle: string;
  backToNews: string;
  shareTitle: string;
  relatedTitle: string;
  articles: NewsArticle[];
  cta: {
    eyebrow: string;
    title: string;
    lead: string;
    btn: string;
  };
};

export const newsSlugs = [
  "planning-manpower-refinery-shutdown",
  "crane-rental-checklist-industrial-sites",
  "saudization-and-contract-manpower",
  "heavy-haulage-and-lowbed-logistics",
  "heat-stress-management-summer-working",
  "maintaining-heavy-equipment-uptime",
] as const;

export type NewsSlug = (typeof newsSlugs)[number];

export const isNewsSlug = (slug: string): slug is NewsSlug =>
  (newsSlugs as readonly string[]).includes(slug);

const enArticles: NewsArticle[] = [
  {
    slug: "planning-manpower-refinery-shutdown",
    tag: "Guide",
    category: "guides",
    title: "Planning manpower for a refinery shutdown",
    lead: "Which trades to book first, how long mobilization takes, and the exact credential packet your site gate will require before day one.",
    date: "14 October 2026",
    isoDate: "2026-10-14",
    readTime: "5 min read",
    author: {
      name: "Engr. Tariq Al-Ghamdi",
      role: "Operations Coordinator · Al Jubail",
    },
    image: site.plantFoundations,
    imageAlt: "Industrial plant foundations and machinery area",
    keyPointsTitle: "Key Planning Rules",
    keyPoints: [
      "Book critical path trades (riggers, certified 6G welders, TÜV scaffolders) 4 to 6 weeks before mechanical day zero.",
      "Submit gate clearance dossiers at least 10 business days before initial mobilization to prevent checkpoint bottlenecks.",
      "Factor in a 10% standby buffer for high-intensity night shifts to absorb unforeseen turnaround work packages.",
    ],
    sections: [
      {
        heading: "1. The Critical Path Trade Sequencing",
        paragraphs: [
          "Plant outages and turnarounds in Jubail and Ras Tanura operate on razor-thin schedule buffers. The most common pitfall in shutdown manpower planning is mobilizing all disciplines at once.",
          "In week one of a turnaround, the focus is strictly on isolation, blinding, and safe access. Piping fitters and millwrights should not arrive on site before scaffolders have handed over green-tagged work platforms and rigging crews have set up heavy lift perimeter zones.",
        ],
        checklist: [
          "Phase 1 (Pre-outage): Scaffolders (TÜV certified), insulation strippers, rigging crew L1–L3.",
          "Phase 2 (Mechanical): Pipe fitters, 6G ASME welders, bolt torqueing technicians, hydro-test crews.",
          "Phase 3 (Box-up & Startup): Instrument technicians, valve calibrators, punch-list trades.",
        ],
      },
      {
        heading: "2. The Gate Paperwork Package",
        paragraphs: [
          "Nothing costs more than certified trades waiting at an industrial facility gate because of a missing sticker or unsigned medical certificate. Skill Bridge packages worker dossiers to match client vendor requirements exactly.",
          "Ensure every submitted CV includes a verified Iqama copy, valid medical fitness certificate (not older than 12 months), certified trade card, and recent safety induction records.",
        ],
      },
      {
        heading: "3. Managing Shift Handover & Productivity",
        paragraphs: [
          "Running dual 12-hour shifts requires a formal 30-minute joint coordinator walkdown between day and night shift leads. This prevents lost hours clarifying work permits (PTW) or tracking specialty torque tools.",
        ],
      },
    ],
    conclusion: "Detailed planning and trade sequencing turn a chaotic turnaround into a safe, on-schedule mechanical completion.",
  },
  {
    slug: "crane-rental-checklist-industrial-sites",
    tag: "Checklist",
    category: "checklists",
    title: "Crane rental checklist for industrial sites",
    lead: "Engineered lift plans, third-party inspection tags, operator competency cards, and ground bearing tests in one clear checklist.",
    date: "28 September 2026",
    isoDate: "2026-09-28",
    readTime: "4 min read",
    author: {
      name: "Farhan Malik",
      role: "Lifting & Plant Equipment Specialist",
    },
    image: site.crawlerCraneSlab,
    imageAlt: "Heavy crawler crane positioning on slab",
    keyPointsTitle: "Inspection Essentials",
    keyPoints: [
      "Verify third-party inspection validity for both the machine and all rigging tackle (slings, shackles, spreader beams).",
      "Check ground bearing capacity and calculate outrigger matting pressures before crane entry.",
      "Confirm the crane operator holds an approved Saudi heavy operator licence and accredited third-party competency certificate.",
    ],
    sections: [
      {
        heading: "1. Documentation Before Mobilization",
        paragraphs: [
          "Before dispatching a mobile or crawler crane from our Jubail yard, our dispatch team compiles an inspection packet tailored to site gate standards. The contractor must ensure the crane's load charts match the planned radius and environmental wind limits.",
        ],
        checklist: [
          "Valid third-party inspection sticker & certificate (Aramco / SABIC approved agency).",
          "Boom angle indicator and Load Moment Indicator (LMI) calibration record.",
          "Operator valid Saudi driving licence and third-party certified competency badge.",
          "Rigging gear proof load test certificates (3.1 traceability).",
        ],
      },
      {
        heading: "2. Ground Preparation & Matting",
        paragraphs: [
          "Over 70% of lifting incidents on construction sites stem from inadequate ground assessment. In the Eastern Province's sabkha or backfilled sand soils, steel outrigger mats or heavy hardwood timbers are mandatory to distribute point loads safely.",
        ],
      },
    ],
    conclusion: "Rigorous pre-mobilization checks guarantee that lifting operations proceed without gate delays, near-misses, or equipment stoppages.",
  },
  {
    slug: "saudization-and-contract-manpower",
    tag: "Regulations",
    category: "regulations",
    title: "What Saudization means for contract manpower",
    lead: "How Nitaqat requirements impact your subcontractor crew compositions and the compliance questions every procurement team should ask.",
    date: "15 August 2026",
    isoDate: "2026-08-15",
    readTime: "6 min read",
    author: {
      name: "Abdulaziz Al-Shehri",
      role: "Compliance & Government Affairs",
    },
    image: site.toolboxTalkSunrise,
    imageAlt: "Toolbox talk briefing at sunrise on site",
    keyPointsTitle: "Regulatory Overview",
    keyPoints: [
      "Ensure your manpower contractor holds an active Qiwa profile, clean GOSI wage compliance record, and green Nitaqat status.",
      "Specify Saudization requirements at the tender stage to match client localization KPIs on major giga-projects.",
      "Demand transparent documentation verifying Iqama sponsorship and Ajeer temporary work permits.",
    ],
    sections: [
      {
        heading: "1. Understanding Localization Tiers in Industrial Contracting",
        paragraphs: [
          "Saudi Vision 2030 and Ministry of Human Resources directives place firm nationalization benchmarks across civil and industrial contracts. When procuring contractor manpower, selecting a compliant supplier is essential to protect your project from stop-work notices.",
          "Skill Bridge adheres to statutory employment regulations, ensuring that all deployed workers have verified legal status, valid insurance, and authorized work documentation.",
        ],
      },
      {
        heading: "2. The Ajeer System & Temporary Work Authorization",
        paragraphs: [
          "Under Saudi labour law, loaning or seconding workers between establishments requires official Ajeer documentation. Using unverified labour without active Ajeer permits exposes both the contractor and project owner to severe statutory penalties.",
        ],
        checklist: [
          "Active Ajeer work permit linked directly to the contracting company.",
          "GOSI registration and regular Wage Protection System (WPS) compliance.",
          "Health insurance under CCHI with active policy validation.",
        ],
      },
    ],
    conclusion: "Compliance is not just paperwork; it is the foundation of site security and operational continuity across the Kingdom.",
  },
  {
    slug: "heavy-haulage-and-lowbed-logistics",
    tag: "Guide",
    category: "guides",
    title: "Mobilizing heavy machinery across the Eastern Province",
    lead: "Route surveys, Ministry of Transport permits, pilot escorts, and staging heavy low-beds for rapid site delivery.",
    date: "22 July 2026",
    isoDate: "2026-07-22",
    readTime: "4 min read",
    author: {
      name: "Tariq Al-Mansoor",
      role: "Fleet Logistics Manager",
    },
    image: site.fleetLineupDesert,
    imageAlt: "Heavy truck and trailer fleet in desert staging area",
    keyPointsTitle: "Haulage Checklist",
    keyPoints: [
      "Conduct bridge height and turn radius route surveys for oversized equipment loads.",
      "Secure Ministry of Transport and Traffic Police permits for multi-axle oversized cargo.",
      "Coordinate escort vehicles and daylight-only travel windows on major Saudi highways.",
    ],
    sections: [
      {
        heading: "1. Highway Planning & Clearance Windows",
        paragraphs: [
          "Moving 100-ton excavators or long-boom crawler cranes between Dammam, Jubail, and Ras Al-Khair involves navigating height-restricted overpasses and port authority weigh stations.",
          "Skill Bridge's transport division conducts route surveys prior to heavy low-bed mobilization, identifying overhead cable clearances, bridge load limits, and checkpoint inspection requirements.",
        ],
      },
      {
        heading: "2. GPS Fleet Monitoring & Safety Compliance",
        paragraphs: [
          "All our tractor units and low-bed trailers are equipped with real-time GPS tracking and electronic speed limiters, ensuring drivers abide by Saudi highway safety codes and site arrival schedules.",
        ],
      },
    ],
    conclusion: "Punctual logistics ensure machines reach the work front exactly when the site team is ready to begin operations.",
  },
  {
    slug: "heat-stress-management-summer-working",
    tag: "Safety",
    category: "safety",
    title: "Summer heat stress protocols for industrial crews",
    lead: "Implementing Ministry of Human Resources midday work bans, mandatory hydration stations, and thermal rest rotations on live sites.",
    date: "10 June 2026",
    isoDate: "2026-06-10",
    readTime: "5 min read",
    author: {
      name: "HSE Department",
      role: "Safety & Health Operations",
    },
    image: stock.ppeSafetyHelmet,
    imageAlt: "Safety helmet and protective equipment",
    keyPointsTitle: "Safety Mandates",
    keyPoints: [
      "Strict compliance with the Ministry of Human Resources 12:00 PM to 3:00 PM summer outdoor work ban (June 15 – September 15).",
      "Provision of shaded rest areas equipped with misting fans and certified oral rehydration salts.",
      "Training site supervisors to recognize early symptoms of heat exhaustion and heat stroke.",
    ],
    sections: [
      {
        heading: "1. The Statutory Midday Work Ban",
        paragraphs: [
          "In Saudi Arabia, ambient temperatures routinely exceed 48°C during peak summer months. Compliance with the Kingdom's annual midday work ban is strictly enforced by Ministry labour inspectors, with steep fines and site shutdown orders for violations.",
          "Skill Bridge reconfigures work patterns into early-morning and night-shift rotations to maintain monthly project milestones while protecting workers from thermal exposure.",
        ],
      },
      {
        heading: "2. Hydration & Thermal Rest Rotations",
        paragraphs: [
          "Hydration alone is insufficient without electrolytes. On live industrial sites, our site coordinators set up designated cooling shelters with cold water, electrolyte solutions, and forced-air misting fans.",
        ],
      },
    ],
    conclusion: "Protecting workforce health in extreme weather conditions is our highest priority and the core of our Zero Harm HSE culture.",
  },
  {
    slug: "maintaining-heavy-equipment-uptime",
    tag: "Checklist",
    category: "checklists",
    title: "Preventing equipment downtime during 24/7 turnaround shifts",
    lead: "Mobile mechanic vans, scheduled oil analysis, on-site spare kits, and immediate switchover protocols for mission-critical plants.",
    date: "18 May 2026",
    isoDate: "2026-05-18",
    readTime: "4 min read",
    author: {
      name: "Maintenance Division",
      role: "Equipment Fleet Support",
    },
    image: stock.fabricationWelding,
    imageAlt: "Welders and maintenance crew at work",
    keyPointsTitle: "Maintenance Protocols",
    keyPoints: [
      "Deploy dedicated mobile service vans with certified diesel mechanics on high-intensity sites.",
      "Conduct pre-shift 10-minute walkaround inspections focusing on hydraulic leaks, track tension, and tire wear.",
      "Stock critical consumables (hydraulic hoses, O-rings, filters) directly in site laydown stores.",
    ],
    sections: [
      {
        heading: "1. The Cost of Unexpected Plant Stoppages",
        paragraphs: [
          "When an excavator digging an urgent pipeline trench or a generator powering critical night lighting breaks down, every idle minute multiplies contractor costs. Preventive maintenance schedules must run concurrently with operations.",
          "Skill Bridge backs all rented machinery with mobile workshop vans stationed in Jubail, ensuring rapid on-site diagnosis and repair.",
        ],
      },
      {
        heading: "2. Immediate Equipment Replacement Protocol",
        paragraphs: [
          "If a mechanical breakdown cannot be resolved within 4 hours, our rental agreement includes replacement dispatch from our central depot, keeping your project on track without penalty.",
        ],
      },
    ],
    conclusion: "Proactive servicing and rapid field support ensure uninterrupted productivity across demanding Saudi industrial fronts.",
  },
];

const arArticles: NewsArticle[] = [
  {
    slug: "planning-manpower-refinery-shutdown",
    tag: "دليل عمل",
    category: "guides",
    title: "تخطيط القوى العاملة لإيقافات وصيانة المصافي",
    lead: "أي المهن يجب حجزها أولاً، كم يستغرق الحشد للموقع، وما هي المستندات المحددة التي تطلبها بوابات المنشآت قبل اليوم الأول.",
    date: "١٤ أكتوبر ٢٠٢٦",
    isoDate: "2026-10-14",
    readTime: "٥ دقائق قراءة",
    author: {
      name: "م. طارق الغامدي",
      role: "منسق العمليات التشغيلية · الجبيل",
    },
    image: site.plantFoundations,
    imageAlt: "أساسات منشأة صناعية ومعدات عمل",
    keyPointsTitle: "قواعد التخطيط الأساسية",
    keyPoints: [
      "حجز المهن الحرجة (الرفاعين، لحامي 6G المعتمدين، وفنيي السقالات) قبل ٤ إلى ٦ أسابيع من موعد بدء الأعمال الميكانيكية.",
      "تقديم ملفات تصاريح البوابات قبل ١٠ أيام عمل على الأقل لتفادي الازدحام عند نقاط التفتيش.",
      "تخصيص نسبة احتياطية قدرها ١٠٪ لورديات العمل الليلية لتغطية الحزم الإضافية الطارئة.",
    ],
    sections: [
      {
        heading: "١. التسلسل الزمني لحشد المهن الحرجة",
        paragraphs: [
          "تتميز مشاريع إيقاف المصانع والصيانة الشاملة في الجبيل ورأس تنورة بجداول زمنية صارمة لا تحتمل أي تأخير. الخطأ الأكثر شيوعاً في التخطيط هو حشد جميع التخصصات في نفس اليوم.",
          "في الأسبوع الأول من الإيقاف، ينصب التركيز على العزل الميكانيكي وتركيب السقالات والوصول الآمن. لا ينبغي حشد فنيي الأنابيب والميكانيكا قبل تسليم منصات العمل الآمنة الحاملة للبطاقة الخضراء من قبل فنيي السقالات.",
        ],
        checklist: [
          "المرحلة الأولى (قبل الإيقاف): فنيو سقالات معتمدون (TÜV)، عمال إزالة العوازل، أطقم التصبين والرفع L1–L3.",
          "المرحلة الثانية (الأعمال الميكانيكية): فنيو أنابيب، لحامو 6G وفق ASME، فنيو عزم الربط، وفرق الاختبار المائي.",
          "المرحلة الثالثة (الإغلاق وبدء التشغيل): فنيو أجهزة دقيقة، فنيو معايرة الصمامات، وكوادر إغلاق الملاحظات.",
        ],
      },
      {
        heading: "٢. حزمة وثائق بوابات الدخول للمواقع",
        paragraphs: [
          "لا شيء أكثر كلفة من انتظار الحرفيين المعتمدين عند بوابة الموقع الصناعي بسبب نقص ملصق أو تأخر شهادة فحص طبي. تجهز سكيل بريدج ملفات الكوادر مسبقاً لتتوافق بدقة مع اشتراطات العميل.",
          "تأكد من أن كل ملف سيرة ذاتية يحتوي على نسخة إقامة سارية، فحص طبي معتمد لا يتجاوز ١٢ شهراً، وبطاقات المهن المعتمدة.",
        ],
      },
      {
        heading: "٣. إدارة تسليم الورديات والإنتاجية",
        paragraphs: [
          "يتطلب العمل بنظام ورديتين (١٢ ساعة لكل وردية) اجتماع تسليم رسمي مدته ٣٠ دقيقة بين مسؤولي الورديتين لتنسيق تصاريح العمل (PTW) وعدم هدر الوقت.",
        ],
      },
    ],
    conclusion: "التخطيط الدقيق وتسلسل المهن يحول الإيقافات المعقدة إلى إنجاز ميكانيكي آمن وفي الوقت المحدد.",
  },
  {
    slug: "crane-rental-checklist-industrial-sites",
    tag: "قائمة فحص",
    category: "checklists",
    title: "قائمة فحص تأجير الرافعات للمواقع الصناعية",
    lead: "مخططات الرفع الهندسية، ملصقات فحص الطرف الثالث، بطاقات كفاءة المشغلين وفحص قدرة تحمل التربة في قائمة واحدة.",
    date: "٢٨ سبتمبر ٢٠٢٦",
    isoDate: "2026-09-28",
    readTime: "٤ دقائق قراءة",
    author: {
      name: "فرحان مالك",
      role: "أخصائي معدات الرفع والآليات الثقيلة",
    },
    image: site.crawlerCraneSlab,
    imageAlt: "رافعة مجنزرة ثقيلة في موقع صب",
    keyPointsTitle: "أساسيات الفحص الإلزامي",
    keyPoints: [
      "التحقق من سريان فحص الطرف الثالث للرافعة وجميع أدوات التصبين (وايرات، شكالات، وعوارض رفع).",
      "فحص قدرة تحمل التربة وحساب مساحة وسائد التثبيت (Outrigger Pads) قبل دخول الرافعة.",
      "التأكد من حمل المشغل لرخصة قيادة عمومي سعودية سارية وبطاقة كفاءة صادرة من جهة فحص معتمدة.",
    ],
    sections: [
      {
        heading: "١. الوثائق المطلوبة قبل الحشد",
        paragraphs: [
          "قبل تحريك أي رافعة متحركة أو مجنزرة من ساحاتنا في الجبيل، يجهز فريقنا ملف فحص متكامل يطابق معايير بوابات المنشآت الحيوية. يجب التأكد من تطابق جدول أحمال الرافعة مع نصف قطر الرفع وسرعة الرياح المتوقعة.",
        ],
        checklist: [
          "شهادة وملصق فحص طرف ثالث ساري (معتمد لدى أرامكو أو سابك).",
          "سجل معايرة جهاز تحديد عزم الرفع (LMI) ومؤشر زاوية الذراع.",
          "رخصة قيادة سارية وبطاقة فحص كفاءة المشغل من طرف ثالث.",
          "شهادات اختبار أحمال معدات التصبين وسلاسل الرفع.",
        ],
      },
      {
        heading: "٢. تجهيز الأرضيات والفرشات الخشبية",
        paragraphs: [
          "أكثر من ٧٠٪ من حوادث الرفع في مواقع البناء تنجم عن سوء تقييم التربة. في تربة السبخة أو الرمال المدكوكة بالمنطقة الشرقية، يعد استخدام فرشات الصلب أو الخشب الصلب إلزامياً لتوزيع الأحمال النقطية بأمان.",
        ],
      },
    ],
    conclusion: "الفحص المسبق الصارم يضمن تنفيذ عمليات الرفع دون أي توقفات أو مخاطر مهنية.",
  },
  {
    slug: "saudization-and-contract-manpower",
    tag: "أنظمة",
    category: "regulations",
    title: "ماذا يعني التوطين (نطاقات) لعقود القوى العاملة؟",
    lead: "كيف تؤثر متطلبات نسب التوطين على تشكيلة فرق المقاولين من الباطن وما هي الأسئلة التي يجب على فرق المشتريات طرحها.",
    date: "١٥ أغسطس ٢٠٢٦",
    isoDate: "2026-08-15",
    readTime: "٦ دقائق قراءة",
    author: {
      name: "عبد العزيز الشهري",
      role: "مسؤول الامتثال والشؤون الحكومية",
    },
    image: site.toolboxTalkSunrise,
    imageAlt: "اجتماع السلامة الصباحي في الموقع",
    keyPointsTitle: "المحددات النظامية",
    keyPoints: [
      "التأكد من امتلاك المورد لحساب نشط في منصة قوى، وسجل حماية أجور سليم، ونطاق أخضر معتمد.",
      "تحديد متطلبات ونسب التوطين في مرحلة المناقصات للتوافق مع مستهدفات مشاريع المملكة الكبرى.",
      "طلب وثائق رسمية تثبت نظامية الإقامات وتصاريح العمل المؤقتة عبر منصة أجير.",
    ],
    sections: [
      {
        heading: "١. مستويات التوطين في عقود المقاولات الصناعية",
        paragraphs: [
          "تفرض رؤية السعودية ٢٠٣٠ وتوجيهات وزارة الموارد البشرية مستهدفات توطين واضحة في المشاريع الإنشائية والصناعية. عند التعاقد مع موردي القوى العاملة، يعد اختيار شريك ممتثل نظامياً أمراً حاسماً لحماية مشروعك من إشعارات إيقاف العمل.",
          "تلتزم سكيل بريدج بكافة الأنظمة العمالية، مع ضمان الوضع القانوني السليم لجميع الكوادر وتوفير التأمين الطبي المعتمد ورخص العمل النظامية.",
        ],
      },
      {
        heading: "٢. نظام أجير وتصاريح العمل المؤقتة",
        paragraphs: [
          "بموجب نظام العمل السعودي، تتطلب إعارة أو تشغيل العمالة بين المنشآت إصدار تصاريح رسمية عبر منصة أجير. تشغيل أي عمالة بدون تصاريح سارية يعرض المقاول والمنشأة لغرامات نظامية مشددة.",
        ],
        checklist: [
          "تصريح عمل ساري عبر منصة أجير مرتبط مباشرة بالمشروع.",
          "التسجيل في التأمينات الاجتماعية والالتزام بنظام حماية الأجور (WPS).",
          "تأمين صحي ساري ومعتمد لدى مجلس الضمان الصحي (CCHI).",
        ],
      },
    ],
    conclusion: "الامتثال ليس مجرد إجراءات ورقية، بل هو الركيزة الأساسية لأمان الموقع واستمرارية العمل بالمملكة.",
  },
  {
    slug: "heavy-haulage-and-lowbed-logistics",
    tag: "دليل عمل",
    category: "guides",
    title: "حشد ونقل الآليات الثقيلة في المنطقة الشرقية",
    lead: "مسح مسارات الطرق، تصاريح وزارة النقل، سيارات المرافقة الأمنية وتجهيز السطحات المنخفضة للتسليم السريع.",
    date: "٢٢ يوليو ٢٠٢٦",
    isoDate: "2026-07-22",
    readTime: "٤ دقائق قراءة",
    author: {
      name: "طارق المنصور",
      role: "مدير العمليات اللوجستية والنقل",
    },
    image: site.fleetLineupDesert,
    imageAlt: "أسطول شاحنات ومقطورات ثقيلة في منطقة تجهيز",
    keyPointsTitle: "قائمة فحص النقل والشحن",
    keyPoints: [
      "إجراء مسح هندسي لمسارات الطرق والجسور للتأكد من الارتفاعات المسموحة للحمولات الاستثنائية.",
      "استخراج تصاريح وزارة النقل والمرور للمقطورات متعددة المحاور والحمولات الكبرى.",
      "تنسيق سيارات المرافقة والالتزام بأوقات السير المصرح بها على الطرق السريعة.",
    ],
    sections: [
      {
        heading: "١. تخطيط مسارات الطرق السريعة والارتفاعات",
        paragraphs: [
          "يتطلب نقل الحفارات التي تزن ١٠٠ طن أو الرافعات المجنزرة ذات الأذرع الطويلة بين الدمام والجبيل ورأس الخير دراسة دقيقة لارتفاعات الجسور ومحطات وزن الشاحنات.",
          "يقوم فريق النقل في سكيل بريدج بمسح المسارات مسبقاً للتأكد من عدم وجود عوائق كهربائية أو قيود أوزان على الجسور.",
        ],
      },
      {
        heading: "٢. التتبع الإلكتروني عبر GPS والسلامة",
        paragraphs: [
          "جميع رؤوس الشاحنات والمقطورات مجهزة بأنظمة تتبع لحظية وأجهزة ضبط سرعة إلكترونية لضمان الالتزام بقواعد المرور وسلامة المنقولات.",
        ],
      },
    ],
    conclusion: "اللوجستيات المنضبطة تضمن وصول الآليات إلى جبهة العمل في اللحظة المحددة لبدء التنفيذ.",
  },
  {
    slug: "heat-stress-management-summer-working",
    tag: "سلامة مهنية",
    category: "safety",
    title: "إجراءات إدارة الإجهاد الحراري لفرق العمل صيفاً",
    lead: "تطبيق قرارات وزارة الموارد البشرية لحظر العمل تحت أشعة الشمس، محطات الترطيب الإلزامية ونظام تدوير فترات الراحة.",
    date: "١٠ يونيو ٢٠٢٦",
    isoDate: "2026-06-10",
    readTime: "٥ دقائق قراءة",
    author: {
      name: "إدارة الصحة والسلامة والبيئة",
      role: "السلامة المهنية الميدانية",
    },
    image: stock.ppeSafetyHelmet,
    imageAlt: "خوذة سلامة ومهمات وقاية شخصية",
    keyPointsTitle: "المتطلبات الوقائية",
    keyPoints: [
      "الالتزام الصارم بقرار حظر العمل تحت أشعة الشمس من ١٢ ظهراً حتى ٣ مساءً (من ١٥ يونيو إلى ١٥ سبتمبر).",
      "توفير مظلات استراحة مجهزة بمراوح رذاذ وأملاح تعويض السوائل المعتمدة.",
      "تدريب المشرفين الميدانيين على التعرف المبكر على أعراض الإجهاد وضربات الشمس.",
    ],
    sections: [
      {
        heading: "١. حظر العمل النظامي وقت الظهيرة",
        paragraphs: [
          "تتجاوز درجات الحرارة في المنطقة الشرقية حاجز ٤٨ درجة مئوية خلال أشهر الصيف. يتم تطبيق حظر العمل الصيفي بصرامة من قبل مفتشي الوزارة، وتفرض غرامات مشددة على المخالفين.",
          "تعيد سكيل بريدج جدولة الورديات لتبدأ في الصباح الباكر بالإضافة إلى ورديات مسائية لضمان استمرار إنجاز المشاريع مع الحفاظ على سلامة الكوادر.",
        ],
      },
      {
        heading: "٢. محطات الترطيب وتدوير فترات الراحة",
        paragraphs: [
          "الماء وحده لا يكفي دون تعويض الأملاح والمعادن المفقودة بالتعرق. ينشئ منسقونا محطات تبريد مظللة مزودة بمياه باردة وأملاح تعويضية ومراوح تبريد بالرذاذ.",
        ],
      },
    ],
    conclusion: "حماية صحة العمال في الظروف المناخية القاسية هي أولويتنا القصوى وجوهر ثقافة السلامة لدينا.",
  },
  {
    slug: "maintaining-heavy-equipment-uptime",
    tag: "قائمة فحص",
    category: "checklists",
    title: "منع تعطل الآليات الثقيلة أثناء ورديات الصيانة المستمرة",
    lead: "ورش الصيانة المتنقلة، فحص وتحليل الزيوت الدوري، قطع الغيار في الموقع وخطط الاستبدال الفوري للمعدات الحرجة.",
    date: "١٨ مايو ٢٠٢٦",
    isoDate: "2026-05-18",
    readTime: "٤ دقائق قراءة",
    author: {
      name: "قسم الصيانة والدعم الفني",
      role: "إدارة أسطول المعدات والآليات",
    },
    image: stock.fabricationWelding,
    imageAlt: "فنيو لحام وصيانة في ورشة عمل",
    keyPointsTitle: "بروتوكولات الصيانة الميدانية",
    keyPoints: [
      "توفير ورش صيانة متنقلة مع فنيي ديزل وميكانيكا معتمدين في المواقع الكبرى.",
      "إجراء فحص يومي لمدة ١٠ دقائق قبل بدء الوردية للكشف عن تسريبات الزيت وتآكل الإطارات أو الجنزير.",
      "تخزين المستهلكات وقطع الغيار الحرجة (خراطيم هيدروليك، فلاتر) مباشرة في مستودع الموقع.",
    ],
    sections: [
      {
        heading: "١. تكلفة التوقفات الميكانيكية المفاجئة",
        paragraphs: [
          "عندما تتعطل حفارة في مسار خط أنابيب عاجل أو مولد يغذي إنارة ليلية حيوية، فإن كل دقيقة توقف تضاعف تكاليف المقاول. يجب أن تسير برامج الصيانة الوقائية جنباً إلى جنب مع عمليات التشغيل.",
          "تدعم سكيل بريدج معداتها بورش صيانة متنقلة متمركزة في الجبيل لضمان التشخيص والإصلاح السريع في الموقع.",
        ],
      },
      {
        heading: "٢. بروتوكول الاستبدال الفوري للمعدات",
        paragraphs: [
          "في حال تعذر إصلاح العطل خلال ٤ ساعات، تنص عقود التأجير لدينا على توفير معدة بديلة من ساحاتنا لضمان استمرار المشروع دون أي تأخير.",
        ],
      },
    ],
    conclusion: "الصيانة الاستباقية والدعم الميداني الفوري يضمنان إنتاجية متواصلة في أصعب البيئات الصناعية.",
  },
];

const en: NewsContent = {
  meta: {
    title: "News & Insights | Skill Bridge Contracting Company",
    description: "Industry insights, workforce planning guides, crane rental checklists and HSE standards from our Al Jubail team.",
  },
  hero: {
    home: "Home",
    news: "News & Insights",
    eyebrow: "Field notes & industry updates",
    title: "News & Insights",
    lead: "Practical guides for planning crews, machinery, and plant shutdowns across Saudi Arabia's industrial corridors.",
    note: "Official updates and practical advice from our Al Jubail operations team.",
  },
  filters: [
    { id: "all", label: "All articles" },
    { id: "guides", label: "Guides" },
    { id: "checklists", label: "Checklists" },
    { id: "safety", label: "Safety & HSE" },
    { id: "regulations", label: "Regulations" },
  ],
  readArticle: "Read full article",
  backToNews: "Back to all articles",
  shareTitle: "Share article",
  relatedTitle: "Related Insights",
  articles: enArticles,
  cta: {
    eyebrow: "Need technical advice?",
    title: "Planning a project or shutdown in the Kingdom?",
    lead: "Talk directly with our technical coordinators in Al Jubail for crew sizing, machinery selection or availability.",
    btn: "Request a quote",
  },
};

const ar: NewsContent = {
  meta: {
    title: "الأخبار والمقالات | شركة سكيل بريدج للمقاولات",
    description: "رؤى صناعية، أدلة تخطيط القوى العاملة، قوائم فحص تأجير الرافعات ومعايير السلامة من فريقنا في الجبيل.",
  },
  hero: {
    home: "الرئيسية",
    news: "الأخبار والمقالات",
    eyebrow: "ملاحظات ميدانية وتحديثات صناعية",
    title: "الأخبار والمقالات",
    lead: "أدلة عملية لتخطيط وتنسيق الكوادر والمعدات وإيقافات المصانع في المناطق الصناعية بالمملكة.",
    note: "تحديثات رسمية ونصائح عملية من فريق العمليات في الجبيل.",
  },
  filters: [
    { id: "all", label: "جميع المقالات" },
    { id: "guides", label: "أدلة عمل" },
    { id: "checklists", label: "قوائم الفحص" },
    { id: "safety", label: "السلامة المهنية" },
    { id: "regulations", label: "الأنظمة والتشريعات" },
  ],
  readArticle: "قراءة المقال بالكامل",
  backToNews: "العودة إلى جميع المقالات",
  shareTitle: "مشاركة المقال",
  relatedTitle: "مقالات ذات صلة",
  articles: arArticles,
  cta: {
    eyebrow: "هل تحتاج مشورة فنية؟",
    title: "هل تخطط لمشروع أو إيقاف صيانة في المملكة؟",
    lead: "تحدث مباشرة مع منسقينا الفنيين في الجبيل لتقدير حجم الفرق أو اختيار المعدات المناسبة والتحقق من التوافر.",
    btn: "اطلب عرض سعر",
  },
};

export const newsContent: Record<Locale, NewsContent> = { en, ar };
