const unsplash = (id: string, width = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${width}`;

export const stats = [
  { value: "[XX+]", label: "Skilled Professionals" },
  { value: "[XX+]", label: "Equipment Units" },
  { value: "[XX+]", label: "Projects Supported" },
  { value: "[XX+]", label: "Years of Experience" },
];

export const services = [
  { title: "Manpower Solutions", description: "Qualified, safety-inducted workforce across trades and disciplines, mobilised to your site at scale.", image: unsplash("1504307651254-35680f356dfd") },
  { title: "Equipment Rental", description: "Well-maintained heavy and light equipment, available bare or operated, with responsive on-site support.", image: unsplash("1621922688758-359fc864071e") },
  { title: "Civil & General Contracting", description: "General contracting, construction management, design-build and preconstruction planning for projects of all sizes.", image: unsplash("1531834685032-c34bf0d84c77") },
  { title: "Industrial Maintenance", description: "Plant maintenance for refineries, petrochemical plants and power plants, plus construction and shutdown support.", image: unsplash("1513828583688-c52646db42da") },
  { title: "Logistics & Transportation", description: "Transportation and logistics solutions across the Kingdom using a modern fleet run by qualified, trained staff.", image: unsplash("1601584115197-04ecc0da31d7") },
  { title: "Fabrication & Trading", description: "Steel fabrication, machining and heat-exchanger repair, plus supply and trading of industrial materials.", image: unsplash("1504328345606-18bbc8c9d7d1") },
];

export const industries = [
  ["Oil & Gas", "1516937941344-00b4e0337589"], ["Petrochemical", "1513828583688-c52646db42da"],
  ["Construction", "1531834685032-c34bf0d84c77"], ["Infrastructure", "1541888946425-d81bb19240f5"],
  ["Power & Utilities", "1487875961445-47a00398c267"], ["Manufacturing", "1504328345606-18bbc8c9d7d1"],
  ["Mining", "1621922688758-359fc864071e"], ["Logistics", "1590496793929-36417d3117de"],
].map(([name, id]) => ({ name, image: unsplash(id) }));

export const reasons = [
  ["Qualified Workforce", "Trade-tested, safety-inducted personnel matched to project requirements."],
  ["Reliable Equipment", "A maintained, inspection-ready fleet available across all categories."],
  ["Safety-Focused Operations", "HSE integrated into planning and daily execution on every site."],
  ["Responsive Project Support", "Fast mobilisation and a single point of accountability."],
  ["Integrated Service Capability", "Manpower, equipment, contracting and logistics under one partner."],
].map(([title, description]) => ({ title, description }));

export const equipment = ["Excavators", "Wheel Loaders", "Cranes", "Forklifts", "Dump Trucks", "Generators", "Trailers", "Personnel Transport"];

export const projects = [
  { industry: "Oil & Gas", title: "[Add Verified Industrial Project]", location: "[Location, Saudi Arabia]" },
  { industry: "Construction", title: "[Add Verified Construction Project]", location: "[Location, Saudi Arabia]" },
  { industry: "Maintenance", title: "[Add Verified Maintenance / Manpower Project]", location: "[Location, Saudi Arabia]" },
];

export const safety = [
  ["Safety First", "A proactive HSE culture built into every operation and toolbox talk."],
  ["Qualified Personnel", "Certified, inducted and continuously trained field teams."],
  ["Equipment Inspection", "Scheduled inspection and maintenance for operational readiness."],
  ["Continuous Improvement", "Structured review, reporting and corrective-action loops."],
].map(([title, description]) => ({ title, description }));

export { unsplash };
