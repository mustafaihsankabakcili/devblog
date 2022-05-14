import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <StyledContainer>
      <h3>DevBlog</h3>
      <img
        src="https://www.technologistan.pk/wp-content/uploads/2022/01/Bootcamp-MOOC-Learning-Tech-Coding-Programming-Dice-1024x640-1.png"
        alt="languages"
      />
      <p style={{ color: "#ffffff" }}>
          About Frontend Developer Mustafa Ihsan Kabakcili
        
          I'm currently learning Front-End Development Languages.
          I have already known JS, ReactJS, Python, HTML5, CSS3.
          
            Send email: mustafaihsankabakcili@gmail.com
      </p>
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

  h3 {
    color: #06ffc3;
  }

  img {
    width: 65%;
    border-radius: 20px;
  }
`;
