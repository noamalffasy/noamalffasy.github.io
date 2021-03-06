import * as React from "react";
import { Component } from "react";

import Top from "components/Top";
import About from "components/About";
import Projects from "components/Projects";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Top />
        <About />
        <Projects />
      </div>
    );
  }
}

export default Index;
