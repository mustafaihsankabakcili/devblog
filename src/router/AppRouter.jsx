import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import Details from "../pages/Details";
import PrivateRouter from './PrivateRouter';



const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Router */}
        <Route path="/devblog/" element={<Dashboard />} />
        <Route path="/devblog/about" element={<About />} />
        <Route path="/devblog/login" element={<Login />} />
        <Route path="/devblog/register" element={<Register />} />

        {/* Private Router */}
        <Route path="/devblog/newblog" element={<PrivateRouter />}>
         <Route path="" element={<NewBlog />} />
        </Route>
        <Route path="/devblog/profile" element={<PrivateRouter />}>
         <Route path="" element={<Profile />} />
        </Route>
        <Route path="/devblog/updateblog/:id" element={<PrivateRouter />}>
         <Route path="" element={<UpdateBlog />} />
        </Route>
        <Route path="/devblog/details/:id" element={<PrivateRouter />}>
         <Route path="" element={<Details />} />
        </Route>
      </Routes>
    </Router>
    
  );
};

export default AppRouter;
