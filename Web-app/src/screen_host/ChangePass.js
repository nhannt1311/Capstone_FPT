import React from 'react';

class ChangePass extends React.Component{
    render(){
        return(
            <div>
                <div className="main-panel">
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
  <title>
                    Đổi Mật Khẩu - SPORENA
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
        <ul className="navbar-nav">
            
          <li className="nav-item btn-rotate dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="nc-icon nc-bell-55" />
              <p>
                <span className="d-lg-none d-md-block">Some Actions</span>
              </p>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="">Action</a>
              <a className="dropdown-item" href="">Another action</a>
              <a className="dropdown-item" href="">Something else here</a>
            </div>
          </li>
             
        </ul>
      </div>
    </div>
  </nav>
  {/* End Navbar */}
  <div className="content">
    <div className="row">
      <div className="col-md-8">
        <div className="card card-user">
          <div className="card-header">
            <h5 className="card-title">Đổi mật khẩu</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-6 pr-1">
                  <div className="form-group">
                    <label>Mật khẩu cũ *</label>
                    <input type="password" className="form-control" placeholder="************"  />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pr-1">
                  <div className="form-group">
                    <label>Mật khẩu mới *</label>
                    <input type="password" className="form-control" placeholder="************"  />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pr-1">
                  <div className="form-group">
                    <label>Nhập lại mật khẩu *</label>
                    <input type="password" className="form-control" placeholder="************"  />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="update ml-auto mr-auto">
                  <button type="submit" className="btn btn-primary btn-round">Đổi mật khẩu</button>
                </div>
              </div>
            </form>
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
export default ChangePass