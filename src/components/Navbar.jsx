import React, { useContext, useState } from "react";
import db from "../assets/db.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar>
      <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="big_logo"
        sx={{
          width: "75px",
          height: "75px",
          borderRadius: "50%",
          color: "#E7007E",
        }}
      >
        <StyledNavLink to="/devblog/">
          <img
            src={db}
            alt="db_logo"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </StyledNavLink>
      </IconButton>
      {!currentUser ? (
        <StyledBox>
          <StyledNavLink to="/devblog/">HOME</StyledNavLink>
          <StyledNavLink to="/devblog/about">ABOUT</StyledNavLink>
          <StyledNavLink to="/devblog/login">LOGIN</StyledNavLink>
          <StyledNavLink to="/devblog/register">REGISTER</StyledNavLink>
        </StyledBox>
      ) : (
        <StyledBox>
          <StyledNavLink to="/devblog/profile">
            {currentUser.displayName}
          </StyledNavLink>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <StyledAccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            disableScrollLock={true}
            style={{ marginTop: "50px" }}
          >
            <StyledLink
              to="/devblog/"
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </StyledLink>

            <StyledLink
              to="/devblog/profile"
            >
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
            </StyledLink>

            <StyledLink
              to="/devblog/newblog"
            >
              <MenuItem onClick={handleClose}>New Blog</MenuItem>
            </StyledLink>

            <StyledLink
              to="/devblog/"
              onClick={() => logOut(navigate)}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </StyledLink>
          </Menu>
        </StyledBox>
      )}
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const StyledAccountCircle = styled(AccountCircle)`
  width: 30px;
  height: 30px;
  color: #ffffff;
  &:hover {
    color: #e7007e;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    color: #e7007e;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e7007e;
  font-weight: 600;
  font-size: 20px;
`;
