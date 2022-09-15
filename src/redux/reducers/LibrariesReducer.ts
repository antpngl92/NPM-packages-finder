import { TAction } from "../actions";
import { ActionType } from "../action-types";
import { TLibrary } from "../../pages/Library/utils";

interface ILibrariesState {
  loading: boolean;
  error: string | null;
  data: TLibrary[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: ILibrariesState = initialState,
  action: TAction
): ILibrariesState => {
  switch (action.type) {
    case ActionType.SEARCH_LIBRARIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_LIBRARIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_LIBRARIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
