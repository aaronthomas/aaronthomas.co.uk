import React from "react";
import styled, { injectGlobal } from "styled-components";
import { colors, breakpoints } from "./constants";
import Logomark from "../components/Logomark";

injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    position: relative;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    font-family: "Avenir Next", Avenir, Helvetica, Arial, sans-serif;
  }
`;

const Wrapper = styled.div`
  padding: 1em;

  @media (min-width: ${breakpoints.medium}) {
    max-width: 40em;
    padding: 6em;
  }
`;

const CornerLogo = styled(Logomark)`
  position: absolute;
  bottom: 1em;
  right: 1em;
  height: 40px;
  width: 77px;

  @media (min-width: ${breakpoints.medium}) {
    height: 55px;
    width: 106px;
    bottom: 2em;
    right: 2em;
  }
`;

const Layout = ({ children }) => (
  <Wrapper>
    {children}
    <CornerLogo />
  </Wrapper>
);

export default Layout;
