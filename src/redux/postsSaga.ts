import { postActions } from "./postsSlice";
import { put, call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ParamGetDanhSachTinTuc,
  getDanhSachTinTuc,
} from "@/services/tinTucService";
import { ParamDanhMuc, getDanhMuc } from "@/services/danhMucService";

function* fetchPostsSaga(action: PayloadAction<ParamGetDanhSachTinTuc>): any {
  try {
    let response = yield call(getDanhSachTinTuc, action.payload);

    if (response.status === 200) {
      yield put(postActions.setAllPosts(response.data.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchCateSaga(action: PayloadAction<ParamDanhMuc>): any {
  try {
    let response = yield call(getDanhMuc, action.payload);
    if (response.status === 200)
      yield put(postActions.setAllCate(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchFeaturedPosts(
  action: PayloadAction<ParamGetDanhSachTinTuc>
): any {
  try {
    let response = yield call(getDanhSachTinTuc, action.payload);

    if (response.status === 200) {
      yield put(postActions.setFeaturedPosts(response.data.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* postsSaga() {
  yield takeEvery(postActions.fetchFeaturedPosts.type, fetchFeaturedPosts);
  yield takeEvery(postActions.fetchAllCate.type, fetchCateSaga);
  yield takeEvery(postActions.fetchAllPosts.type, fetchPostsSaga);
}
