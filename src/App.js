import React, { Component, useState } from "react";
import TreeBuilder from "./hierarchyBuilder/hierarchyBuilder";
import createNode from "./hierarchyBuilder/node";
import { Input, Tooltip } from '@material-ui/core'; 

export default App;

function App() {
  const eraseNodeRec = (parentTree, id) => {
    parentTree.children.map((child) => {
      if (child.id !== id) {
        eraseNodeRec(child, id);
      }
      else {
        parentTree.children = parentTree.children.filter(item => item.id !== id);
        return;
      }
    })
  }

  const [tree, setTree] = useState(createNode({}));

  const AddNewNode = (newTree) => {
    setTree(newTree);
    // console.log(newTree)
    // setTree({ ...tree, children: [...newChildren]});
  }

  const RemoveNode = (prevTree, id) => {
    eraseNodeRec(prevTree, id);
    setTree(prevTree)
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
        <TreeBuilder id={tree.id} name={tree.name} children={tree.children} treeComponentChildren={tree.children} tree={tree} onAdd={AddNewNode} onDelete={RemoveNode}/>
      </div>
      <p> JSON result </p>
      <Tooltip title="test">
        <pre></pre>
      </Tooltip>
      <hr></hr>
    </div>
  );
}
