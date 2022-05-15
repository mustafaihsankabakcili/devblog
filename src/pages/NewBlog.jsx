import React, { useContext, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { AddBlog } from "../utils/firebase";
import { IoCaretBackCircleSharp } from "react-icons/io5";

const date = new Date().toLocaleDateString().split(",")[0].replace("/", ",");
const comments = [];
const likes = [];

const NewBlog = () => {
  const { currentUser } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleNewBlog = (e) => {
    e.preventDefault();
    AddBlog(
      currentUser.displayName,
      currentUser.uid,
      currentUser.photoURL ? currentUser.photoURL : '',
      date,
      title,
      imgUrl,
      content,
      JSON.stringify(comments),
      JSON.stringify(likes)
    );
    navigate("/devblog/");
  };

  const handleBack = () => {
    navigate('/devblog/');
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
      onSubmit={(e) => handleNewBlog(e)}
    >
      <h1>NEW BLOG</h1>
      <StyledTextField
        hiddenLabel
        placeholder="Title"
        variant="filled"
        size="small"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />

      <StyledTextField
        hiddenLabel
        placeholder="Image URL"
        variant="filled"
        size="small"
        type="text"
        onChange={(e) => setImgUrl(e.target.value)}
      />

      <StyledTextField
        hiddenLabel
        placeholder="Please give some details."
        multiline
        rows={10}
        variant="filled"
        onChange={(e) => setContent(e.target.value)}
      />

    <StyledBox>
      <StyledButton variant="contained" type="submit">
        Submit
      </StyledButton>
      <StyledButton variant="contained" type="button" onClick={handleBack}>
        <IoCaretBackCircleSharp />
        Back to Home
      </StyledButton>
      </StyledBox>


    </StyledStack>
  );
};

export default NewBlog;

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
