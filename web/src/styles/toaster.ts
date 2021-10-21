import { theme } from "@styles/theme";

export const toasterOptions = {
  success: {
    style: {
      background: theme.colors.green,
      color: theme.colors.white
    },
    iconTheme: {
      primary: theme.colors.white,
      secondary: theme.colors.green
    }
  },
  error: {
    style: {
      background: theme.colors.orange,
      color: theme.colors.white
    },
    iconTheme: {
      primary: theme.colors.white,
      secondary: theme.colors.orange
    }
  }
};
