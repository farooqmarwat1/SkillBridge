import type { Locale } from "@/lib/i18n";

export type CareerDiscipline = {
  name: string;
  roles: string[];
};

export type CareersContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    home: string;
    careers: string;
    eyebrow: string;
    title: string;
    lead: string;
    applyBtn: string;
    rolesBtn: string;
  };
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    items: {
      label: string;
      title: string;
      text: string;
      alt: string;
      photoKey: "neomDuctBankCrew" | "rebarHarnessWalkway" | "rebarInspectionTeam" | "teamFleetDesert";
    }[];
  };
  roles: {
    eyebrow: string;
    title: string;
    lead: string;
    disciplines: CareerDiscipline[];
  };
  hiring: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: {
      num: string;
      title: string;
      text: string;
    }[];
    warning: {
      bold: string;
      text: string;
    };
  };
  form: {
    side: {
      eyebrow: string;
      title: string;
      lead: string;
      waLabel: string;
      waNumber: string;
      officeLabel: string;
      officeVal: string;
    };
    step1: {
      legend: string;
      name: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      email: { label: string; opt: string; placeholder: string };
      location: { label: string; options: string[] };
    };
    step2: {
      legend: string;
      roleLabel: string;
      exp: { label: string; options: string[] };
      certsLabel: string;
      certsOpt: string;
      certs: string[];
      cv: {
        uploadTitle: string;
        uploadSub: string;
      };
    };
    consent: string;
    submit: string;
    success: {
      title: string;
      lead: string;
      reset: string;
    };
  };
};

const en: CareersContent = {
  meta: {
    title: "Careers at Skill Bridge | Job Openings in Saudi Arabia",
    description: "Join Skill Bridge Contracting Company. We hire engineers, office staff, skilled trades and site crews for NEOM, Aramco and SPARK projects.",
  },
  hero: {
    home: "Home",
    careers: "Careers",
    eyebrow: "Careers",
    title: "Build the Kingdom's biggest projects with us",
    lead: "Engineers, office staff, skilled trades and site crews: Skill Bridge hires for work on NEOM, Saudi Aramco and SPARK projects across Saudi Arabia.",
    applyBtn: "Apply now",
    rolesBtn: "Roles we hire",
  },
  why: {
    eyebrow: "Why Skill Bridge",
    title: "Work that goes on your CV",
    lead: "Join crews working for leading contractors on the projects that are reshaping Saudi Arabia.",
    items: [
      {
        label: "Major projects",
        title: "NEOM, Aramco, SPARK",
        text: "Real experience on giga-projects for L&T, Nesma, Kalpataru and Sendan.",
        alt: "Crew placing a duct bank in a trench at NEOM",
        photoKey: "neomDuctBankCrew",
      },
      {
        label: "Safety first",
        title: "Inducted and protected",
        text: "Induction, PPE and daily toolbox talks before anyone starts work.",
        alt: "Crew in full-body harnesses on a scaffold walkway",
        photoKey: "rebarHarnessWalkway",
      },
      {
        label: "Grow your skills",
        title: "Trade tests and certification",
        text: "Trade testing and support for certifications such as TAoV cards.",
        alt: "Engineers inspecting rebar",
        photoKey: "rebarInspectionTeam",
      },
      {
        label: "Long-term work",
        title: "Project after project",
        text: "Good crews move with us from one project to the next.",
        alt: "Skill Bridge team in front of the truck fleet",
        photoKey: "teamFleetDesert",
      },
    ],
  },
  roles: {
    eyebrow: "Roles we hire",
    title: "39 roles in four disciplines",
    lead: "We hire for these roles throughout the year. Pick yours in the application form below.",
    disciplines: [
      {
        name: "Engineering",
        roles: [
          "Mechanical Engineer",
          "Civil Engineer",
          "Construction Engineer",
          "Safety Engineer",
          "Electrical Engineer",
          "Material Engineer",
          "Computer Engineer",
          "QA/QC Engineer",
          "Piping Engineer",
          "Planner",
          "HVAC Engineer",
          "Instrumentation Engineer",
        ],
      },
      {
        name: "Office & admin",
        roles: [
          "Executive Secretary",
          "Data Entry",
          "Document Controller",
          "Office Boy",
          "Admin Assistant",
          "Computer Operator",
          "AutoCAD Draftsman",
          "Time Keeper",
          "Janitor",
          "Telephone Operator",
          "Office Driver",
        ],
      },
      {
        name: "Skilled trades",
        roles: [
          "Millwright Fitter",
          "Instrument Fitter",
          "Pipe Fitter",
          "Carpenter",
          "3G Welder",
          "Crane Operator",
          "Rigger L1–L3",
          "Mason",
          "Steel Erector",
          "Plumber",
          "Light Driver",
          "Forklift Operator",
        ],
      },
      {
        name: "Site & HSE",
        roles: [
          "Heavy Driver",
          "Scaffolder (TAoV)",
          "Manhole Watch",
          "Assistant Safety Officer",
        ],
      },
    ],
  },
  hiring: {
    eyebrow: "How hiring works",
    title: "From application to site",
    lead: "Four steps. We contact you on WhatsApp or by phone at each one.",
    steps: [
      { num: "1", title: "Apply", text: "Send the form below with your CV and certificates." },
      { num: "2", title: "Test and interview", text: "Trade test or technical interview for your role." },
      { num: "3", title: "Documents", text: "Medical, Iqama and certificates checked and filed." },
      { num: "4", title: "Induction", text: "Safety induction and PPE, then transport to site." },
    ],
    warning: {
      bold: "We never ask candidates for money to apply.",
      text: "If anyone asks for a fee in Skill Bridge's name, report it to us.",
    },
  },
  form: {
    side: {
      eyebrow: "Apply",
      title: "Send your application",
      lead: "Takes about three minutes. Prefer WhatsApp? Send your CV to the number below.",
      waLabel: "WhatsApp your CV",
      waNumber: "+966 59 880 7429",
      officeLabel: "HR office",
      officeVal: "Al Jubail, Eastern Province",
    },
    step1: {
      legend: "About you",
      name: { label: "Full name", placeholder: "As on your passport" },
      phone: { label: "Mobile / WhatsApp", placeholder: "05x xxx xxxx" },
      email: { label: "Email", opt: "(optional)", placeholder: "name@email.com" },
      location: {
        label: "Where are you now?",
        options: [
          "In Saudi Arabia, transferable Iqama",
          "In Saudi Arabia, other status",
          "Saudi national",
          "Outside Saudi Arabia",
        ],
      },
    },
    step2: {
      legend: "Your trade",
      roleLabel: "Role",
      exp: {
        label: "Years of experience",
        options: ["Less than 2", "2 to 5", "5 to 10", "More than 10"],
      },
      certsLabel: "Certificates you hold",
      certsOpt: "(optional)",
      certs: [
        "TAoV scaffolding",
        "Rigger card",
        "Crane operator licence",
        "Saudi driving licence",
        "3G / 6G welding",
        "NEBOSH / IOSH",
      ],
      cv: {
        uploadTitle: "Upload your CV",
        uploadSub: "PDF, Word or a photo, up to 10 MB",
      },
    },
    consent: "I agree that Skill Bridge may keep my details for future roles.",
    submit: "Send application",
    success: {
      title: "Application received",
      lead: "Our HR team reviews applications every week and contacts shortlisted candidates on WhatsApp or by phone.",
      reset: "Send another application",
    },
  },
};

const ar: CareersContent = {
  meta: {
    title: "الوظائف والتوظيف | شركة سكيل بريدج للمقاولات",
    description: "انضم إلى فريق سكيل بريدج. نستقطب المهندسين والكوادر الإدارية والفنيين والمهن الماهرة لمشاريع نيوم، أرامكو وسبارك في السعودية.",
  },
  hero: {
    home: "الرئيسية",
    careers: "الوظائف",
    eyebrow: "الوظائف والتوظيف",
    title: "شارك في بناء كبرى مشاريع المملكة معنا",
    lead: "مهندسون، موظفون إداريون، مهن وفنيون مهرة وفرق ميدانية: توظف سكيل بريدج للعمل في مشاريع نيوم، أرامكو السعودية وسبارك في جميع أنحاء المملكة.",
    applyBtn: "قدم الآن",
    rolesBtn: "الوظائف المتاحة",
  },
  why: {
    eyebrow: "لماذا سكيل بريدج",
    title: "خبرات عملية تصنع فارقاً في سيرتك المهنية",
    lead: "انضم إلى فرق تعمل لصالح كبرى شركات المقاولات في المشاريع التي ترسم ملامح مستقبل السعودية.",
    items: [
      {
        label: "مشاريع عملاقة",
        title: "نيوم، أرامكو، سبارك",
        text: "خبرة حقيقية في كبرى المشاريع لصالح L&T، نسما، كالباتارو وسندان.",
        alt: "فريق العمل يضع مسار الكابلات في خندق بنيوم",
        photoKey: "neomDuctBankCrew",
      },
      {
        label: "السلامة أولاً",
        title: "بيئة عمل آمنة ومحمية",
        text: "برامج تهيئة، مهمات وقاية شخصية واجتماعات سلامة يومية قبل بدء العمل.",
        alt: "طاقم العمل يرتدي أحزمة الأمان الكاملة على ممر السقالة",
        photoKey: "rebarHarnessWalkway",
      },
      {
        label: "تطوير المهارات",
        title: "اختبارات مهنية وشهادات معتمدة",
        text: "اختبارات كفاءة ودعم للحصول على اعتمادات وبطاقات TAoV وغيرها.",
        alt: "مهندسون يفحصون حديد التسليح",
        photoKey: "rebarInspectionTeam",
      },
      {
        label: "استقرار مهني",
        title: "مشاريع متتابعة ومستمرة",
        text: "الكوادر المتميزة تنتقل معنا من مشروع إلى آخر باستمرارية وثبات.",
        alt: "فريق سكيل بريدج أمام أسطول الشاحنات",
        photoKey: "teamFleetDesert",
      },
    ],
  },
  roles: {
    eyebrow: "الوظائف المتاحة",
    title: "39 مهنة في أربعة تخصصات رئيسية",
    lead: "نستقطب الكفاءات لهذه الوظائف على مدار العام. اختر تخصصك في نموذج التقديم أدناه.",
    disciplines: [
      {
        name: "الهندسة",
        roles: [
          "مهندس ميكانيكي",
          "مهندس مدني",
          "مهندس إنشاءات",
          "مهندس سلامة",
          "مهندس كهربائي",
          "مهندس مواد",
          "مهندس حاسب آلي",
          "مهندس ضبط وضمان الجودة",
          "مهندس أنابيب",
          "مخطط مشاريع",
          "مهندس تكييف وتبريد",
          "مهندس أجهزة دقيقة",
        ],
      },
      {
        name: "المكتب والإدارة",
        roles: [
          "سكرتير تنفيذي",
          "مدخل بيانات",
          "مراقب وثائق",
          "عامل مكتب",
          "مساعد إداري",
          "مشغل حاسب آلي",
          "راسم أوتوكاد",
          "مراقب دوام",
          "عامل نظافة",
          "موظف هاتف",
          "سائق مكتب",
        ],
      },
      {
        name: "المهن والحرف الماهرة",
        roles: [
          "فني تركيب ميكانيكي",
          "فني أجهزة دقيقة",
          "فني أنابيب",
          "نجار",
          "لحام 3G",
          "مشغل رافعة",
          "فني ريجر (المستوى 1–3)",
          "بناء",
          "مركب هياكل فولاذية",
          "سباك",
          "سائق خفيف",
          "مشغل رافعة شوكية",
        ],
      },
      {
        name: "الموقع والسلامة",
        roles: [
          "سائق ثقيل",
          "فني سقالات (TAoV)",
          "مراقب حفر وغرف تفتيش",
          "مساعد ضابط سلامة",
        ],
      },
    ],
  },
  hiring: {
    eyebrow: "مراحل التوظيف",
    title: "من التقديم حتى الانضمام للموقع",
    lead: "أربع خطوات واضحة. نتواصل معك عبر واتساب أو الهاتف في كل مرحلة.",
    steps: [
      { num: "1", title: "التقديم", text: "أرسل النموذج أدناه مع سيرتك الذاتية وشهاداتك المهنية." },
      { num: "2", title: "المقابلة والاختبار", text: "اختبار مهني عملي أو مقابلة فنية لتحديد مستواك." },
      { num: "3", title: "المستندات", text: "فحص وتوثيق الفحص الطبي، الإقامة والشهادات النظامية." },
      { num: "4", title: "التهيئة والانتقال", text: "التدريب التعريفي بالسلامة واستلام مهمات الوقاية ثم الانتقال للموقع." },
    ],
    warning: {
      bold: "نحن لا نطلب أبداً أي مبالغ مالية مقابل التقديم.",
      text: "إذا طلب منك أي شخص رسوماً باسم سكيل بريدج، يرجى إبلاغنا فوراً.",
    },
  },
  form: {
    side: {
      eyebrow: "قدم الآن",
      title: "أرسل طلب انضمامك",
      lead: "يستغرق التقديم نحو 3 دقائق. هل تفضل واتساب؟ أرسل سيرتك الذاتية للرقم أدناه.",
      waLabel: "أرسل سيرتك عبر واتساب",
      waNumber: "+966 59 880 7429",
      officeLabel: "مكتب التوظيف",
      officeVal: "الجبيل، المنطقة الشرقية",
    },
    step1: {
      legend: "بياناتك الشخصية",
      name: { label: "الاسم الكامل", placeholder: "كما هو مدون في جواز السفر" },
      phone: { label: "الجوال / واتساب", placeholder: "05x xxx xxxx" },
      email: { label: "البريد الإلكتروني", opt: "(اختياري)", placeholder: "name@email.com" },
      location: {
        label: "مكان إقامتك الحالي",
        options: [
          "داخل السعودية، إقامة قابلة للتحويل",
          "داخل السعودية، وضع آخر",
          "مواطن سعودي",
          "خارج المملكة العربية السعودية",
        ],
      },
    },
    step2: {
      legend: "مهنتك وخبراتك",
      roleLabel: "المسمى الوظيفي المطلوب",
      exp: {
        label: "سنوات الخبرة",
        options: ["أقل من سنتين", "من 2 إلى 5 سنوات", "من 5 إلى 10 سنوات", "أكثر من 10 سنوات"],
      },
      certsLabel: "الشهادات والتراخيص التي تحملها",
      certsOpt: "(اختياري)",
      certs: [
        "سقالات TAoV",
        "بطاقة ريجر",
        "رخصة تشغيل رافعة",
        "رخصة قيادة سعودية",
        "شهادة لحام 3G / 6G",
        "شهادات نيبوش / أيوش",
      ],
      cv: {
        uploadTitle: "ارفع سيرتك الذاتية",
        uploadSub: "ملف PDF أو Word أو صورة واضحة، بحد أقصى 10 ميجابايت",
      },
    },
    consent: "أوافق على احتفاظ سكيل بريدج ببياناتي للتواصل بخصوص الشواغر الوظيفية.",
    submit: "إرسال طلب التوظيف",
    success: {
      title: "تم استلام طلب التقديم",
      lead: "يراجع فريق التوظيف الطلبات أسبوعياً وسيتواصل مع المرشحين المؤهلين عبر واتساب أو الهاتف.",
      reset: "إرسال طلب تقديم آخر",
    },
  },
};

export const careersContent: Record<Locale, CareersContent> = { en, ar };
