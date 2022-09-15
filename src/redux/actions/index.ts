import { ActionType } from "../action-types";
import { TLibrary } from "../../pages/Library/utils";

interface ISearchLibrariesAction {
  type: ActionType.SEARCH_LIBRARIES;
}

interface ISearchLibrariesSuccessAction {
  type: ActionType.SEARCH_LIBRARIES_SUCCESS;
  payload: TLibrary[];
}

interface ISearchLibrariesErrorAction {
  type: ActionType.SEARCH_LIBRARIES_ERROR;
  payload: string;
}

export type TAction =
  | ISearchLibrariesAction
  | ISearchLibrariesSuccessAction
  | ISearchLibrariesErrorAction;
