import axiosClient from "@/utils/request";

export const getDanhSachTinTuc = (params: ParamGetDanhSachTinTuc) => {
  return axiosClient.get("TinTucHeThong/GetDanhSachTinTuc", { params });
};

export interface ParamGetDanhSachTinTuc {
  cap_don_vi?: Number;
  loai_nguoi_dung?: Number;
  ma_so?: string;
  ma_phong?: string;
  skip?: Number;
  limit?: Number;
  tieu_de?: string;
  danh_muc_tin_tuc_id?: string;
}
