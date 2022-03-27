import Router from "router";
import defaultTheme from "themes/default";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
