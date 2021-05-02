import React, { Component } from "react";
import DomTreeFileView from "./DomTreeFileView";
import {stringToHtmlDom} from "./DomTreeFileView/DomTreeFileViewHelper";
import "./DomTreeFileViewModal.scss";


const htmlString = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>DOM Tree as a File System</title>
  </head>
  <body>
    <h1>An Example Site</h1>
    <h3>To Demonstrate what some nested nodes might look like</h3>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
    <p>
      Some Text
      <!-- A Comment -->
      More Text
    </p>
  </body>
</html>

`;
export default class DomTreeFileViewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  render() {
    const domTree = stringToHtmlDom(htmlString);
    return (
      <section className="dom-tree-file-modal">
        <header className="dom-tree-modal-header">
          <h4>Title</h4>
          <a href="#" className="modal-close" onClick={this.props.onModalClose}>
            <span className="sprite sprite-close" />
          </a>
        </header>
        <section className="dom-tree-content-header">
          <h2>Label</h2>
        </section>
        <div className="dom-tree-modal-body">
          <DomTreeFileView domTree={domTree} onFileSelect={(a1,a2,a3)=>{
            debugger
          }}/>
        </div>
        <footer className="dom-tree-modal-footer">
          <a href="#">Link</a>
          <button type="button" className="button">
            Done
          </button>
        </footer>
      </section>
    );
  }
}
