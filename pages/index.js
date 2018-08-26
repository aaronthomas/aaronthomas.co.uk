import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Link, Heading, Paragraph } from "../components/Typography";

const Homepage = () => (
  <Layout>
    <Head>
      <title>Aaron Thomas — Designer & Developer</title>
    </Head>
    <Heading>hello.</Heading>
    <Paragraph lead>
      I'm Aaron. I'm a UI Developer and Designer based in Brooklyn, NY.
    </Paragraph>
    <Paragraph>
      I currently work as a Senior Developer at
      {" "}
      <Link href="http://work.co">Work & Co</Link>.
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
