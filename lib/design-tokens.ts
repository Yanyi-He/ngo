export const designTokens = {
  color: {
    brand: {
      blue: {
        900: "#0B2745",
        800: "#123A63",
        700: "#1C527F",
        100: "#DDEAF6",
        50: "#EEF5FB",
      },
      teal: {
        700: "#2D9C95",
        50: "#E4F4F2",
      },
      red: {
        700: "#B3413B",
        100: "#F6DFDD",
        50: "#FBF1F0",
      },
    },
    neutral: {
      950: "#172033",
      800: "#263449",
      700: "#3D4B5F",
      500: "#66768A",
      200: "#D8E1EA",
      100: "#EEF3F8",
      50: "#F7F9FC",
      0: "#FFFFFF",
    },
    semantic: {
      success: "#2F6F4E",
      warning: "#A8660F",
      error: "#B42318",
      info: "#1C527F",
    },
    surface: {
      default: "#F7F9FC",
      subtle: "#EEF3F8",
      brand: "#0B2745",
      accent: "#EEF5FB",
    },
    text: {
      primary: "#172033",
      secondary: "#3D4B5F",
      muted: "#66768A",
    },
    border: {
      default: "#D8E1EA",
      strong: "#9FB2C5",
    },
    action: {
      primary: "#123A63",
      secondary: "#1C527F",
      focusRing: "#B3413B",
    },
  },
  typography: {
    fontFamily: {
      sans: 'Arial, Helvetica, "Noto Sans SC", "Microsoft YaHei", sans-serif',
      mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "40px",
    },
    lineHeight: {
      xs: "18px",
      sm: "22px",
      base: "26px",
      lg: "30px",
      xl: "30px",
      "2xl": "34px",
      "3xl": "40px",
      "4xl": "48px",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    14: "56px",
    16: "64px",
  },
  radius: {
    none: "0px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    full: "999px",
  },
  shadow: {
    none: "none",
    subtle: "0 1px 2px rgb(23 32 51 / 0.06)",
    interactive: "0 8px 20px rgb(23 32 51 / 0.08)",
    sm: "0 1px 2px rgb(23 32 51 / 0.06)",
    md: "0 8px 20px rgb(23 32 51 / 0.08)",
  },
  motion: {
    duration: {
      fast: "140ms",
      default: "200ms",
      slow: "280ms",
      reveal: "520ms",
      route: "260ms",
    },
    easing: {
      standard: "cubic-bezier(0.2, 0, 0, 1)",
      entrance: "cubic-bezier(0.16, 1, 0.3, 1)",
      softOut: "cubic-bezier(0.33, 1, 0.68, 1)",
    },
    revealOffset: {
      default: "18px",
      maximum: "24px",
    },
  },
  layout: {
    maxWidth: {
      page: "1280px",
      content: "1024px",
      reading: "768px",
      form: "900px",
    },
  },
  component: {
    button: {
      minHeight: "44px",
      paddingX: "20px",
      radius: "6px",
    },
    card: {
      padding: "24px",
      radius: "6px",
      borderWidth: "1px",
    },
    input: {
      minHeight: "44px",
      paddingX: "12px",
      radius: "6px",
    },
    focusRing: {
      width: "2px",
      offset: "3px",
      color: "#B3413B",
    },
  },
} as const;

export type DesignTokens = typeof designTokens;
export type ColorTokens = typeof designTokens.color;
export type SpaceTokens = typeof designTokens.space;
