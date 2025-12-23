"use client";

import {
  ThemeProvider as NextThemeProvider,
  type ThemeProviderProps,
} from "next-themes";

export const ThemeProvider = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & ThemeProviderProps) => (
  <NextThemeProvider {...props}>{children}</NextThemeProvider>
);
