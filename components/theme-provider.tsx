"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DirectionProvider } from "@base-ui-components/react/direction-provider";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange={true}
      enableSystem={true}
    >
      {" "}
      <DirectionProvider>{children}</DirectionProvider>
    </NextThemesProvider>
  );
}
