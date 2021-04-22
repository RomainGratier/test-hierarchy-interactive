import React, { Component } from "react";
import Instance from "./hierarchyBuilder/hierarchyBuilder";
import { Child } from "./hierarchyBuilder/child";
import { Tooltip, Input } from "element-react";

export default App;
function App() {
  return (
    <div>
      <h1>Tree data builder</h1>
      <p>
        {" "}
        Build data trees optimized for d3 structure quickly with this app!{" "}
      </p>
      <div className="text-muted">
        {" "}
        You can pass an existing JSON config <Input></Input>
      </div>
      <div className="children-wrapper">
        <Instance></Instance>
      </div>
      <p> JSON result </p>
      <Tooltip content="Click to copy to clipboard">
        <pre></pre>
      </Tooltip>
      <hr></hr>
      <div className="text-center">
        <a
          href="https://github.com/DJanoskova/Vue.js-Tree-Data-Builder"
          target="_blank"
        >
          {" "}
          https://github.com/DJanoskova/Vue.js-Tree-Data-Builder{" "}
        </a>
      </div>
    </div>
  );
}
