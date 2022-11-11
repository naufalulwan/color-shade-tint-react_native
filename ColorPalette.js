import { tint, shade } from "tint-shade-color";

const Color = (hex = "#FFFFFF") => {
  try {
    const color = {
      100: tint(hex, 0.1),
      200: tint(hex, 0.2),
      300: tint(hex, 0.3),
      400: tint(hex, 0.4),
      500: hex,
      600: shade(hex, 0.1),
      700: shade(hex, 0.2),
      800: shade(hex, 0.3),
      900: shade(hex, 0.4),
    };
    return color;
  } catch {
    return "#FFFFFF";
  }
};

export const theme = {
  primary: {
    40: Color("#00A8E8")[400],
    90: Color("#00A8E8")[900],
  },
  secondary: {
    40: Color("#FFC107")[400],
    90: Color("#FFC107")[900],
  },
  success: {
    40: Color("#4CAF50")[400],
    90: Color("#4CAF50")[900],
  },
  danger: {
    40: Color("#F44336")[400],
    90: Color("#F44336")[900],
  },
  warning: {
    40: Color("#FF9800")[400],
    90: Color("#FF9800")[900],
  },
  info: {
    40: Color("#2196F3")[400],
    90: Color("#2196F3")[900],
  },
  config: {
    light: {
      40: Color("#F1F1F1")[400],
      90: Color("#F1F1F1")[900],
    },
    dark: {
      40: Color("#212529")[400],
      90: Color("#212529")[900],
    },
  },
};
