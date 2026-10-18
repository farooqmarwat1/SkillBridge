import { contact } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export function WhatsAppButton({ label }: { label: string }) {
  return (
    <a className="wa" href={contact.whatsapp.url} target="_blank" rel="noopener" aria-label={label}>
      <Icon name="whatsappFull" />
    </a>
  );
}
