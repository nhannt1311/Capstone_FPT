import React from 'react';

class Home extends React.Component {

    logout() {
        localStorage.clear()
        window.location.reload()
      }
    render() {
        return (
            <div>
                <div className="main-panel">
                    <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                        <title>
                            Trang Chủ - SPORENA
                        </title>
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <div className="navbar-toggle">
                                    <button type="button" className="navbar-toggler">
                                        <span className="navbar-toggler-bar bar1" />
                                        <span className="navbar-toggler-bar bar2" />
                                        <span className="navbar-toggler-bar bar3" />
                                    </button>
                                </div>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar navbar-kebab" />
                                <span className="navbar-toggler-bar navbar-kebab" />
                                <span className="navbar-toggler-bar navbar-kebab" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                <form>
                                    <div className="input-group no-border">
                                        <div className="input-group-append">
                                            <a className="dropdown-item" href="">Xin chào {localStorage.getItem('nameAcc')}</a>
                                        </div>
                                    </div>
                                </form>
                                <ul className="navbar-nav">
                                    <li className="nav-item btn-rotate dropdown">
                                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="nc-icon nc-settings-gear-65" />
                                            <p>
                                                <span className="d-lg-none d-md-block">Some Actions</span>
                                            </p>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="">Xin chào {localStorage.getItem('nameAcc')}</a>
                                            <button type="button" className="dropdown-item" onClick={this.logout}>Đăng xuất</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="HomeChuTo">Chào mừng các bạn đến với SPORENA</h5>
                                        <p className="HomeChuNho">Hệ thống quản lý sân dành cho chủ sân</p>
                                        <div className="logo">
                                            <title>
                                                Trang Chủ - SPORENA
                                            </title>
                                            <a href="" className="simple-text logo-mini">
                                                <div className="logo-image-small">
                                                    <img src="../assets/img/Home1.jpg" alt="" style={{ width: '90%', height: '20%', marginLeft: 'auto', marginRight: 'auto', display: 'block', borderRadius: '25px' }} />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card card-plain">
                                                    <div className="card-header">
                                                        <h5 className="card-title">Quyền lợi khi tham gia</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="alert alert-info">
                                                            <span>Được hỗ trợ chạy quảng cáo miễn phí trên trang chủ SPORENA</span>
                                                        </div>
                                                        <div className="alert alert-text1">
                                                            <span>Chiết khấu cực thấp - Ưu đãi cực cao</span>
                                                        </div>
                                                        <div className="alert alert-danger">
                                                            <span>Xử lý thông tin của khách hàng 24/24</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card card-plain">
                                                    <div className="card-header">
                                                        <h5 className="card-title">Tiện ích dành cho chủ sân</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="alert alert-warninggg alert-dismissible fade show">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span><b> Dễ dàng - </b> Dễ dàng đưa sân bãi của các bạn đi khắp Đà Nẵng.</span>
                                                        </div>
                                                        <div className="alert alert-warningg alert-dismissible fade show">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span><b> Tiện lợi - </b> Giúp bạn có thể quản lý ngay cả khi ở xa</span>
                                                        </div>
                                                        <div className="alert alert-success alert-dismissible fade show">
                                                            <button type="button" aria-hidden="true" className="close" data-dismiss="alert" aria-label="Close">
                                                                <i className="nc-icon nc-simple-remove" />
                                                            </button>
                                                            <span><b> Thống kê - </b> Thống kê thông tin chi tiết cho các bạn theo từng ngày</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            </div>
        )
    }
}
export default Home