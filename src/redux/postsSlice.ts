import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ParamGetDanhSachTinTuc } from "@/services/tinTuc.service";
import { ParamDanhMuc } from "@/services/danhMuc.service";
export interface IInitialState {
  featuredPosts: Array<any>;
  allPosts: Array<any>;
  allCate: Array<any>;
}

export const initialState: IInitialState = {
  featuredPosts: [],
  allPosts: [],
  allCate: [],
};

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchFeaturedPosts: (
      state,
      action: PayloadAction<ParamGetDanhSachTinTuc>
    ) => {
      console.log("fetchFeaturedPosts");
    },
    setFeaturedPosts: (state, action) => {
      state.featuredPosts = action.payload;
    },
    fetchAllPosts: (state, action: PayloadAction<ParamGetDanhSachTinTuc>) => {
      console.log("fetchAllPosts");
    },
    setAllPosts: (state, action) => {
      state.allPosts = action.payload;
    },
    fetchAllCate: (state, action: PayloadAction<ParamDanhMuc>) => {
      console.log("fetchAllCate");
    },
    setAllCate: (state, action) => {
      state.allCate = action.payload;
    },
  },
});

export const postActions = postsSlice.actions;

export const selectFeaturedPosts = (state: RootState) => state.featuredPosts;

export default postsSlice.reducer;
