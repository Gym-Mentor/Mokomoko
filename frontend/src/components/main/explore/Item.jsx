import React from "react";

const Item = ({ url, isImage }) => {
  return (
    <div className="element-media-border">
      {isImage ? (
        <img className="element-media-content" src={url} />
      ) : (
        <video className="element-media-content" src={url}></video>
      )}
    </div>
  );
};

export default Item;
