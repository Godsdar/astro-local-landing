import { describe, it, expect } from "vitest";
import { telHref, waHref, tgHref, digitsOnly } from "../src/lib/format.ts";

describe("contact link helpers", () => {
  it("builds a tel: link", () => {
    expect(telHref("+7 000 000-00-00")).toBe("tel:+70000000000");
    expect(telHref("8 (000) 000 00 00")).toBe("tel:80000000000");
  });

  it("builds a WhatsApp link", () => {
    expect(waHref("7 000 000 00 00")).toBe("https://wa.me/70000000000");
    expect(waHref("70000000000", "Здравствуйте")).toContain("?text=");
  });

  it("builds a Telegram link", () => {
    expect(tgHref("@demo_dental")).toBe("https://t.me/demo_dental");
    expect(tgHref("https://t.me/x")).toBe("https://t.me/x");
  });

  it("keeps digits only", () => {
    expect(digitsOnly("+7 (000) 000-00-00")).toBe("70000000000");
  });
});
