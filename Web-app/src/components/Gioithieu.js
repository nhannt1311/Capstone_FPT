import React from 'react';
import { useHistory } from "react-router-dom";

export default function Gioithieu() {

    const history = useHistory();

    async function login() {
        let path = `/login`;
        history.push(path);
    }

    return (
        <div>
            <div>
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center justify-content-between">
                        <h1 className="logo"><a href="index.html">SPORENA</a></h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a className="nav-link scrollto active" href="#hero">Trang chủ</a></li>
                                <li><a className="nav-link scrollto" href="#about">Thông tin</a></li>
                                <li><a className="nav-link scrollto" href="#services">Dịch vụ</a></li>
                                <li><a className="nav-link scrollto " href="#portfolio">Demo</a></li>
                                <li><a className="getstarted scrollto" href="/login">Bắt đầu ngay</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>{/* .navbar */}
                    </div>
                </header>{/* End Header */}
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>Kết Nối Sân Chơi<br /> Thể Thao</h1>
                                <h2>Chúng tôi mang đến cho mọi người một trải nghiệm tốt nhất về ứng dụng </h2>
                                <div className="d-flex">
                                    <a href="/login" className="btn-get-started scrollto">Bắt Đầu Ngay</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img">
                                <img src="assets/img/Thumb1.png" className="img-fluid animated" alt="" />
                            </div>
                        </div>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                    {/* ======= Featured Services Section ======= */}
                    <section id="featured-services" className="featured-services">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="icon-box">
                                        <div className="icon"><i class="nc-icon nc-check-2"></i></div>
                                        <h4 className="title"><a href>Tiện Lợi Nhất</a></h4>
                                        <p className="description1">Dù mọi người ở bất cứ nơi đâu, bất cứ thời gian địa điểm nào 
                                        chỉ cần cầm máy lên có thể theo dõi được tình hình của sân mình</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <div className="icon"><i class="nc-icon nc-delivery-fast"></i></div>
                                        <h4 className="title"><a href>Nhanh chóng nhất</a></h4>
                                        <p className="description1">Chỉ với vài cú nhấn, khách hàng sẽ kiểm tra được đầy đủ thông tin
                                        cũng như doanh thu theo ngày của sân mình.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div className="icon-box">
                                        <div className="icon"><i class="nc-icon nc-ruler-pencil"></i></div>
                                        <h4 className="title"><a href>Dễ dàng nhất</a></h4>
                                        <p className="description1">Giao diện ứng dụng cũng như website đẹp mắt, hệ thống phân chia rõ ràng giúp khách hàng 
                                        dễ dàng sử dụng ngay từ lần đầu tiên</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Featured Services Section */}
                    {/* ======= About Section ======= */}
                    <section id="about" className="about">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="assets/img/about.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Với sự góp mặt của đội ngũ nhân viên tuyệt vời nhất</h3>
                                    <p className="fst-italic">
                                        SPORENA đã tuyển dụng được đội ngũ nhân viên nhiệt tình, chu đáo, luôn luôn có mặt để xử lý tình huống
                                        cho khách hàng nhanh chóng dù bất cứ thời gian nào.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check-circle" /> Luôn vui vẻ, nhiệt tình với khách hàng</li>
                                        <li><i className="bi bi-check-circle" /> Tổng đài 24/24 luôn sẵn sàng tiếp nhận ý kiến</li>
                                        <li><i className="bi bi-check-circle" /> Phát triển tốt hơn nữa dựa trên đánh giá của khách hàng</li>
                                    </ul>
                                    <p>
                                        Đến với SPORENA<br></br> Điều bạn cần làm chỉ cần ngồi theo dõi. Mọi thứ cứ để SPORENA lo hết!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>{/* End About Section */}
                   
                    {/* ======= Services Section ======= */}
                    <section id="services" className="services section-bg">
                        <div className="container">
                            <div className="section-title">
                                <span>Dịch Vụ</span>
                                <h2>Dịch Vụ</h2>
                                <p>Tất cả những dịch vụ tốt nhất của quý khách được chúng tôi tổng hợp lại</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="icon-box">
                                        <div className="icon"><i class="nc-icon nc-cloud-upload-94"></i></div>
                                        <h4><a href>Đưa sân lên top </a></h4>
                                        <p>SPORENA sẽ đưa sân bạn lên trang chủ mỗi tuần để nhiều người biết</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <div className="icon"><i class="nc-icon nc-paper"></i></div>
                                        <h4><a href>Miễn phí quảng cáo</a></h4>
                                        <p>Hỗ trợ quảng cáo sân đến với mọi người với chi phí 0 đồng</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                    <div className="icon-box">
                                        <div className="icon"><i class="nc-icon nc-tag-content"></i></div>
                                        <h4><a href>Giảm giá liên tục</a></h4>
                                        <p>Luôn tổ chức các sự kiện giảm giá để thu hút khách cho sân</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                    <div className="icon-box">
                                        <div className="icon"><i class="nc-icon nc-money-coins"></i></div>
                                        <h4><a href>Chiết khấu thấp</a></h4>
                                        <p>Chiết khấu cực kì thấp giúp sân bạn vừa có lợi nhuận vừa được nhiều khách</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                    <div className="icon-box">
                                        <div className="icon"><i class="nc-icon nc-zoom-split"></i></div>
                                        <h4><a href>Quản lý dễ dàng</a></h4>
                                        <p>Dễ dàng quản lý mọi nơi trên điện thoại hoặc máy tính bất cứ lúc nào</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                    <div className="icon-box">
                                        <div className="icon"><i class="nc-icon nc-satisfied"></i></div>
                                        <h4><a href>Hỗ trợ nhiệt tình</a></h4>
                                        <p>Đội ngũ hỗ trợ 24/24 chuyên giải đáp thắc mắc của khách hàng với SPORENA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Services Section */}
                    {/* ======= Portfolio Section ======= */}
                    <section id="portfolio" className="portfolio">
                        <div className="container">
                            <div className="section-title">
                                <span>DEMO</span>
                                <h2>DEMO</h2>
                                <p>Một số hình ảnh ứng dụng của SPORENA</p>
                            </div>
                            <div className="row portfolio-container">
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-4 col-md-3 portfolio-item filter-card">
                                    <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <img src="assets/img/portfolio/6.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <img src="assets/img/portfolio/5.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <img src="assets/img/portfolio/2.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>{/* End #main */}
            </div>
            <footer class="footer footer-black  footer-white ">
                        <div class="container-fluid">
                            <div class="row">
                                <nav class="footer-nav">
                                    <ul>
                                        <li><a>SPORENA - ĐỒ ÁN TỐT NGHIỆP</a></li>
                                    </ul>
                                </nav>
                                <div class="credits ml-auto">
                                    <span class="copyright">
                                        Sáng tạo bởi các thành viên nhóm <i class="fa fa-heart heart"></i> Titanic 2.0
                                    </span>
                                </div>
                            </div>
                        </div>
                    </footer>
        </div>


    )
}

