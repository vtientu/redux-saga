import axiosClient from "@/utils/axiosClient";

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

export const getDanhSachTinTuc = async (params: ParamGetDanhSachTinTuc) => {
  try {
    return await axiosClient.get("TinTucHeThong/GetDanhSachTinTuc", { params });
  } catch (error) {
    console.log(error);
  }
};
