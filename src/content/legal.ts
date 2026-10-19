import type { Locale } from "@/lib/i18n";
import { contact } from "@/content/site";

export type LegalDocContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    home: string;
    title: string;
    eyebrow: string;
    lastUpdated: string;
  };
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  contactBlock: {
    title: string;
    text: string;
    phone: string;
    address: string;
  };
};

export type LegalContent = {
  privacy: LegalDocContent;
  terms: LegalDocContent;
};

const en: LegalContent = {
  privacy: {
    meta: {
      title: "Privacy Policy | Skill Bridge Contracting Company",
      description: "How Skill Bridge Contracting Company collects, protects, and handles personal and commercial data.",
    },
    hero: {
      home: "Home",
      title: "Privacy Policy",
      eyebrow: "Legal & Compliance",
      lastUpdated: "Effective date: October 2026",
    },
    sections: [
      {
        title: "1. Overview & Commitment",
        paragraphs: [
          `Skill Bridge Contracting Company ("Skill Bridge", "we", "us", or "our") is committed to protecting the privacy, confidentiality, and security of information provided by our clients, partners, and website visitors.`,
          "This Privacy Policy outlines how we collect, process, and safeguard information submitted through our website and direct communication channels in compliance with the Personal Data Protection Law (PDPL) of the Kingdom of Saudi Arabia.",
        ],
      },
      {
        title: "2. Information We Collect",
        paragraphs: [
          "We collect information necessary to prepare quotations, evaluate project requirements, and deliver industrial services:",
        ],
        bullets: [
          "Contact details: full name, work email address, telephone numbers, and job title.",
          "Company and project details: company name, commercial registration number, site location, and project name.",
          "Technical requirements: requested manpower roles, equipment specifications, scopes of work, and project durations.",
          "Website interaction details: technical logs and device parameters necessary for website performance and security.",
        ],
      },
      {
        title: "3. How We Use Your Information",
        paragraphs: [
          "Collected data is processed strictly for legitimate business operations, including:",
        ],
        bullets: [
          "Preparing and delivering priced quotations, CV shortlists, and machinery availability schedules.",
          "Coordinating site security gate passes, safety inductions, and mobilization paperwork.",
          "Managing active contracts, service delivery, and operational communications.",
          "Complying with statutory, regulatory, and tax obligations under Saudi Arabian law.",
        ],
      },
      {
        title: "4. Information Sharing & Third Parties",
        paragraphs: [
          "Skill Bridge does not sell, trade, or rent client or visitor information to third parties.",
          "Information is only shared with third parties under strict necessity:",
        ],
        bullets: [
          "Project site security and client HSE departments (such as Saudi Aramco, SABIC, or Royal Commission) for gate entry verification.",
          "Official government entities when required by Saudi laws and regulations.",
          "Trusted technical service providers operating under strict confidentiality obligations.",
        ],
      },
      {
        title: "5. Data Security & Storage",
        paragraphs: [
          "We implement technical and organizational security measures to protect commercial data against unauthorized access, loss, or alteration. All electronic communications and project records are secured within controlled environments.",
        ],
      },
      {
        title: "6. Your Rights & Contact Information",
        paragraphs: [
          "You have the right to request access to, correction of, or deletion of your personal contact data retained in our commercial records, subject to regulatory retention mandates.",
        ],
      },
    ],
    contactBlock: {
      title: "Privacy Inquiries",
      text: "If you have questions regarding this Privacy Policy or data processing, please contact our Al Jubail office:",
      phone: contact.phone.display,
      address: "Al Jubail, Eastern Province, Kingdom of Saudi Arabia",
    },
  },
  terms: {
    meta: {
      title: "Terms of Service | Skill Bridge Contracting Company",
      description: "Terms and conditions governing the use of the Skill Bridge Contracting Company website and service quotations.",
    },
    hero: {
      home: "Home",
      title: "Terms of Service",
      eyebrow: "Legal & Compliance",
      lastUpdated: "Effective date: October 2026",
    },
    sections: [
      {
        title: "1. Acceptance of Terms",
        paragraphs: [
          `By accessing or using the website of Skill Bridge Contracting Company ("Skill Bridge"), you agree to be bound by these Terms of Service and all applicable laws and regulations of the Kingdom of Saudi Arabia.`,
          "If you do not agree with any part of these terms, you should discontinue use of this website immediately.",
        ],
      },
      {
        title: "2. Website Content & Information",
        paragraphs: [
          "The information, machinery specifications, service listings, and project summaries presented on this website are provided for general informational purposes.",
          "While we strive to keep all information accurate and up to date, technical parameters, fleet availability, and role shortlists are subject to confirmation at the time of official quotation.",
        ],
      },
      {
        title: "3. Quotations & Service Contracts",
        paragraphs: [
          "Requests submitted through our online quotation forms do not constitute a binding contract. A binding agreement is only formed upon mutual execution of a formal commercial contract, purchase order, or service agreement.",
          "All rates, mob/demob charges, and payment terms will be explicitly specified in the formal contract.",
        ],
      },
      {
        title: "4. Mobilization & Site Compliance",
        paragraphs: [
          "Mobilization of manpower crews, heavy plant, and transport trailers is subject to:",
        ],
        bullets: [
          "Issuance of valid site gate passes, safety induction completion, and client security clearances.",
          "Verification of ground bearing conditions and access routes for heavy machinery.",
          "Adherence to Ministry of Human Resources, Aramco, SABIC, or Royal Commission HSE rules.",
        ],
      },
      {
        title: "5. Intellectual Property",
        paragraphs: [
          "All logos, branding, photography, layout designs, and written content on this website are the intellectual property of Skill Bridge Contracting Company or its respective licensors and are protected under Saudi and international copyright laws.",
        ],
      },
      {
        title: "6. Governing Law & Jurisdiction",
        paragraphs: [
          "These Terms of Service and any contractual disputes arising from the use of this website shall be governed by and construed in accordance with the laws and regulations of the Kingdom of Saudi Arabia. Any dispute shall be subject to the exclusive jurisdiction of the competent courts of the Eastern Province, Saudi Arabia.",
        ],
      },
    ],
    contactBlock: {
      title: "Legal Inquiries",
      text: "For questions concerning these Terms of Service or commercial agreements:",
      phone: contact.phone.display,
      address: "Al Jubail, Eastern Province, Kingdom of Saudi Arabia",
    },
  },
};

const ar: LegalContent = {
  privacy: {
    meta: {
      title: "سياسة الخصوصية | شركة سكيل بريدج للمقاولات",
      description: "كيف تجمع شركة سكيل بريدج للمقاولات البيانات وتحميها وتتعامل مع معلومات العملاء والشركاء.",
    },
    hero: {
      home: "الرئيسية",
      title: "سياسة الخصوصية",
      eyebrow: "الامتثال والأنظمة",
      lastUpdated: "تاريخ السريان: أكتوبر 2026",
    },
    sections: [
      {
        title: "1. مقدمة والتزام عام",
        paragraphs: [
          `تلتزم شركة سكيل بريدج للمقاولات ("سكيل بريدج" أو "نحن") بحماية خصوصية وأمن وسرية المعلومات التي يزودنا بها عملاؤنا وشركاؤنا وزوار موقعنا الإلكتروني.`,
          "توضح سياسة الخصوصية هذه كيفية جمع ومعالجة وحماية البيانات وفقاً لنظام حماية البيانات الشخصية (PDPL) المعمول به في المملكة العربية السعودية.",
        ],
      },
      {
        title: "2. البيانات التي نجمعها",
        paragraphs: [
          "نجمع البيانات الضرورية لإعداد عروض الأسعار، تقييم متطلبات المشاريع وتنفيذ الخدمات الصناعية:",
        ],
        bullets: [
          "بيانات التواصل: الاسم الكامل، البريد الإلكتروني للعمل، أرقام الهواتف والمسمى الوظيفي.",
          "بيانات الشركة والمشروع: اسم المنشأة، رقم السجل التجاري، موقع المشروع واسم الحزمة.",
          "المتطلبات الفنية: المهن والكوادر المطلوبة، مواصفات المعدات، نطاق العمل والمدد الزمنية المتوقعة.",
          "بيانات استخدام الموقع: سجلات الاتصال التقنية والمعايير الضرورية لأمان وأداء الموقع الإلكتروني.",
        ],
      },
      {
        title: "3. أغراض استخدام البيانات",
        paragraphs: [
          "تتم معالجة البيانات المجمعة لأغراض تجارية وتشغيلية مشروعة حصراً، وتشمل:",
        ],
        bullets: [
          "إعداد وتقديم عروض الأسعار المالية، السير الذاتية للكوادر وجداول توافر المعدات.",
          "تنسيق إصدار تصاريح الدخول للمواقع، متطلبات السلامة وإجراءات الحشد الميداني.",
          "إدارة العقود التشغيلية ومتابعة تقديم الخدمات والتواصل الميداني.",
          "الامتثال للالتزامات النظامية والضريبية وفق الأنظمة السعودية السارية.",
        ],
      },
      {
        title: "4. مشاركة البيانات مع أطراف ثالثة",
        paragraphs: [
          "لا تقوم سكيل بريدج ببيع أو تأجير أو المتاجرة ببيانات العملاء أو الشركاء لأي طرف ثالث.",
          "تتم مشاركة البيانات فقط عند الضرورة التشغيلية والنظامية القصوى، وتشمل:",
        ],
        bullets: [
          "إدارات الأمن الصناعي والسلامة لدى العملاء (مثل أرامكو السعودية، سابك، أو الهيئة الملكية) لإصدار تصاريح دخول البوابات.",
          "الجهات الحكومية والرسمية عند طلبها نظاماً بموجب القوانين السعودية.",
          "مزودي الخدمات التقنية الموثوقين الخاضعين لالتزامات سرية تعاقدية صارمة.",
        ],
      },
      {
        title: "5. أمن البيانات وحمايتها",
        paragraphs: [
          "نطبق معايير أمنية وفنية وتنظيمية متقدمة لحماية البيانات التجارية والشخصية من الوصول غير المصرح به أو الفقدان أو التعديل.",
        ],
      },
      {
        title: "6. حقوقك والتواصل معنا",
        paragraphs: [
          "يحق لك طلب الاطلاع على بياناتك الشخصية المسجلة لدينا أو طلب تصحيحها أو تحديثها بما يتوافق مع الأنظمة واللوائح المعمول بها.",
        ],
      },
    ],
    contactBlock: {
      title: "استفسارات الخصوصية",
      text: "إذا كانت لديك أي استفسارات حول سياسة الخصوصية أو معالجة البيانات، يرجى التواصل مع مكتبنا في الجبيل:",
      phone: contact.phone.display,
      address: "الجبيل، المنطقة الشرقية، المملكة العربية السعودية",
    },
  },
  terms: {
    meta: {
      title: "شروط الخدمة | شركة سكيل بريدج للمقاولات",
      description: "الشروط والأحكام المنظمة لاستخدام موقع شركة سكيل بريدج للمقاولات وعروض الأسعار.",
    },
    hero: {
      home: "الرئيسية",
      title: "شروط الخدمة",
      eyebrow: "الامتثال والأنظمة",
      lastUpdated: "تاريخ السريان: أكتوبر 2026",
    },
    sections: [
      {
        title: "1. الموافقة على الشروط",
        paragraphs: [
          `باستخدامك لموقع شركة سكيل بريدج للمقاولات ("سكيل بريدج")، فإنك تقر وتوافق على الالتزام بشروط الخدمة هذه وجميع الأنظمة واللوائح المعمول بها في المملكة العربية السعودية.`,
          "إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام هذا الموقع.",
        ],
      },
      {
        title: "2. محتوى الموقع ومعلومات الخدمات",
        paragraphs: [
          "جميع المعلومات ومواصفات الآليات وقوائم الخدمات المعروضة على هذا الموقع مقدمة لأغراض المعرفة العامة.",
          "على الرغم من حرصنا على دقة وتحديث كافة البيانات، فإن المواصفات الفنية وتوافر المعدات والكوادر تخضع للتأكيد النهائي عند إصدار عرض السعر الرسمي.",
        ],
      },
      {
        title: "3. عروض الأسعار والاتفاقيات",
        paragraphs: [
          "لا يُعد تقديم طلب عبر نماذج طلب الأسعار الإلكترونية عقداً ملزماً. لا ينشأ الالتزام التعاقدي إلا بعد توقيع عقد تجاري رسمي أو إصدار أمر شراء معتمد (PO).",
          "تحدد أسعار الخدمات وتكاليف الحشد وشروط الدفع صراحة في العقد الرسمي الموقع بين الطرفين.",
        ],
      },
      {
        title: "4. متطلبات الحشد ودخول المواقع",
        paragraphs: [
          "يخضع حشد الكوادر والآليات ومعدات النقل للمتطلبات التالية:",
        ],
        bullets: [
          "إصدار تصاريح الدخول المعتمدة واجتياز دورات السلامة والحصول على الموافقات الأمنية لموقع العميل.",
          "جاهزية الموقع ومسارات الدخول الآمنة وتحمل التربة للآليات الثقيلة.",
          "الالتزام باشتراطات السلامة والصحة المهنية لوزارة الموارد البشرية وأرامكو وسابك والهيئة الملكية.",
        ],
      },
      {
        title: "5. الملكية الفكرية",
        paragraphs: [
          "جميع الشعارات والعلامات التجارية والتصاميم والصور والنصوص المنشورة على هذا الموقع هي ملك حصري لشركة سكيل بريدج للمقاولات ومحمية بموجب أنظمة حماية حقوق الملكية الفكرية في المملكة العربية السعودية.",
        ],
      },
      {
        title: "6. النظام الحاكم والاختصاص القضائي",
        paragraphs: [
          "تخضع شروط الخدمة هذه وتفسر وفقاً للأنظمة واللوائح السارية في المملكة العربية السعودية. تختص المحاكم المختصة في المنطقة الشرقية بالمملكة بنظر أي نزاع قد ينشأ عنها.",
        ],
      },
    ],
    contactBlock: {
      title: "الاستفسارات النظامية",
      text: "لأي استفسارات تتعلق بالشروط والأحكام أو الاتفاقيات التجارية:",
      phone: contact.phone.display,
      address: "الجبيل، المنطقة الشرقية، المملكة العربية السعودية",
    },
  },
};

export const legalContent: Record<Locale, LegalContent> = { en, ar };
