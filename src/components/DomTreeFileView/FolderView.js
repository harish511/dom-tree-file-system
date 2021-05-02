import React, {useState,useEffect} from "react";
import classNames from 'classnames';
import {renderDomNodes} from "./DomTreeFileViewHelper";

import "./FolderView.scss";

export default  function FolderView ({name, node, level,folderClassName,onFolderSelect,...props}) {
  
const [expanded,setExpanded]=useState(props.expanded||false);

  const toggleFolder = () => {
    setExpanded(!expanded);
  };

   useEffect(() => {
    onFolderSelect&&onFolderSelect(level,node,expanded);
  }, [expanded, onFolderSelect]);

    return (
      <li
        
        className={classNames("folder-view",folderClassName)}      
      >
        <div style={{ paddingLeft: `${level*20}px` }}>
          <span           
            className = {classNames({"expanded":expanded, "collapsed":!expanded})}
            onClick={toggleFolder}
          ></span>
          <span className={classNames('folder-img',{"private" : node.nodeName === "HEAD"})}></span>
          <label className="folder-label">{name}</label>
        </div>

         <ul data-level={level} className={classNames({'display-children':expanded,'hide-children':!expanded})}>{renderDomNodes(node, level,props)}</ul>
      </li>
    );

}

