// Developed by doctorcodex
// Small client component to toggle `.theme-dark` class on <html> for dark mode

'use client';

import { useCallback, useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains('theme-dark'));
  }, []);

  const onToggle = useCallback(() => {
    const root = document.documentElement;
    const next = !root.classList.contains('theme-dark');
    root.classList.toggle('theme-dark', next);
    setIsDark(next);
  }, []);

  return (
    <button
      type="button"
      className="btn btn--ghost meta"
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={onToggle}
    >
      {isDark ? 'Dark' : 'Light'}
    </button>
  );
}


