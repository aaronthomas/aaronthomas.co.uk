import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import styleSheet from "styled-components/lib/models/StyleSheet";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = (
      <style
        dangerouslySetInnerHTML={{
          __html: styleSheet.rules().map(rule => rule.cssText).join("\n")
        }}
      />
    );
    return { ...page, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Aaron Thomas, Web UI Designer and Developer"
          />
          <meta name="theme-color" content="#d36868" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
