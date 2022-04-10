import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../sagas";
import {composeWithDevTools} from "@redux-devtools/extension";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;