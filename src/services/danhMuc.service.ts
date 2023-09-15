import axiosClient from "@/utils/axiosClient";

export interface ParamDanhMuc {
  loai_nguoi_dung?: Number;
  skip?: Number;
  limit?: Number;
  ten_danh_muc?: string;
}

export const getDanhMuc = async (params: ParamDanhMuc) => {
  try {
    return await axiosClient.get("DanhMucTinTuc/GetDanhSachDanhMucTinTuc", {
      params,
    });
  } catch (error) {
    console.log(error);
  }
};
