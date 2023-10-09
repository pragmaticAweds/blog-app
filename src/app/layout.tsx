"use client";

import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import { StyledBody, StyledContainer } from "./Styles";
import GlobalStyles from "./Styles/GlobalStyles";
import Navbar from "./components/Organisms/NavBar";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./Styles/theme";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ThemeProvider theme={myTheme}>
          <GlobalStyles />
          <StyledBody className={poppins.className}>
            <Navbar />
            <StyledContainer>{children}</StyledContainer>
          </StyledBody>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
