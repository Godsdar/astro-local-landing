import { describe, it, expect } from "vitest";
import { site } from "../site.config.ts";
import { validateConfig } from "../src/lib/format.ts";
import type { SiteConfig } from "../site.config.ts";

describe("site.config", () => {
  it("demo config is usable outside production", () => {
    expect(validateConfig(site)).toEqual([]);
  });

  it("has the required shape", () => {
    expect(site.lang).toBe("ru");
    expect(site.services.length).toBeGreaterThan(0);
    expect(Array.isArray(site.testimonials)).toBe(true);
    expect(["calm", "bold", "warm"]).toContain(site.theme);
    expect(typeof site.map.lat).toBe("number");
    expect(typeof site.map.lon).toBe("number");
    expect(site.map.links.length).toBeGreaterThan(0);
    expect(site.faq.length).toBeGreaterThan(0);
  });

  it("reports a bad theme", () => {
    const broken = { ...site, theme: "neon" } as unknown as SiteConfig;
    expect(validateConfig(broken).some((e) => e.startsWith("theme"))).toBe(true);
  });

  it("reports bad map coordinates", () => {
    const broken: SiteConfig = { ...site, map: { ...site.map, lat: 999 } };
    expect(validateConfig(broken).some((e) => e.startsWith("map.lat"))).toBe(true);
  });

  it("fails in production mode when the demo flag is on", () => {
    const errors = validateConfig(site, { production: true });
    expect(errors.some((e) => e.includes("demo flag"))).toBe(true);
  });

  it("fails in production mode on placeholder text", () => {
    const broken: SiteConfig = {
      ...site,
      demo: false,
      businessName: "TODO clinic",
    };
    const errors = validateConfig(broken, { production: true });
    expect(errors.some((e) => e.includes("placeholder"))).toBe(true);
  });

  it("reports bad phone numbers", () => {
    const broken: SiteConfig = { ...site, phone: "abc" };
    expect(validateConfig(broken).some((e) => e.startsWith("phone"))).toBe(true);
  });

  it("reports a bad telegram handle", () => {
    const broken: SiteConfig = { ...site, telegram: "not a handle!" };
    expect(validateConfig(broken).some((e) => e.startsWith("telegram"))).toBe(true);
  });

  it("reports empty required fields", () => {
    const broken: SiteConfig = { ...site, businessName: "" };
    expect(validateConfig(broken)).toContain("businessName: required");
  });
});
