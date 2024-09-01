import { createTheme } from "@mui/material/styles";
import { modules } from "./Modules";
import { components } from "./Components";
import { breakpoints } from "./Modules/breakpointsModule";
import { typography } from "./Modules/typographyModule";

export const BenefitTheme = () => {
  return createTheme({
    breakpoints,
    typography,
    components,
  });
};
