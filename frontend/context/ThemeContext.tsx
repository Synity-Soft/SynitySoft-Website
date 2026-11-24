"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  mode: ThemeMode;
  resolvedMode: "light" | "dark";
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "synitysoft_theme_mode";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>("system");
  const [resolvedMode, setResolvedMode] = useState<"light" | "dark">("dark");

  // initialise from storage or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (stored === "light" || stored === "dark" || stored === "system") {
        setModeState(stored);
      }
    } catch {}
  }, []);

  // apply class on <html>
  useEffect(() => {
    const root = document.documentElement;
    const apply = (m: ThemeMode) => {
      root.classList.remove("light", "dark");
      const isDark =
        m === "dark" ||
        (m === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      root.classList.add(isDark ? "dark" : "light");
      root.dataset.theme = isDark ? "dark" : "light";
      root.style.colorScheme = isDark ? "dark" : "light";
      setResolvedMode(isDark ? "dark" : "light");
    };
    apply(mode);
    if (mode === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => {
        root.classList.toggle("dark", e.matches);
        root.classList.toggle("light", !e.matches);
        root.dataset.theme = e.matches ? "dark" : "light";
        root.style.colorScheme = e.matches ? "dark" : "light";
        setResolvedMode(e.matches ? "dark" : "light");
      };
      media.addEventListener("change", handler);
      return () => media.removeEventListener("change", handler);
    }
  }, [mode]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem(STORAGE_KEY, newMode);
    } catch {}
  };

  const toggleMode = () => {
    const isDark =
      mode === "dark" ||
      (mode === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setMode(isDark ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ mode, resolvedMode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
