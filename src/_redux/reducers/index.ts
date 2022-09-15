import { combineReducers } from "redux";

import LibrariesReducer from "./LibrariesReducer";

const reducers = combineReducers({
  libraries: LibrariesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
