"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeWatcher() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // システムテーマの変更を監視
    if (typeof window !== 'undefined' && theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? 'dark' : 'light');
      };

      // 初期設定
      setTheme(mediaQuery.matches ? 'dark' : 'light');

      // 変更を監視
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, setTheme]);

  return null;
}