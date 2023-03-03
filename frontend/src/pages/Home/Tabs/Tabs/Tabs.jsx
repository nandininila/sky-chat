import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { AppBar, Tabs } from "@mui/material";
import Login from "../../../Authentication/Login";
import SignUp from "../../../Authentication/SignUp";


export default function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", typography: "body1", bgcolor: "background.paper" }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              variant="fullWidth"
              textColor="inherit"
            >
              <Tab label="Login" value="1" />
              <Tab label="Sign Up" value="2" />
            </Tabs>
          </AppBar>
        </Box>

        <TabPanel value="1"> <Login></Login> </TabPanel>
        <TabPanel value="2"> <SignUp></SignUp> </TabPanel>
      </TabContext>
    </Box>
  );
}
