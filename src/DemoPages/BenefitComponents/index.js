import React, { Fragment } from "react";
import ThemeOptions from "../../Layout/ThemeOptions";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import { Route } from "react-router-dom";
import AppFooter from "../../Layout/AppFooter";

import { ThemeProvider } from "@mui/material";
import { BenefitTheme } from "../../theme/theme";
import CreateStructure from "./Examples/createStructure/createStructure";

console.log(BenefitTheme);

const BenefitComponents = ({ match }) => {
  return (
    <Fragment>
      <ThemeOptions />
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <ThemeProvider theme={BenefitTheme}>
            <div className="app-main__inner">
              <Route
                path={`${match.url}/create-structure`}
                component={CreateStructure}
              />
            </div>
          </ThemeProvider>
          <AppFooter />
        </div>
      </div>
    </Fragment>
  );
};

export default BenefitComponents;
