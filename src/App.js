import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/JoinExam";
import Login from "./components/Home/Login";

import LearnWellTheme from "./theme/LearnWellTheme";

function App() {
  const theme = LearnWellTheme;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
