import React, { useRef, useEffect } from "react";

const FetchMore = ({ loading, setPage }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    setPage((prev) => prev + 1);
    console.log("다음페이지");
  });

  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    const target = fetchMoreTrigger.current;
    return () => {
      fetchMoreObserver.unobserve(target);
    };
  }, []);

  return <div id="fetchMore" className={loading ? "loading" : ""} ref={fetchMoreTrigger} />;
};

export default FetchMore;
