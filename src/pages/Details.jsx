import styled from "@emotion/styled";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { MdDelete } from "react-icons/md";
import { RiQuillPenFill } from "react-icons/ri";
import { IoCaretBackCircleSharp } from "react-icons/io5";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { DeleteBlog, UpdateBlogDB } from "../utils/firebase";
import NewCommentSection from "../components/NewCommentSection";
import Comments from "../components/Comments";

const About = () => {
  const { currentUser } = useContext(AuthContext);
  const [isCommentAdderOpen, setIsCommentAdderOpen] = useState(false);

  const location = useLocation();
  const blog = location.state.blog;

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

  const commentsArr = JSON.parse(comments);
  const likesArr = JSON.parse(likes);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleUpdateBlog = () => {
    if (currentUser.uid === uid) {
      navigate(`/devblog/updateblog/${id}`, { state: { blog } });
    }
  };

  const handleUpdateComments = (updatedComments) => {
    blog.comments = updatedComments;
    UpdateBlogDB(
      displayName,
      date,
      title,
      photoURL,
      imgUrl,
      content,
      id,
      uid,
      updatedComments,
      likes
    );
  };

  const handleDeleteBlog = () => {
    if (currentUser.uid === uid) {
      DeleteBlog(id);
    }
    navigate(-1);
  };

  const handleCommentAdderToggle = () => {
    setIsCommentAdderOpen(!isCommentAdderOpen);
  };

  const handleLikes = (currentUserID) => {
    if (likesArr.includes(currentUserID)) {
      alert("You have already liked!");
    } else {
      likesArr.push(currentUserID);
      const newLikes = JSON.stringify(likesArr);
      blog.likes = newLikes;
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
        newLikes
      );
    }
  };

  return (
    <StyledContainer>
      {currentUser.uid === uid && (
        <StyledBox>
          <StyledButton
            variant="contained"
            type="button"
            onClick={handleUpdateBlog}
          >
            <RiQuillPenFill />
            Update
          </StyledButton>

          <StyledButton
            variant="contained"
            type="button"
            onClick={handleDeleteBlog}
          >
            <MdDelete />
            Delete
          </StyledButton>
        </StyledBox>
      )}
      <h2>{title}</h2>
      <img src={imgUrl} alt="imgUrl" />
      <Typography variant="body2" color="white">
        {content}
      </Typography>
      <Typography variant="body2" color="white">
        {displayName}
      </Typography>
      <Typography variant="body2" color="white">
        {date}
      </Typography>

      <StyledButton variant="contained" type="button" onClick={handleBack}>
        <IoCaretBackCircleSharp />
        Back
      </StyledButton>
      <StyledBox>
        <StyledButton
          variant="contained"
          type="button"
          onClick={handleCommentAdderToggle}
        >
          <ModeCommentIcon />
          Comment
        </StyledButton>

        <StyledButton
          variant="contained"
          type="button"
          onClick={() => handleLikes(currentUser.uid)}
        >
          <FavoriteIcon />
          Like
        </StyledButton>
      </StyledBox>
      {isCommentAdderOpen && (
        <NewCommentSection
          comments={comments}
          handleUpdateComments={handleUpdateComments}
          handleCommentAdderToggle={handleCommentAdderToggle}
          isCommentAdderOpen={isCommentAdderOpen}
        />
      )}

      {commentsArr.length === 0 ? (
        <p>There are no comments to show!</p>
      ) : (
        <Comments commentsArr={commentsArr} />
      )}
    </StyledContainer>
  );
};

export default About;

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
  img {
    width: 65%;
    border-radius: 20px;
  }
`;

const StyledBox = styled(Box)`
  margin: auto;
  padding: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 90%;
`;

const StyledButton = styled(Button)`
  background-color: #06ffc3;
  color: white;
  width: 200px;
  position: static;
  &:hover {
    background-color: #e7007e;
    color: white;
  }
`;
