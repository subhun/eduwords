import React, { useState } from "react";
import lg from "../img/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavbarT = () => {
  const [loginIn, setLoginIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoginIn(false);
  };

  const handleLoginClick = (e) => {
    if (!loginIn) {
      e.preventDefault(); // 클릭 이벤트의 기본 동작 중지
      alert("로그인 해주세요.");
      navigate("/login");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div id="bar">
          <div id="div1"></div>
          <div id="div2">
            {loginIn ? "환영합니다. {''}님" : "로그인 해주세요"}
          </div>
          <div id="div3">
            {loginIn ? (
              <>
                <Link to="/sp" className="startLogin">
                  마이 페이지
                </Link>
                <button onClick={handleLogout} className="startJoin">
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="startLogin">
                  로그인
                </Link>
                <Link to="/tp" className="startJoin">
                  회원가입
                </Link>
              </>
            )}
          </div>
          <Link to="/">
            <img src={lg} id="logo" alt="logo" />
          </Link>
        </div>

        <ul>
          <li>
            <NavLink
              to="/is"
              id="navA"
              activeClassName="active"
              onClick={handleLoginClick}
            >
              내 학생관리
            </NavLink>
          </li>
          <li>
            <a href="#createp" id="navA" onClick={handleLoginClick}>
              문제 생성
            </a>
          </li>
          <li>
            <a href="#plist" id="navA" onClick={handleLoginClick}>
              문제 리스트
            </a>
          </li>
          <li>
            <a href="#result" id="navA" onClick={handleLoginClick}>
              내 정보 수정
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarT;
