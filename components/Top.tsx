import { Component } from "react";

import GitHubIcon from "components/icons/GitHubIcon";
import LinkedInIcon from "components/icons/LinkedInIcon";

class Top extends Component {
  render() {
    return (
      <div className="text-center px-4 pt-20 md:py-20 lg:pt-40 space-y-12">
        <div className="space-y-4 text-gray-900">
          <span className="text-3xl font-light">Noam Alffasy</span>
          <p className="text-5xl md:text-7xl font-light whitespace-pre-wrap max-w-5xl mx-auto">
            Hey there 👋 I'm an 18-year-old Full Stack Developer
          </p>
        </div>
        <div className="space-x-4">
          <a
            href="https://linkedin.com/in/noam-alffasy-207b0a218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="inline-block h-6 md:h-8 w-6 md:w-8" />
          </a>
          <a
            href="https://github.com/noamalffasy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="inline-block h-6 md:h-8 w-6 md:w-8" />
          </a>
        </div>
      </div>
    );
  }
}

export default Top;
