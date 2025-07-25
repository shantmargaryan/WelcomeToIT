"use client";
import { Main } from "@/styled/mixStyle";
import Header from "@/components/Header";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styled/global";
import theme from "@/styled/Theme";
import Footer from "@/components/Footer";
export default function RootLayout({ children }) {

  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Main>
            {children}
          </Main>
          <Footer />
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
}
