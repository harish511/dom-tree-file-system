import React from "react";
import classNames from 'classnames';
import "./FileView.scss";

export default function FileView({ name, level,fileClassName,onFileSelect }){


  return (
    <li
      style={{ paddingLeft: `${level*25}px` }}     
      className={classNames("file-view",fileClassName)}   
      onClick={()=>{onFileSelect(level,name)} }
    >
      <span className="file-img"></span>
      <label className="file-view-label">{name}</label>
    </li>
  );
};

