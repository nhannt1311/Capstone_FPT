import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function YardAllEdit() {
  const [data, setData] = useState([]);
  const history = useHistory();


  async function logout() {
    localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    getData();
  }, [JSON.stringify(data)]);
  async function getData() {
    const api = `http://192.168.1.10:8084/api/stadiums/` + localStorage.getItem('idSta') + `/yards`;
    const result = await fetch(api).then((response) => {
      return response.json().then((data) => {
        console.log(data.content);
        return data.content;
      }).catch((err) => {
        console.log(err);
      })
    });
    setData(result)
  }
  async function backYardAll() {
    let path = `/YardAll`;
    history.push(path);
  }


  return (
    <div className="main-panel">
      <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
        <title>
          Thông Tin Cá Nhân - SPORENA
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
                  <button type="button" className="dropdown-item" onClick={logout}>Đăng xuất</button>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      <div className="content">
        <div className="row">
          <div className="col-lg-5">
            <div className="card card-user">
              <div className="card-header">
                <a tabIndex='0' className="simple-text logo-mini">
                  <div className="logo-image-small">
                    <img src={`http://192.168.1.10:8084/${localStorage.getItem('imgSta')}`} alt="logo_app" />
                  </div>
                </a>

                <h5 className="card-title">{localStorage.getItem('nameStadium')}</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-6 pr-5">
                      <div className="form-group">
                        <label>Mã Sân</label>
                        <th>{localStorage.getItem('idSta')}</th>
                      </div>
                    </div>
                    <div className="col-md-6 pr-5">
                      <div className="form-group">
                        <label>Thể loại</label>
                        <th>{localStorage.getItem('sports')}</th>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className="form-group">
                        <label>Giá sân (VND)</label>
                        <th>{localStorage.getItem('priceMin').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'đ đến ' + localStorage.getItem('priceMax').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'đ'}</th>
                        <td></td>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Mô tả sân</label>
                        <th>{localStorage.getItem('description')}</th>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="update ml-auto mr-auto">
                      <button type="submit" id="addStadium" onClick={() => backYardAll()} className="btn btn-primary btn-round">Trở Về</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card card-user">
              <div className="card-header">
                <h5 className="card-title">{localStorage.getItem('nameYard')}</h5>
                {localStorage.getItem('statusYard') === "no" ?
                  <td className="text-truncate" style={{ fontSize: '17px', color: '#C60021' }} >Đang được thuê</td>
                  : localStorage.getItem('statusYard') === "yes" ? <td className="text-truncate" style={{ fontSize: '17px', color: 'green' }} >Đang còn trống</td> : <td className="text-truncate" style={{ fontSize: '17px', color: 'yellow' }} >Đang tạm đóng</td>
                }
              </div>
              <div className="card-body">

                <form>

                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>Mã Sân</label>
                        <th>S{localStorage.getItem('idSta')}-{localStorage.getItem('idYa')}</th>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>Giá sân theo giờ (VND)</label>
                        <th>{localStorage.getItem('price').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</th>
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Sức chứa của sân</label>
                        <th>Sân chưa được {localStorage.getItem('capacity')} người</th>
                      </div>
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
  )
}
export default YardAllEdit