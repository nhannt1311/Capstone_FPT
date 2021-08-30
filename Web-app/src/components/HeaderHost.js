import React from 'react';
import { Link } from 'react-router-dom';

class HeaderHost extends React.Component {
  render() {
    return (
      <div>
        <div className="sidebar" data-color="white" data-active-color="danger">
          <div className="logo">
            <a tabIndex='0' className="simple-text logo-mini">
              <div className="logo-image-small">
                <img src="../assets/img/logoTong.png" alt="logo_app" style={{ width: '80%', float: 'left' }} />
              </div>
            </a>
          </div>
          <div className="sidebar-wrapper" >
            <ul className="nav" style={{ color: '#0A2753', fontSize: '20px' }}>
            <td className="datMenu" style={{color:'#0A2753'}}>Giới Thiệu</td> 
              <li className="nav-item btn-rotate dropdown ">
                <Link to='/Home1' id="navbarDropdownMenuLink" data-toggle="dropdown" style={{ color: '#0A2753', fontSize: '12px' }}>
                  <i class="nc-icon nc-bank"></i>TRANG CHỦ
                </Link>
              </li>
              <td className="datMenu" style={{color:'#0A2753'}}>Quản Lý</td> 
              <li className="nav-item btn-rotate dropdown ">
                <Link to='/infoUser' id="navbarDropdownMenuLink" data-toggle="dropdown" style={{ color: '#0A2753', fontSize: '12px' }}>
                  <i class="nc-icon nc-single-02"></i> QUẢN LÝ THÔNG TIN
                </Link>
                <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to='/infoUser' style={{ color: '#0A2753', fontSize: '12px' }}>
                    Thông tin cá nhân
                  </Link>
                  <Link className="dropdown-item" to='/infoUserUpdate' style={{ color: '#0A2753', fontSize: '12px' }}>
                    Cập Nhật Thông Tin
                  </Link>
                  <Link className="dropdown-item" to='/ChangePass' style={{ color: '#0A2753', fontSize: '12px' }}>
                    Đổi Mật Khẩu
                  </Link>
                </div>
              </li>
              <li className="nav-item btn-rotate dropdown ">
                <Link to='/StadiumAll' id="navbarDropdownMenuLink" data-toggle="dropdown" style={{ color: '#0A2753', fontSize: '12px' }}>
                  <i class="nc-icon nc-paper"></i>QUẢN LÝ SÂN BÃI
                </Link>
                <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to='/StadiumAll' style={{ color: '#0A2753', fontSize: '12px' }}>Quản lý sân tổng</Link>
                  <Link className="dropdown-item" to='/StadiumNew' style={{ color: '#0A2753', fontSize: '12px' }}>Đăng ký sân tổng</Link>
                </div>
              </li>
              <li className="nav-item btn-rotate dropdown ">
                <Link to='/Comments' id="navbarDropdownMenuLink" data-toggle="dropdown" style={{ color: '#0A2753', fontSize: '12px' }}>
                  <i class="nc-icon nc-lock-circle-open"></i> QUẢN LÝ ĐÁNH GIÁ
                </Link>
                <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to='/Comments' style={{ color: '#0A2753', fontSize: '12px' }}>Quản lý sân nhỏ</Link>
                </div>
              </li>
              <td className="datMenu" style={{color:'#0A2753'}}>Thống Kê</td> 
              <li className="nav-item btn-rotate dropdown ">
                <a href="/ReveHost" id="navbarDropdownMenuLink" data-toggle="dropdown" style={{ color: '#0A2753', fontSize: '12px' }}>
                  <i class="nc-icon nc-chart-bar-32"></i>  BÁO CÁO DOANH THU
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="./ReveHost" style={{ color: '#0A2753', fontSize: '12px' }}>Báo cáo doanh thu tổng</a>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default HeaderHost