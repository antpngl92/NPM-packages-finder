import axios from "axios";
import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import { TAction } from "../actions";

export const searchLibraries = (term: string) => {
  return async (dispatch: Dispatch<TAction>) => {
    dispatch({
      type: ActionType.SEARCH_LIBRARIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const library = data.objects.map((lib: any) => {
        return lib;
      });

      dispatch({
        type: ActionType.SEARCH_LIBRARIES_SUCCESS,
        payload: library,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_LIBRARIES_ERROR,
        payload: err.message,
      });
    }
  };
};
