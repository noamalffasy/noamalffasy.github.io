import * as React from "react";
import { Component } from "react";

import Top from "components/Top";
import Projects from "components/Projects";
import { NextSeo } from "next-seo";

class Index extends Component {
  render() {
    return (
      <>
        <NextSeo
          title="Noam Alffasy"
          description="Full Stack Developer"
          canonical="https://noamalffasy.vercel.app"
          openGraph={{
            locale: "en_US",
            url: "https://noamalffasy.vercel.app",
            title: "Noam Alffasy",
            description: "Full Stack Developer",
            images: [
              { url: "https://noamalffasy.vercel.app/img/og-image.png" },
            ],
            site_name: "Noam Alffasy",
          }}
          twitter={{
            handle: "@noamalffasy",
            site: "@noamalffasy",
            cardType: "summary_larrge_image",
          }}
          additionalMetaTags={[
            {
              name: "twitter:image",
              content: "https://noamalffasy.vercel.app/img/og-image.png",
            },
          ]}
        />
        <Top />
        <Projects />
      </>
    );
  }
}

export default Index;
