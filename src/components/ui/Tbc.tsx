/** "To confirm" badge for facts the client has not confirmed yet. Never replace it with a guess. */
export function Tbc({ label }: { label: string }) {
  return <span className="tbc">{label}</span>;
}
