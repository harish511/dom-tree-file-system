import FileView from "./FileView";
import FolderView from "./FolderView";
export function renderDomNodes(domTree, level,props) {
  const folderDomElements = [];
  const DOM_NODE=1;
  const TEXT_NODE=3;
  domTree &&
    domTree.childNodes.forEach((node,index) => {
      if (node.nodeType === DOM_NODE) {
        folderDomElements.push(
          <FolderView
            name={node.nodeName}
            level={level + 1}
            key={`folder-${level}-${index}`}            
            node={node}
            {...props}
          />
        );
      }
      else if (node.nodeType === TEXT_NODE) {
        const textValue = node.nodeValue.trim();
        if (textValue) {
          folderDomElements.push(
            <FileView
              level={level + 1}
              key={`file-${level}-${index}`}
              name={textValue}
              {...props}
            />
          );
        }
      }
    });

  return folderDomElements;
}

export function stringToHtmlDom(str) {
    const parser = new DOMParser();
    let doc;

    if(!str){
      return doc;
    }
     let format;
    if (
        str.includes("<head>") ||
        str.includes("<HEAD>") ||
        str.includes("<html>") ||
        str.includes("<HTML>")
    ) {
      format= "text/html";
    }else{
      format= "text/xml";
    }
    return parser.parseFromString(str, format);
};

