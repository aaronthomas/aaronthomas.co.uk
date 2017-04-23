import styled from "styled-components";
import { colors, breakpoints } from "./constants";

export const Link = styled.a`
  color: #fff;
  border-bottom: 1px solid ${colors.secondary};
  text-decoration: none;
  transition: border-color 0.25s ease-in-out;

  &:hover {
    border-color: #fff;
  }
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 0;

  @media (min-width: ${breakpoints.medium}) {
    font-size: 4rem;
  }
`;

export const Paragraph = styled.p`
  font-size: ${props => (props.lead ? "1.25rem" : "1rem")};

  @media (min-width: ${breakpoints.medium}) {
    font-size: ${props => (props.lead ? "1.5rem" : "1.25rem")};
  }
`;
