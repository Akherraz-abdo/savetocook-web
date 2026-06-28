/** Design tokens aligned with SaveToCook mobile app (utils/theme.ts) */
export const colors = {
  background: "#FFFFFF",
  surface: "#FFFFFF",
  primary: "#FF7A45",
  primaryDark: "#F2602A",
  primaryLight: "#FFF1EA",
  text: "#21202A",
  textMuted: "#9A9AA2",
  border: "#EFEDF0",
  separator: "#F6F5F7",
  black: "#1A1A1A",
  secondary: "#3E9C5F",
  secondaryLight: "#E8F3EC",
  success: "#34A853",
  error: "#E5484D",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  full: 999,
} as const;
