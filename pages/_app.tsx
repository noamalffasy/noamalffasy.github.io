import * as React from "react";

import App, { Container } from "next/app";

import Navbar from "components/Navbar";

import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div className="App container">
          <Navbar />
          <Component {...pageProps} />
        </div>
        <style jsx>{`
          .App {
            padding-top: calc(0.5rem * 2 + 0.3125rem * 2 + 1.25rem + 0.5rem);
          }
        `}</style>
      </Container>
    );
  }
}

export default MyApp;
