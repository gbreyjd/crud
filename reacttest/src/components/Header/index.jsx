import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";

export default function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className="header__main">
      <div className="header__logo">Logo</div>
      <div className="header__link">
        <ul className="header__ul">
          <li className="header__li">
            <Link to="/">Paytient</Link>
          </li>
          <li className="header__li">
            <Link to="/posts">Пациенты</Link>
          </li>
          <li className="header__li">
            <Link to="/posts/id"></Link>
          </li>
          <li className="header__li">
            <Link to="/PMO">ПМО</Link>
          </li>
        </ul>
      </div>
      {isAuth ? (
        <div className="header__btns">
          <button className="header__btn">
            <Link>Вы зарегистрированы!</Link>
          </button>
          <button onClick={onClickLogout} className="header__btn">
            Выйти
          </button>
        </div>
      ) : (
        <div className="header__btns">
          <button className="header__btn">
            <Link to="/auth/login">Войти</Link>
          </button>
          <button className="header__btn">
            <Link to="/add/register">Регистрация</Link>
          </button>
        </div>
      )}
    </div>
  );
}
