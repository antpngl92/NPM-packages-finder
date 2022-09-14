import { ActionType } from "../action-types";

interface ISearchLibrariesAction {
  type: ActionType.SEARCH_LIBRARIES;
}

interface ISearchLibrariesSuccessAction {
  type: ActionType.SEARCH_LIBRARIES_SUCCESS;
  payload: string[];
}

interface ISearchLibrariesErrorAction {
  type: ActionType.SEARCH_LIBRARIES_ERROR;
  payload: string;
}

export type TAction =
  | ISearchLibrariesAction
  | ISearchLibrariesSuccessAction
  | ISearchLibrariesErrorAction;
