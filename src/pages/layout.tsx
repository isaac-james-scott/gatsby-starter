import theme, { GlobalStyle } from "@util/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

interface Props {
  children: React.ReactChildren;
}

const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Layout;
