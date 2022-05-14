import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button, styled } from "@mui/material";
import { createUser } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { signInGoogleProvider } from "../auth/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    let displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName, navigate);
  };

  const signInWithGoogleProvider = () => {
    signInGoogleProvider(navigate);
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
      onSubmit={(e) => handleRegister(e)}
    >
      <h1>REGISTER</h1>
      <StyledTextField
        hiddenLabel
        placeholder="First Name"
        variant="filled"
        size="small"
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
      />

      <StyledTextField
        hiddenLabel
        placeholder="Last Name"
        variant="filled"
        size="small"
        type="text"
        onChange={(e) => setLastName(e.target.value)}
      />

      <StyledTextField
        hiddenLabel
        placeholder="E-mail"
        variant="filled"
        size="small"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <StyledTextField
        hiddenLabel
        placeholder="Password"
        variant="filled"
        size="small"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton variant="contained" type="submit">
        Register
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => signInWithGoogleProvider()}
      >
        Continue with{" "}
        <img
          src="https://www.pikpng.com/pngl/b/44-442110_jpg-black-and-white-library-google-logo-png.png"
          alt="google"
          style={{ width: "25px", height: "25px", marginLeft: "10px" }}
        />
      </StyledButton>
    </StyledStack>
  );
};

export default Register;

const StyledStack = styled(Stack)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid white;
`;

const StyledTextField = styled(TextField)`
  width: 300px;
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
