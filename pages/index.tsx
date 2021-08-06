import * as React from "react";
import { Component } from "react";

import Top from "components/Top";
import Projects from "components/Projects";

class Index extends Component {
  render() {
    return (
      <>
        <Top />
        <Projects />
      </>
    );
  }
}

export default Index;
