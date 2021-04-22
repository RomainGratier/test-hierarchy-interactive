import React, { Component } from "react";
import PropTypes from "prop-types";
import { Child } from "./child";
import { Input, Button, Tooltip } from "element-react";
import Draggable, { DraggableCore } from "react-draggable";

export default Instance;

function Instance(props) {
  return (
    <div className="child">
      <span className="handle mr-1">
        <i className="el-icon-rank"></i>
      </span>
      <Input placeholder="Name" className="input"></Input>
      <Input placeholder="Value" className="input-small ml-1"></Input>
      <Tooltip content={`Add child to {model.name}`}>
        <Button></Button>
      </Tooltip>
      <Tooltip content={`Delete`}>
        <Button></Button>
      </Tooltip>
      <div className="children-wrapper">
        <Draggable handle=".handle">
          <Instance></Instance>
        </Draggable>
      </div>
    </div>
  );
}
