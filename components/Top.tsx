import * as React from "react";
import { Component } from "react";

import scrollTo from "utils/scrollTo";

class Top extends Component {
  scrollTo: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    const elem = e.target as HTMLAnchorElement;
    const id = elem.getAttribute("href")!;

    scrollTo(id);
  };

  render() {
    return (
      <div className="Top" id="top">
        <h1>Noam Alffasy</h1>
        <p>Full stack JavaScript Developer &amp; Python Developer</p>
        <div className="buttons">
          <a className="primary" href="#projects" onClick={this.scrollTo}>
            See my projects
          </a>
          <a href="#about" onClick={this.scrollTo}>
            Read more about me
          </a>
        </div>
        <style jsx>{`
          .Top {
            display: flex;
            /* padding: 10rem 0; */
            padding: 2rem 0 5rem;
            flex-flow: column;
            justify-content: center;
            align-items: center;
          }

          .Top h1 {
            font-size: 4.5rem;
            line-height: 1.1;
            text-align: center;
          }

          .Top p {
            font-size: 2rem;
            font-weight: 300;
            text-align: center;
            max-width: 40rem;
            margin: 0 auto;
            white-space: pre-wrap;
          }

          .Top .buttons {
            display: flex;
            margin: 2rem 0 0 0;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }

          .Top .buttons a {
            background: #fff;
            color: #212529;
            font-weight: 500;
            text-align: center;
            width: 100%;
            /* margin: 0 0.5rem; */
            margin: 0.5rem 0;
            padding: 0.8rem 1rem;
            border: 0;
            border-radius: 0.3rem;
            text-decoration: none;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

            backface-visibility: hidden;
            -webkit-font-smoothing: subpixel antialiased;

            transform: scale(1) translateZ(0);
            transition: all 0.3s;
            cursor: pointer;
          }

          .Top .buttons a:hover {
            box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.1);
            transform: scale(1.01) translateZ(0);
          }

          .Top .buttons a.primary {
            background: #05f;
            color: #fff;
          }

          .Top .buttons a.primary:hover {
            background: #1865ff;
            color: #fff;
          }

          @media (min-width: 576px),
            @media (min-width: 576px) and (-webkit-min-device-pixel-ratio: 1) {
            .Top .buttons {
              display: block;
              margin: 2rem 0 0 0;
            }

            .Top .buttons a {
              margin: 0 0.5rem;
            }
          }

          @media (min-width: 768px),
            @media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {
            .Top {
              padding: 5rem 0;
            }
          }

          @media (min-width: 992px),
            @media (min-width: 992px) and (-webkit-min-device-pixel-ratio: 1) {
            .Top {
              padding: 10rem 0 5rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Top;
