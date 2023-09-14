import axiosClient from "@/utils/request";

export interface ParamDanhMuc {
  loai_nguoi_dung?: Number;
  skip?: Number;
  limit?: Number;
  ten_danh_muc?: string;
}

export const getDanhMuc = (params: ParamDanhMuc) => {
  return axiosClient.get("DanhMucTinTuc/GetDanhSachDanhMucTinTuc", { params });
};
