import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Paytient from "./page/Paytient";
import Analitics from "./page/Analitics";
import FormRegister from "./components/Register";
import Props from "./page/props";
import Layout from "./components/Header/Layout";
import Pmo from "./page/PMO";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";


function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Paytient />} />
          {/* <Route path="/Analitics" element={<Analitics />} /> */}
          <Route path="/posts" element={<Props />} />
          <Route path="/PMO" element={<Pmo />} />
          <Route path="/posts/:id" element={<Analitics />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/add/register" element={<FormRegister />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
