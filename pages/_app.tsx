import Head from "next/head";
import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-body pb-16">
      <Head>
        <title>Noam Alffasy</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
