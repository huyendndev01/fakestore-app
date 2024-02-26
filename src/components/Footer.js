import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row bg-dark text-white p-4 mt-5">
        <div className="col-12 col-sm-4 col-md-3 col-lg ">
          <p className="fw-bold">COOLCLUB</p>
          <ul>
            <li>Đăng kí thành viên</li>
            <li>Ưu đãi & Đặc quyền</li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-md-3 col-lg ">
          <p className="fw-bold">CHÍNH SÁCH</p>
          <ul>
            <li>Chính sách đổi trả 60 ngày</li>
            <li>Chính sách khuyến mãi</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách giao hàng</li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-md-3 col-lg ">
          <p className="fw-bold">CHĂM SÓC KHÁCH HÀNG</p>
          <ul>
            <li>Trải nghiệm mua sắm 100% hài lòng</li>
            <li>Hỏi đáp - FAQs</li>
          </ul>
          <p className="fw-bold mt-1">KIẾN THỨC MẶC ĐẸP</p>

          <ul>
            <li>Hướng dẫn chọn size</li>
            <li>Group mặc đẹp sống chất</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-md-3 col-lg ">
          <p className="fw-bold">TÀI LIỆU - TUYỂN DỤNG</p>
          <ul>
            <li>Tuyển dụng</li>
            <li>Đăng ký bản quyền</li>
          </ul>
          <p className="fw-bold mt-1">VỀ COOLMATE</p>

          <ul>
            <li>VỀ COOLMATE</li>
            <li>Nhà máy</li>
            <li>Câu chuyện về Coolmate</li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 col-md-3 col-lg ">
          <>
            <p style={{ fontSize: "12px", lineHeight: "200%" }}>
              <u>Văn phòng Hà Nội:</u> Tầng 3-4, Tòa nhà BMM, KM2, Đường Phùng
              Hưng, Phường Phúc La, Quận Hà Đông, TP Hà Nội
            </p>

            <p style={{ fontSize: "12px", lineHeight: "200%" }}>
              <u>Văn phòng Tp HCM:</u> Lầu 1, Số 163 Trần Trọng Cung, Phường Tân
              Thuận Đông, Quận 7, Tp. Hồ Chí Minh
            </p>
          </>
        </div>
      </div>
      <div className="bg-dark text-white p-4">
        <p className="text-center" style={{ fontSize: "16px" }}>
          @ CÔNG TY TNHH HYNDN DEV
        </p>
        <p className="text-center" style={{ fontSize: "12px" }}>
          Mã số doanh nghiệp: 0123456789. Giấy chứng nhận đăng ký doanh nghiệp
          do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2024.
        </p>
      </div>
    </>
  );
};

export default Footer;
