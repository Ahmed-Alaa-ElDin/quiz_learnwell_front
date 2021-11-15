import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import SendIcon from "@mui/icons-material/Send";
import {
  AppBar,
  Button,
  Card,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

function Header({ toggleDrawer }) {
  return (
    <AppBar
      color="common"
      elevation={0}
      sx={{
        width: "100%",
      }}
    >
      <Toolbar
        display="flex"
        variant="dense"
        sx={{ justifyItems: "center", justifyContent: "space-between" }}
      >
        <div>
          <Tooltip title="Question List">
            <IconButton
              size="small"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={(e) => toggleDrawer(true, e)}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Zoom In">
            <IconButton
              size="small"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ZoomInIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Translate">
            <IconButton
              size="small"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <GTranslateIcon />
            </IconButton>
          </Tooltip>
        </div>

        <Tooltip title="Question No.">
          <Card
            elevation={0}
            sx={{ padding: "2px 10px", backgroundColor: "primary.light" }}
          >
            <Typography variant="h6" display="inline-block">
              12
            </Typography> {" "}
            <Typography variant="subtitle2" display="inline-block">
              / 20
            </Typography>
          </Card>
        </Tooltip>

        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "success.main",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "success.light" },
          }}
          endIcon={<SendIcon style={{ fontSize: "12px" }} />}
        >
          Submit
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
