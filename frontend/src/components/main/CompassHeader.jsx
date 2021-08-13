import React, { useEffect, useState } from "react";
import "../../css/main/CompassHeader.css";
const CompassHeader = () => {
  const [results, setResults] = useState("");
  const [updateField, setUpdateField] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    console.log(keyword);
  }, [keyword]);

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <div className="search-form">
        <div className="search-box">
          <input id="search-ipt" type="text" value={keyword} onChange={onChangeKeyword} />
          <span id="ospan"></span>
        </div>
      </div>
    </>
  );
};

export default CompassHeader;
