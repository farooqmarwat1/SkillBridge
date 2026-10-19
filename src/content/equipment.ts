import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/ui/Icon";
import type { ProjectSlug } from "@/lib/i18n";
import { projects, site, stock } from "@/lib/media";

export type FleetCategory = "earthmoving" | "lifting" | "power" | "haulage" | "transport";
export type FleetItem = {
  code: string;
  category: FleetCategory;
  name: string;
  image?: StaticImageData;
  alt: string;
  sitePhoto: boolean;
  imageClass?: string;
  icon: IconName;
  specLabel: string;
  specValue: string | null;
  supply: string;
};

type ItemCopy = Pick<FleetItem, "code" | "category" | "name" | "alt" | "specLabel" | "specValue" | "supply">;
const media: Record<string, Pick<FleetItem, "image" | "sitePhoto" | "imageClass" | "icon">> = {
  "SB-E01": { image: site.pipelineSanyLine, sitePhoto: true, icon: "dig" },
  "SB-E02": { image: site.excavatorBreakerPipeline, sitePhoto: true, icon: "dig" },
  "SB-E03": { image: projects.neomJcbBackhoes, sitePhoto: true, icon: "dig" },
  "SB-E04": { image: site.trenchExcavatorLoader, sitePhoto: true, imageClass: "fl-pos-30", icon: "dig" },
  "SB-E05": { image: site.fleetLineupDesert, sitePhoto: true, imageClass: "fl-pos-mid", icon: "dig" },
  "SB-E06": { image: site.fleetLineupDesert, sitePhoto: true, imageClass: "fl-pos-left", icon: "dig" },
  "SB-E07": { image: stock.dozerLowAngle, sitePhoto: false, icon: "dig" },
  "SB-L01": { image: projects.tcfTadanoLiftRiggers, sitePhoto: true, icon: "crane" },
  "SB-L02": { image: stock.mobileCraneDesert, sitePhoto: false, icon: "crane" },
  "SB-L03": { image: site.crawlerCraneSlab, sitePhoto: true, imageClass: "fl-pos-top", icon: "crane" },
  "SB-H01": { image: projects.tcfCraneLowbedUnload, sitePhoto: true, icon: "truck" },
  "SB-T01": { image: stock.crewBusesDepot, sitePhoto: false, icon: "bus" },
};
const categoryIcons: Record<FleetCategory, IconName> = { earthmoving: "dig", lifting: "crane", power: "power", haulage: "truck", transport: "bus" };
const items = (copy: ItemCopy[]): FleetItem[] => copy.map((item) => {
  const photo = media[item.code];
  return { ...item, image: photo?.image, sitePhoto: photo?.sitePhoto ?? false, imageClass: photo?.imageClass, icon: photo?.icon ?? categoryIcons[item.category] };
});

export type EquipmentContent = {
  meta: { title: string; description: string };
  hero: { home: string; services: string; eyebrow: string; title: string; lead: string; facts: { value: string; label: string }[] };
  catalogue: { search: string; searchPlaceholder: string; categoryLabel: string; all: string; categories: { id: FleetCategory; label: string }[]; countOne: string; countMany: string; sitePhoto: string; sitePhotoNote: string; photoSoon: string; supply: string; add: string; added: string; noMatchBefore: string; noMatchAfter: string };
  items: FleetItem[];
  quote: { title: string; empty: string; emptyCount: string; unitOne: string; unitMany: string; fewer: string; more: string; remove: string; site: string; start: string; duration: string; durations: string[]; supply: string; supplyOptions: [string, string]; continue: string; fine: string; scopePrefix: string; supplyPrefix: string; review: string; inList: string };
  projects: { eyebrow: string; title: string; lead: string; items: { slug: ProjectSlug; image: StaticImageData; alt: string; label: string; title: string }[] };
  rental: { eyebrow: string; title: string; lead: string; bestFor: string; items: { code: string; icon: IconName; title: string; text: string; best: string; secondLabel: string; secondValue: string }[]; inspectionTitle: string; inspectionText: string };
};

const en: EquipmentContent = {
  meta: { title: "Equipment Fleet", description: "Explore 29 equipment types for earthmoving, lifting, power, haulage and crew transport." },
  hero: { home: "Home", services: "Services", eyebrow: "Equipment rental", title: "Equipment fleet", lead: "Earthmoving, lifting, power, haulage and crew transport for industrial sites across the Kingdom. Add machines to one quote list and send them in a single request.", facts: [{ value: "29", label: "equipment types" }, { value: "5", label: "categories" }, { value: "Bare", label: "or operated" }] },
  catalogue: { search: "Search equipment", searchPlaceholder: "Search equipment, e.g. crane", categoryLabel: "Equipment category", all: "All", categories: [{ id: "earthmoving", label: "Earthmoving" }, { id: "lifting", label: "Lifting" }, { id: "power", label: "Power & site" }, { id: "haulage", label: "Haulage" }, { id: "transport", label: "Crew transport" }], countOne: "{n} equipment type", countMany: "{n} equipment types", sitePhoto: "Site photo", sitePhotoNote: "from Skill Bridge projects", photoSoon: "Photo coming soon", supply: "Supply", add: "Add to quote", added: "In quote list ✓", noMatchBefore: "No equipment matches “", noMatchAfter: "”. Ask us anyway: we source machines beyond this list." },
  items: items([
    { code: "SB-E01", category: "earthmoving", name: "Excavator", alt: "Excavators working beside a pipeline", specLabel: "Class", specValue: null, supply: "Bare or operated" },
    { code: "SB-E02", category: "earthmoving", name: "Rock breaker", alt: "Excavator with hydraulic breaker beside a pipeline", specLabel: "Attachment", specValue: "Hydraulic breaker", supply: "Bare or operated" },
    { code: "SB-E03", category: "earthmoving", name: "Backhoe loader", alt: "Backhoe loaders at the NEOM solar project", specLabel: "Model", specValue: "JCB 3DX", supply: "Bare or operated" },
    { code: "SB-E04", category: "earthmoving", name: "Wheel loader", alt: "Loader and excavator at a trenching site", specLabel: "Bucket", specValue: null, supply: "Bare or operated" },
    { code: "SB-E05", category: "earthmoving", name: "Grader", alt: "Grader in a fleet lineup on a desert site", specLabel: "Blade", specValue: null, supply: "Bare or operated" },
    { code: "SB-E06", category: "earthmoving", name: "Dump truck", alt: "Dump truck in a fleet lineup on a desert site", specLabel: "Payload", specValue: null, supply: "Bare or operated" },
    { code: "SB-E07", category: "earthmoving", name: "Dozer", alt: "Stock photo of a dozer", specLabel: "Class", specValue: null, supply: "Bare or operated" },
    { code: "SB-E08", category: "earthmoving", name: "Shovel", alt: "", specLabel: "Bucket", specValue: null, supply: "Bare or operated" },
    { code: "SB-E09", category: "earthmoving", name: "Bobcat skid-steer", alt: "", specLabel: "Type", specValue: "Skid-steer loader", supply: "Bare or operated" },
    { code: "SB-L01", category: "lifting", name: "Mobile crane", alt: "Mobile crane lifting a temporary site building", specLabel: "Make", specValue: "Tadano", supply: "Bare or operated" },
    { code: "SB-L02", category: "lifting", name: "Hydraulic crane", alt: "Stock photo of a mobile crane", specLabel: "Capacity", specValue: null, supply: "Bare or operated" },
    { code: "SB-L03", category: "lifting", name: "Crawler crane", alt: "Crawler crane on a foundation site", specLabel: "Capacity", specValue: null, supply: "Bare or operated" },
    { code: "SB-L04", category: "lifting", name: "Tower crane", alt: "", specLabel: "Height", specValue: null, supply: "Bare or operated" },
    { code: "SB-L05", category: "lifting", name: "Boom truck", alt: "", specLabel: "Capacity", specValue: null, supply: "Bare or operated" },
    { code: "SB-L06", category: "lifting", name: "Forklift", alt: "", specLabel: "Capacity", specValue: null, supply: "Bare or operated" },
    { code: "SB-P01", category: "power", name: "Generator", alt: "", specLabel: "Rating", specValue: null, supply: "Delivered to site" },
    { code: "SB-P02", category: "power", name: "Air compressor", alt: "", specLabel: "Output", specValue: null, supply: "Delivered to site" },
    { code: "SB-P03", category: "power", name: "Welding machine", alt: "", specLabel: "Type", specValue: null, supply: "Delivered to site" },
    { code: "SB-P04", category: "power", name: "Tower light", alt: "", specLabel: "Type", specValue: null, supply: "Delivered to site" },
    { code: "SB-P05", category: "power", name: "Power machines", alt: "", specLabel: "Type", specValue: null, supply: "Delivered to site" },
    { code: "SB-P06", category: "power", name: "Portable machines", alt: "", specLabel: "Type", specValue: null, supply: "Delivered to site" },
    { code: "SB-H01", category: "haulage", name: "Hydraulic low-bed trailer", alt: "Low-bed unloading a site building", specLabel: "Payload", specValue: null, supply: "With driver" },
    { code: "SB-H02", category: "haulage", name: "Flatbed trailer", alt: "", specLabel: "Deck", specValue: null, supply: "With driver" },
    { code: "SB-H03", category: "haulage", name: "Prime mover", alt: "", specLabel: "Configuration", specValue: null, supply: "With driver" },
    { code: "SB-T01", category: "transport", name: "55-seat bus", alt: "Stock photo of crew buses at a depot", specLabel: "Seats", specValue: "55", supply: "With driver" },
    { code: "SB-T02", category: "transport", name: "33-seat coaster", alt: "", specLabel: "Seats", specValue: "33", supply: "With driver" },
    { code: "SB-T03", category: "transport", name: "15-seat Hi-Ace", alt: "", specLabel: "Seats", specValue: "15", supply: "With driver" },
    { code: "SB-T04", category: "transport", name: "Pickups", alt: "", specLabel: "Use", specValue: "Site supervision", supply: "With driver" },
    { code: "SB-T05", category: "transport", name: "SUVs and sedans", alt: "", specLabel: "Use", specValue: "Management transport", supply: "With driver" },
  ]),
  quote: { title: "Your quote list", empty: "Add machines from the catalogue. You can set quantities here.", emptyCount: "Empty", unitOne: "{n} unit", unitMany: "{n} units", fewer: "One fewer {name}", more: "One more {name}", remove: "Remove {name}", site: "Site location", start: "Start date", duration: "Duration", durations: ["1 week", "1 month", "3 months", "6 months +"], supply: "Supply", supplyOptions: ["Bare", "Operated"], continue: "Continue to request", fine: "Review your list, then enter contact details in the request form. Or call", scopePrefix: "Equipment:", supplyPrefix: "Supply:", review: "Review list", inList: "in quote list" },
  projects: { eyebrow: "Fleet in action", title: "Our machines on real projects", lead: "Equipment pictured on selected Skill Bridge projects.", items: [
    { slug: "neom-green-hydrogen", image: projects.neomJcbBackhoes, alt: "Backhoe loaders at the NEOM solar project", label: "NEOM Green Hydrogen · L&T", title: "Equipment on 90 km of cable trenching" },
    { slug: "mgse-phase-3", image: site.pipelineSanyLine, alt: "Excavators working along a pipeline", label: "MGSE Phase-3 · Kalpataru", title: "Civil works along a 160 km pipeline route" },
    { slug: "aramco-tcf", image: projects.tcfTadanoLiftRiggers, alt: "Mobile crane lifting a site building", label: "Aramco TCF · Nesma", title: "Temporary facilities across 10,000 m²" },
    { slug: "gssip-spark", image: projects.sparkRebarHall, alt: "Rebar works in a hall at SPARK", label: "GSSIP SPARK · Sendan", title: "Civil works and machine foundations" },
  ] },
  rental: { eyebrow: "How rental works", title: "Three ways to hire", lead: "Pick how much of the job you want us to run. Terms and rates come with the quote.", bestFor: "Best for", items: [
    { code: "Option A", icon: "wrench", title: "Bare rental", text: "The machine only, delivered to your site for your own operators.", best: "Contractors with operators", secondLabel: "You provide", secondValue: "Operator and fuel" },
    { code: "Option B", icon: "hardhat", title: "Operated rental", text: "Machine with a trained Skill Bridge operator, managed by our site coordinator.", best: "Fast mobilisation", secondLabel: "We provide", secondValue: "Machine and operator" },
    { code: "Option C", icon: "truck", title: "Delivered and set up", text: "We move heavy plant on low-bed trailers and support lifting and set-up on site.", best: "Heavy and oversized loads", secondLabel: "We provide", secondValue: "Haulage and lifting crew" },
  ], inspectionTitle: "Inspected before it leaves the yard", inspectionText: "Confirm service records and whether third-party inspection certificates for lifting equipment come with delivery." },
};

const ar: EquipmentContent = {
  meta: { title: "أسطول المعدات", description: "استعرض 29 نوعاً من معدات الأعمال الترابية والرفع والطاقة والنقل للمواقع الصناعية." },
  hero: { home: "الرئيسية", services: "الخدمات", eyebrow: "تأجير المعدات", title: "أسطول المعدات", lead: "معدات للأعمال الترابية والرفع والطاقة والشحن ونقل العمال للمواقع الصناعية في أنحاء المملكة. أضف المعدات إلى قائمة واحدة لمتابعة طلب عرض السعر.", facts: [{ value: "29", label: "نوعاً من المعدات" }, { value: "5", label: "فئات" }, { value: "بدون مشغل", label: "أو مع مشغل" }] },
  catalogue: { search: "ابحث عن معدات", searchPlaceholder: "ابحث عن معدات، مثل رافعة", categoryLabel: "فئة المعدات", all: "الكل", categories: [{ id: "earthmoving", label: "أعمال ترابية" }, { id: "lifting", label: "الرفع" }, { id: "power", label: "الطاقة والموقع" }, { id: "haulage", label: "الشحن" }, { id: "transport", label: "نقل العمال" }], countOne: "نوع واحد من المعدات", countMany: "{n} نوعاً من المعدات", sitePhoto: "صورة من الموقع", sitePhotoNote: "من مشاريع سكيل بريدج", photoSoon: "الصورة قريباً", supply: "التوريد", add: "أضف إلى العرض", added: "في قائمة العرض ✓", noMatchBefore: "لا توجد معدات تطابق «", noMatchAfter: "». تواصل معنا للاستفسار عن معدات أخرى." },
  items: items([
    { code: "SB-E01", category: "earthmoving", name: "حفارة", alt: "حفارات تعمل بجانب خط أنابيب", specLabel: "الفئة", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-E02", category: "earthmoving", name: "كسارة صخور", alt: "حفارة بكسارة هيدروليكية بجانب خط أنابيب", specLabel: "الملحق", specValue: "كسارة هيدروليكية", supply: "بمشغل أو بدونه" },
    { code: "SB-E03", category: "earthmoving", name: "حفارة خلفية", alt: "حفارات خلفية في مشروع نيوم للطاقة الشمسية", specLabel: "الطراز", specValue: "JCB 3DX", supply: "بمشغل أو بدونه" },
    { code: "SB-E04", category: "earthmoving", name: "شيول بعجلات", alt: "شيول وحفارة في موقع حفر", specLabel: "الجرافة", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-E05", category: "earthmoving", name: "ممهدة طرق", alt: "ممهدة ضمن أسطول معدات في موقع صحراوي", specLabel: "الشفرة", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-E06", category: "earthmoving", name: "شاحنة قلابة", alt: "شاحنة قلابة ضمن أسطول معدات في موقع صحراوي", specLabel: "الحمولة", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-E07", category: "earthmoving", name: "جرافة مجنزرة", alt: "صورة مخزنة لجرافة مجنزرة", specLabel: "الفئة", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-E08", category: "earthmoving", name: "مجرفة آلية", alt: "", specLabel: "الجرافة", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-E09", category: "earthmoving", name: "بوبكات انزلاقية", alt: "", specLabel: "النوع", specValue: "لودر انزلاقي", supply: "بمشغل أو بدونه" },
    { code: "SB-L01", category: "lifting", name: "رافعة متنقلة", alt: "رافعة متنقلة ترفع مبنى مؤقتاً في الموقع", specLabel: "الشركة المصنعة", specValue: "Tadano", supply: "بمشغل أو بدونه" },
    { code: "SB-L02", category: "lifting", name: "رافعة هيدروليكية", alt: "صورة مخزنة لرافعة متنقلة", specLabel: "السعة", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-L03", category: "lifting", name: "رافعة زاحفة", alt: "رافعة زاحفة في موقع أساسات", specLabel: "السعة", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-L04", category: "lifting", name: "رافعة برجية", alt: "", specLabel: "الارتفاع", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-L05", category: "lifting", name: "شاحنة برافعة", alt: "", specLabel: "السعة", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-L06", category: "lifting", name: "رافعة شوكية", alt: "", specLabel: "السعة", specValue: null, supply: "بمشغل أو بدونه" },
    { code: "SB-P01", category: "power", name: "مولد كهربائي", alt: "", specLabel: "القدرة", specValue: null, supply: "التوصيل إلى الموقع" },
    { code: "SB-P02", category: "power", name: "ضاغط هواء", alt: "", specLabel: "المخرجات", specValue: null, supply: "التوصيل إلى الموقع" },
    { code: "SB-P03", category: "power", name: "ماكينة لحام", alt: "", specLabel: "النوع", specValue: null, supply: "التوصيل إلى الموقع" },
    { code: "SB-P04", category: "power", name: "برج إنارة", alt: "", specLabel: "النوع", specValue: null, supply: "التوصيل إلى الموقع" },
    { code: "SB-P05", category: "power", name: "معدات طاقة", alt: "", specLabel: "النوع", specValue: null, supply: "التوصيل إلى الموقع" },
    { code: "SB-P06", category: "power", name: "معدات متنقلة", alt: "", specLabel: "النوع", specValue: null, supply: "التوصيل إلى الموقع" },
    { code: "SB-H01", category: "haulage", name: "مقطورة منخفضة هيدروليكية", alt: "مقطورة منخفضة تفرغ مبنى موقع", specLabel: "الحمولة", specValue: null, supply: "مع سائق" },
    { code: "SB-H02", category: "haulage", name: "مقطورة مسطحة", alt: "", specLabel: "سطح التحميل", specValue: null, supply: "مع سائق" },
    { code: "SB-H03", category: "haulage", name: "رأس قاطرة", alt: "", specLabel: "التكوين", specValue: null, supply: "مع سائق" },
    { code: "SB-T01", category: "transport", name: "حافلة 55 مقعداً", alt: "صورة مخزنة لحافلات عمال في مستودع", specLabel: "المقاعد", specValue: "55", supply: "مع سائق" },
    { code: "SB-T02", category: "transport", name: "كوستر 33 مقعداً", alt: "", specLabel: "المقاعد", specValue: "33", supply: "مع سائق" },
    { code: "SB-T03", category: "transport", name: "هايس 15 مقعداً", alt: "", specLabel: "المقاعد", specValue: "15", supply: "مع سائق" },
    { code: "SB-T04", category: "transport", name: "سيارات بيك أب", alt: "", specLabel: "الاستخدام", specValue: "الإشراف الميداني", supply: "مع سائق" },
    { code: "SB-T05", category: "transport", name: "سيارات دفع رباعي وسيدان", alt: "", specLabel: "الاستخدام", specValue: "نقل الإدارة", supply: "مع سائق" },
  ]),
  quote: { title: "قائمة عرض السعر", empty: "أضف معدات من القائمة وحدد الكميات هنا.", emptyCount: "فارغة", unitOne: "وحدة واحدة", unitMany: "{n} وحدات", fewer: "تقليل {name} بواحدة", more: "زيادة {name} بواحدة", remove: "إزالة {name}", site: "موقع العمل", start: "تاريخ البدء", duration: "المدة", durations: ["أسبوع واحد", "شهر واحد", "3 أشهر", "6 أشهر فأكثر"], supply: "التوريد", supplyOptions: ["بدون مشغل", "مع مشغل"], continue: "متابعة الطلب", fine: "راجع القائمة ثم أدخل بيانات الاتصال في نموذج الطلب. أو اتصل على", scopePrefix: "المعدات:", supplyPrefix: "التوريد:", review: "راجع القائمة", inList: "في قائمة العرض" },
  projects: { eyebrow: "الأسطول في العمل", title: "معداتنا في مشاريع حقيقية", lead: "معدات مصوّرة في مشاريع مختارة لسكيل بريدج.", items: [
    { slug: "neom-green-hydrogen", image: projects.neomJcbBackhoes, alt: "حفارات خلفية في مشروع نيوم للطاقة الشمسية", label: "هيدروجين نيوم الأخضر · L&T", title: "معدات لأعمال خنادق الكابلات بطول 90 كم" },
    { slug: "mgse-phase-3", image: site.pipelineSanyLine, alt: "حفارات تعمل على امتداد خط أنابيب", label: "MGSE المرحلة الثالثة · كالباتارو", title: "أعمال مدنية على مسار أنابيب بطول 160 كم" },
    { slug: "aramco-tcf", image: projects.tcfTadanoLiftRiggers, alt: "رافعة متنقلة ترفع مبنى موقع", label: "مرافق أرامكو المؤقتة · نسما", title: "مرافق مؤقتة على مساحة 10,000 م²" },
    { slug: "gssip-spark", image: projects.sparkRebarHall, alt: "أعمال حديد تسليح في قاعة بسبارك", label: "GSSIP سبارك · سندان", title: "أعمال مدنية وأساسات آلات" },
  ] },
  rental: { eyebrow: "آلية التأجير", title: "ثلاث طرق للاستئجار", lead: "اختر مقدار العمل الذي تريد من فريقنا إدارته. تُحدد الشروط والأسعار في عرض السعر.", bestFor: "مناسب لـ", items: [
    { code: "الخيار أ", icon: "wrench", title: "تأجير بدون مشغل", text: "المعدة فقط، تُنقل إلى موقعك ليستخدمها مشغلوكم.", best: "المقاولين الذين لديهم مشغلون", secondLabel: "توفرون", secondValue: "المشغل والوقود" },
    { code: "الخيار ب", icon: "hardhat", title: "تأجير مع مشغل", text: "المعدة مع مشغل مدرب من سكيل بريدج، بتنسيق من فريقنا في الموقع.", best: "التعبئة السريعة", secondLabel: "نوفر", secondValue: "المعدة والمشغل" },
    { code: "الخيار ج", icon: "truck", title: "توصيل وتجهيز", text: "ننقل المعدات الثقيلة بمقطورات منخفضة وندعم الرفع والتجهيز في الموقع.", best: "الأحمال الثقيلة والكبيرة", secondLabel: "نوفر", secondValue: "النقل وفريق الرفع" },
  ], inspectionTitle: "فحص قبل مغادرة الساحة", inspectionText: "يرجى تأكيد سجلات الصيانة وما إذا كانت شهادات الفحص من طرف ثالث لمعدات الرفع ترافق التسليم." },
};

export const equipmentContent = { en, ar };
