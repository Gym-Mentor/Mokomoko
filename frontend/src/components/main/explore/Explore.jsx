import React, { useState, useEffect } from "react";
import List from "./List";
import FetchMore from "./FetchMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../../css/main/explore/Explore.css";
// test 이미지
import image1 from "../../../img/햄버거1.jpg";
import image2 from "../../../img/햄버거2.jpg";
import image3 from "../../../img/햄버거3.jpg";
import axios from "axios";
export default function App() {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let list = [
      { url: image1, isImage: true },
      { url: image2, isImage: true },
      { url: image3, isImage: true },
      { url: image1, isImage: true },
      { url: image2, isImage: true },
      { url: image3, isImage: true },
      { url: image1, isImage: true },
      { url: image2, isImage: true },
      { url: image3, isImage: true },
      { url: image1, isImage: true },
      { url: image2, isImage: true },
      { url: image3, isImage: true },
    ];
    //  axios({
    //   method: "post",
    //   url: "/guestbook/api/guestbook/list?no=" + page,
    //   type: "GET",
    //   dataType: "json",
    // })
    //   .then((result) => {
    //     list = result;
    //   })
    //   .catch((res) => {
    //     console.log(res);
    //   });
    setList((prev) => [...prev, ...list]);
    setLoading(false);
  }, [page]);

  return (
    <div className="explore-wrapper">
      <div className="explore-row">
        <div className="explore-col">
          <header className="explore-header">
            {"\u00A0"}
            <Link to="/search">
              <FontAwesomeIcon icon="search" className="search fa-2x" />
            </Link>
          </header>
          <div id="explore" className={page === 0 && loading ? "loading" : ""}>
            <List list={list} />
            <FetchMore loading={page !== 0 && loading} setPage={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
