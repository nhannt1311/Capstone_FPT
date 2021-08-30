import React, { useState, useEffect } from 'react';

function Quanlycoupon(){
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const api = `http://192.168.1.10:8084/api/coupon/`;
    const result = await fetch(api);
    const getResult = await result.json();
    setData(getResult);
  }

  async function deleteCoupon(id) {
    if (window.confirm('Ban co chac khong?')) {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var formdata = new FormData();

      var requestOptions = {

        method: 'DELETE',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("http://192.168.1.10:8084/api/coupon/" + id, requestOptions)
        .then(response => response.text())
        window.location.reload()
    }
  }

  async function logout() {
    localStorage.clear()
        window.location.reload()
  }
    return (
      <div className="main-panel">
        {/* Navbar */}
        <title>
          Quản Lý Coupon  - SPORENA
        </title>
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
                    <a className="dropdown-item" href="">Xin chào {localStorage.getItem('nameAcc')}</a>
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
                  <h4 className="card-title">Quản Lý Coupon</h4>
                </div>
                <div className="card-body">
                <tr>
                      <th>Tìm kiếm thông tin  :   </th>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Tìm kiếm..."
                        style={{ maxWidth: '200px', marginLeft: '20px' }}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />

                    </tr>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr><th>ID </th>
                          <th>Ngày tạo Coupon</th>
                          <th>Tên Coupon</th>
                          <th>Mã sử dụng</th>
                          <th>Nội dung</th>
                          <th>Giảm giá</th>
                          <th>Ảnh coupon</th>
                        </tr></thead>
                      <tbody className="dulieu">
                      {data ? data
                      .filter((val) => {
                        if (search == "") {
                          return val
                        } else if (val.timeCreate.toLowerCase().includes(search.toLowerCase())) {
                          return val
                        } else if (val.codeCoupon.toLowerCase().includes(search.toLowerCase())) {
                          return val
                        }
                        else if (val.titleCoupon.toLowerCase().includes(search.toLowerCase())) {
                          return val
                        }
                      }).map(record => (
                        <tr>
                            <td className="text-truncate" style={{ maxWidth: '30px',verticalAlign: 'top'  }} >C{record.idCp}</td>
                            <td className="text-truncate" style={{ maxWidth: '30px',verticalAlign: 'top'  }} >{record.timeCreate.replace('T','  ').split('.')[0]}</td>
                            <td className="text-truncate" style={{ maxWidth: '250px',verticalAlign: 'top'  }} >{record.titleCoupon}</td>
                            <td className="text-truncate" style={{ maxWidth: '50px',verticalAlign: 'top'  }} >{record.codeCoupon}</td>
                            <td className="text-truncate" style={{ maxWidth: '250px',verticalAlign: 'top'  }} >{record.shortDescription}</td>
                            <td className="text-truncate" style={{ maxWidth: '30px',verticalAlign: 'top'  }} >Giảm {record.percentDiscount}%</td>
                            <td>
                              <a tabIndex='0' className="simple-text logo-mini">
                                <div className="logo-image-small">
                                  <img  src={`http://192.168.1.10:8084/${record.imgCoupon}`} style={{ width: '130px', height: '70px',objectFit:'cover',verticalAlign: 'top'  }} alt="logo_app" />
                                </div>
                              </a>
                            </td>
                            <td>
                                <button style={{ backgroundColor: '#E62525' }} type="button" class="btn btn-danger" onClick={() => deleteCoupon(record.idCp)}>Xóa</button>
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
export default Quanlycoupon