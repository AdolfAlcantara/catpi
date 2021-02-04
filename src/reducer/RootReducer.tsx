import { combineReducers } from "redux";
import KittyReducer from "./KittyReducer";

export const rootReducer = combineReducers({kitties:KittyReducer});

export type RootState = ReturnType<typeof rootReducer>