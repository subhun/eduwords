import React, { useEffect, useState } from "react";
import "../css/loading.css";
import NavbarT from "../Component/NavbarT";
import Navbar from "../Component/Navbar";
import LoadingImg from "../img/loading.png";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");
const Loading = () => {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const textArray = ["Loading", "Loading .", "Loading ..", "Loading ..."];
    let index = 0;

    const intervalId = setInterval(() => {
      setLoadingText(textArray[index]);
      index = (index + 1) % textArray.length; // 인덱스 순환
    }, 500); // 0.5초마다 변경

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 타이머 클리어
  }, []);
  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <br />
      <br />
      <br />
      <div className="loadingdiv">
        <img src={LoadingImg} className="loadingImg" alt="Loading" />
        <br />
        <br />
        <b id="LoadingText">{loadingText}</b>
        <br />
        <br />
        <table id="LoadingNow">
          <tr id="Load1">문제 생성중입니다.</tr>
          <br />
          <tr id="Load2">잠시만 기다려주세요.</tr>
        </table>
      </div>
    </div>
  );
};

export default Loading;
