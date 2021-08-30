import React from 'react';

class YardBusy extends React.Component{
  logout = () => {
    localStorage.clear()
    window.location.reload()
}
    render(){
        return(
            <div>
                <div className="main-panel">
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
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
            
        </form>
        <ul className="navbar-nav">
            
          <li className="nav-item btn-rotate dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="nc-icon nc-bell-55" />
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
  {/* End Navbar */}
  <div className="content">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title"> Quản lý sân đang đặt</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className=" text-primary">
                  <tr><th>
                      ID Sân Tổng
                    </th>
                    <th>
                      ID Sân nhỏ
                    </th>
                    <th>
                      Tên sân
                    </th>
                    <th>
                      Giá Sân (VND)
                    </th>
                    <th>
                      Trạng Thái Sân
                    </th>
                    <th>
                      Xác nhận
                    </th>
                  </tr></thead>
                <tbody>
                  <tr>
                    <td>
                      A345
                    </td>
                    <td>
                      Sân Chuyên Việt
                    </td>
                    <td>
                      Bóng Đá
                    </td>
                    <td className="text-truncate" style={{maxWidth: '100px'}}>
                      100.000
                    </td>
                    <td>
                      Đang còn trống
                    </td>
                    <td>
                      <button type="button" className="btn btn-success">Đã đặt xong</button>
                      <button type="button" className="btn btn-danger">Đã hủy sân</button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
export default YardBusy