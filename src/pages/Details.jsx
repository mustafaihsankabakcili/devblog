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
import NewCommentCard from "../components/NewCommentCard";

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

  const DUMMY_COMMENTS = [1, 2, 3];


  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleUpdateBlog = () => {
    if (currentUser.uid === uid) {
      navigate(`/updateblog/${id}`, { state: { blog } });
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
  }

  const handleDeleteBlog = () => {
    if (currentUser.uid === uid) {
      DeleteBlog(id);
    }
    navigate(-1);
  };

  const handleCommentAdderToggle = () => {
    setIsCommentAdderOpen(!isCommentAdderOpen);
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

        <StyledButton variant="contained" type="button">
          <FavoriteIcon />
          Like
        </StyledButton>
      </StyledBox>
      {isCommentAdderOpen && (
        <NewCommentCard
          comments={comments}
          handleUpdateComments={handleUpdateComments}
          handleCommentAdderToggle={handleCommentAdderToggle}
          isCommentAdderOpen={isCommentAdderOpen}
        />
      )}

      {!DUMMY_COMMENTS ? (
        <p>There is no comments to show!</p>
      ) : (
        DUMMY_COMMENTS?.map((comment) => (
          <p style={{ color: "#FFFFFF" }}>{comment}</p>
        ))
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
