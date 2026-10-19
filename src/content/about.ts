import type { StaticImageData } from "next/image";
import type { Locale, ProjectSlug, RouteKey } from "@/lib/i18n";
import { leaders } from "@/lib/media";

export type AboutContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    home: string;
    about: string;
    eyebrow: string;
    title: string;
    lead: string;
    arabicBrand: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    quick: {
      office: { label: string; value: string };
      services: { label: string; value: string };
      sectors: { label: string; value: string };
    };
    collageTag: {
      count: string;
      label: string;
    };
    altA: string;
    altB: string;
  };
  mv: {
    mission: { label: string; text: string };
    vision: { label: string; text: string };
    values: { num: string; title: string; text: string }[];
  };
  leadership: {
    eyebrow: string;
    title: string;
    lead: string;
    members: {
      role: string;
      name: string;
      desc: string;
      bio: string;
      phone: string | null;
      linkedinUrl: string;
      linkedinAria: string;
      image: StaticImageData;
      alt: string;
    }[];
  };
  numbers: {
    val: string;
    text: string;
  }[];
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: {
      num: string;
      title: string;
      desc: string;
      routeKey: RouteKey;
    }[];
  };
  clients: {
    eyebrow: string;
    title: string;
    lead: string;
    link: string;
    items: {
      name: string;
      project: string;
      slug: ProjectSlug;
    }[];
  };
  management: {
    label: string;
    quote: string;
    name: string;
    role: string;
  };
  companyFile: {
    eyebrow: string;
    title: string;
    items: {
      label: string;
      val: string | null;
      isArabic?: boolean;
      isData?: boolean;
    }[];
    download: string;
    hseButton: string;
  };
  vision2030: {
    label: string;
    text: string;
  };
};

const en: AboutContent = {
  meta: {
    title: "About Us | Skill Bridge Contracting Company",
    description: "Skill Bridge Contracting Company supplies manpower, equipment rental and contracting services from Al Jubail across Saudi Arabia.",
  },
  hero: {
    home: "Home",
    about: "About",
    eyebrow: "About Skill Bridge",
    title: "People, machines and site work from Al Jubail",
    lead: "Skill Bridge Contracting Company supplies manpower, equipment and contracting services to industry across the Kingdom of Saudi Arabia.",
    arabicBrand: "شركة سكيل بريدج للمقاولات",
  },
  intro: {
    eyebrow: "Who we are",
    title: "An integrated partner for industrial sites",
    lead: "Skill Bridge is an efficient provider of human resources and equipment for industry and general contracting in the Kingdom of Saudi Arabia.",
    body: "Our team of goal-oriented professionals delivers techno-skilled manpower services and diversified support to the oil, gas and petrochemical industries, including information technology support services. We bring quality services to our clients, with value-added inputs and suggestions on every job.",
    quick: {
      office: { label: "Head office", value: "Al Jubail, KSA" },
      services: { label: "Service lines", value: "7" },
      sectors: { label: "Sectors", value: "Oil & gas · Industrial · Renewables · Public" },
    },
    collageTag: {
      count: "39",
      label: "trades and disciplines on call",
    },
    altA: "Toolbox talk with a Skill Bridge crew at sunrise",
    altB: "Site crew and engineers in hi-vis during a briefing",
  },
  mv: {
    mission: {
      label: "Our mission",
      text: "To provide integrated services that meet our customers' expectations. We strive to achieve operational excellence, delivering quality services and safe operations in the Kingdom of Saudi Arabia and globally.",
    },
    vision: {
      label: "Our vision",
      text: "To grow into one of the most reputable companies in manpower, equipment and contracting in Saudi Arabia.",
    },
    values: [
      { num: "01", title: "Safety first", text: "Safe operations are planned into every mobilisation." },
      { num: "02", title: "Quality", text: "Qualified people, inspected machines, work done right." },
      { num: "03", title: "Reliability", text: "Crews and plant on site when the schedule needs them." },
      { num: "04", title: "Partnership", text: "Value-added input and one point of contact for clients." },
    ],
  },
  leadership: {
    eyebrow: "Leadership",
    title: "The people behind Skill Bridge",
    lead: "Skill Bridge is led from Al Jubail by its founder and chief executive, who stay close to every client and project.",
    members: [
      {
        role: "Chief Executive Officer",
        name: "Engr. Zafeer Ullah Khan",
        desc: "Leads operations, client relationships and project delivery across the Kingdom, from manpower mobilisation to equipment and civil works.",
        bio: "[Short bio: qualifications, years in the industry and key projects.]",
        phone: "+966 53 905 1475",
        linkedinUrl: "#",
        linkedinAria: "Engr. Zafeer Ullah Khan on LinkedIn",
        image: leaders.zafeerUllahKhanCeo,
        alt: "Engr. Zafeer Ullah Khan, Chief Executive Officer",
      },
      {
        role: "Founder",
        name: "Waqar Khan",
        desc: "Founder of Skill Bridge Contracting Company, the Al Jubail partner for manpower, equipment and contracting.",
        bio: "[Short bio: background and the story behind Skill Bridge.]",
        phone: null,
        linkedinUrl: "#",
        linkedinAria: "Waqar Khan on LinkedIn",
        image: leaders.waqarKhanFounder,
        alt: "Waqar Khan, Founder",
      },
    ],
  },
  numbers: [
    { val: "250 km", text: "linear civil works across MGSE and NEOM" },
    { val: "10,000 m²", text: "temporary facilities for Aramco TCF" },
    { val: "39", text: "manpower roles in four disciplines" },
    { val: "29", text: "equipment types for rent" },
  ],
  services: {
    eyebrow: "What we do",
    title: "Seven service lines",
    lead: "From one office in Al Jubail, everything a project site needs at the same time.",
    items: [
      { num: "01", title: "Manpower Supply", desc: "Engineers, office staff, skilled trades and site crews", routeKey: "manpower" },
      { num: "02", title: "Equipment Rental", desc: "Earthmoving, lifting, power, haulage and crew transport", routeKey: "equipment" },
      { num: "03", title: "Civil & General Contracting", desc: "General contracting, construction management, design-build", routeKey: "contracting" },
      { num: "04", title: "Plant Maintenance & Shutdowns", desc: "Refineries, petrochemical plants and power plants", routeKey: "maintenance" },
      { num: "05", title: "Fabrication & Workshop", desc: "Steel fabrication, machining, heat exchanger repair", routeKey: "fabrication" },
      { num: "06", title: "Logistics & Transport", desc: "Crew buses, low-beds, flatbeds and prime movers", routeKey: "logistics" },
      { num: "07", title: "Trading & Supply", desc: "Construction, safety, housekeeping and office materials", routeKey: "trading" },
    ],
  },
  clients: {
    eyebrow: "Who we work for",
    title: "Trusted by the Kingdom's leading contractors",
    lead: "Contractors we have supplied on recent projects for Saudi Aramco, NEOM and the Royal Commission.",
    link: "See the projects",
    items: [
      { name: "Larsen & Toubro", project: "NEOM Green Hydrogen", slug: "neom-green-hydrogen" },
      { name: "Kalpataru International", project: "MGSE Phase-3", slug: "mgse-phase-3" },
      { name: "Nesma United Industries", project: "Aramco TCF", slug: "aramco-tcf" },
      { name: "Sendan International", project: "GSSIP, SPARK", slug: "gssip-spark" },
      { name: "National Blue Company", project: "Dareen Park", slug: "dareen-park" },
    ],
  },
  management: {
    label: "Message from the CEO",
    quote: "[Message from Engr. Zafeer Ullah Khan: two or three sentences on how Skill Bridge works with clients and its commitment to safe, reliable delivery.]",
    name: "Engr. Zafeer Ullah Khan",
    role: "Chief Executive Officer, Skill Bridge Contracting",
  },
  companyFile: {
    eyebrow: "Company file",
    title: "For your vendor registration",
    items: [
      { label: "Legal name", val: "Skill Bridge Contracting Company" },
      { label: "Arabic name", val: "شركة سكيل بريدج للمقاولات", isArabic: true },
      { label: "Head office", val: "Al Jubail, Eastern Province, KSA" },
      { label: "Phone", val: "+966 53 905 1475 · +966 59 880 7429", isData: true },
      { label: "Commercial Registration", val: null },
      { label: "VAT number", val: null },
      { label: "GOSI · Nitaqat", val: null },
    ],
    download: "Download company profile",
    hseButton: "HSE & Quality",
  },
  vision2030: {
    label: "Vision 2030",
    text: "Skill Bridge supports Saudi Vision 2030 by developing local skills, supporting Saudization and delivering on the Kingdom's energy and infrastructure projects.",
  },
};

const ar: AboutContent = {
  meta: {
    title: "من نحن | شركة سكيل بريدج للمقاولات",
    description: "توفر شركة سكيل بريدج للمقاولات القوى العاملة وتأجير المعدات وخدمات المقاولات من الجبيل في جميع أنحاء المملكة العربية السعودية.",
  },
  hero: {
    home: "الرئيسية",
    about: "من نحن",
    eyebrow: "عن سكيل بريدج",
    title: "كوادر ومعدات وأعمال موقع من الجبيل",
    lead: "توفر شركة سكيل بريدج للمقاولات القوى العاملة وتأجير المعدات وخدمات المقاولات للقطاع الصناعي في جميع أنحاء المملكة العربية السعودية.",
    arabicBrand: "شركة سكيل بريدج للمقاولات",
  },
  intro: {
    eyebrow: "من نحن",
    title: "شريك متكامل للمواقع الصناعية",
    lead: "سكيل بريدج مزود فعال للموارد البشرية والمعدات للصناعة والمقاولات العامة في المملكة العربية السعودية.",
    body: "يقدم فريقنا من المتخصصين خدمات قوى عاملة ماهرة ودعماً متنوعاً لصناعات النفط والغاز والبتروكيماويات، بما في ذلك خدمات دعم تقنية المعلومات. نقدم خدمات عالية الجودة لعملائنا، مع تقديم حلول ومقترحات ذات قيمة مضافة في كل مشروع.",
    quick: {
      office: { label: "المقر الرئيسي", value: "الجبيل، المملكة العربية السعودية" },
      services: { label: "خطوط الخدمة", value: "7" },
      sectors: { label: "القطاعات", value: "النفط والغاز · الصناعة · الطاقة المتجددة · المرافق العامة" },
    },
    collageTag: {
      count: "39",
      label: "حرفة وتخصصاً جاهزون للعمل",
    },
    altA: "اجتماع السلامة الميداني مع فريق سكيل بريدج عند شروق الشمس",
    altB: "فريق الموقع والمهندسون بسترات السلامة أثناء الإحاطة الميدانية",
  },
  mv: {
    mission: {
      label: "رسالتنا",
      text: "تقديم خدمات متكاملة تلبي تطلعات عملائنا. نسعى جاهدين لتحقيق التميز التشغيلي، وتقديم خدمات عالية الجودة وعمليات آمنة في المملكة العربية السعودية وعالمياً.",
    },
    vision: {
      label: "رؤيتنا",
      text: "أن نصبح إحدى أكثر الشركات موثوقية وسمعة في مجالات القوى العاملة والمعدات والمقاولات في المملكة العربية السعودية.",
    },
    values: [
      { num: "01", title: "السلامة أولاً", text: "العمليات الآمنة مخطط لها في كل مرحلة تشغيل وحشد للموقع." },
      { num: "02", title: "الجودة", text: "كوادر مؤهلة، معدات مفحوصة، وعمل متقن من المرة الأولى." },
      { num: "03", title: "الموثوقية", text: "تواجد الفرق والمعدات في الموقع وفق الجدول الزمني المحدد." },
      { num: "04", title: "الشراكة", text: "قيمة مضافة ونقطة اتصال واحدة وواضحة للعملاء." },
    ],
  },
  leadership: {
    eyebrow: "القيادة",
    title: "فريق القيادة في سكيل بريدج",
    lead: "تدار سكيل بريدج من الجبيل بقيادة مؤسسها ورئيسها التنفيذي، مع المتابعة المباشرة لكل عميل ومشروع.",
    members: [
      {
        role: "الرئيس التنفيذي",
        name: "م. زفير الله خان",
        desc: "يقود العمليات وعلاقات العملاء وتسليم المشاريع في جميع أنحاء المملكة، من حشد القوى العاملة إلى المعدات والأعمال المدنية.",
        bio: "[نبذة مختصرة: المؤهلات والخبرات في القطاع وأبرز المشاريع.]",
        phone: "+966 53 905 1475",
        linkedinUrl: "#",
        linkedinAria: "م. زفير الله خان على لينكد إن",
        image: leaders.zafeerUllahKhanCeo,
        alt: "م. زفير الله خان، الرئيس التنفيذي",
      },
      {
        role: "المؤسس",
        name: "وقار خان",
        desc: "مؤسس شركة سكيل بريدج للمقاولات، الشريك الموثوق في الجبيل للقوى العاملة والمعدات والمقاولات.",
        bio: "[نبذة مختصرة: الخلفية المهنية وقصة تأسيس سكيل بريدج.]",
        phone: null,
        linkedinUrl: "#",
        linkedinAria: "وقار خان على لينكد إن",
        image: leaders.waqarKhanFounder,
        alt: "وقار خان، المؤسس",
      },
    ],
  },
  numbers: [
    { val: "250 كم", text: "أعمال مدنية طولية عبر مشروعي MGSE ونيوم" },
    { val: "10,000 م²", text: "مرافق مؤقتة لمشروع أرامكو TCF" },
    { val: "39", text: "تخصصاً للقوى العاملة في أربعة قطاعات" },
    { val: "29", text: "نوعاً من المعدات للتأجير" },
  ],
  services: {
    eyebrow: "ما نقدمه",
    title: "سبعة خطوط خدمة",
    lead: "من مكتب واحد في الجبيل، نوفر كل ما يحتاجه موقع المشروع في وقت واحد.",
    items: [
      { num: "01", title: "توريد القوى العاملة", desc: "مهندسون، موظفون إداريون، فنيون مهرة وفرق ميدانية", routeKey: "manpower" },
      { num: "02", title: "تأجير المعدات", desc: "حفر وردم، رافعات، مولدات طاقة، شاحنات نقل وحافلات عمال", routeKey: "equipment" },
      { num: "03", title: "المقاولات العامة والمدنية", desc: "المقاولات العامة، إدارة التشييد، التصميم والتنفيذ", routeKey: "contracting" },
      { num: "04", title: "صيانة المنشآت والإغلاقات", desc: "المصافي، مصانع البتروكيماويات ومحطات الطاقة", routeKey: "maintenance" },
      { num: "05", title: "التصنيع والورش الصناعية", desc: "تصنيع الهياكل الفولاذية، التشغيل الآلي، إصلاح المبادلات الحرارية", routeKey: "fabrication" },
      { num: "06", title: "الخدمات اللوجستية والنقل", desc: "حافلات العمال، مقطورات منخفضة، شاحنات مسطحة ورؤوس تريلات", routeKey: "logistics" },
      { num: "07", title: "التجارة والتوريد", desc: "مواد البناء ومعدات السلامة ومواد الإعاشة والمكاتب", routeKey: "trading" },
    ],
  },
  clients: {
    eyebrow: "عملاؤنا",
    title: "موثوقون لدى كبرى شركات المقاولات في المملكة",
    lead: "شركات مقاولات قمنا بالتوريد لها في مشاريع حديثة لأرامكو السعودية ونيوم والهيئة الملكية.",
    link: "عرض المشاريع",
    items: [
      { name: "لارسن آند توبرو (L&T)", project: "نيوم للهيدروجين الأخضر", slug: "neom-green-hydrogen" },
      { name: "كالباتارو انترناشونال", project: "MGSE المرحلة الثالثة", slug: "mgse-phase-3" },
      { name: "نسما للصناعات المتحدة", project: "مرافق أرامكو TCF", slug: "aramco-tcf" },
      { name: "سندان الدولية", project: "GSSIP، سبارك", slug: "gssip-spark" },
      { name: "شركة بلو الوطنية", project: "حديقة دارين", slug: "dareen-park" },
    ],
  },
  management: {
    label: "رسالة الرئيس التنفيذي",
    quote: "[رسالة المهندس زفير الله خان: كلمتان أو ثلاث حول التزام سكيل بريدج بالعمل مع العملاء وتقديم خدمات آمنة وموثوقة.]",
    name: "م. زفير الله خان",
    role: "الرئيس التنفيذي، شركة سكيل بريدج للمقاولات",
  },
  companyFile: {
    eyebrow: "ملف الشركة",
    title: "لتأهيل واعتماد الموردين",
    items: [
      { label: "الاسم التجاري", val: "Skill Bridge Contracting Company" },
      { label: "الاسم بالعربية", val: "شركة سكيل بريدج للمقاولات", isArabic: true },
      { label: "المقر الرئيسي", val: "الجبيل، المنطقة الشرقية، المملكة العربية السعودية" },
      { label: "الهاتف", val: "+966 53 905 1475 · +966 59 880 7429", isData: true },
      { label: "السجل التجاري", val: null },
      { label: "الرقم الضريبي", val: null },
      { label: "التأمينات ونطاقات", val: null },
    ],
    download: "تحميل الملف التعريفي للشركة",
    hseButton: "السلامة والجودة",
  },
  vision2030: {
    label: "رؤية 2030",
    text: "تدعم سكيل بريدج رؤية السعودية 2030 من خلال تطوير الكفاءات المحلية ودعم التوطين والمساهمة في مشاريع الطاقة والبنية التحتية في المملكة.",
  },
};

export const aboutContent: Record<Locale, AboutContent> = { en, ar };
