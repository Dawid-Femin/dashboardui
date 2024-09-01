import { BreakpointsOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export const breakpoints: BreakpointsOptions = {
  values: {
    xxs: 0,
    xs: 325,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};
