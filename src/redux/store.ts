import { postsSaga } from "../saga/postsSaga";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: postsSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});

sagaMiddleware.run(postsSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
