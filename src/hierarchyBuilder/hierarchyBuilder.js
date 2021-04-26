import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import createNode from "./node";
import { Input, Button, Tooltip, TextField } from '@material-ui/core'
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

  const updateNode = event => {
    const { target: { value, name } } = event || {}
    if (!name) return;
    node[name] = value;
  }

  useEffect(() => {
    node.children = node.children.filter(child => nodeExist(child.id));
    function nodeExist(nodeId) {
      return children.find(child => child.id === nodeId);
    }
  })

  return (
    <div className="child">
      <span className="handle mr-1">
        <i className="el-icon-rank"></i>
      </span>
    
      <Tooltip title="Ajouter un département">
      <Input placeholder="Département" className="input" name="department" label="department" variant="outlined" onChange={updateNode}>
      </Input>
      </Tooltip>

      <Tooltip title="Ajouter un Email">
      <Input placeholder="Email" className="input-small ml-1" name="email" label="email" variant="outlined" onChange={updateNode}>
      </Input>
      </Tooltip>

      <Tooltip title="Ajouter">
        <Button variant="contained" color="primary" onClick={addChild}>
          Add
        </Button>
      </Tooltip>

      <Tooltip title="Enlever">
        <Button variant="contained" color="secondary" onClick={ treeRemoveParent }>
          Delete
        </Button>
      </Tooltip>

      <div className="children-wrapper">
        { children.map((item, index) => <TreeBuilder parentChildren={children} setParentChildren={setChildren}  node={ item } key={ `tree-${node.id}-child-${index + 1}` } /> ) }
      </div>
    </div>
  );
}
