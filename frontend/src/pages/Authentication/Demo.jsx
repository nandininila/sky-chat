import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
  Button,
  Avatar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = () => {
    if (firstName.trim() === "") {
      setFirstNameError(true);
    }
    if (lastName.trim() === "") {
      setLastNameError(true);
    }
    if (email.trim() === "") {
      setEmailError(true);
    }
    if (password.trim() === "") {
      setPasswordError(true);
    }
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError(true);
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(URL.createObjectURL(file));
    };
    
    console.log(firstName, lastName, email, password, confirmPassword);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            required
            error={firstNameError}
            helperText={firstNameError && "Please enter your first name"}
            onChange={(event) => setFirstName(event.target.value)}
            onBlur={() => setFirstNameError(firstName.trim() === "")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            required
            error={lastNameError}
            helperText={lastNameError && "Please enter your last name"}
            onChange={(event) => setLastName(event.target.value)}
            onBlur={() => setLastNameError(lastName.trim() === "")}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            required
            type="email"
            error={emailError}
            helperText={emailError && "Please enter a valid email address"}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={() =>
              setEmailError(
                email.trim() === "" || !/^\S+@\S+\.\S+$/.test(email)
              )
            }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            required
            type={showPassword ? "text" : "password"}
            error={passwordError}
            helperText={passwordError && "Please enter a password"}
            onChange={(event) => setPassword(event.target.value)}
            onBlur={() => setPasswordError(password.trim() === "")}
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
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            required
            type={showPassword ? "text" : "password"}
            error={confirmPasswordError}
            helperText={
              confirmPasswordError
                ? password !== confirmPassword
                  ? "Passwords do not match"
                  : "Please confirm your password"
                : ""
            }
            onChange={(event) => setConfirmPassword(event.target.value)}
            onBlur={() =>
              setConfirmPasswordError(
                confirmPassword.trim() === "" || password !== confirmPassword
              )
            }
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
        </Grid>

        <Grid item xs={12}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="profile-pic-upload"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="profile-pic-upload">
            <Button variant="contained" component="span">
              Upload Profile Picture
            </Button>
          </label>
          {profilePic && (
            <Avatar sx={{ width: 56, height: 56, ml: 2 }} src={profilePic} />
          )}
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;