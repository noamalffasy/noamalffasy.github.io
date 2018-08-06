import * as React from "react";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <h1>About</h1>
        <p>
          I'm Noam Alffasy. I love making everything, from websites to
          applications to apps, name it and I'l do it and No matter what I make,
          I'll make sure it looks great.
        </p>
        <style jsx>{`
          .About {
            display: flex;
            padding: 5rem 0;
            flex-flow: column;
            align-items: center;
            justify-content: center;
          }

          .About h1 {
            font-size: 4.5rem;
          }

          .About p {
            font-size: 2rem;
            font-weight: 300;
            text-align: center;
            max-width: 40rem;
            margin: 0 auto;
            white-space: pre-wrap;
          }

          @media (min-width: 992px),
            @media (min-width: 992px) and (-webkit-min-device-pixel-ratio: 1) {
            .About {
              padding: 10rem 0 5rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default About;
