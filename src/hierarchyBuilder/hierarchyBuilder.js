import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import createNode from "./node";
import { Input, Button, Tooltip } from '@material-ui/core'
import Draggable, { DraggableCore } from "react-draggable";

export default TreeBuilder;

function TreeBuilder(props) {
  const addChildToTree = (tree, newChildren) => {
    return;
  };

  const [children, setChildren] = useState([]);

  const addChild = () => {
    const node = createNode({});
    setChildren(children => [...children, node]);
    addChildToTree(props.tree, children)
    props.onAdd(newTree)
  }

  const treeRemoveParent = (id) => {
    props.onDelete(props.tree, id);
  }

  // useEffect(() => {
  //   ;
  // }, [children])

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
          Add {props.id}
        </Button>
      </Tooltip>
      <Tooltip
        title="test">
        <Button className="ml-1" variant="contained" color="secondary" onClick={() => { treeRemoveParent(props.id) }}>
          Delete {props.id}
        </Button>
      </Tooltip>
      <div
        className="children-wrapper">
        {children && children.map((item) => {
          return <TreeBuilder id={item.id} name={item.name} children={item.children} tree={props.tree} onAdd={props.onAdd} onDelete={props.onDelete} />;
        })}
      </div>
    </div>
  );
}
