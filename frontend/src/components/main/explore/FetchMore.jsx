import React, { useRef, useEffect } from "react";
import Loading from "../../util/Loading";

const FetchMore = ({ loading, setPage, page }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    console.log(page);
    if (isIntersecting) {
      setPage((prev) => prev + 1);
    }
  });

  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    const target = fetchMoreTrigger.current;
    return () => {
      fetchMoreObserver.unobserve(target);
    };
  }, []);

  return <div id="fetchMore" className={loading ? <Loading /> : ""} ref={fetchMoreTrigger} />;
};

export default FetchMore;
