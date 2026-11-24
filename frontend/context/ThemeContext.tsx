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
  const [mounted, setMounted] = useState(false);

  // Initialise from storage on client mount
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (stored === "light" || stored === "dark" || stored === "system") {
        setModeState(stored);
      }
    } catch {}
  }, []);

  // Synchronise mode changes to <html> and react to system media query
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (currentMode: ThemeMode) => {
      root.classList.remove("light", "dark");
      const isDark =
        currentMode === "dark" ||
        (currentMode === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      const target = isDark ? "dark" : "light";
      root.classList.add(target);
      root.dataset.theme = target;
      root.style.colorScheme = target;
      setResolvedMode(target);
    };

    applyTheme(mode);

    if (mode === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemChange = (e: MediaQueryListEvent) => {
        const isDark = e.matches;
        root.classList.remove("light", "dark");
        root.classList.add(isDark ? "dark" : "light");
        root.dataset.theme = isDark ? "dark" : "light";
        root.style.colorScheme = isDark ? "dark" : "light";
        setResolvedMode(isDark ? "dark" : "light");
      };

      media.addEventListener("change", handleSystemChange);
      return () => media.removeEventListener("change", handleSystemChange);
    }
  }, [mode]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem(STORAGE_KEY, newMode);
    } catch {}
  };

  const toggleMode = () => {
    // Cycle: system -> light -> dark -> system
    if (mode === "system") setMode("light");
    else if (mode === "light") setMode("dark");
    else setMode("system");
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
