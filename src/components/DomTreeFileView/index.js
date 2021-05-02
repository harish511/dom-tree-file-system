import React  from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {renderDomNodes} from "./DomTreeFileViewHelper";
import "./FileTreeView.scss";

function DomTreeFileView(props) {
  const { domTree, className } = props;

  return (
    <ul data-level="0" className={classNames("file-system",className)}>
      {renderDomNodes(domTree, 0,props)}
    </ul>
  );
}

DomTreeFileView.propTypes = {
  domTree: PropTypes.object.isRequired, 
  expended: PropTypes.bool,
  className: PropTypes.string,
  fileClassName: PropTypes.string,
  folderClassName: PropTypes.string, 
  onFolderSelect: PropTypes.func,
  onFileSelect: PropTypes.func,
}

export default DomTreeFileView;
