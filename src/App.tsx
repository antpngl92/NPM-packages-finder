import { Provider } from "react-redux";
import { store } from "redux_state";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "components";
import theme from "theme";

import { LibraryList } from "./pages";

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Box
        sx={{
          p: theme.spacing(5),
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        <LibraryList />
      </Box>
    </Provider>
  );
};

export default App;
