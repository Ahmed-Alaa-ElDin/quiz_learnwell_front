import { ThemeProvider } from "@mui/system";
import "./App.css";
import Quiz from "./components/Quiz/Quiz";

import LearnWellTheme from "./theme/LearnWellTheme";

function App() {
  const theme = LearnWellTheme;
  return (
    <ThemeProvider theme={theme}>
      <Quiz />
    </ThemeProvider>
  );
}

export default App;
