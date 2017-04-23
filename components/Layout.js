import React from "react";
import styled, { injectGlobal } from "styled-components";
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
    background-color: #d36868;
    color: #fdd4d4;
    font-family: "Avenir Next", sans-serif;
  }
`;

const Wrapper = styled.div`
  max-width: 40em;
  padding: 6em;
`;

const CornerLogo = styled(Logomark)`
  position: absolute;
  bottom: 2em;
  right: 2em;
`;

const Layout = ({ children }) => (
  <Wrapper>
    {children}
    <CornerLogo />
  </Wrapper>
);

export default Layout;
