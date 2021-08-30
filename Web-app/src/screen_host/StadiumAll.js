import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function StadiumAll() {
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
    const api = `http://192.168.1.10:8084/api/accounts/` + localStorage.getItem('idAcc') + `/stadiums`;
    const result = await fetch(api).then((response) => {
      return response.json().then((data) => {
        console.log(data.content);
        return data.content;
      }).catch((err) => {
        console.log(err);
      })
    });
    setData(result)
    console.log(data.result);
  }

  async function getIdStadium(idSta, nameStadium, sports, priceMin, priceMax, description, imgSta) {
    localStorage.setItem('idSta', idSta)
    localStorage.setItem('nameStadium', nameStadium)
    localStorage.setItem('sports', sports)
    localStorage.setItem('priceMin', priceMin)
    localStorage.setItem('priceMax', priceMax)
    localStorage.setItem('description', description)
    localStorage.setItem('imgSta', imgSta)
    let path = `/YardAll`;
    history.push(path);
  }
  async function getIdStadiumm(idSta, nameStadium) {
    localStorage.setItem('idSta', idSta)
    localStorage.setItem('nameStadium', nameStadium)
    let path = `/YardNew`;
    history.push(path);
  }

  return (
    <div>
      <div className="main-panel">
        <title>
          Quản Lý Sân - SPORENA
        </title>
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
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title"> Tất cả sân hiện có</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr><th > ID Sân</th>
                          <th > Tên sân</th>
                          <th >Thể loại sân</th>
                          <th >Giá Sân (VND)</th>
                          <th >Mô tả sân </th>
                          <th >Hình ảnh của sân</th>
                          <th style={{ textAlign: 'center' }} >Quản lý</th>
                        </tr>
                      </thead>
                      <tbody className="dulieu">
                        {data ? data.map(record => (
                          <tr>
                            <td className="text-truncate" style={{ maxWidth: '50px',verticalAlign: 'top' }} >S{record.idSta}</td>
                            <td className="text-truncate" style={{ maxWidth: '140px',verticalAlign: 'top'  }} >{record.nameStadium}</td>
                            <td className="text-truncate" style={{ maxWidth: '40px',verticalAlign: 'top'  }} >{record.sports}</td>
                            <td className="text-truncate" style={{ maxWidth: '150px',verticalAlign: 'top'  }} >{(record.priceMin).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ ~ {(record.priceMax).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</td>
                            <td className="text-truncate" style={{ maxWidth: '200px',verticalAlign: 'top'  }} >{record.description}</td>
                            <td>
                              <a tabIndex='0' className="simple-text logo-mini">
                                <div className="logo-image-small">
                                  <img src={`http://192.168.1.10:8084/${record.imgSta}`} style={{ width: '130px', height: '70px', objectFit: 'cover' }} alt="logo_app" />
                                </div>
                              </a>
                            </td>
                            <td style={{ margin: 'right' }}>
                              <button type="button" className="btn btn-success" style={{ maxWidth: '101px', marginRight: '10px', backgroundColor: '#00B14F' }} onClick={() => getIdStadium(record.idSta, record.nameStadium, record.sports, record.priceMin, record.priceMax, record.description, record.imgSta)}>Quản lý</button>
                              <button type="button" className="btn btn-success" style={{ maxWidth: '120px', backgroundColor: '#00B14F' }} onClick={() => getIdStadiumm(record.idSta, record.nameStadium)}>Thêm sân</button>
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

    </div>
  )
}
export default StadiumAll