import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import CommentCard from "../components/CommentCard";

const Comments = ({ commentsArr }) => {
  return (
    <StyledBox>
      {commentsArr?.map((comment, id) => (
        <CommentCard key={id} comment={comment} />
      ))}
    </StyledBox>
  );
};

export default Comments;

const StyledBox = styled(Box)`
  margin: auto;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 90%;
  background-color: #1b262c;
  border-radius: 30px;
`;
