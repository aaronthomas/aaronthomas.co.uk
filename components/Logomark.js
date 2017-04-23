import React from "react";
import styled, { injectGlobal } from "styled-components";
import Link from "./Link";

const SVG = styled.svg`
  fill: #fdd4d4;
  transition: fill 0.25s ease-in-out;

  &:hover {
    fill: #fff;
  }
`;

const Logomark = ({ className }) => (
  <Link href="http://aaronthomas.co.uk">
    <SVG width="106" height="55" viewBox="0 0 158 82" className={className}>
      <g fillRule="evenodd">
        <circle cx="93" cy="7" r="7" />
        <circle cx="65" cy="41" r="7" />
        <circle cx="151" cy="41" r="7" />
        <path d="M114 0h44v14h-44zM0 34h44v14H0zM86 34h44v14H86zM114 68h44v14h-44z" />
      </g>
    </SVG>
  </Link>
);

export default Logomark;
