import type { IconName } from "@/components/ui/Icon";
import type { Locale } from "@/lib/i18n";

export type HseContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    home: string;
    hse: string;
    eyebrow: string;
    title: string;
    lead: string;
    facts: { val: string; label: string }[];
  };
  policy: {
    eyebrow: string;
    title: string;
    lead: string;
    checks: { title: string; text: string }[];
    download: string;
    downloadTbc: string;
    caption: string;
    figAlt: string;
  };
  practices: {
    eyebrow: string;
    title: string;
    lead: string;
    cards: {
      label: string;
      title: string;
      text: string;
      alt: string;
      photoKey: "toolboxTalkSunrise" | "rebarHarnessWalkway" | "neomTrenchBackhoe" | "tcfTadanoLiftRiggers" | "neomJcbBackhoes" | "neomSubstationDigging";
    }[];
  };
  performance: {
    items: string[];
  };
  quality: {
    eyebrow: string;
    title: string;
    lead: string;
    figAlt: string;
    caption: string;
    steps: { num: string; title: string; text: string }[];
  };
  certificates: {
    eyebrow: string;
    title: string;
    download: string;
    items: { icon: IconName; title: string; text: string }[];
  };
};

const en: HseContent = {
  meta: {
    title: "HSE & Quality | Skill Bridge Contracting Company",
    description: "Safety and quality standards at Skill Bridge Contracting Company. Safe operations, inspected plant and verified civil works across Saudi Arabia.",
  },
  hero: {
    home: "Home",
    hse: "HSE & Quality",
    eyebrow: "HSE & Quality",
    title: "Safe operations, quality work",
    lead: "Safety and quality are planned into every mobilisation, from inducted crews and lift plans to inspected machines and checked work.",
    facts: [
      { val: "0", label: "LTI target" },
      { val: "Daily", label: "toolbox talks" },
      { val: "TAoV", label: "certified scaffolders" },
    ],
  },
  policy: {
    eyebrow: "Our commitment",
    title: "Everyone goes home safe",
    lead: "Skill Bridge is committed to safe operations and quality services in the Kingdom of Saudi Arabia and globally. No job is so urgent that it cannot be done safely.",
    checks: [
      { title: "Safe systems of work", text: "Method statements, risk assessments and permits before work starts." },
      { title: "Fit-for-purpose equipment", text: "Daily pre-use inspections and valid third-party certificates." },
      { title: "Competent people only", text: "Trade-tested, inducted and certified for the task." },
      { title: "Stop work authority", text: "Anyone on site can stop a job that looks unsafe." },
    ],
    download: "Download HSE policy (PDF)",
    downloadTbc: "Policy document to supply",
    caption: "Toolbox talk before the shift · NEOM Green Hydrogen",
    figAlt: "Toolbox talk with the site crew at NEOM",
  },
  practices: {
    eyebrow: "Safety in practice",
    title: "How we keep sites safe",
    lead: "The controls our crews apply every day, shown on our own projects.",
    cards: [
      {
        label: "Daily",
        title: "Toolbox talks",
        text: "Every shift starts with a briefing on the day's hazards and controls.",
        alt: "Crew briefing at sunrise",
        photoKey: "toolboxTalkSunrise",
      },
      {
        label: "Work at height",
        title: "Harnesses and scaffold access",
        text: "Full-body harnesses, guard rails and inspected scaffold on every deck.",
        alt: "Crew wearing full-body harnesses on a scaffold",
        photoKey: "rebarHarnessWalkway",
      },
      {
        label: "Excavation",
        title: "Barriers and signage",
        text: "Fenced, signed trenches with safe access and spoil set back from the edge.",
        alt: "Fenced trench with deep excavation signage",
        photoKey: "neomTrenchBackhoe",
      },
      {
        label: "Lifting",
        title: "Planned lifts",
        text: "Lift plans, certified riggers, tag lines and exclusion zones.",
        alt: "Riggers guiding a crane lift with tag lines",
        photoKey: "tcfTadanoLiftRiggers",
      },
      {
        label: "Plant",
        title: "Inspected equipment",
        text: "Machines serviced between hires and checked before each shift.",
        alt: "Backhoe loaders parked in a row",
        photoKey: "neomJcbBackhoes",
      },
      {
        label: "Live services",
        title: "Hand digging near utilities",
        text: "Hand excavation near cables and substations, under permit.",
        alt: "Crew hand-digging near a substation",
        photoKey: "neomSubstationDigging",
      },
    ],
  },
  performance: {
    items: [
      "LTI-free man-hours",
      "Total recordable incident rate",
      "Toolbox talks delivered",
      "HSE training hours",
    ],
  },
  quality: {
    eyebrow: "Quality",
    title: "Checked before it is covered",
    lead: "QA/QC engineers and document controllers make sure the work matches the drawings and the paperwork matches the work.",
    figAlt: "Engineers inspecting epoxy-coated rebar before a pour",
    caption: "Rebar inspection before a pour · GSSIP SPARK",
    steps: [
      { num: "01", title: "Inspection and test plans", text: "Hold points agreed with the client before work starts." },
      { num: "02", title: "Material checks", text: "Materials verified on delivery against the specification." },
      { num: "03", title: "Joint inspections", text: "Rebar, formwork and trenches signed off before they are covered." },
      { num: "04", title: "Document control", text: "Records, certificates and as-builts handed over with the work." },
    ],
  },
  certificates: {
    eyebrow: "Certificates",
    title: "Registrations and certifications",
    download: "Download documents pack",
    items: [
      { icon: "shield", title: "ISO 45001", text: "Occupational health & safety" },
      { icon: "shield", title: "ISO 9001", text: "Quality management" },
      { icon: "shield", title: "ISO 14001", text: "Environmental management" },
      { icon: "person", title: "TAoV scaffolders", text: "Certified scaffolding crews" },
      { icon: "crane", title: "Lifting inspection", text: "Third-party certified cranes" },
      { icon: "doc", title: "Client approvals", text: "Aramco and contractor vendor status" },
    ],
  },
};

const ar: HseContent = {
  meta: {
    title: "السلامة والجودة | شركة سكيل بريدج للمقاولات",
    description: "معايير السلامة والصحة المهنية والجودة في شركة سكيل بريدج للمقاولات. عمليات آمنة ومعدات مفحوصة وأعمال مدنية معتمدة في المملكة العربية السعودية.",
  },
  hero: {
    home: "الرئيسية",
    hse: "السلامة والجودة",
    eyebrow: "السلامة والجودة",
    title: "عمليات آمنة وجودة معتمدة",
    lead: "السلامة والجودة جزء لا يتجزأ من كل عملية تشغيل، بدءاً من تأهيل الكوادر وخطط الرفع وصولاً إلى فحص المعدات ومطابقة الأعمال.",
    facts: [
      { val: "0", label: "هدف صفر حوادث مهدرة للوقت" },
      { val: "يومياً", label: "اجتماعات سلامة ميدانية" },
      { val: "TAoV", label: "سقالات معتمدة" },
    ],
  },
  policy: {
    eyebrow: "التزامنا",
    title: "سلامة الجميع أولاً ودائماً",
    lead: "تلتزم سكيل بريدج بالعمليات الآمنة وجودة الخدمات في المملكة العربية السعودية وعالمياً. لا يوجد عمل طارئ لدرجة إنجازه بطريقة غير آمنة.",
    checks: [
      { title: "إجراءات عمل آمنة", text: "بيانات أسلوب العمل، تقييم المخاطر وتصاريح العمل قبل البدء." },
      { title: "معدات مطابقة للمواصفات", text: "فحوصات يومية قبل الاستخدام وشهادات فحص معتمدة من طرف ثالث." },
      { title: "كوادر مؤهلة فقط", text: "اختبارات مهنية، برامج تهيئة واعتمادات لكل مهمة." },
      { title: "صلاحية إيقاف العمل", text: "يحق لأي شخص في الموقع إيقاف أي عمل يبدو غير آمن." },
    ],
    download: "تحميل سياسة السلامة (PDF)",
    downloadTbc: "بانتظار تزويد وثيقة السياسة",
    caption: "اجتماع السلامة الميداني قبل بدء الوردية · نيوم للهيدروجين الأخضر",
    figAlt: "اجتماع السلامة الميداني مع فريق الموقع في نيوم",
  },
  practices: {
    eyebrow: "السلامة في الميدان",
    title: "كيف نحافظ على أمان المواقع",
    lead: "إجراءات التحكم التي تطبقها فرقنا يومياً، موثقة من واقع مشاريعنا الفعلية.",
    cards: [
      {
        label: "يومياً",
        title: "اجتماعات السلامة اليومية",
        text: "تبدأ كل وردية بإحاطة شاملة حول مخاطر اليوم وإجراءات التحكم المعتمدة.",
        alt: "إحاطة الفريق عند شروق الشمس",
        photoKey: "toolboxTalkSunrise",
      },
      {
        label: "العمل على ارتفاعات",
        title: "أحزمة الأمان وسقالات آمنة",
        text: "أحزمة أمان كاملة، حواجز حماية وسقالات مفحوصة ومعتمدة في كل منصة.",
        alt: "طاقم العمل يرتدي أحزمة الأمان الكاملة على السقالة",
        photoKey: "rebarHarnessWalkway",
      },
      {
        label: "أعمال الحفريات",
        title: "حواجز ولوحات إرشادية",
        text: "خنادق مسيجة ومزودة بلوحات تحذيرية ومداخل آمنة مع إبعاد نواتج الحفر.",
        alt: "حفريات مسيجة مع لوحات تحذيرية للحفر العميق",
        photoKey: "neomTrenchBackhoe",
      },
      {
        label: "عمليات الرفع",
        title: "خطط رفع مدروسة",
        text: "خطط رفع معتمدة، فنيو توجيه وربط مؤهلون، حبال توجيه ومناطق عزل آمنة.",
        alt: "فنيو التوجيه يقودون عملية رفع بالرافعة باستخدام حبال التوجيه",
        photoKey: "tcfTadanoLiftRiggers",
      },
      {
        label: "المعدات والآليات",
        title: "معدات مفحوصة ومطابقة",
        text: "صيانة دورية بين فترات التأجير وفحص دقيق قبل كل وردية عمل.",
        alt: "حفارات خلفية متوقفة في صف منتظم",
        photoKey: "neomJcbBackhoes",
      },
      {
        label: "الخدمات الحيوية",
        title: "الحفر اليدوي قرب المرافق",
        text: "حفر يدوي دقيق بالقرب من الكابلات ومحطات الكهرباء وتحت تصاريح خاصة.",
        alt: "فريق العمل يقوم بالحفر اليدوي بالقرب من محطة تحويل",
        photoKey: "neomSubstationDigging",
      },
    ],
  },
  performance: {
    items: [
      "ساعات عمل بدون حوادث مهدرة للوقت",
      "معدل الحوادث الكلي المسجل",
      "اجتماعات السلامة الميدانية المنفذة",
      "ساعات التدريب على السلامة",
    ],
  },
  quality: {
    eyebrow: "الجودة",
    title: "فحص دقيق قبل التغطية والصب",
    lead: "مهندسو ضبط وتوكيد الجودة ومراقبو الوثائق يتأكدون من مطابقة العمل للمخططات ومطابقة الوثائق للواقع.",
    figAlt: "مهندسون يفحصون حديد التسليح المعالج بالإيبوكسي قبل الصب",
    caption: "فحص حديد التسليح قبل الصب · مشروع سبارك GSSIP",
    steps: [
      { num: "01", title: "خطط الفحص والاختبار", text: "نقاط توقف وفحص متفق عليها ومعتمدة مع العميل قبل بدء العمل." },
      { num: "02", title: "فحص المواد الموردة", text: "التحقق من مطابقة المواد عند وصولها للمواصفات الهندسية." },
      { num: "03", title: "الفحوصات المشتركة", text: "استلام حديد التسليح والقوالب والحفريات وتوقيع المحاضر قبل التغطية." },
      { num: "04", title: "مراقبة وتسليم الوثائق", text: "تسليم السجلات والشهادات والمخططات المنفذة فور اكتمال الأعمال." },
    ],
  },
  certificates: {
    eyebrow: "الشهادات والاعتمادات",
    title: "التراخيص والشهادات المهنية",
    download: "تحميل حزمة المستندات",
    items: [
      { icon: "shield", title: "ISO 45001", text: "إدارة الصحة والسلامة المهنية" },
      { icon: "shield", title: "ISO 9001", text: "نظام إدارة الجودة" },
      { icon: "shield", title: "ISO 14001", text: "نظام الإدارة البيئية" },
      { icon: "person", title: "سقالات معتمدة TAoV", text: "كوادر سقالات مؤهلة ومعتمدة" },
      { icon: "crane", title: "فحص معدات الرفع", text: "رافعات مفحوصة ومعتمدة من طرف ثالث" },
      { icon: "doc", title: "اعتمادات العملاء", text: "سجل تأهيل معتمد لدى أرامكو وكبرى الشركات" },
    ],
  },
};

export const hseContent: Record<Locale, HseContent> = { en, ar };
