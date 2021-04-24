import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import createNode from "./node";
import { Input, Button, Tooltip } from '@material-ui/core'
import Draggable, { DraggableCore } from "react-draggable";

export default TreeBuilder;

function TreeBuilder({ parentChildren, setParentChildren, node }) {

  const [children, setChildren] = useState([]);

  const addChild = () => {
    const childNode = createNode({});
    node.children.push(childNode);
    setChildren([...children, childNode]);
  }

  const treeRemoveParent = () => {
    setParentChildren(parentChildren.filter(({ id }) => id !== node.id));
  }

  useEffect(() => {
    node.children = node.children.filter(child => children.find(({ id }) => id === child.id));
  })

  return (
    <div className="child">
      <span className="handle mr-1">
        <i className="el-icon-rank"></i>
      </span>
      <Input
        placeholder="Département"
        className="input">

      </Input>
      <Input
        placeholder="Email"
        className="input-small ml-1">

      </Input>
      <Tooltip
        title="test">
        <Button className="ml-1" variant="contained" color="primary" onClick={addChild}>
          Add {node.id}
        </Button>
      </Tooltip>
      <Tooltip
        title="test">
        <Button className="ml-1" variant="contained" color="secondary" onClick={ treeRemoveParent }>
          Delete {node.id}
        </Button>
      </Tooltip>
      <div
        className="children-wrapper">
        { children.map((item, index) => <TreeBuilder parentChildren={children} setParentChildren={setChildren}  node={ item } key={ `tree-${node.id}-child-${index + 1}` } /> ) }
      </div>
    </div>
  );
}
