import "./styles.css";
import React from "react";
import { TreeView } from "./TreeView";
import {
  getFilesForParent,
  getFolderForParent,
  doesExpandForFolder
} from "./fetch";
import { recursiveInsertElement, recursiveRemoveElement } from "./utils";
import * as allJsonData from "./data.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: allJsonData.default,
      childrenData: allJsonData.default.root.children
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const val = e.target.innerText;
    const resFiles = getFilesForParent(val);
    const resFolder = getFolderForParent(val);
    doesExpandForFolder[val] = !doesExpandForFolder[val];
    if (val === "Root") {
      if (doesExpandForFolder[val]) {
        this.setState({ childrenData: [...resFolder, ...resFiles] });
      } else {
        this.setState({ childrenData: [] });
      }
    } else if (!val.includes(".js")) {
      if (doesExpandForFolder[val]) {
        let newChildrenData = this.state.childrenData;
        recursiveInsertElement(val, resFiles, resFolder, newChildrenData);
        this.setState({ childrenData: newChildrenData });
      } else {
        console.log("hei");
        let newChildrenData = this.state.childrenData;
        recursiveRemoveElement(val, newChildrenData);
        this.setState({ childrenData: newChildrenData });
      }
    }
  }

  render() {
    const { data, childrenData, className } = this.state;

    return (
      <div className="app">
        <ul onClick={this.handleClick}>
          <li className={data.root.type}>{data.root.name} </li>
          <TreeView className={className} data={childrenData} />
        </ul>
      </div>
    );
  }
}
