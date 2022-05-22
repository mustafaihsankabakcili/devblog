import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const CommentCard = ({ comment }) => {
  const [displayName, uid, photoURL, commentDate, commentTitle, commentText] =
    comment;

  const editedDate = commentDate
    .replace(",", ".")
    .replace("/", ".")
    .split(".")
    .map((date) => {
      if (date.length !== 2 && date.length !== 4) {
        date = "0" + date;
      }

      return date;
    })
    .join(".");

  return (
    <StyledBox>
      {photoURL ? (
        <img src={photoURL} alt="comment_owner" />
      ) : (
        <StyledAvatar>
          <h3>{displayName[0]}</h3>
        </StyledAvatar>
      )}
      <h4>{displayName}</h4>
      <h4>{commentTitle}</h4>
      <p>{commentText}</p>
      <p>{editedDate}</p>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  margin: auto;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  background-color: #000000;
  border-radius: 30px;
  overflow: hidden;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50px;
  }

  h3 {
    color: white;
  }

  h4 {
    color: #06ffc3;
  }

  p {
    color: white;
    font-size: 12px;
  }
`;

const StyledAvatar = styled(Box)`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #1b262c;
`;

export default CommentCard;
