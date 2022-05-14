import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Card from "../components/Card";
import { styled } from "@mui/material";
import loading from "../assets/loading.gif";
import { BlogContext } from "../contexts/BlogContext";

const Dashboard = () => {
  const { isLoading, blogList } = useContext(BlogContext);

  return (
    <StyledContainer>
      {isLoading ? (
        <img src={loading} alt="" style={{ width: "300px", border: "none" }} />
      ) : blogList?.length === 0 ? (
        <p>Error, There Is No Data..</p>
      ) : (
        blogList?.map((blog, i) => <Card key={i} {...blog} />).reverse()
      )}
    </StyledContainer>
  );
};

export default Dashboard;

const StyledContainer = styled(Container)`
  margin: auto;
  padding: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  background-color: #000000;
  border-radius: 20px;
`;
