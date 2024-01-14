import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import React from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import Header from "../pages/header";
import Register from "../pages/register";
import Summary from "../pages/summary"
import CreatePosts from "../components/CreatePosts/CreatePosts"
import Home from "../pages/Home";
import AuthorsPage from "../pages/AuthorsPage";

const AppRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <>
      {isLoggedIn && <Header isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/summary" /> : <Login />}
        />
        <Route
          path="/registration"
          element={isLoggedIn ? <Navigate to="/summary" /> : <Register />}
        />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/summary" element={<Summary/>} />
          <Route path="/create" element={<CreatePosts />}/>
          <Route path="/authors" element={<AuthorsPage/>}/>
          <Route path="/home" element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
