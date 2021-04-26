import React, { Component, useEffect, useState } from "react";
import TreeBuilder from "./hierarchyBuilder/hierarchyBuilder";
import createNode from "./hierarchyBuilder/node";
import { Input, Button, Tooltip } from '@material-ui/core'

export default App;

function App() {

  const firstNode = createNode({}); // AKA Tree
  const [children, setChildren] = useState([firstNode]);

  function Save() {
    console.log( firstNode );
    // Do something.
  }

  return (
    <div>
      <h1>Arborescence intéractive</h1>
      <div className="children-wrapper">
        <TreeBuilder parentChildren={children} setParentChildren={setChildren} node={firstNode} />
      </div>
      <Tooltip title="test">
        <Button onClick={ Save }>Save</Button>
      </Tooltip>
      <hr></hr>
    </div>
  );
}
