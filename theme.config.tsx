import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 600 }}>NORM.TODAY</span>,
  footer: {
    text: "NORM.TODAY",
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – NORM",
    };
  },

  docsRepositoryBase: "https://github.com/Rybindigital/norm-today-basic",
};

export default config;
