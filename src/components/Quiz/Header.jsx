import React from "react";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import {
  AppBar,
  Button,
  Card,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box, padding } from "@mui/system";

function Header({ toggleDrawer }) {
  return (
    <AppBar
      color="common"
      elevation={0}
      sx={{
        // display:"flex",
        // alignItems : "center",
        // justifyContent:"space-between",
        width: "100%",
      }}
    >
      <Toolbar
        display="flex"
        sx={{ justifyItems: "center", justifyContent: "space-between" }}
      >
        <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Tooltip title="Zoom In">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ZoomInIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Translate">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
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
            sx={{ padding: "5px 10px", backgroundColor: "#e7e7e7" }}
          >
            <Typography variant="h6" color="initial" display="inline-block">
              12
            </Typography>{" "}
            <Typography
              variant="subtitle2"
              color="initial"
              display="inline-block"
            >
              / 20
            </Typography>
          </Card>
        </Tooltip>
      </Toolbar>
      {/* <Container>
        <Typography variant="h1" color="textSecondary">
          secondary
        </Typography>
      </Container> */}
    </AppBar>
  );
}

export default Header;
