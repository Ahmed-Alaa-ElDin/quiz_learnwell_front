import { Button, TextField, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/img/HybridLogo-350.png";

function Login() {
  const Main = styled("main")(({ theme }) => ({
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
  }));

  const ButtonDiv = styled("div")({
    position: "absolute",
    top: "15px",
    right: "15px",
  });

  const Welcome = styled("h2")(({ theme }) => ({
    color: theme.palette.contrast.main,
    margin: "0 0 15px",
    [theme.breakpoints.up("xs")]: { fontSize: "6vw" },
    [theme.breakpoints.up("md")]: { fontSize: "3.5vw" },
  }));

  const LogoDiv = styled("div")({
    textAlign: "center",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
  });

  const Logo = styled("img")(({ theme }) => ({
    padding: "0 0 20px",
    [theme.breakpoints.up("xs")]: { width: "50vw" },
    [theme.breakpoints.up("md")]: { width: "30vw" },
  }));

  const FormDiv = styled("div")(({ theme }) => ({
    width: "70vw",
    backgroundColor: theme.palette.contrast.main,
    padding: "15px 20px",
    borderRadius: "10px",
    boxShadow:
      "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
  }));

  return (
    <Main>
      {/* Login Button */}
      <ButtonDiv>
        <Link to="/">
          <Button
            variant="contained"
            color="contrast"
            style={{ fontWeight: "bold" }}
          >
            Join Exam
          </Button>
        </Link>
      </ButtonDiv>
      {/* Login Button */}

      {/* Logo & Form */}
      <LogoDiv>
        <Welcome>Welcome to</Welcome>
        <Logo src={LogoImg} alt="Logo" />
        <FormDiv>
          <Typography
            variant="h5"
            color="primary"
            sx={{ mt: 1, mb: 2, fontWeight: "bold" }}
          >
            Login
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="Your Code" fullWidth required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Password" fullWidth required type="password" />
            </Grid>
          </Grid>
          <Button variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
        </FormDiv>
      </LogoDiv>
      {/* Logo & Form */}
    </Main>
  );
}

export default Login;
