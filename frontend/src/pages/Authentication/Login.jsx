import React, { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [emailError, setEmailError] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (email.trim() === "") {
      setEmailError(true);
    }
    // console.log(`Username: ${email}, Password: ${password}`);
    console.log(email, password);
  };


  return (
    <form onSubmit={handleLogin}>
      <Stack spacing={3}>
        <TextField
          fullWidth
          value={email}
          label="Email"
          size="small"
          type="email"
          error={emailError}
          helperText={emailError && "Please enter a valid email address"}
          required
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          fullWidth
          value={password}
          label="Password"
          variant="outlined"
          size="small"
          required
          type={showPassword ? "text" : "password"}
          onChange={(event) => setPassword(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button variant="contained" type="submit">
          Login
        </Button>
        
        <Button variant="contained" color="secondary" onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}>
          Guest User
        </Button>
      </Stack>
    </form>
  );
};

export default Login;
