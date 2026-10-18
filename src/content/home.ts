import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/ui/Icon";
import type { Locale, ProjectSlug, RouteKey } from "@/lib/i18n";
import { projects as pj, site, stock } from "@/lib/media";

/* Home page copy. Facts come from the company profile and the client; anything unconfirmed
   is null (shown as a "To confirm" badge) or a [bracketed] placeholder. Strings with {n}
   are filled in by the component. */

export type Spec = [label: string, value: string | null];
export type Plate = { cat: string; code: string; img: StaticImageData; alt: string; name: string; specs: Spec[] };
export type Testimonial = { text: string; name: string; role: string; init: string; tag: string; img: StaticImageData };
export type QuoteType = { id: "manpower" | "equipment" | "maintenance" | "other"; label: string; sub: string };

export type HomeContent = {
  meta: { title: string };
  hero: {
    eyebrow: string;
    lines: [string, string, string];
    lead: string;
    quote: string;
    services: string;
    facts: { n: string; label: string }[];
    caption: string;
    footage: string;
    place: string;
    pause: string;
    play: string;
  };
  quick: { title: string; fields: string; need: string; segs: [string, string, string]; site: string; start: string; submit: string };
  sites: string[];
  clients: { label: string; names: string[] };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    checks: { title: string; text: string }[];
    link: string;
    badge: [string, string];
    mainAlt: string;
    subAlt: string;
  };
  stats: { n: number; label: string; text: string }[];
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    more: string;
    items: { icon: IconName; route: RouteKey; tag: string; title: string; text: string }[];
  };
  manpower: {
    eyebrow: string;
    title: string;
    lead: string;
    photoAlt: string;
    tabsLabel: string;
    panelLabel: string;
    disciplines: { label: string; roles: string[] }[];
    preselected: string[];
    pickedOne: string;
    pickedMany: string;
    cta: string;
    models: { title: string; text: string }[];
  };
  fleet: {
    eyebrow: string;
    title: string;
    lead: string;
    filterLabel: string;
    all: string;
    filters: string[];
    plates: Plate[];
    add: string;
    added: string;
    details: string;
    empty: { title: string; text: string; cta: string };
    listEmpty: string;
    listOne: string;
    listMany: string;
    fleetNote: string;
    viewFleet: string;
    sendList: string;
  };
  mobilise: { eyebrow: string; title: string; lead: string; steps: { title: string; text: string }[] };
  industries: { eyebrow: string; title: string; items: { title: string; text: string; img: StaticImageData; anchor: string }[] };
  testimonials: { eyebrow: string; title: string; lead: string; prev: string; next: string; show: string; items: Testimonial[] };
  hse: {
    eyebrow: string;
    title: string;
    lead: string;
    imgAlt: string;
    tag: [string, string];
    pillars: { title: string; text: string }[];
    regs: string[];
    link: string;
  };
  certs: { eyebrow: string; title: string; docs: string; items: { icon: IconName; title: string; text: string }[] };
  projects: {
    eyebrow: string;
    title: string;
    lead: string;
    all: string;
    view: string;
    items: { slug: ProjectSlug; img: StaticImageData; alt: string; tag: string; client: string; title: string; fig: string; figText: string }[];
  };
  news: {
    eyebrow: string;
    title: string;
    lead: string;
    all: string;
    read: string;
    date: string;
    items: { tag: string; title: string; text: string; img: StaticImageData }[];
  };
  faq: { eyebrow: string; title: string; lead: string; call: string; items: { q: string; a: string }[] };
  quote: {
    eyebrow: string;
    title: string;
    lead: string;
    call: string;
    whatsapp: string;
    office: string;
    officeLines: [string, string];
    hours: string;
    profile: string;
    step1: string;
    typesLabel: string;
    types: QuoteType[];
    scope: string;
    scopePh: string;
    step2: string;
    siteLabel: string;
    start: string;
    duration: string;
    optional: string;
    durationPh: string;
    count: string;
    countPh: string;
    step3: string;
    name: string;
    namePh: string;
    company: string;
    companyPh: string;
    phone: string;
    phonePh: string;
    email: string;
    emailPh: string;
    wa: string;
    fine: string;
    send: string;
    doneTitle: string;
    doneText: string;
    again: string;
    rolesPrefix: string;
    machinesPrefix: string;
  };
};

const en: HomeContent = {
  meta: { title: "Skill Bridge Contracting | Manpower, Equipment & Contracting" },
  hero: {
    eyebrow: "Manpower · Equipment · Contracting",
    lines: ["Skilled crews and", "heavy equipment,", "from Jubail"],
    lead: "Manpower supply, equipment rental, plant maintenance, fabrication and logistics for oil & gas, petrochemical and construction sites across the Kingdom.",
    quote: "Request a quote",
    services: "Our services",
    facts: [
      { n: "39", label: "trades & disciplines" },
      { n: "29", label: "equipment types" },
      { n: "7", label: "service lines" },
    ],
    caption: "Earthmoving",
    footage: "Site footage",
    place: "Al Jubail, KSA",
    pause: "Pause",
    play: "Play",
  },
  quick: {
    title: "Quick request",
    fields: "3 fields",
    need: "I need",
    segs: ["Manpower", "Equipment", "Contracting"],
    site: "Site",
    start: "Start date",
    submit: "Get a quote",
  },
  sites: ["Al Jubail", "Dammam", "Khobar", "Ras Tanura", "Riyadh", "NEOM", "Other"],
  clients: {
    label: "Trusted on sites for",
    names: ["Kalpataru International", "Sendan International", "Larsen & Toubro", "Saudi Aramco", "NEOM", "Sinopec", "Hyundai", "Red Sea Global", "Saipem", "Nesma", "Ma'aden"],
  },
  about: {
    eyebrow: "About Skill Bridge",
    title: "Industrial support from one partner",
    lead: "Skill Bridge Contracting supplies people and equipment to industry and general contracting across Saudi Arabia. We support oil, gas and petrochemical operators and their contractors with skilled manpower, rental machines, maintenance and logistics.",
    checks: [
      { title: "Qualified, safety-inducted crews", text: "Matched to your project's trades and certifications." },
      { title: "A fleet ready for site", text: "Earthmoving, lifting, power and transport under one contract." },
      { title: "One point of accountability", text: "Manpower, machines and logistics coordinated by one team." },
    ],
    link: "About the company",
    badge: ["Al Jubail", "Head office · KSA"],
    mainAlt: "Skill Bridge site team lined up in front of the truck fleet on a desert site",
    subAlt: "Toolbox talk with a crew in hard hats and hi-vis vests at sunrise",
  },
  stats: [
    { n: 39, label: "Trades & disciplines", text: "From engineers to riggers and TÜV scaffolders." },
    { n: 29, label: "Equipment types", text: "Earthmoving, lifting, power, haulage, transport." },
    { n: 7, label: "Service lines", text: "People, machines, site work and supply." },
    { n: 5, label: "Sectors served", text: "Oil & gas to public works, across the Kingdom." },
  ],
  services: {
    eyebrow: "What we do",
    title: "People, machines and site work under one contract",
    lead: "Seven service lines that a project site needs at the same time, run from our head office in Al Jubail.",
    more: "Learn more",
    items: [
      { icon: "hardhat", route: "manpower", tag: "39 trades & disciplines", title: "Manpower Supply", text: "Engineers, office staff, skilled trades and site crews, short-term or long-term." },
      { icon: "crane", route: "equipment", tag: "29 equipment types", title: "Equipment Rental", text: "Cranes, earthmovers, generators and trailers, bare or with operators." },
      { icon: "building", route: "contracting", tag: "Design-build · CM", title: "Civil & General Contracting", text: "General contracting, construction management and pre-construction planning." },
      { icon: "wrench", route: "maintenance", tag: "Refineries · Power", title: "Plant Maintenance & Shutdowns", text: "Maintenance and construction support for refineries, petrochemical and power plants." },
      { icon: "flame", route: "fabrication", tag: "Steel · Machining", title: "Fabrication & Workshop", text: "Steel fabrication, machining and heat exchanger fabrication and repair." },
      { icon: "truck", route: "logistics", tag: "Buses · Low-beds", title: "Logistics & Transport", text: "Crew buses from 15 to 55 seats, flatbed and hydraulic low-bed trailers." },
    ],
  },
  manpower: {
    eyebrow: "Manpower supply",
    title: "39 roles, ready to mobilise",
    lead: "Pick the roles you need. We shortlist qualified, safety-inducted people and send CVs with the quote.",
    photoAlt: "Engineers in hi-vis vests inspecting epoxy-coated rebar",
    tabsLabel: "Disciplines",
    panelLabel: "{d} roles",
    disciplines: [
      { label: "Engineering", roles: ["Mechanical Engineer", "Civil Engineer", "Construction Engineer", "Safety Engineer", "Electrical Engineer", "Material Engineer", "Computer Engineer", "QA/QC Engineer", "Piping Engineer", "Planner", "HVAC Engineer", "Instrumentation Engineer"] },
      { label: "Office & admin", roles: ["Executive Secretary", "Data Entry", "Document Controller", "Office Boy", "Admin Assistant", "Computer Operator", "AutoCAD Draftsman", "Time Keeper", "Janitor", "Telephone Operator", "Office Driver"] },
      { label: "Skilled trades", roles: ["Millwright Fitter", "Instrument Fitter", "Pipe Fitter", "Carpenter", "3G Welder", "Crane Operator", "Rigger L1–L3", "Mason", "Steel Erector", "Plumber", "Light Driver", "Forklift Operator"] },
      { label: "Site & HSE", roles: ["Heavy Driver", "Scaffolder (TÜV)", "Manhole Watch", "Assistant Safety Officer"] },
    ],
    preselected: ["Piping Engineer", "3G Welder", "Rigger L1–L3"],
    pickedOne: "{n} role selected",
    pickedMany: "{n} roles selected",
    cta: "Request these roles",
    models: [
      { title: "Short-term", text: "Days to weeks, for peaks and urgent gaps." },
      { title: "Long-term", text: "Monthly contracts for running operations." },
      { title: "Shutdowns", text: "Turnaround crews for planned plant outages." },
    ],
  },
  fleet: {
    eyebrow: "Equipment rental",
    title: "Machines built for demanding sites",
    lead: "Earthmoving, lifting, power and transport, bare or with operators. Add machines to one quote.",
    filterLabel: "Equipment category",
    all: "All",
    filters: ["Earthmoving", "Lifting", "Power & site", "Haulage", "Crew transport"],
    plates: [
      { cat: "Lifting", code: "SB-L01", img: site.crawlerCraneSlab, alt: "Crawler crane on a foundation site", name: "Crawler crane", specs: [["Capacity", null], ["Supply", "Bare or operated"], ["Boom", null], ["Term", "Short or medium"]] },
      { cat: "Earthmoving", code: "SB-E04", img: site.excavatorBreakerPipeline, alt: "Excavator with a hydraulic breaker working beside a pipeline", name: "Excavator with breaker", specs: [["Class", null], ["Supply", "Bare or operated"], ["Attachment", "Hydraulic breaker"], ["Term", "Short or medium"]] },
      { cat: "Crew transport", code: "SB-T01", img: stock.crewBusesDepot, alt: "Row of buses at a depot", name: "Crew bus", specs: [["Seats", "15 · 33 · 55"], ["Types", "Hi-Ace · Coaster · Bus"], ["Driver", null], ["Term", null]] },
      { cat: "Haulage", code: "SB-H02", img: site.fleetLineupDesert, alt: "Dump trucks, graders and a roller lined up on a desert site", name: "Dump trucks", specs: [["Payload", null], ["Fleet", "Trucks, graders, rollers"], ["Supply", null], ["Coverage", "Kingdom-wide"]] },
    ],
    add: "Add to quote",
    added: "Added",
    details: "Details",
    empty: {
      title: "Power & site equipment",
      text: "Generators, air compressors, welding machines and tower lights. Photos and specs coming soon.",
      cta: "Ask for availability",
    },
    listEmpty: "Your quote list is empty",
    listOne: "{n} machine in your quote list",
    listMany: "{n} machines in your quote list",
    fleetNote: "The full fleet covers 29 equipment types, from Bobcats to tower cranes.",
    viewFleet: "View full fleet",
    sendList: "Send quote list",
  },
  mobilise: {
    eyebrow: "How we mobilise",
    title: "From request to site in four steps",
    lead: "One coordinator from first call to demobilisation.",
    steps: [
      { title: "Tell us the need", text: "Roles, machines, site and dates through the quote form, phone or WhatsApp." },
      { title: "Shortlist and quote", text: "We confirm availability and send CVs, equipment specs and a priced quote." },
      { title: "Mobilise", text: "Crews, machines and transport arrive with the paperwork your site gate needs." },
      { title: "Support on site", text: "Replacements, extensions and demobilisation handled by the same team." },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Working where the Kingdom builds",
    items: [
      { title: "Oil & gas", text: "Upstream, refineries and pipelines", img: site.pipelineSanyLine, anchor: "oil-gas" },
      { title: "Petrochemical", text: "Jubail and Ras Tanura plants", img: site.plantFoundations, anchor: "industrial" },
      { title: "Construction", text: "Giga-projects and buildings", img: site.formworkRebarWide, anchor: "construction" },
      { title: "Power & utilities", text: "Solar PV, power plants, shutdowns", img: pj.neomSolarField, anchor: "renewables" },
      { title: "Public & municipal", text: "Royal Commission parks and spaces", img: pj.dareenFinishedPlaza, anchor: "public" },
    ],
  },
  testimonials: {
    eyebrow: "Client feedback",
    title: "What site managers say about our crews",
    lead: "Quotes from project and procurement managers, shared with their permission.",
    prev: "Previous testimonial",
    next: "Next testimonial",
    show: "Show testimonial {n}",
    items: [
      { text: "[Client testimonial: two or three sentences on crew quality, safety record and how quickly Skill Bridge mobilised.]", name: "[Name]", role: "[Project manager · Company]", init: "PM", tag: "Manpower", img: site.teamFleetDesert },
      { text: "[Client testimonial: a procurement manager on equipment condition, inspection paperwork and on-time delivery to site.]", name: "[Name]", role: "[Procurement lead · Company]", init: "PL", tag: "Equipment", img: site.crawlerCraneSlab },
      { text: "[Client testimonial: a plant superintendent on shutdown support, replacements and coordination with one point of contact.]", name: "[Name]", role: "[Plant superintendent · Company]", init: "PS", tag: "Shutdowns", img: site.plantFoundations },
    ],
  },
  hse: {
    eyebrow: "HSE & quality",
    title: "Safe operations are part of the quote",
    lead: "HSE is planned into every mobilisation, from inducted crews to inspected machines.",
    imgAlt: "Crew on a scaffold walkway wearing full-body harnesses",
    tag: ["Safety first", "On every site, every shift"],
    pillars: [
      { title: "Safety-first culture", text: "Toolbox talks and HSE planning on every job." },
      { title: "Qualified people", text: "Certified, inducted crews, including TÜV-certified scaffolders." },
      { title: "Inspected equipment", text: "Scheduled inspection and maintenance before mobilisation." },
      { title: "Continuous improvement", text: "Incident reporting and corrective-action follow-up." },
    ],
    regs: ["CR", "VAT", "ISO 45001"],
    link: "HSE & quality policy",
  },
  certs: {
    eyebrow: "Registrations & certificates",
    title: "Ready for your vendor file",
    docs: "Request documents pack",
    items: [
      { icon: "shield", title: "ISO 9001", text: "Quality management" },
      { icon: "shield", title: "ISO 45001", text: "Occupational health & safety" },
      { icon: "shield", title: "ISO 14001", text: "Environmental management" },
      { icon: "doc", title: "Commercial Registration", text: "Ministry of Commerce" },
      { icon: "doc", title: "VAT registration", text: "ZATCA" },
      { icon: "person", title: "GOSI & Nitaqat", text: "Social insurance, Saudization band" },
    ],
  },
  projects: {
    eyebrow: "Track record",
    title: "Selected work",
    lead: "Pipelines, solar fields, plant foundations, site facilities and public parks for the Kingdom's leading contractors.",
    all: "View all projects",
    view: "View project",
    items: [
      { slug: "neom-green-hydrogen", img: pj.neomCableTapeCrew, alt: "Crew laying cable warning tape beside solar panels", tag: "Renewables · Solar PV", client: "Larsen & Toubro (L&T)", title: "NEOM Green Hydrogen, Solar PV", fig: "90 km", figText: "cable trenching, road crossings and route markers" },
      { slug: "mgse-phase-3", img: site.pipelineExcavatorsRow, alt: "Excavators breaking rock beside a pipe string", tag: "Oil & gas · Pipeline", client: "Kalpataru International", title: "MGSE Phase-3, Package 13", fig: "160 km", figText: "ROW, bedding, trenching and berms" },
      { slug: "aramco-tcf", img: pj.tcfTadanoLiftRiggers, alt: "Mobile crane lifting a site building", tag: "Oil & gas · Facilities", client: "Nesma United Industries", title: "Aramco TCF", fig: "10,000 m²", figText: "temporary construction facilities" },
      { slug: "gssip-spark", img: site.formworkRebarWide, alt: "Rebar cages and formwork for machine foundations", tag: "Industrial · Civil", client: "Sendan International", title: "GSSIP, SPARK", fig: "Civil", figText: "excavations, foundations, powerhouse, steel" },
      { slug: "dareen-park", img: pj.dareenPavingManhole, alt: "Stone paving laid around a manhole frame", tag: "Public · Maintenance", client: "National Blue Company", title: "Dareen Park, Al Fanateer", fig: "Park", figText: "maintenance for the Royal Commission, Jubail" },
    ],
  },
  news: {
    eyebrow: "News & insights",
    title: "Notes from the field",
    lead: "Practical guides for planning crews, machines and shutdowns in the Eastern Province.",
    all: "All articles",
    read: "Read article",
    date: "[Date]",
    items: [
      { tag: "Guide", title: "Planning manpower for a refinery shutdown", text: "Which trades to book first, how long mobilisation takes and what the site gate will ask for.", img: site.plantFoundations },
      { tag: "Checklist", title: "Crane rental checklist for industrial sites", text: "Lift plans, third-party inspection, operator cards and ground conditions in one list.", img: site.crawlerCraneSlab },
      { tag: "Explainer", title: "What Saudization means for contract manpower", text: "How Nitaqat bands affect the crews you hire and what to ask a supplier.", img: site.toolboxTalkSunrise },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions buyers ask first",
    lead: "Can't find your answer? Call or message our Al Jubail office.",
    call: "Call the office",
    items: [
      { q: "What services does Skill Bridge provide?", a: "Seven service lines: manpower supply, equipment rental, civil and general contracting, plant maintenance and shutdowns, fabrication, logistics and transport, and trading and supply." },
      { q: "Where do you work?", a: "Our head office is in Al Jubail. We support sites across the Kingdom of Saudi Arabia." },
      { q: "Can equipment come with operators?", a: "Yes. Most machines are available bare or operated, and crew buses come with drivers. Tell us which you need in the quote request." },
      { q: "How fast can you mobilise?", a: "It depends on the roles, quantities and site requirements. Send the request and we confirm a mobilisation date with the quote." },
      { q: "Are your workers certified?", a: "Crews are trade-tested and safety-inducted. Certificates, such as TÜV cards for scaffolders, are shared with the CVs." },
      { q: "Do you supply short-term crews?", a: "Yes. We supply short-term, long-term and shutdown or turnaround crews." },
    ],
  },
  quote: {
    eyebrow: "Request a quote",
    title: "Tell us what your site needs",
    lead: "Tell us the roles or machines, the site and the start date. We come back with availability and a priced quote.",
    call: "Call",
    whatsapp: "WhatsApp",
    office: "Head office",
    officeLines: ["Al Jubail, Eastern Province", "Kingdom of Saudi Arabia"],
    hours: "Office hours",
    profile: "Download company profile (PDF)",
    step1: "What do you need?",
    typesLabel: "Service",
    types: [
      { id: "manpower", label: "Manpower", sub: "39 roles" },
      { id: "equipment", label: "Equipment", sub: "29 types" },
      { id: "maintenance", label: "Maintenance", sub: "Plant & shutdowns" },
      { id: "other", label: "Other", sub: "Civil, fabrication, logistics" },
    ],
    scope: "Scope",
    scopePh: "Roles and headcount, machines, or the work to be done",
    step2: "Where and when?",
    siteLabel: "Site location",
    start: "Start date",
    duration: "Duration",
    optional: "(optional)",
    durationPh: "e.g. 3 months",
    count: "Headcount or units",
    countPh: "e.g. 12 welders, 2 cranes",
    step3: "Your details",
    name: "Full name",
    namePh: "Your name",
    company: "Company",
    companyPh: "Company or project",
    phone: "Mobile number",
    phonePh: "05x xxx xxxx",
    email: "Work email",
    emailPh: "name@company.com",
    wa: "Reply on WhatsApp instead of email",
    fine: "We use these details only to answer this request.",
    send: "Send request",
    doneTitle: "Request received",
    doneText: "Our team in Al Jubail will contact you with availability and a quote. For anything urgent, call",
    again: "Send another request",
    rolesPrefix: "Roles: ",
    machinesPrefix: "Machines: ",
  },
};

const ar: HomeContent = {
  meta: { title: "سكيل بريدج للمقاولات | قوى عاملة ومعدات ومقاولات" },
  hero: {
    eyebrow: "قوى عاملة · معدات · مقاولات",
    lines: ["فرق ماهرة", "ومعدات ثقيلة،", "من الجبيل"],
    lead: "توريد القوى العاملة وتأجير المعدات وصيانة المصانع والتصنيع والخدمات اللوجستية لمواقع النفط والغاز والبتروكيماويات والإنشاءات في جميع أنحاء المملكة.",
    quote: "اطلب عرض سعر",
    services: "خدماتنا",
    facts: [
      { n: "39", label: "حرفة وتخصصاً" },
      { n: "29", label: "نوعاً من المعدات" },
      { n: "7", label: "خطوط خدمة" },
    ],
    caption: "أعمال ترابية",
    footage: "لقطات من الموقع",
    place: "الجبيل، السعودية",
    pause: "إيقاف مؤقت",
    play: "تشغيل",
  },
  quick: {
    title: "طلب سريع",
    fields: "3 حقول",
    need: "أحتاج",
    segs: ["قوى عاملة", "معدات", "مقاولات"],
    site: "الموقع",
    start: "تاريخ البدء",
    submit: "احصل على عرض سعر",
  },
  sites: ["الجبيل", "الدمام", "الخبر", "رأس تنورة", "الرياض", "نيوم", "أخرى"],
  clients: {
    label: "عملنا في مواقع",
    names: ["كالباتارو إنترناشونال", "سندان الدولية", "لارسن آند توبرو", "أرامكو السعودية", "نيوم", "سينوبك", "هيونداي", "البحر الأحمر الدولية", "سايبم", "نسما", "معادن"],
  },
  about: {
    eyebrow: "عن سكيل بريدج",
    title: "دعم صناعي متكامل من شريك واحد",
    lead: "تورّد سكيل بريدج للمقاولات الكوادر والمعدات للقطاع الصناعي والمقاولات العامة في جميع أنحاء المملكة العربية السعودية. ندعم مشغلي النفط والغاز والبتروكيماويات ومقاوليهم بالكوادر الماهرة ومعدات التأجير والصيانة والخدمات اللوجستية.",
    checks: [
      { title: "فرق مؤهلة ومدرّبة على السلامة", text: "مختارة وفق حرف مشروعك وشهاداته المطلوبة." },
      { title: "أسطول جاهز للموقع", text: "معدات الحفر والرفع والطاقة والنقل ضمن عقد واحد." },
      { title: "جهة مسؤولة واحدة", text: "فريق واحد ينسّق القوى العاملة والمعدات والخدمات اللوجستية." },
    ],
    link: "تعرّف على الشركة",
    badge: ["الجبيل", "المقر الرئيسي · السعودية"],
    mainAlt: "فريق سكيل بريدج أمام أسطول الشاحنات في موقع صحراوي",
    subAlt: "اجتماع سلامة مع فريق يرتدي الخوذ والسترات العاكسة عند الشروق",
  },
  stats: [
    { n: 39, label: "حرفة وتخصص", text: "من المهندسين إلى عمال الرفع وعمال السقالات المعتمدين من TÜV." },
    { n: 29, label: "أنواع المعدات", text: "حفر ورفع وطاقة وشحن ونقل." },
    { n: 7, label: "خطوط الخدمة", text: "كوادر ومعدات وأعمال موقع وتوريد." },
    { n: 5, label: "قطاعات نخدمها", text: "من النفط والغاز إلى المرافق العامة في أنحاء المملكة." },
  ],
  services: {
    eyebrow: "ماذا نقدّم",
    title: "كوادر ومعدات وأعمال موقع ضمن عقد واحد",
    lead: "سبعة خطوط خدمة يحتاجها موقع المشروع في آن واحد، تُدار من مقرنا الرئيسي في الجبيل.",
    more: "اعرف المزيد",
    items: [
      { icon: "hardhat", route: "manpower", tag: "39 حرفة وتخصصاً", title: "توريد القوى العاملة", text: "مهندسون وموظفون إداريون وحرفيون مهرة وفرق ميدانية، لفترات قصيرة أو طويلة." },
      { icon: "crane", route: "equipment", tag: "29 نوعاً من المعدات", title: "تأجير المعدات", text: "رافعات ومعدات تحريك تربة ومولدات ومقطورات، مع مشغلين أو بدونهم." },
      { icon: "building", route: "contracting", tag: "تصميم وتنفيذ · إدارة إنشاء", title: "المقاولات المدنية والعامة", text: "المقاولات العامة وإدارة الإنشاءات والتخطيط لما قبل التنفيذ." },
      { icon: "wrench", route: "maintenance", tag: "مصافٍ · محطات طاقة", title: "صيانة المصانع والإيقافات", text: "دعم الصيانة والإنشاءات للمصافي ومصانع البتروكيماويات ومحطات الطاقة." },
      { icon: "flame", route: "fabrication", tag: "حديد · تشغيل آلي", title: "التصنيع والورش", text: "تصنيع الهياكل الفولاذية والتشغيل الآلي وتصنيع المبادلات الحرارية وإصلاحها." },
      { icon: "truck", route: "logistics", tag: "حافلات · مقطورات منخفضة", title: "الخدمات اللوجستية والنقل", text: "حافلات للعمال من 15 إلى 55 مقعداً، ومقطورات مسطحة ومنخفضة هيدروليكية." },
    ],
  },
  manpower: {
    eyebrow: "توريد القوى العاملة",
    title: "39 وظيفة جاهزة للتعبئة",
    lead: "اختر الوظائف التي تحتاجها، وسنرشّح كوادر مؤهلة ومدرّبة على السلامة ونرسل السير الذاتية مع العرض.",
    photoAlt: "مهندسون يفحصون حديد التسليح المطلي بالإيبوكسي",
    tabsLabel: "التخصصات",
    panelLabel: "وظائف {d}",
    disciplines: [
      { label: "الهندسة", roles: ["مهندس ميكانيكي", "مهندس مدني", "مهندس إنشاءات", "مهندس سلامة", "مهندس كهربائي", "مهندس مواد", "مهندس حاسب آلي", "مهندس ضبط وضمان الجودة", "مهندس أنابيب", "مخطط مشاريع", "مهندس تكييف وتهوية", "مهندس أجهزة دقيقة"] },
      { label: "المكتب والإدارة", roles: ["سكرتير تنفيذي", "مدخل بيانات", "مراقب وثائق", "عامل مكتب", "مساعد إداري", "مشغل حاسب آلي", "رسام أوتوكاد", "مراقب دوام", "عامل نظافة", "موظف هاتف", "سائق مكتب"] },
      { label: "الحرف الماهرة", roles: ["فني تركيب ميكانيكي", "فني تركيب أجهزة", "فني تركيب أنابيب", "نجار", "لحام 3G", "مشغل رافعة", "عامل رفع (المستوى 1–3)", "بنّاء", "مركّب هياكل فولاذية", "سبّاك", "سائق خفيف", "مشغل رافعة شوكية"] },
      { label: "الموقع والسلامة", roles: ["سائق ثقيل", "عامل سقالات (TÜV)", "مراقب فتحات التفتيش", "مساعد مسؤول سلامة"] },
    ],
    preselected: ["مهندس أنابيب", "لحام 3G", "عامل رفع (المستوى 1–3)"],
    pickedOne: "الوظائف المختارة: {n}",
    pickedMany: "الوظائف المختارة: {n}",
    cta: "اطلب هذه الوظائف",
    models: [
      { title: "قصير الأجل", text: "من أيام إلى أسابيع، لأوقات الذروة والاحتياجات العاجلة." },
      { title: "طويل الأجل", text: "عقود شهرية للعمليات المستمرة." },
      { title: "الإيقافات", text: "فرق للصيانة الشاملة خلال الإيقافات المخطط لها." },
    ],
  },
  fleet: {
    eyebrow: "تأجير المعدات",
    title: "معدات صُممت للمواقع الصعبة",
    lead: "معدات الحفر والرفع والطاقة والنقل، مع مشغلين أو بدونهم. أضف المعدات إلى عرض سعر واحد.",
    filterLabel: "فئة المعدات",
    all: "الكل",
    filters: ["أعمال ترابية", "الرفع", "الطاقة والموقع", "الشحن", "نقل العمال"],
    plates: [
      { cat: "الرفع", code: "SB-L01", img: site.crawlerCraneSlab, alt: "رافعة زاحفة في موقع أساسات", name: "رافعة زاحفة", specs: [["السعة", null], ["التوريد", "بمشغل أو بدونه"], ["الذراع", null], ["المدة", "قصيرة أو متوسطة"]] },
      { cat: "أعمال ترابية", code: "SB-E04", img: site.excavatorBreakerPipeline, alt: "حفار بكسارة هيدروليكية بجوار خط أنابيب", name: "حفار بكسارة", specs: [["الفئة", null], ["التوريد", "بمشغل أو بدونه"], ["الملحق", "كسارة هيدروليكية"], ["المدة", "قصيرة أو متوسطة"]] },
      { cat: "نقل العمال", code: "SB-T01", img: stock.crewBusesDepot, alt: "صف من الحافلات في مستودع", name: "حافلة عمال", specs: [["المقاعد", "15 · 33 · 55"], ["الأنواع", "هايس · كوستر · حافلة"], ["السائق", null], ["المدة", null]] },
      { cat: "الشحن", code: "SB-H02", img: site.fleetLineupDesert, alt: "شاحنات قلابة وممهدات ومدحلة في موقع صحراوي", name: "شاحنات قلابة", specs: [["الحمولة", null], ["الأسطول", "شاحنات وممهدات ومداحل"], ["التوريد", null], ["التغطية", "جميع أنحاء المملكة"]] },
    ],
    add: "أضف إلى العرض",
    added: "تمت الإضافة",
    details: "التفاصيل",
    empty: {
      title: "معدات الطاقة والموقع",
      text: "مولدات وضواغط هواء وماكينات لحام وأبراج إنارة. الصور والمواصفات قريباً.",
      cta: "استفسر عن التوفر",
    },
    listEmpty: "قائمة العرض فارغة",
    listOne: "عدد المعدات في قائمة العرض: {n}",
    listMany: "عدد المعدات في قائمة العرض: {n}",
    fleetNote: "يضم الأسطول الكامل 29 نوعاً من المعدات، من البوبكات إلى الرافعات البرجية.",
    viewFleet: "عرض الأسطول كاملاً",
    sendList: "إرسال قائمة العرض",
  },
  mobilise: {
    eyebrow: "كيف نبدأ العمل",
    title: "من الطلب إلى الموقع في أربع خطوات",
    lead: "منسّق واحد من أول اتصال حتى إنهاء التعبئة.",
    steps: [
      { title: "أخبرنا باحتياجك", text: "الوظائف والمعدات والموقع والتواريخ عبر نموذج العرض أو الهاتف أو واتساب." },
      { title: "الترشيح والعرض", text: "نؤكد التوفر ونرسل السير الذاتية ومواصفات المعدات وعرض سعر مفصّلاً." },
      { title: "التعبئة", text: "تصل الفرق والمعدات ووسائل النقل مع المستندات التي تطلبها بوابة موقعك." },
      { title: "الدعم في الموقع", text: "الاستبدالات والتمديدات وإنهاء التعبئة يتولاها الفريق نفسه." },
    ],
  },
  industries: {
    eyebrow: "القطاعات",
    title: "نعمل حيث تبني المملكة",
    items: [
      { title: "النفط والغاز", text: "الاستكشاف والمصافي وخطوط الأنابيب", img: site.pipelineSanyLine, anchor: "oil-gas" },
      { title: "البتروكيماويات", text: "مصانع الجبيل ورأس تنورة", img: site.plantFoundations, anchor: "industrial" },
      { title: "الإنشاءات", text: "المشاريع العملاقة والمباني", img: site.formworkRebarWide, anchor: "construction" },
      { title: "الطاقة والمرافق", text: "الطاقة الشمسية ومحطات الطاقة والإيقافات", img: pj.neomSolarField, anchor: "renewables" },
      { title: "المرافق العامة والبلدية", text: "حدائق ومساحات الهيئة الملكية", img: pj.dareenFinishedPlaza, anchor: "public" },
    ],
  },
  testimonials: {
    eyebrow: "آراء العملاء",
    title: "ماذا يقول مدراء المواقع عن فرقنا",
    lead: "اقتباسات من مدراء المشاريع والمشتريات، تُنشر بإذنهم.",
    prev: "الرأي السابق",
    next: "الرأي التالي",
    show: "عرض الرأي {n}",
    items: [
      { text: "[رأي العميل: جملتان أو ثلاث عن جودة الفرق وسجل السلامة وسرعة تعبئة سكيل بريدج.]", name: "[الاسم]", role: "[مدير مشروع · الشركة]", init: "PM", tag: "قوى عاملة", img: site.teamFleetDesert },
      { text: "[رأي العميل: مدير مشتريات عن حالة المعدات ووثائق الفحص والتسليم إلى الموقع في الموعد.]", name: "[الاسم]", role: "[مسؤول مشتريات · الشركة]", init: "PL", tag: "معدات", img: site.crawlerCraneSlab },
      { text: "[رأي العميل: مشرف مصنع عن دعم الإيقافات والاستبدالات والتنسيق عبر جهة اتصال واحدة.]", name: "[الاسم]", role: "[مشرف مصنع · الشركة]", init: "PS", tag: "إيقافات", img: site.plantFoundations },
    ],
  },
  hse: {
    eyebrow: "الصحة والسلامة والجودة",
    title: "السلامة جزء من عرض السعر",
    lead: "نخطط للصحة والسلامة في كل تعبئة، من الفرق المدرّبة إلى المعدات المفحوصة.",
    imgAlt: "فريق على ممر سقالات يرتدي أحزمة أمان كاملة",
    tag: ["السلامة أولاً", "في كل موقع وكل وردية"],
    pillars: [
      { title: "ثقافة السلامة أولاً", text: "اجتماعات السلامة اليومية وتخطيط السلامة في كل عمل." },
      { title: "كوادر مؤهلة", text: "فرق معتمدة ومدرّبة، بينها عمال سقالات معتمدون من TÜV." },
      { title: "معدات مفحوصة", text: "فحص وصيانة مجدولة قبل التعبئة." },
      { title: "التحسين المستمر", text: "الإبلاغ عن الحوادث ومتابعة الإجراءات التصحيحية." },
    ],
    regs: ["السجل التجاري", "الرقم الضريبي", "ISO 45001"],
    link: "سياسة الصحة والسلامة والجودة",
  },
  certs: {
    eyebrow: "التسجيلات والشهادات",
    title: "جاهزون لملف التسجيل كمورّد",
    docs: "اطلب حزمة المستندات",
    items: [
      { icon: "shield", title: "ISO 9001", text: "إدارة الجودة" },
      { icon: "shield", title: "ISO 45001", text: "الصحة والسلامة المهنية" },
      { icon: "shield", title: "ISO 14001", text: "الإدارة البيئية" },
      { icon: "doc", title: "السجل التجاري", text: "وزارة التجارة" },
      { icon: "doc", title: "التسجيل الضريبي", text: "هيئة الزكاة والضريبة والجمارك" },
      { icon: "person", title: "التأمينات الاجتماعية ونطاقات", text: "التأمينات الاجتماعية ونطاق التوطين" },
    ],
  },
  projects: {
    eyebrow: "سجل الإنجازات",
    title: "أعمال مختارة",
    lead: "خطوط أنابيب وحقول طاقة شمسية وأساسات مصانع ومرافق مواقع وحدائق عامة لكبار المقاولين في المملكة.",
    all: "عرض جميع المشاريع",
    view: "عرض المشروع",
    items: [
      { slug: "neom-green-hydrogen", img: pj.neomCableTapeCrew, alt: "فريق يمد شريط تحذير الكابلات بجوار الألواح الشمسية", tag: "الطاقة المتجددة · الطاقة الشمسية", client: "لارسن آند توبرو (L&T)", title: "هيدروجين نيوم الأخضر، الطاقة الشمسية", fig: "90 كم", figText: "حفر خنادق الكابلات وتقاطعات الطرق وعلامات المسار" },
      { slug: "mgse-phase-3", img: site.pipelineExcavatorsRow, alt: "حفارات تكسر الصخور بجوار خط أنابيب", tag: "النفط والغاز · خطوط الأنابيب", client: "كالباتارو إنترناشونال", title: "MGSE المرحلة الثالثة، الحزمة 13", fig: "160 كم", figText: "حرم المسار والفرشة والخنادق والسواتر" },
      { slug: "aramco-tcf", img: pj.tcfTadanoLiftRiggers, alt: "رافعة متنقلة ترفع مبنى موقع", tag: "النفط والغاز · المرافق", client: "نسما للصناعات المتحدة", title: "مرافق البناء المؤقتة لأرامكو", fig: "10,000 م²", figText: "مرافق بناء مؤقتة" },
      { slug: "gssip-spark", img: site.formworkRebarWide, alt: "أقفاص حديد وقوالب لأساسات الآلات", tag: "صناعي · مدني", client: "سندان الدولية", title: "GSSIP، سبارك", fig: "مدني", figText: "حفريات وأساسات ومحطة طاقة وهياكل فولاذية" },
      { slug: "dareen-park", img: pj.dareenPavingManhole, alt: "رصف حجري حول إطار فتحة تفتيش", tag: "عام · صيانة", client: "National Blue Company", title: "حديقة دارين، الفناتير", fig: "حديقة", figText: "أعمال صيانة للهيئة الملكية، الجبيل" },
    ],
  },
  news: {
    eyebrow: "الأخبار والمقالات",
    title: "ملاحظات من الميدان",
    lead: "أدلة عملية لتخطيط الفرق والمعدات والإيقافات في المنطقة الشرقية.",
    all: "جميع المقالات",
    read: "اقرأ المقال",
    date: "[التاريخ]",
    items: [
      { tag: "دليل", title: "تخطيط القوى العاملة لإيقاف مصفاة", text: "أي الحرف تُحجز أولاً، وكم تستغرق التعبئة، وما الذي ستطلبه بوابة الموقع.", img: site.plantFoundations },
      { tag: "قائمة تحقق", title: "قائمة تحقق لتأجير الرافعات في المواقع الصناعية", text: "خطط الرفع والفحص من طرف ثالث وبطاقات المشغلين وحالة الأرض في قائمة واحدة.", img: site.crawlerCraneSlab },
      { tag: "شرح", title: "ماذا يعني التوطين لعقود القوى العاملة", text: "كيف تؤثر نطاقات على الفرق التي تستعين بها، وما الذي تسأل عنه المورّد.", img: site.toolboxTalkSunrise },
    ],
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "أسئلة يطرحها المشترون أولاً",
    lead: "لم تجد إجابتك؟ اتصل بمكتبنا في الجبيل أو راسله.",
    call: "اتصل بالمكتب",
    items: [
      { q: "ما الخدمات التي تقدمها سكيل بريدج؟", a: "سبعة خطوط خدمة: توريد القوى العاملة، وتأجير المعدات، والمقاولات المدنية والعامة، وصيانة المصانع والإيقافات، والتصنيع، والخدمات اللوجستية والنقل، والتجارة والتوريد." },
      { q: "أين تعملون؟", a: "مقرنا الرئيسي في الجبيل، وندعم المواقع في جميع أنحاء المملكة العربية السعودية." },
      { q: "هل يمكن توفير المعدات مع مشغلين؟", a: "نعم. معظم المعدات متاحة بمشغل أو بدونه، وتأتي حافلات العمال مع سائقين. حدّد ما تحتاجه في طلب العرض." },
      { q: "ما سرعة التعبئة لديكم؟", a: "تعتمد على الوظائف والكميات ومتطلبات الموقع. أرسل طلبك وسنؤكد موعد التعبئة مع العرض." },
      { q: "هل عمالكم معتمدون؟", a: "تخضع الفرق لاختبارات مهنية وتدريب على السلامة، ونرسل الشهادات مثل بطاقات TÜV لعمال السقالات مع السير الذاتية." },
      { q: "هل توفرون فرقاً لفترات قصيرة؟", a: "نعم. نوفر فرقاً قصيرة وطويلة الأجل وفرقاً للإيقافات والصيانة الشاملة." },
    ],
  },
  quote: {
    eyebrow: "اطلب عرض سعر",
    title: "أخبرنا بما يحتاجه موقعك",
    lead: "أخبرنا بالوظائف أو المعدات والموقع وتاريخ البدء، وسنعود إليك بالتوفر وعرض سعر مفصّل.",
    call: "اتصال",
    whatsapp: "واتساب",
    office: "المقر الرئيسي",
    officeLines: ["الجبيل، المنطقة الشرقية", "المملكة العربية السعودية"],
    hours: "ساعات العمل",
    profile: "تحميل ملف الشركة (PDF)",
    step1: "ماذا تحتاج؟",
    typesLabel: "الخدمة",
    types: [
      { id: "manpower", label: "قوى عاملة", sub: "39 وظيفة" },
      { id: "equipment", label: "معدات", sub: "29 نوعاً" },
      { id: "maintenance", label: "صيانة", sub: "مصانع وإيقافات" },
      { id: "other", label: "أخرى", sub: "مدني، تصنيع، لوجستيات" },
    ],
    scope: "نطاق العمل",
    scopePh: "الوظائف وعدد الأفراد أو المعدات أو العمل المطلوب",
    step2: "أين ومتى؟",
    siteLabel: "موقع العمل",
    start: "تاريخ البدء",
    duration: "المدة",
    optional: "(اختياري)",
    durationPh: "مثال: 3 أشهر",
    count: "عدد الأفراد أو الوحدات",
    countPh: "مثال: 12 لحاماً ورافعتان",
    step3: "بياناتك",
    name: "الاسم الكامل",
    namePh: "اسمك",
    company: "الشركة",
    companyPh: "الشركة أو المشروع",
    phone: "رقم الجوال",
    phonePh: "05x xxx xxxx",
    email: "البريد الإلكتروني للعمل",
    emailPh: "name@company.com",
    wa: "الرد عبر واتساب بدلاً من البريد الإلكتروني",
    fine: "نستخدم هذه البيانات فقط للرد على هذا الطلب.",
    send: "إرسال الطلب",
    doneTitle: "تم استلام الطلب",
    doneText: "سيتواصل معك فريقنا في الجبيل بالتوفر وعرض السعر. للحالات العاجلة اتصل على",
    again: "إرسال طلب آخر",
    rolesPrefix: "الوظائف: ",
    machinesPrefix: "المعدات: ",
  },
};

export const homeContent: Record<Locale, HomeContent> = { en, ar };

/** Fills {n} / {d} placeholders. */
export const fill = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
