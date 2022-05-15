import AppRouter from "./router/AppRouter";
import { Box, styled } from "@mui/material";
import AuthContextProvider from "./contexts/AuthContext";
import BlogContextProvider from "./contexts/BlogContext";


function App() {
  return (
    <div>
      <AuthContextProvider>
      <BlogContextProvider>
      <StyledBody>
        <AppRouter />
      </StyledBody>
      </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

const StyledBody = styled(Box)`
  background-color: #1B262C;
  padding: 150px;
  min-height: 100vh;
  position: relative;
`;
