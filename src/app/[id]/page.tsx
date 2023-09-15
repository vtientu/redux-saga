import { getChiTietTinTuc } from "@/services/chiTietTinTuc.service";
import Link from "next/link";
import React from "react";

const PostDetail = async (params: any) => {
  const res = await getChiTietTinTuc(params.params);
  const data = res?.data.data;
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Link href="../" type="button">
        Back
      </Link>
      <h1 style={{ fontSize: 50 }}>{data.tieuDe}</h1>
      <label style={{ fontSize: 20 }}>{data.ngayTao}</label>
      <div dangerouslySetInnerHTML={{ __html: data.noiDung }} />
    </div>
  );
};

export default PostDetail;
