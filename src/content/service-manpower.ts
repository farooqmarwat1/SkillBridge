import type { StaticImageData } from "next/image";
import type { RouteKey } from "@/lib/i18n";
import { homeContent } from "@/content/home";
import { site, projects } from "@/lib/media";

export type ServiceContent = {
  meta: { title: string; description: string };
  hero: { home: string; services: string; index: string; title: string; lead: string; facts: { value: string; label: string }[]; choose: string; chooseAnchor: string; profile: string; image: StaticImageData };
  nav: { label: string; id: string }[];
  overview: { eyebrow: string; title: string; lead: string; includes: { title: string; text: string; tbc?: boolean }[]; image: StaticImageData; imageAlt: string; caption: string };
  request: { title: string; selected?: string; one?: string; many?: string; none?: string; site: string; start: string; continue: string; call: string; note?: string };
  directory?: { eyebrow: string; title: string; lead: string; searchLabel: string; searchPlaceholder: string; disciplines: { label: string; roles: string[] }[]; all: string; add: string; added: string; emptyBefore: string; emptyAfter: string; yourRequest: string; cta: string; preselected: string[]; scopePrefix: string };
  models: { eyebrow: string; title: string; lead: string; length: string; best: string; items: { code: string; icon: "clock" | "wrench"; title: string; text: string; length: string; best: string }[] };
  process: { eyebrow: string; title: string; lead: string; steps: { title: string; text: string }[] };
  documents: { eyebrow: string; title: string; lead: string; items: string[] };
  industries: { eyebrow: string; title: string; lead: string; items: { title: string; image: StaticImageData; alt: string }[] };
  related: { eyebrow: string; view: string; items: { label: string; title: string; image: StaticImageData; alt: string; route: RouteKey }[] };
  faq: { eyebrow: string; title: string; lead: string; items: { q: string; a: string }[] };
};

export type ManpowerContent = ServiceContent & {
  directory: NonNullable<ServiceContent["directory"]>;
  request: ServiceContent["request"] & {
    selected: string;
    one: string;
    many: string;
    none: string;
  };
};

const en: ManpowerContent = {
  meta: { title: "Manpower Supply", description: "Engineering, office, trade and site roles for industrial projects across Saudi Arabia." },
  hero: { home: "Home", services: "Services", index: "Service 01 of 07", title: "Manpower supply", lead: "Engineers, office staff, skilled trades and site crews for oil & gas, petrochemical and construction projects, on short-term, long-term or shutdown contracts.", facts: [{ value: "39", label: "roles" }, { value: "4", label: "disciplines" }, { value: "3", label: "supply models" }], choose: "Choose roles", chooseAnchor: "roles", profile: "Download company profile", image: site.toolboxTalkSunrise },
  nav: [{ label: "Overview", id: "overview" }, { label: "Roles", id: "roles" }, { label: "Supply models", id: "models" }, { label: "Process", id: "process" }, { label: "Documents", id: "docs" }, { label: "FAQ", id: "svc-faq" }],
  overview: { eyebrow: "Overview", title: "People for every stage of the job", lead: "Skill Bridge supplies skilled manpower to industrial sites across the Kingdom. Tell us the roles and site requirements, and we will prepare a crew proposal for your review.", includes: [
    { title: "Sourcing and shortlisting", text: "Candidates matched to your trades, certifications and site rules." },
    { title: "Trade testing and screening", text: "Skills checked before CVs reach you, with documents attached." },
    { title: "Safety induction", text: "HSE induction and PPE before anyone reaches your gate." },
    { title: "Mobilisation and transport", text: "Crew transport to site from our bus and coaster fleet." },
    { title: "Site supervision", text: "A coordinator handles attendance, timesheets and site issues." },
    { title: "Replacements", text: "Replacement terms are agreed in the contract.", tbc: true },
  ], image: site.rebarInspectionTeam, imageAlt: "Engineers in high visibility vests inspecting rebar", caption: "Engineers checking rebar before a pour" },
  request: { title: "Request manpower", selected: "Roles selected", one: "{n} role selected", many: "{n} roles selected", none: "Pick roles from the directory below", site: "Site location", start: "Start date", continue: "Continue to request", call: "Or call" },
  directory: { eyebrow: "Role directory", title: "Pick the roles you need", lead: "All 39 roles from our profile. Search or browse by discipline, then add roles to your request.", searchLabel: "Search roles", searchPlaceholder: "Search roles, e.g. welder", disciplines: homeContent.en.manpower.disciplines, all: "All", add: "Add", added: "Added ✓", emptyBefore: "No role matches “", emptyAfter: "”. Ask us anyway: we source roles beyond this list.", yourRequest: "Your request", cta: "Request these roles", preselected: homeContent.en.manpower.preselected, scopePrefix: homeContent.en.quote.rolesPrefix },
  models: { eyebrow: "Supply models", title: "Hire for a week, a year or a shutdown", lead: "Pick the model that fits the work. Terms and rates come with the quote.", length: "Typical length", best: "Best for", items: [
    { code: "Model A", icon: "clock", title: "Short-term", text: "Cover peaks, absences and urgent gaps without adding headcount.", length: "Days to weeks", best: "Peaks and urgent cover" },
    { code: "Model B", icon: "clock", title: "Long-term", text: "Monthly contracts for running operations, with one coordinator for the crew.", length: "Months to years", best: "Operations and projects" },
    { code: "Model C", icon: "wrench", title: "Shutdown & turnaround", text: "Planned crews for plant outages, sized to your shutdown schedule.", length: "Weeks", best: "Refineries and power plants" },
  ] },
  process: { eyebrow: "How it works", title: "From request to crew on site", lead: "Five steps, one coordinator from start to finish.", steps: [
    { title: "Request", text: "Send roles, headcount, site and dates by form, phone or WhatsApp." },
    { title: "Shortlist", text: "We match candidates and send CVs with certificates and the quote." },
    { title: "Approve", text: "You review CVs, interview if needed, and confirm the crew." },
    { title: "Mobilise", text: "Induction, PPE and transport, with gate documents ready." },
    { title: "Support", text: "Timesheets, replacements and extensions through one coordinator." },
  ] },
  documents: { eyebrow: "Gate-ready paperwork", title: "Documents that arrive with each worker", lead: "Your site gate and HSE team get what they ask for, before day one. Final list to confirm with Skill Bridge.", items: ["Iqama and passport copies", "CV and trade certificates", "Medical fitness certificate", "HSE induction record", "TÜV cards for scaffolders and riggers", "Operator licences for crane and forklift crews"] },
  industries: { eyebrow: "Where our crews work", title: "Industries we staff", lead: "The same screening and induction on every site, whatever the sector.", items: [
    { title: "Oil & gas", image: site.pipelineSanyLine, alt: "Pipeline works with construction equipment" },
    { title: "Petrochemical", image: site.plantFoundations, alt: "Industrial plant foundation works" },
    { title: "Construction", image: site.formworkRebarWide, alt: "Formwork and rebar on a construction site" },
    { title: "Power & utilities", image: projects.neomSolarField, alt: "Solar power field under construction" },
    { title: "Mining", image: site.trenchExcavatorLoader, alt: "Excavator and loader at a trenching site" },
  ] },
  related: { eyebrow: "Often booked together", view: "View service", items: [
    { label: "Logistics & Transport", title: "Trucks and crew transport", image: site.fleetLineupDesert, alt: "Trucks and equipment lined up on site", route: "logistics" },
    { label: "Equipment Rental", title: "Cranes and earthmovers, operated", image: site.excavatorBreakerPipeline, alt: "Excavator with breaker beside a pipeline", route: "equipmentRental" },
    { label: "Plant Maintenance", title: "Shutdown and turnaround support", image: site.scaffoldFormwork, alt: "Scaffolding and formwork at a site", route: "maintenance" },
  ] },
  faq: { eyebrow: "Manpower FAQ", title: "Before you hire", lead: "Answers to what procurement teams ask about contract manpower.", items: [
    { q: "Do you supply both Saudi nationals and expatriate workers?", a: "Crew mix depends on the role and your Saudization requirements. Tell us your Nitaqat needs and we shortlist to match." },
    { q: "Who manages the workers on site?", a: "A Skill Bridge coordinator handles attendance, timesheets, replacements and day-to-day issues, so your supervisors deal with one contact." },
    { q: "Can we interview candidates before they start?", a: "Yes. We send CVs with certificates and you can interview or trade-test before you confirm the crew." },
    { q: "What if a worker does not fit the job?", a: "Replacement terms are agreed in the contract before mobilisation." },
    { q: "Can you supply transport and accommodation?", a: "Crew transport comes from our fleet of buses, coasters and Hi-Aces. Ask us about accommodation options." },
  ] },
};

const ar: ManpowerContent = {
  meta: { title: "توريد القوى العاملة", description: "مهندسون وموظفو مكاتب وحرفيون وفرق مواقع للمشاريع الصناعية في المملكة العربية السعودية." },
  hero: { home: "الرئيسية", services: "الخدمات", index: "الخدمة 01 من 07", title: "توريد القوى العاملة", lead: "مهندسون وموظفو مكاتب وحرفيون وفرق مواقع لمشاريع النفط والغاز والبتروكيماويات والإنشاءات، بعقود قصيرة أو طويلة الأجل أو لدعم الإيقافات.", facts: [{ value: "39", label: "وظيفة" }, { value: "4", label: "تخصصات" }, { value: "3", label: "نماذج توريد" }], choose: "اختر الوظائف", chooseAnchor: "roles", profile: "تنزيل ملف الشركة", image: site.toolboxTalkSunrise },
  nav: [{ label: "نظرة عامة", id: "overview" }, { label: "الوظائف", id: "roles" }, { label: "نماذج التوريد", id: "models" }, { label: "آلية العمل", id: "process" }, { label: "المستندات", id: "docs" }, { label: "الأسئلة الشائعة", id: "svc-faq" }],
  overview: { eyebrow: "نظرة عامة", title: "كوادر لكل مرحلة من العمل", lead: "تورّد سكيل بريدج كوادر مهنية للمواقع الصناعية في أنحاء المملكة. أخبرنا بالوظائف ومتطلبات الموقع لنعدّ لك مقترح فريق للمراجعة.", includes: [
    { title: "الاستقطاب واختيار المرشحين", text: "مطابقة المرشحين مع المهن والشهادات وقواعد موقعك." },
    { title: "اختبار المهنة والفحص", text: "التحقق من المهارات قبل إرسال السير الذاتية، مع المستندات." },
    { title: "التعريف بالسلامة", text: "تعريف بالصحة والسلامة ومعدات الوقاية قبل دخول الموقع." },
    { title: "التعبئة والنقل", text: "نقل الفرق إلى الموقع بحافلاتنا ومركبات كوستر." },
    { title: "الإشراف في الموقع", text: "منسق يتابع الحضور وكشوف الساعات ومسائل الموقع." },
    { title: "الاستبدال", text: "تُحدد شروط الاستبدال في العقد.", tbc: true },
  ], image: site.rebarInspectionTeam, imageAlt: "مهندسون يرتدون سترات السلامة ويفحصون حديد التسليح", caption: "مهندسون يفحصون حديد التسليح قبل الصب" },
  request: { title: "اطلب قوى عاملة", selected: "الوظائف المختارة", one: "وظيفة واحدة مختارة", many: "{n} وظائف مختارة", none: "اختر وظائف من القائمة أدناه", site: "موقع العمل", start: "تاريخ البدء", continue: "متابعة الطلب", call: "أو اتصل" },
  directory: { eyebrow: "دليل الوظائف", title: "اختر الوظائف التي تحتاجها", lead: "جميع الوظائف الـ39 الواردة في ملفنا. ابحث أو تصفح حسب التخصص ثم أضف الوظائف إلى طلبك.", searchLabel: "ابحث عن وظيفة", searchPlaceholder: "ابحث عن وظيفة، مثل لحام", disciplines: homeContent.ar.manpower.disciplines, all: "الكل", add: "إضافة", added: "أُضيفت ✓", emptyBefore: "لا توجد وظيفة تطابق «", emptyAfter: "». تواصل معنا على أي حال للاستفسار عن وظائف أخرى.", yourRequest: "طلبك", cta: "اطلب هذه الوظائف", preselected: homeContent.ar.manpower.preselected, scopePrefix: homeContent.ar.quote.rolesPrefix },
  models: { eyebrow: "نماذج التوريد", title: "لأسبوع أو لعام أو لفترة إيقاف", lead: "اختر النموذج المناسب للعمل. تُحدد الشروط والأسعار في عرض السعر.", length: "المدة المعتادة", best: "مناسب لـ", items: [
    { code: "النموذج أ", icon: "clock", title: "قصير الأجل", text: "لتغطية ذروة العمل والغياب والاحتياجات العاجلة دون زيادة دائمة في عدد العاملين.", length: "أيام إلى أسابيع", best: "الذروة والتغطية العاجلة" },
    { code: "النموذج ب", icon: "clock", title: "طويل الأجل", text: "عقود شهرية للتشغيل المستمر مع منسق واحد للفريق.", length: "أشهر إلى سنوات", best: "التشغيل والمشاريع" },
    { code: "النموذج ج", icon: "wrench", title: "الإيقاف والصيانة الشاملة", text: "فرق مخططة لفترات إيقاف المصانع وفق جدول أعمالك.", length: "أسابيع", best: "المصافي ومحطات الطاقة" },
  ] },
  process: { eyebrow: "آلية العمل", title: "من الطلب حتى وصول الفريق إلى الموقع", lead: "خمس خطوات ومنسق واحد من البداية إلى النهاية.", steps: [
    { title: "الطلب", text: "أرسل الوظائف والأعداد والموقع والمواعيد عبر النموذج أو الهاتف أو واتساب." },
    { title: "الترشيح", text: "نطابق المرشحين ونرسل السير الذاتية والشهادات وعرض السعر." },
    { title: "الاعتماد", text: "تراجع السير الذاتية وتجري مقابلات عند الحاجة ثم تعتمد الفريق." },
    { title: "التعبئة", text: "تعريف بالسلامة ومعدات وقاية ونقل مع تجهيز وثائق دخول الموقع." },
    { title: "المتابعة", text: "كشوف الساعات والاستبدالات والتمديدات عبر منسق واحد." },
  ] },
  documents: { eyebrow: "مستندات دخول الموقع", title: "مستندات كل عامل", lead: "نجهّز ما يطلبه فريق البوابة والسلامة قبل اليوم الأول. القائمة النهائية بانتظار التأكيد من سكيل بريدج.", items: ["نسخ الإقامة وجواز السفر", "السيرة الذاتية وشهادات المهنة", "شهادة اللياقة الطبية", "سجل التعريف بالصحة والسلامة", "بطاقات TÜV لعمال السقالات والرفّاعين", "رخص مشغلي الرافعات والرافعات الشوكية"] },
  industries: { eyebrow: "مواقع عمل فرقنا", title: "القطاعات التي ندعمها", lead: "الفحص والتعريف بالسلامة في كل موقع، أياً كان القطاع.", items: [
    { title: "النفط والغاز", image: site.pipelineSanyLine, alt: "أعمال أنابيب بمعدات بناء" },
    { title: "البتروكيماويات", image: site.plantFoundations, alt: "أعمال أساسات منشأة صناعية" },
    { title: "الإنشاءات", image: site.formworkRebarWide, alt: "شدات وحديد تسليح في موقع بناء" },
    { title: "الطاقة والمرافق", image: projects.neomSolarField, alt: "حقل طاقة شمسية قيد الإنشاء" },
    { title: "التعدين", image: site.trenchExcavatorLoader, alt: "حفارة وجرافة في موقع حفر" },
  ] },
  related: { eyebrow: "خدمات تُطلب معاً", view: "عرض الخدمة", items: [
    { label: "الخدمات اللوجستية والنقل", title: "الشاحنات ونقل الفرق", image: site.fleetLineupDesert, alt: "شاحنات ومعدات مصطفّة في الموقع", route: "logistics" },
    { label: "تأجير المعدات", title: "رافعات ومعدات حفر مع مشغلين", image: site.excavatorBreakerPipeline, alt: "حفارة بمطرقة هيدروليكية قرب خط أنابيب", route: "equipmentRental" },
    { label: "صيانة المصانع", title: "دعم الإيقافات والصيانة الشاملة", image: site.scaffoldFormwork, alt: "سقالات وشدات في موقع عمل", route: "maintenance" },
  ] },
  faq: { eyebrow: "أسئلة عن القوى العاملة", title: "قبل التعاقد", lead: "إجابات عن أسئلة فرق المشتريات حول القوى العاملة المتعاقد معها.", items: [
    { q: "هل تورّدون مواطنين سعوديين وعمالة وافدة؟", a: "يعتمد تكوين الفريق على الوظيفة ومتطلبات التوطين لديكم. أخبرونا باحتياجات نطاقات لنرشح ما يناسبها." },
    { q: "من يدير العمال في الموقع؟", a: "يتابع منسق من سكيل بريدج الحضور وكشوف الساعات والاستبدالات والمسائل اليومية، لتتعامل فرقكم مع جهة اتصال واحدة." },
    { q: "هل يمكننا مقابلة المرشحين قبل بدء العمل؟", a: "نعم. نرسل السير الذاتية مع الشهادات، ويمكنكم إجراء مقابلات أو اختبارات مهنية قبل اعتماد الفريق." },
    { q: "ماذا لو لم يكن العامل مناسباً للعمل؟", a: "تُتفق شروط الاستبدال في العقد قبل التعبئة." },
    { q: "هل يمكنكم توفير النقل والسكن؟", a: "نوفر نقل الفرق عبر حافلاتنا ومركبات كوستر وهايس. اسألونا عن خيارات السكن." },
  ] },
};

export const manpowerContent = { en, ar };
