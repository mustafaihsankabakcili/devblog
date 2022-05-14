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
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Router */}
        <Route path="/newblog" element={<PrivateRouter />}>
         <Route path="" element={<NewBlog />} />
        </Route>
        <Route path="/profile" element={<PrivateRouter />}>
         <Route path="" element={<Profile />} />
        </Route>
        <Route path="/updateblog/:id" element={<PrivateRouter />}>
         <Route path="" element={<UpdateBlog />} />
        </Route>
        <Route path="/details/:id" element={<PrivateRouter />}>
         <Route path="" element={<Details />} />
        </Route>
        
        {/* <Route path="/newblog" element={<NewBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateblog" element={<UpdateBlog />} />
        <Route path="/details" element={<Details />} /> */}

      </Routes>
    </Router>
  );
};

export default AppRouter;
