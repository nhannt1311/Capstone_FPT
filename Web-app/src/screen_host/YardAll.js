import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


function YardAll() {
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

  async function getIdYard(idYa, nameYard, capacity, price, statusYard) {
    localStorage.setItem('idYa', idYa)
    localStorage.setItem('nameYard', nameYard)
    localStorage.setItem('capacity', capacity)
    localStorage.setItem('price', price)
    localStorage.setItem('statusYard', statusYard)
    let path = `/YardAllEdit`;
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
                        <th>S{localStorage.getItem('idSta')}</th>
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
                        <th style={{wordBreak: 'break-word'}}>{localStorage.getItem('description')}</th>
                      </div>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Quản Lý Sân Bãi</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                        <th>Mã Sân</th>
                        <th>Tên sân</th>
                        <th>Sức chứa</th>
                        <th>Giá Sân</th>
                        <th>Trạng Thái</th>
                      </tr>
                    </thead>

                    <tbody className="dulieu">
                      {data ? data.map(record => (
                        <tr>
                          <td className="text-truncate" style={{ maxWidth: '30px' }} >S{localStorage.getItem('idSta')}-{record.idYa}</td>
                          <td className="text-truncate" style={{ maxWidth: '200px' }} >{record.nameYard}</td>
                          <td className="text-truncate" style={{ maxWidth: '30px' }} >{record.capacity} người</td>
                          <td className="text-truncate" style={{ maxWidth: '100px' }} >{record.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</td>
                          {record.statusYard === "no" ?
                            <td className="text-truncate" style={{ maxWidth: '150px', color: '#C60021' }} >Đang được thuê</td>
                            : record.statusYard === "yes" ? <td className="text-truncate" style={{ maxWidth: '150px', color: 'green' }} >Đang còn trống</td> : <td className="text-truncate" style={{ maxWidth: '150px', color: 'yellow' }} >Đang tạm đóng</td>
                          }
                          <td>
                            <button type="button" className="btn btn-success" style={{ maxWidth: '120px', backgroundColor: '#00B14F' }} onClick={() => getIdYard(record.idYa, record.nameYard, record.capacity, record.price, record.statusYard)}>Xem</button>
                          </td>
                        </tr>
                      )) : (<div></div>)}
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
  )
}
export default YardAll