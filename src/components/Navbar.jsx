import React, { useContext, useState } from "react";
import db from "../assets/db.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <StyledNavLink style={{ color: "#E7007E" }} to="/devblog/">
              <img
                src={db}
                alt="db_logo"
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "30%",
                  color: "#E7007E",
                }}
              />
            </StyledNavLink>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
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
                sx={{ ml: 2 }}
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
                <Link
                  to="/devblog/"
                  style={{ color: "#E7007E", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>

                <Link
                  to="/devblog/profile"
                  style={{ color: "#E7007E", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                </Link>

                <Link
                  to="/devblog/newblog"
                  style={{ color: "#E7007E", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>New Blog</MenuItem>
                </Link>

                <Link
                  to="/devblog/"
                  onClick={() => logOut(navigate)}
                  style={{ color: "#E7007E", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Link>
              </Menu>
            </StyledBox>
          )}
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

const StyledAppBar = styled(AppBar)`
  background-color: #000000;
  position: fixed;
  top: 0;
  left: 0;

  ul {
    margin-top: 50px;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const StyledAccountCircle = styled(AccountCircle)`
  width: 30px;
  heigth: 50px;
  color: #e7007e;
  &:hover {
    color: #ffffff;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #e7007e;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    color: #ffffff;
  }
`;
