import React from "react";
import { FiCamera } from "react-icons/fi";
import "../../../css/main/profile/PostNone.css";
const PostNone = () => {
  return (
    <div>
      <div className="none-post-wrapper">
        <div className="none-post-pic">
          <div className="none-cam-wrap">
            <FiCamera id="fi-cam" size="medium" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostNone;
