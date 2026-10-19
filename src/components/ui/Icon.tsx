/* Stroke icons drawn on a 24px grid. Styling (stroke, size) comes from `.sbh svg.i` and the
   parent component class, so icons inherit colour from text. */
const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowBack: <path d="M19 12H5M11 18l-6-6 6-6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  caret: <path d="M6 9l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  pause: <path d="M8 5v14M16 5v14" />,
  play: <path d="M7 5l12 7-12 7z" />,
  check: <path d="M5 12l5 5L20 7" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  dig: <><path d="M3 17h10l2-4h4l2 4" /><circle cx="6" cy="19" r="2" /><circle cx="17" cy="19" r="2" /><path d="M7 13V7l6-3 4 4" /></>,
  power: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  bus: <><rect x="4" y="3" width="16" height="15" rx="2" /><path d="M4 11h16M8 18v3M16 18v3" /><circle cx="8" cy="14.5" r="1" /><circle cx="16" cy="14.5" r="1" /></>,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  whatsapp: (
    <>
      <path d="M3 21l1.65-3.8A9 9 0 1 1 8.05 20.1L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </>
  ),
  whatsappFull: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12.01 2.01A9.99 9.99 0 0 0 3.3 16.94L2 22l5.22-1.37a9.99 9.99 0 0 0 4.79 1.22h.01a10 10 0 1 0 0-19.84zm0 18.23a8.28 8.28 0 0 1-4.22-1.15l-.3-.18-3.13.82.84-3.05-.2-.32a8.27 8.27 0 1 1 6.99 3.88h.02zm4.54-6.2c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.17 1.76 2.68 4.26 3.76.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29z"
    />
  ),
  pin: (
    <>
      <path d="M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  doc: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1-4 4-6 8-6s7 2 8 6" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  download: <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />,
  hardhat: (
    <>
      <path d="M2 18h20" />
      <path d="M4 18v-3a8 8 0 0 1 16 0v3" />
      <path d="M10 7.5V12" />
      <path d="M14 7.5V12" />
    </>
  ),
  crane: (
    <>
      <path d="M5 21V4h11" />
      <path d="M5 4l4-2" />
      <path d="M16 4v5" />
      <path d="M14 9h4v3h-4z" />
      <path d="M2 21h7" />
      <path d="M5 9l5-5" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 21v-4h6v4" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" />
  ),
  flame: (
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  ),
  truck: (
    <>
      <path d="M2 6h12v10H2z" />
      <path d="M14 9h4l4 4v3h-8" />
      <circle cx="6" cy="17.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className ? `i ${className}` : "i"} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
