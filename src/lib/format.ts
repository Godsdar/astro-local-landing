import type { SiteConfig } from "../../site.config.ts";

export function digitsOnly(input: string): string {
  return (input || "").replace(/[^\d]/g, "");
}

// tel: link, keeps a leading plus.
export function telHref(phone: string): string {
  const trimmed = (phone || "").trim();
  const plus = trimmed.startsWith("+") ? "+" : "";
  return `tel:${plus}${digitsOnly(trimmed)}`;
}

// WhatsApp click-to-chat link.
export function waHref(number: string, text?: string): string {
  const base = `https://wa.me/${digitsOnly(number)}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

// Telegram link from a handle or a full t.me URL.
export function tgHref(handle: string): string {
  const h = (handle || "").trim();
  if (h.startsWith("http")) return h;
  return `https://t.me/${h.replace(/^@/, "")}`;
}

function hasPlaceholder(value: string): boolean {
  return /todo|placeholder|xxx|lorem ipsum/i.test(value || "");
}

export type ValidateOptions = { production?: boolean };

// Returns a list of problems. Empty list means the config is usable.
export function validateConfig(
  config: SiteConfig,
  options: ValidateOptions = {},
): string[] {
  const errors: string[] = [];
  const required: Array<[string, string]> = [
    ["businessName", config.businessName],
    ["description", config.description],
    ["phone", config.phone],
    ["address", config.address],
    ["hours", config.hours],
    ["city", config.city],
    ["siteUrl", config.siteUrl],
  ];
  for (const [key, value] of required) {
    if (!value || !value.trim()) errors.push(`${key}: required`);
  }

  const phoneDigits = digitsOnly(config.phone);
  if (config.phone && !/^\+?[\d\s()-]{7,}$/.test(config.phone.trim())) {
    errors.push("phone: unexpected format");
  }
  if (config.phone && (phoneDigits.length < 7 || phoneDigits.length > 15)) {
    errors.push("phone: digits out of range");
  }

  if (config.whatsapp) {
    const wa = digitsOnly(config.whatsapp);
    if (wa.length < 7 || wa.length > 15) errors.push("whatsapp: digits out of range");
  }
  if (config.telegram && !/^@?[A-Za-z0-9_]{4,32}$/.test(config.telegram.trim())) {
    errors.push("telegram: unexpected handle");
  }
  for (const [key, url] of [
    ["siteUrl", config.siteUrl],
    ["mapUrl", config.mapUrl],
    ["ogImage", config.ogImage],
  ] as Array<[string, string | undefined]>) {
    if (url && !/^https?:\/\//.test(url) && !url.startsWith("/")) {
      errors.push(`${key}: must be http(s) or root-relative`);
    }
  }

  if (!Array.isArray(config.services) || config.services.length === 0) {
    errors.push("services: at least one required");
  }

  if (options.production) {
    const flat = JSON.stringify(config);
    if (hasPlaceholder(flat)) errors.push("production: placeholder text found (TODO/Lorem)");
    if (config.demo) errors.push("production: demo flag is on");
  }

  return errors;
}
