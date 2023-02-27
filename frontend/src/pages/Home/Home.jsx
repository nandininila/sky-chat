import React from "react";
import "./Home.css";
import Tabs from "./Tabs/Tabs";
import { Box, Container, Typography } from "@mui/material";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div className="bg">
      <ThemeProvider theme={theme}>
        <Container maxWidth={"md"} sx={{ py: 4 }}>
          <Box
            bgcolor="white"
            sx={{
              borderRadius: 1,
              py: 2,
            }}
          >
            <Typography variant="h4" color={"black"} textAlign="center">
              Sky Chat
            </Typography>
          </Box>

          <Box sx={{ pt: 2,}}>
            <Tabs></Tabs>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Home;
