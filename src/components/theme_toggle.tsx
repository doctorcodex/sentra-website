// Developed by doctorcodex
// Theme toggle with system preference detection and local storage persistence

'use client';

import { Moon, Sun } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('sentra-theme') as Theme | null;

    if (stored && (stored === 'light' || stored === 'dark' || stored === 'system')) {
      setTheme(stored);
      applyTheme(stored);
    } else {
      // Default to system preference
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(systemDark ? 'dark' : 'light');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const applyTheme = useCallback((themeToApply: string) => {
    const root = document.documentElement;

    if (themeToApply === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('theme-dark', systemDark);
    } else {
      root.classList.toggle('theme-dark', themeToApply === 'dark');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('sentra-theme', newTheme);
    applyTheme(newTheme);
  }, [theme, applyTheme]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent/10 transition-colors"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-4 w-4 text-muted-foreground" />
      </button>
    );
  }

  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent/10 transition-colors group"
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
    >
      {isDark ? (
        <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors" />
      ) : (
        <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors" />
      )}
    </button>
  );
}
