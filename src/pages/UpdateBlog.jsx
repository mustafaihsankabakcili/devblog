import React, { useContext, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Box, Button, styled } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { UpdateBlogDB } from "../utils/firebase";
import { IoCaretBackCircleSharp } from "react-icons/io5";

const UpdateBlog = () => {
  const { currentUser } = useContext(AuthContext);

  const location = useLocation();
  const blog = location.state.blog;
  const {
    displayName,
    date,
    photoURL,
    title: oldTitle,
    imgUrl: oldImgUrl,
    content: oldContent,
    id,
    uid,
    comments,
    likes
  } = blog;

  const [title, setTitle] = useState(oldTitle);
  const [imgUrl, setImgUrl] = useState(oldImgUrl);
  const [content, setContent] = useState(oldContent);

  const navigate = useNavigate();

  const handleUpdateBlog = (e) => {
    e.preventDefault();

    if (currentUser.uid === uid) {
      UpdateBlogDB(
        displayName,
        date,
        title ? title : oldTitle,
        photoURL,
        imgUrl ? imgUrl : oldImgUrl,
        content ? content : oldContent,
        id,
        uid,
        comments,
        likes
      );
    }
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledStack
      component="form"
      sx={{
        width: "25ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleUpdateBlog(e)}
    >
      <h1>UPDATE BLOG</h1>
      <StyledTextField
        hiddenLabel
        placeholder="Title"
        variant="filled"
        size="small"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <StyledTextField
        hiddenLabel
        placeholder="Image URL"
        variant="filled"
        size="small"
        type="text"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />

      <StyledTextField
        hiddenLabel
        placeholder="Please give some details."
        multiline
        rows={10}
        variant="filled"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <StyledBox>
      <StyledButton variant="contained" type="submit">
        Submit
      </StyledButton>
      <StyledButton variant="contained" type="button" onClick={handleBack}>
        <IoCaretBackCircleSharp />
        Back
      </StyledButton>
      </StyledBox>

    </StyledStack>
  );
};

export default UpdateBlog;

const StyledStack = styled(Stack)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid white;
`;

const StyledTextField = styled(TextField)`
  width: 300px;
`;

const StyledBox = styled(Box)`
  margin: auto;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const StyledButton = styled(Button)`
  background-color: #06ffc3;
  color: white;
  width: 200px;

  &:hover {
    background-color: #e7007e;
    color: white;
  }
`;
