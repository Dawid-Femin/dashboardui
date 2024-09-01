import { Components, Theme } from "@mui/material";

export const MuiAlert: Components<Theme>["MuiAlert"] = {
  styleOverrides: {
    root: {
      padding: "12px 20px",
      fontSize: "14px",
      fontWeight: 700,
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
    },
  },
};
