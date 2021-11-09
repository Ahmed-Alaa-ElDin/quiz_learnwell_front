import { AppBar, Button, Toolbar } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import { padding } from "@mui/system";

function BottomNav() {
  return (
    <AppBar sx={{ mt: 6, backgroundColor: "primary" }} elevation={1}>
      <Toolbar
        variant="dense"
        display="flex"
        sx={{
          backgroundColor: "primary.main",
          width: "100vw",
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "space-between",
          button: {
            color: "#fff",
            fontWeight:"bold",
            padding:"5px 10px"
          },
          ".css-1kjei3l-MuiButtonBase-root-MuiButton-root.Mui-disabled": {
            color: "#fffa",
          },
        }}
      >
        <Button disabled startIcon={<NavigateBeforeIcon />} size="small">
          Back
        </Button>
        <Button endIcon={<NavigateNextIcon />} size="small">
          Next
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default BottomNav;
