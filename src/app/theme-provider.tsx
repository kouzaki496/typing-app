'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeProvider = ({ children, ...props }: React.ComponentProps<typeof NextThemeProvider>) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return (
    mounted && <NextThemeProvider {...props}>{children}</NextThemeProvider>
  );
};