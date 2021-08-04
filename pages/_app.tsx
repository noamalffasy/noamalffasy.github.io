import Head from "next/head";
import type { AppProps } from "next/app";

import Navbar from "components/Navbar";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="App container">
      <Head>
        <title>Noam Alffasy</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <style jsx>{`
        .App {
          padding-top: calc(0.5rem * 2 + 0.3125rem * 2 + 1.25rem + 0.5rem);
        }
      `}</style>
    </div>
  );
}

export default MyApp;
