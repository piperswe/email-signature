import React from "react";
import { darken, lighten } from "color2k";

export const systemFontStack = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
];

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    body: string;
    tertiary: string;
    background: string;
  };
  fonts: string[];
}

export function fontsToCSS(fonts: string[]): string {
  return fonts.map((font) => JSON.stringify(font)).join(",");
}

const brandBase = "#b946af";

export const defaultTheme: Theme = {
  colors: {
    primary: brandBase,
    secondary: lighten(brandBase, 0.2),
    body: lighten(brandBase, 0.05),
    tertiary: lighten(brandBase, 0.2),
    background: "white",
  },
  fonts: systemFontStack,
};

export const ThemeContext = React.createContext(defaultTheme);

export const usefulStyles = {
  list: {
    paddingInlineStart: "2em",
    margin: 0,
  },
};
