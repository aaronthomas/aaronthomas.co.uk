import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link, Heading, Paragraph } from "../components/Typography";

const Homepage = () => (
  <Layout>
    <Head>
      <title>Aaron Thomas — Designer & Developer</title>
    </Head>
    <Heading>hello.</Heading>
    <Paragraph lead>
      I'm Aaron. I'm a UI designer and developer, currently based in Leeds, UK.
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
