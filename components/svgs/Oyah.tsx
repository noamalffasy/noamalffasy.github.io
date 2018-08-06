import * as React from "react";
import { Component } from "react";

class Oyah extends Component {
  render() {
    return (
      <svg viewBox="0 0 985 563" version="1.1">
        <desc>Created with Sketch.</desc>
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="linearGradient-1"
          >
            <stop stopColor="#000000" offset="0%" />
            <stop stopColor="#FF0000" offset="100%" />
          </linearGradient>
        </defs>
        <g
          id="Welcome"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Desktop" transform="translate(-20.000000, -219.000000)">
            <rect
              id="Rectangle-2"
              fill="#FFFFFF"
              x="20"
              y="219"
              width="985"
              height="563"
            />
            <text
              id="OYAH"
              fill="url(#linearGradient-1)"
              fontFamily="TimesNewRomanPS-BoldMT, Times New Roman"
              fontSize="200"
              fontWeight="bold"
            >
              <tspan x="215" y="558">
                OYAH
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    );
  }
}

export default Oyah;
