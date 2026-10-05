import type { ThemeName } from "../../site.config.ts";

export type Theme = {
  primary: string;
  accent: string;
  ink: string;
  paper: string;
  surface: string;
  fontStack: string;
  heroBias: "left" | "right";
};

// Three presets, switched by one line in site.config.ts.
export const themes: Record<ThemeName, Theme> = {
  calm: {
    primary: "#0f766e",
    accent: "#14b8a6",
    ink: "#0f172a",
    paper: "#f8fafc",
    surface: "#ffffff",
    fontStack: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    heroBias: "left",
  },
  bold: {
    primary: "#1d4ed8",
    accent: "#f97316",
    ink: "#0b1220",
    paper: "#ffffff",
    surface: "#f1f5f9",
    fontStack: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    heroBias: "right",
  },
  warm: {
    primary: "#b45309",
    accent: "#f59e0b",
    ink: "#1c1917",
    paper: "#fffbeb",
    surface: "#ffffff",
    fontStack: "Georgia, 'Times New Roman', serif",
    heroBias: "left",
  },
};

export function themeVars(theme: Theme): Record<string, string> {
  return {
    "--c-primary": theme.primary,
    "--c-accent": theme.accent,
    "--c-ink": theme.ink,
    "--c-paper": theme.paper,
    "--c-surface": theme.surface,
    "--font-sans": theme.fontStack,
  };
}
