import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Grid,
  Button,
  Avatar,
  Typography,
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

  const handleSubmit = (event) => {
    event.preventDefault();

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
    } else {
      setConfirmPasswordError(false);
    }


    console.table(firstName, lastName, email, password, confirmPassword);
  };


  return (
    <form sx={{ flexGrow: 1 }} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            value={firstName}
            label="First Name"
            variant="outlined"
            required
            error={firstNameError}
            helperText={firstNameError && "Please enter your first name"}
            onChange={(event) => setFirstName(event.target.value)}
            // onBlur={() => setFirstNameError(firstName.trim() === "")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            value={lastName}
            label="Last Name"
            variant="outlined"
            required
            error={lastNameError}
            helperText={lastNameError && "Please enter your last name"}
            onChange={(event) => setLastName(event.target.value)}
            // onBlur={() => setLastNameError(lastName.trim() === "")}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            value={email}
            label="Email Address"
            variant="outlined"
            required
            type="email"
            error={emailError}
            helperText={emailError && "Please enter a valid email address"}
            onChange={(event) => setEmail(event.target.value)}
            // onBlur={() =>
            //   setEmailError(
            //     email.trim() === "" || !/^\S+@\S+\.\S+$/.test(email)
            //   )
            // }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            value={password}
            label="Password"
            variant="outlined"
            required
            type={showPassword ? "text" : "password"}
            error={passwordError}
            helperText={passwordError && "Please enter a password"}
            onChange={(event) => setPassword(event.target.value)}
            // onBlur={() => setPasswordError(password.trim() === "")}
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
            value={confirmPassword}
            label="Confirm Password"
            variant="outlined"
            required
            type={showPassword ? "text" : "password"}
            error={confirmPasswordError}
            helperText={
              confirmPasswordError &&
              // ? password !== confirmPassword
              "Passwords do not match"
              // : "Please confirm your password"
              // : ""
            }
            onChange={(event) => setConfirmPassword(event.target.value)}
            // onBlur={() =>
            //   setConfirmPasswordError(
            //     confirmPassword.trim() === "" || password !== confirmPassword
            //   )
            // }
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
          <Typography mb={1} variant="body2">
            Upload Profile picture
          </Typography>
          <input
            accept="image/*"
            // style={{ display: "none" }}
            id="profile-pic-upload"
            type="file"
            onChange={handleFileChange}
          />
          {/* <label htmlFor="profile-pic-upload">
            <Button variant="contained" component="span">
              Upload Profile Picture
            </Button>
          </label> */}
          {profilePic && (
            <Avatar
              sx={{ width: 56, height: 56, ml: 2, mt: 1 }}
              src={profilePic}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" fullWidth type="submit">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUp;