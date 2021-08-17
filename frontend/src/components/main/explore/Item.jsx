import React from "react";

const Item = ({ image, post }) => {
  return (
    <div className="element-media-border">
      {/* {isImage ? ( */}
      <img className="element-media-content" src={image} />
      {/* {post} */}
      {/* ) : (
        <video className="element-media-content" src={url}></video>
      )} */}
    </div>
  );
};

export default Item;
