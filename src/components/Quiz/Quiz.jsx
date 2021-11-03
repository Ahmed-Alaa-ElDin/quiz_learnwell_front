import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";
import QuestionsList from "./QuestionsList";

function Quiz() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open, event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header toggleDrawer={toggleDrawer} />
      <QuestionsList toggleDrawer={toggleDrawer} open={open} />
    </Box>
  );
}

export default Quiz;
