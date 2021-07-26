import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const location = window.location;
const NaverTest = () => {
  useEffect(() => {
    console.log(token);
  }, []);
  if (!location.hash) return;
  const token = location.hash.split("=")[1].split("&")[0];

  return (
    <div>
      <h1>네이버 로그인 테스트 화면입니다.</h1>
      <h3>{location.hash}</h3>
    </div>
  );
};

export default NaverTest;
