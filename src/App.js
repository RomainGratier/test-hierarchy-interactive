import React, { Component, useEffect, useState } from "react";
import TreeBuilder from "./hierarchyBuilder/hierarchyBuilder";
import createNode from "./hierarchyBuilder/node";
import { Input, Button, Tooltip } from '@material-ui/core'

export default App;

function App() {

  const firstNode = createNode({}); // AKA Tree
  const [children, setChildren] = useState([firstNode]);

  function logTree() {
    console.log({ children: firstNode.children });
    // Do something.
  }

  return (
    <div>
      <h1>Arborescence intéractive</h1>
      <p>
        {" "}
        {" "}
      </p>
      <div className="text-muted">
        {" "}
        Vous pouvez créer une base d'arborescence depuit un JSON <Input className="ml-1 input-big"></Input>
      </div>
      <div className="children-wrapper">
        <TreeBuilder parentChildren={children} setParentChildren={setChildren} node={firstNode} /* treeComponentChildren={tree.children} tree={tree} onDelete={RemoveNode} *//>
      </div>
      <p> JSON result </p>
      <Tooltip title="test">
        <Button onClick={ logTree }>Log Tree</Button>
      </Tooltip>
      <hr></hr>
    </div>
  );
}
