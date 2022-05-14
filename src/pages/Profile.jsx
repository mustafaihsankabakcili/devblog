import styled from "@emotion/styled";
import { Button, Container } from "@mui/material";
import { Box } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { RiQuillPenFill } from "react-icons/ri";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const { uid, displayName, photoURL, email } = currentUser;

  return (
    <StyledContainer>
      <h2>My Profile</h2>
      <StyledBox>
        <h4>
          <b>Name:</b> {displayName}
        </h4>
        <h4>
          <b>User ID:</b> {uid}
        </h4>
        <h4>
          <b>Image:</b>
        </h4>
        <img
          src={
            photoURL
              ? photoURL
              : "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png"
          }
          alt="languages"
          style={{ width: "100px" }}
        />
        <h4>
          <b>E-mail:</b> {email}
        </h4>
        <h4>
          <b>Password:</b> **********
        </h4>
      </StyledBox>
      <StyledButton variant="contained" type="button">
        <RiQuillPenFill />
        Update Profile
      </StyledButton>
    </StyledContainer>
  );
};

export default Profile;

const StyledContainer = styled(Container)`
  margin: auto;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  background-color: #000000;
  border-radius: 20px;

  h2 {
    color: #06ffc3;
  }

  h4 {
    color: #06ffc3;
  }

  b {
    color: #e7007e;
  }

  img {
    width: 65%;
    border-radius: 20px;
  }
`;

const StyledBox = styled(Box)`
  margin: auto;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
`;

const StyledButton = styled(Button)`
  background-color: #06ffc3;
  color: white;

  &:hover {
    background-color: #e7007e;
    color: white;
  }
`;
