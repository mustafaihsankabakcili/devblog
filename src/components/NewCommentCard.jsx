import React, { useContext, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button, styled } from "@mui/material";
import { UpdateBlogDB } from "../utils/firebase";
import { AuthContext } from "../contexts/AuthContext";

const commentDate = new Date()
  .toLocaleDateString()
  .split(",")[0]
  .replace("/", ",");

const NewCommentCard = ({
  blog,
  handleCommentAdderToggle,
  isCommentAdderOpen,
}) => {
  const { currentUser } = useContext(AuthContext);
  const [newBlog, setNewBlog] = useState(blog);
  const [commentTitle, setCommentTitle] = useState("");
  const [comment, setComment] = useState("");

  const {
    displayName,
    date,
    title,
    photoURL,
    imgUrl,
    content,
    id,
    uid,
    comments,
    likes,
  } = blog;

  useEffect(() => {
    first
  
    
  }, [third])

  // Burda kaldim
  const handleNewComment = (e) => {
    e.preventDefault();

    const oldComments = JSON.parse(comments);
    oldComments.push([
      currentUser.displayName,
      currentUser.uid,
      currentUser.photoURL,
      commentDate,
      commentTitle,
      comment,
    ]);
    blog.comments = JSON.stringify(oldComments);

    UpdateBlogDB(
      displayName,
      date,
      title,
      photoURL,
      imgUrl,
      content,
      id,
      uid,
      comments,
      likes
    );

    setCommentTitle("");
    setComment("");
    handleCommentAdderToggle(!isCommentAdderOpen);
  };
  // Burda kaldim

  return (
    <StyledStack
      component="form"
      sx={{
        width: "25ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleNewComment(e)}
    >
      <h1>NEW COMMENT</h1>
      <StyledTextField
        hiddenLabel
        placeholder="Title"
        value={commentTitle}
        variant="filled"
        size="small"
        type="text"
        inputProps={{ maxLength: 12 }}
        onChange={(e) => setCommentTitle(e.target.value)}
      />

      <StyledTextField
        hiddenLabel
        placeholder="Please give some details."
        value={comment}
        multiline
        rows={3}
        variant="filled"
        inputProps={{ maxLength: 128 }}
        onChange={(e) => setComment(e.target.value)}
      />

      <StyledButton variant="contained" type="submit">
        Submit
      </StyledButton>
    </StyledStack>
  );
};

export default NewCommentCard;

const StyledStack = styled(Stack)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  padding: 15px;
  height: fit-content;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid silver;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
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
