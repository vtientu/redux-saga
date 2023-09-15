import axiosClient from "@/utils/axiosClient";

export const getChiTietTinTuc = async (params: string) => {
  try {
    return await axiosClient.get("TinTucHeThong/GetChiTietTinTuc", {
      params,
    });
  } catch (error) {
    console.log(error);
  }
};
