import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "./../components/Layout";
import Link from "./../components/Link";

const Heading = styled.h1`
  color: #fff;
  font-size: 4rem;
  margin-bottom: 0;
`;

const Paragraph = styled.p`
  font-size: ${props => (props.lead ? "1.5rem" : "1.25rem")};
`;

const Homepage = () => (
  <Layout>
    <Head>
      <title>Aaron Thomas // Designer & Developer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Heading>hello.</Heading>
    <Paragraph lead>
      I'm Aaron. I'm a web UI designer and developer, currently based in Leeds, UK.
    </Paragraph>
    <Paragraph>
      Right now I work at Sky, with a focus on design systems, acessibility, and composable UIs.
    </Paragraph>
    <Paragraph>
      You can find me
      {" "}
      <Link href="http://twitter.com/_acthomas">on Twitter</Link>
      {" "}
      or
      {" "}
      <Link href="http://github.com/aaronthomas">on Github</Link>
      .
    </Paragraph>
  </Layout>
);

export default Homepage;
