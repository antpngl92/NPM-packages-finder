import { Provider } from "react-redux";
import { store } from "./redux";

import { LibraryList } from "./pages";

const App = () => {
  return (
    <Provider store={store}>
      <LibraryList />
    </Provider>
  );
};

export default App;
