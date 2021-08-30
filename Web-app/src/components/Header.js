import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="sidebar" data-color="white" data-active-color="danger">
        <div className="logo">
            <a tabIndex='0' className="simple-text logo-mini">
              <div className="logo-image-small">
                <img src="../assets/img/logoTong.png" alt="logo_app" style={{width:'80%',float:'left'}} />
              </div>
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
            <td className="datMenu" style={{color:'#0A2753'}}>Quản Lý</td> 
              <li className="nav-item btn-rotate dropdown ">
                <Link to="/AccountAll" id="navbarDropdownMenuLink" style={{color:'#0A2753', fontSize:'12px'}} data-toggle="dropdown">
                <i class="nc-icon nc-single-02"></i>  QUẢN LÝ TÀI KHOẢN
                </Link>
                <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} to='/AccountAll'>Quản lý tài khoản</Link>
                  <Link className="dropdown-item " to="/AccountBlock" style={{color:'#0A2753', fontSize:'12px'}}>Danh sách khóa</Link>
                </div>
              </li>
              <li className="nav-item btn-rotate dropdown ">
              <Link to="/Quanlysan" id="navbarDropdownMenuLink" style={{color:'#0A2753', fontSize:'12px'}} data-toggle="dropdown">
                <i class="nc-icon nc-bullet-list-67"></i> QUẢN LÝ SÂN BÃI
                </Link>
                <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} href="/Quanlysan">Tất cả sân</a>
                </div>
              </li>
              <li className="nav-item btn-rotate dropdown ">
                <Link to='/Quanlybaidang1' id="navbarDropdownMenuLink" style={{color:'#0A2753', fontSize:'12px'}} data-toggle="dropdown">
                <i class="nc-icon nc-paper"></i>  QUẢN LÝ BÀI ĐĂNG
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} to='/Quanlybaidang1'>Quản lý bài đăng</Link>
                  <Link className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} to='/QuanlybaidangAdd'>Tạo bài đăng mới</Link>
                </div>
              </li>
              <li className="nav-item btn-rotate dropdown ">
              
                <Link to='/Quanlycoupon' id="navbarDropdownMenuLink" style={{color:'#0A2753', fontSize:'12px'}} data-toggle="dropdown">
                <i class="nc-icon nc-tag-content"></i> QUẢN LÝ COUPON
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} to='/Quanlycoupon'>Quản lý coupon</Link>
                  <Link className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} to='/QuanlycouponAdd'>Tạo coupon mới</Link>
                </div>
              </li>
              
              <td className="datMenu" style={{color:'#0A2753'}}>Báo cáo</td> 
              <li className="nav-item btn-rotate dropdown ">
                <a href="/BaocaoAccount" id="navbarDropdownMenuLink" style={{color:'#0A2753', fontSize:'12px'}} data-toggle="dropdown">
                <i class="nc-icon nc-lock-circle-open"></i> VI PHẠM TÀI KHOẢN
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} href="./BaocaoAccount">Báo cáo tổng hợp</a>
                  <a className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} href="./BaocaoAccountError">Đang chờ xử lý</a>
                  <a className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} href="./BaocaoAccountWait">Đang được xử lý</a>
                  <a className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} href="./BaocaoAccountDone">Đã hoàn tất</a>
                </div>
              </li>
              <li className="nav-item btn-rotate dropdown ">
                <a href="/BaocaoStadium" id="navbarDropdownMenuLink" style={{color:'#0A2753', fontSize:'12px'}} data-toggle="dropdown">
                <i class="nc-icon nc-key-25"></i> VI PHẠM SÂN BÃI
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} href="./BaocaoStadium">Báo cáo tổng hợp</a>
                  <a className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} href="./BaocaoStadiumError">Đang chờ xử lý</a>
                  <a className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} href="./BaocaoStadiumWait">Đang được xử lý</a>
                  <a className="dropdown-item" style={{color:'#0A2753', fontSize:'12px'}} href="./BaocaoStadiumDone">Đã hoàn tất</a>
                </div>
              </li>
              <td className="datMenu" style={{color:'#0A2753'}}>Thống Kê</td> 
              <li className="nav-item btn-rotate dropdown ">
              
                <a href="/ReveAdmin" id="navbarDropdownMenuLink" style={{color:'#0A2753', fontSize:'12px'}}><i class="nc-icon nc-chart-bar-32"></i>BÁO CÁO DOANH THU</a>
             
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Header