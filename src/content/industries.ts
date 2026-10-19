import type { Locale, ProjectSlug } from "@/lib/i18n";

export type IndustrySector = {
  id: string;
  num: string;
  title: string;
  lead: string;
  figure: {
    val: string;
    label: string;
  };
  photoKey: "pipelineExcavatorsRow" | "neomTrenchPvRow" | "formworkRebarWide" | "concretePourPump" | "dareenFinishedPlaza";
  photoAlt: string;
  chips: string[];
  projects: {
    client: string;
    title: string;
    photoKey: "pipelineSanyLine" | "tcfTadanoLiftRiggers" | "neomCableTapeCrew" | "rebarCagesCrew" | "fleetLineupDesert" | "dareenPavingManhole";
    slug?: ProjectSlug;
    href?: string;
  }[];
};

export type IndustriesContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    home: string;
    industries: string;
    eyebrow: string;
    title: string;
    lead: string;
  };
  quoteBtn: string;
  sectors: IndustrySector[];
};

const en: IndustriesContent = {
  meta: {
    title: "Industries We Serve | Skill Bridge Contracting Company",
    description: "Industrial manpower, equipment rental and contracting for oil and gas, solar, petrochemical, construction and public sectors across Saudi Arabia.",
  },
  hero: {
    home: "Home",
    industries: "Industries",
    eyebrow: "Industries",
    title: "Working where the Kingdom builds",
    lead: "Oil and gas pipelines, solar fields, industrial plants, construction sites and public spaces: the same crews and fleet, adapted to each sector's rules.",
  },
  quoteBtn: "Request a quote",
  sectors: [
    {
      id: "oil-gas",
      num: "Sector 01",
      title: "Oil & gas",
      lead: "Pipeline right-of-way, trenching, bedding and berms, plus the temporary facilities and crews that big Aramco programmes need.",
      figure: { val: "160 km", label: "pipeline civil works, MGSE Phase-3" },
      photoKey: "pipelineExcavatorsRow",
      photoAlt: "Excavators breaking rock beside a pipe string",
      chips: ["Civil works", "Equipment rental", "Manpower", "Site facilities"],
      projects: [
        {
          client: "Kalpataru International",
          title: "MGSE Phase-3, Package 13",
          photoKey: "pipelineSanyLine",
          slug: "mgse-phase-3",
        },
        {
          client: "Nesma United Industries",
          title: "Aramco TCF",
          photoKey: "tcfTadanoLiftRiggers",
          slug: "aramco-tcf",
        },
      ],
    },
    {
      id: "renewables",
      num: "Sector 02",
      title: "Renewables & power",
      lead: "Cable trenching, duct banks, road crossings and route markers for solar PV plants, and support for power plants and substations.",
      figure: { val: "90 km", label: "cable trenching at NEOM" },
      photoKey: "neomTrenchPvRow",
      photoAlt: "Cable trench beside rows of solar panels",
      chips: ["Cable trenching", "Backhoe fleet", "Excavation crews"],
      projects: [
        {
          client: "Larsen & Toubro (L&T)",
          title: "NEOM Green Hydrogen, Solar PV",
          photoKey: "neomCableTapeCrew",
          slug: "neom-green-hydrogen",
        },
      ],
    },
    {
      id: "industrial",
      num: "Sector 03",
      title: "Petrochemical & industrial",
      lead: "Excavations, machine foundations, powerhouses and steel structure for industrial plants, plus maintenance and shutdown crews for refineries.",
      figure: { val: "SPARK", label: "King Salman Energy Park" },
      photoKey: "formworkRebarWide",
      photoAlt: "Rebar cages and formwork for machine foundations",
      chips: ["Civil works", "Plant maintenance", "Fabrication"],
      projects: [
        {
          client: "Sendan International",
          title: "GSSIP, SPARK",
          photoKey: "rebarCagesCrew",
          slug: "gssip-spark",
        },
      ],
    },
    {
      id: "construction",
      num: "Sector 04",
      title: "Construction",
      lead: "General contracting, construction management and design-build, with our own crews, earthmoving fleet and lifting equipment.",
      figure: { val: "Civil", label: "contracting and site crews" },
      photoKey: "concretePourPump",
      photoAlt: "Concrete pump boom over a foundation pour",
      chips: ["General contracting", "Earthmoving", "Lifting", "Crew transport"],
      projects: [
        {
          client: "Equipment fleet",
          title: "29 equipment types for rent",
          photoKey: "fleetLineupDesert",
          href: "/equipment",
        },
      ],
    },
    {
      id: "public",
      num: "Sector 05",
      title: "Public & municipal",
      lead: "Maintenance of parks, walkways and public spaces for the Royal Commission, delivered safely around the public.",
      figure: { val: "Jubail", label: "Royal Commission parks" },
      photoKey: "dareenFinishedPlaza",
      photoAlt: "Finished stone paving in a park plaza",
      chips: ["Paving", "Drainage", "Maintenance crews"],
      projects: [
        {
          client: "National Blue Company",
          title: "Dareen Park, Al Fanateer",
          photoKey: "dareenPavingManhole",
          slug: "dareen-park",
        },
      ],
    },
  ],
};

const ar: IndustriesContent = {
  meta: {
    title: "القطاعات الصناعية | شركة سكيل بريدج للمقاولات",
    description: "قوى عاملة، تأجير معدات ومقاولات لقطاعات النفط والغاز، الطاقة الشمسية، البتروكيماويات، الإنشاءات والمشاريع البلدية في السعودية.",
  },
  hero: {
    home: "الرئيسية",
    industries: "القطاعات",
    eyebrow: "القطاعات الصناعية",
    title: "نعمل حيث تبني المملكة مستقبلها",
    lead: "خطوط أنابيب النفط والغاز، حقول الطاقة الشمسية، المجمعات الصناعية، مواقع البناء والمرافق العامة: نفس الكفاءات والأسطول، بمرونة تامة مع متطلبات كل قطاع.",
  },
  quoteBtn: "طلب عرض سعر",
  sectors: [
    {
      id: "oil-gas",
      num: "القطاع 01",
      title: "النفط والغاز",
      lead: "تمهيد مسارات خطوط الأنابيب، الحفر، الفرشات والردم الواقي، بالإضافة إلى المرافق المؤقتة والكوادر التي تتطلبها مشاريع أرامكو الكبرى.",
      figure: { val: "160 كم", label: "أعمال مدنية لخطوط الأنابيب، MGSE المرحلة 3" },
      photoKey: "pipelineExcavatorsRow",
      photoAlt: "حفارات تكسر الصخور بجانب خط الأنابيب",
      chips: ["أعمال مدنية", "تأجير معدات", "قوى عاملة", "مرافق الموقع"],
      projects: [
        {
          client: "كالباتارو انترناشونال",
          title: "MGSE المرحلة الثالثة، الحزمة 13",
          photoKey: "pipelineSanyLine",
          slug: "mgse-phase-3",
        },
        {
          client: "نسما للصناعات المتحدة",
          title: "مرافق أرامكو TCF",
          photoKey: "tcfTadanoLiftRiggers",
          slug: "aramco-tcf",
        },
      ],
    },
    {
      id: "renewables",
      num: "القطاع 02",
      title: "الطاقة المتجددة والكهرباء",
      lead: "حفر خنادق الكابلات، مسارات المواسير الخرسانية، معابر الطرق وعلامات المسارات لمحطات الطاقة الكهروضوئية، ودعم محطات التوليد والتحويل.",
      figure: { val: "90 كم", label: "تمديد خنادق الكابلات في نيوم" },
      photoKey: "neomTrenchPvRow",
      photoAlt: "خندق كابلات بجانب صفوف الألواح الشمسية",
      chips: ["تمديد الكابلات", "أسطول الحفارات", "فرق الحفر الميدانية"],
      projects: [
        {
          client: "لارسن آند توبرو (L&T)",
          title: "نيوم للهيدروجين الأخضر، الطاقة الشمسية",
          photoKey: "neomCableTapeCrew",
          slug: "neom-green-hydrogen",
        },
      ],
    },
    {
      id: "industrial",
      num: "القطاع 03",
      title: "البتروكيماويات والقطاع الصناعي",
      lead: "الحفريات، قواعد الآلات والمعدات الثقيلة، محطات الطاقة والهياكل الفولاذية للمصانع، بالإضافة إلى فرق الصيانة والإغلاقات الدورية للمصافي.",
      figure: { val: "سبارك", label: "مدينة الملك سلمان للطاقة (SPARK)" },
      photoKey: "formworkRebarWide",
      photoAlt: "أقفاص حديد وقوالب لأساسات الآلات",
      chips: ["أعمال مدنية", "صيانة المنشآت", "التصنيع"],
      projects: [
        {
          client: "سندان الدولية",
          title: "GSSIP، سبارك",
          photoKey: "rebarCagesCrew",
          slug: "gssip-spark",
        },
      ],
    },
    {
      id: "construction",
      num: "القطاع 04",
      title: "الإنشاءات والمقاولات العامة",
      lead: "المقاولات العامة، إدارة التشييد، التصميم والتنفيذ، بفرقنا الميدانية وأسطولنا الخاص من معدات الحفر والرفع.",
      figure: { val: "مقاولات", label: "مقاولات مدنية وفرق ميدانية" },
      photoKey: "concretePourPump",
      photoAlt: "مضخة خرسانة تصب الأساسات",
      chips: ["مقاولات عامة", "حفر وتسوية", "معدات رفع", "نقل العمالة"],
      projects: [
        {
          client: "أسطول المعدات",
          title: "29 نوعاً من المعدات للتأجير",
          photoKey: "fleetLineupDesert",
          href: "/equipment",
        },
      ],
    },
    {
      id: "public",
      num: "القطاع 05",
      title: "المشاريع البلدية والمرافق العامة",
      lead: "صيانة الحدائق والمماشي والمساحات العامة للهيئة الملكية، بأعلى معايير السلامة العامة في محيط الجمهور.",
      figure: { val: "الجبيل", label: "حدائق الهيئة الملكية" },
      photoKey: "dareenFinishedPlaza",
      photoAlt: "تبليط حجري مكتمل في ساحة الحديقة",
      chips: ["التبليط", "تصريف المياه", "فرق الصيانة"],
      projects: [
        {
          client: "شركة بلو الوطنية",
          title: "حديقة دارين، الفناتير",
          photoKey: "dareenPavingManhole",
          slug: "dareen-park",
        },
      ],
    },
  ],
};

export const industriesContent: Record<Locale, IndustriesContent> = { en, ar };
