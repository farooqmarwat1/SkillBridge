import type { StaticImageData } from "next/image";
import type { Locale, ProjectSlug } from "@/lib/i18n";
import { projects as pj, site } from "@/lib/media";

export type ProjectCard = {
  slug: ProjectSlug;
  sector: "oil-gas" | "renewables" | "industrial" | "public";
  sectorLabel: string;
  image: StaticImageData;
  alt: string;
  tag: string;
  client: string;
  title: string;
  fig: string;
  figLabel: string;
};

export type ProjectsContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    home: string;
    projects: string;
    eyebrow: string;
    title: string;
    lead: string;
    facts: { val: string; label: string }[];
  };
  filters: {
    id: "all" | "oil-gas" | "renewables" | "industrial" | "public";
    label: string;
  }[];
  viewProject: string;
  projectLabel: string;
  projectsLabel: string;
  items: ProjectCard[];
};

const en: ProjectsContent = {
  meta: {
    title: "Projects | Skill Bridge Contracting Company",
    description: "Track record of civil works, solar cable laying, temporary facilities and park maintenance for leading contractors in Saudi Arabia.",
  },
  hero: {
    home: "Home",
    projects: "Projects",
    eyebrow: "Track record",
    title: "Projects",
    lead: "Pipelines, solar fields, plant foundations, site facilities and public parks: projects where Skill Bridge crews and equipment worked for the Kingdom's leading contractors.",
    facts: [
      { val: "5", label: "projects" },
      { val: "250 km", label: "linear works" },
      { val: "10,000 m²", label: "facilities" },
    ],
  },
  filters: [
    { id: "all", label: "All" },
    { id: "oil-gas", label: "Oil & gas" },
    { id: "renewables", label: "Renewables" },
    { id: "industrial", label: "Industrial" },
    { id: "public", label: "Public infrastructure" },
  ],
  viewProject: "View project",
  projectLabel: "project",
  projectsLabel: "projects",
  items: [
    {
      slug: "neom-green-hydrogen",
      sector: "renewables",
      sectorLabel: "Renewables",
      image: pj.neomCableTapeCrew,
      alt: "Crew laying cable warning tape beside solar panels",
      tag: "Renewables · Solar PV",
      client: "Larsen & Toubro (L&T)",
      title: "NEOM Green Hydrogen, Solar PV",
      fig: "90 km",
      figLabel: "cable trenching, road crossings and route markers",
    },
    {
      slug: "mgse-phase-3",
      sector: "oil-gas",
      sectorLabel: "Oil & gas",
      image: site.pipelineExcavatorsRow,
      alt: "Excavators breaking rock beside a pipe string",
      tag: "Oil & gas · Pipeline",
      client: "Kalpataru International",
      title: "MGSE Phase-3, Package 13",
      fig: "160 km",
      figLabel: "ROW, bedding, trenching and berm construction",
    },
    {
      slug: "aramco-tcf",
      sector: "oil-gas",
      sectorLabel: "Oil & gas",
      image: pj.tcfTadanoLiftRiggers,
      alt: "Mobile crane lifting a site building",
      tag: "Oil & gas · Facilities",
      client: "Nesma United Industries",
      title: "Aramco TCF",
      fig: "10,000 m²",
      figLabel: "temporary construction facilities",
    },
    {
      slug: "gssip-spark",
      sector: "industrial",
      sectorLabel: "Industrial",
      image: site.formworkRebarWide,
      alt: "Rebar cages and formwork for machine foundations",
      tag: "Industrial · Civil",
      client: "Sendan International",
      title: "GSSIP, SPARK",
      fig: "Civil",
      figLabel: "excavations, machine foundations, powerhouse, steel structure",
    },
    {
      slug: "dareen-park",
      sector: "public",
      sectorLabel: "Public infrastructure",
      image: pj.dareenPavingManhole,
      alt: "Stone paving laid around a manhole frame in the park",
      tag: "Public · Maintenance",
      client: "National Blue Company",
      title: "Dareen Park, Al Fanateer",
      fig: "Park",
      figLabel: "paving and drainage maintenance for the Royal Commission Jubail",
    },
  ],
};

const ar: ProjectsContent = {
  meta: {
    title: "المشاريع | شركة سكيل بريدج للمقاولات",
    description: "سجل إنجازات الأعمال المدنية وتمديد كابلات الطاقة الشمسية والمرافق المؤقتة وصيانة الحدائق لكبرى شركات المقاولات في السعودية.",
  },
  hero: {
    home: "الرئيسية",
    projects: "المشاريع",
    eyebrow: "سجل الإنجازات",
    title: "المشاريع",
    lead: "خطوط الأنابيب، حقول الطاقة الشمسية، أساسات المصانع، مرافق المواقع والحدائق العامة: مشاريع عملت فيها كوادر ومعدات سكيل بريدج لصالح كبرى شركات المقاولات في المملكة.",
    facts: [
      { val: "5", label: "مشاريع" },
      { val: "250 كم", label: "أعمال طولية" },
      { val: "10,000 م²", label: "مرافق مؤقتة" },
    ],
  },
  filters: [
    { id: "all", label: "الكل" },
    { id: "oil-gas", label: "النفط والغاز" },
    { id: "renewables", label: "الطاقة المتجددة" },
    { id: "industrial", label: "الصناعي" },
    { id: "public", label: "المرافق العامة" },
  ],
  viewProject: "عرض المشروع",
  projectLabel: "مشروع",
  projectsLabel: "مشاريع",
  items: [
    {
      slug: "neom-green-hydrogen",
      sector: "renewables",
      sectorLabel: "الطاقة المتجددة",
      image: pj.neomCableTapeCrew,
      alt: "فريق يمد شريط تحذير الكابلات بجانب الألواح الشمسية",
      tag: "الطاقة المتجددة · الطاقة الشمسية",
      client: "لارسن آند توبرو (L&T)",
      title: "نيوم للهيدروجين الأخضر، الطاقة الشمسية",
      fig: "90 كم",
      figLabel: "حفر خنادق الكابلات ومعابر الطرق وعلامات المسار",
    },
    {
      slug: "mgse-phase-3",
      sector: "oil-gas",
      sectorLabel: "النفط والغاز",
      image: site.pipelineExcavatorsRow,
      alt: "حفارات تكسر الصخور بجانب خط أنابيب",
      tag: "النفط والغاز · خطوط الأنابيب",
      client: "كالباتارو انترناشونال",
      title: "MGSE المرحلة الثالثة، الحزمة 13",
      fig: "160 كم",
      figLabel: "تمهيد المسار، الفرشة، الحفر وبناء السواتر",
    },
    {
      slug: "aramco-tcf",
      sector: "oil-gas",
      sectorLabel: "النفط والغاز",
      image: pj.tcfTadanoLiftRiggers,
      alt: "رافعة متحركة ترفع مبنى موقع",
      tag: "النفط والغاز · المرافق",
      client: "نسما للصناعات المتحدة",
      title: "مرافق أرامكو TCF",
      fig: "10,000 م²",
      figLabel: "مرافق إنشاءات مؤقتة",
    },
    {
      slug: "gssip-spark",
      sector: "industrial",
      sectorLabel: "الصناعي",
      image: site.formworkRebarWide,
      alt: "أقفاص حديد وقوالب لأساسات الآلات",
      tag: "صناعي · أعمال مدنية",
      client: "سندان الدولية",
      title: "GSSIP، سبارك",
      fig: "مدني",
      figLabel: "حفريات، أساسات آلات، محطة طاقة، هياكل فولاذية",
    },
    {
      slug: "dareen-park",
      sector: "public",
      sectorLabel: "المرافق العامة",
      image: pj.dareenPavingManhole,
      alt: "تبليط حجري حول إطار غرفة تفتيش في الحديقة",
      tag: "عام · صيانة",
      client: "شركة بلو الوطنية",
      title: "حديقة دارين، الفناتير",
      fig: "حديقة",
      figLabel: "أعمال صيانة التبليط وتصريف المياه للهيئة الملكية بالجبيل",
    },
  ],
};

export const projectsContent: Record<Locale, ProjectsContent> = { en, ar };
