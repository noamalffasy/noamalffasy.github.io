import * as React from "react";
import { Component } from "react";

import Top from "components/Top";
import About from "components/About";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Top />
        <About />
      </div>
    );
  }
}

export default Index;
