import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function ReveHost() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState("");

  const sum = data ? data
  .filter(data => data.yard.stadium.account.idAcc == localStorage.getItem('idAcc'))
  .filter(data => data.day === localStorage.getItem('day')).map(datasum => ((datasum.cost) * (100 - datasum.coupon.percentDiscount)) / 100) : (<div></div>)
  console.log("sum", sum)
  const res = sum.reduce((a, b) => a + b, 0)
  console.log("sum", res)

  const sum1 = data ? data.filter(data => data.yard.stadium.account.idAcc == localStorage.getItem('idAcc'))
  .map(datasum => ((datasum.cost) * (100 - datasum.coupon.percentDiscount)) / 100) : (<div></div>)
  console.log("sum1", sum1)
  const res1 = sum1.reduce((a, b) => a + b, 0)
  console.log("sum1", res1)


  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const api = `http://192.168.1.10:8084/api/orders`;
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
  async function addReport(idAcc) {
      console.warn(detail)
      var formdata = new FormData();
      formdata.append("detail", detail);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      fetch("http://192.168.1.10:8084/api/accountReports/creAccReports/"+ localStorage.getItem('idAcc') + "/" + idAcc, requestOptions)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw Error(response.status)
        })
        .then(result => {
          console.log(result)
          alert("Report tài khoản thành công!")
        })
        .catch(error => {
          console.log('error', error)
          alert("Report tài khoản thành công!")
        });
  }
  async function getDateexx() {
    window.location.reload()
  }

  async function getDatee() {
    localStorage.setItem("day", search)
    window.location.reload()
  }

  async function logout() {
    localStorage.clear()
    window.location.reload()
    this.props.history.push('/')
  }

  return (
    <div>
      <div className="wrapper ">
        <title>
          Quản lý Vi Phạm - SPORENA
        </title>
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
                    <h4 className="card-title">Doanh Thu Thống Kê</h4>
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
                      <th>
                        <button type="button" className="btn btn-success"
                          style={{ maxWidth: '101px', marginLeft: '20px', backgroundColor: '#00B14F' }}
                          onClick={() => getDatee()}>Quản lý</button>
                      </th>
                    </tr>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className=" text-primary">
                          <tr>
                            <th>Mã Đặt</th>
                            <th>Ngày đặt</th>
                            <th>Khung giờ</th>
                            <th>Người đặt sân</th>
                            <th>Sân</th>
                            <th>Mã sân</th>
                            <th>Coupon</th>
                            <th>Giá tiền</th>
                            <th>Báo cáo</th>
                          </tr>
                        </thead>

                        <tbody className="dulieu">
                          {localStorage.getItem('day') === '' || localStorage.getItem('day') === null ? data ? data
                            .filter(data => data.yard.stadium.account.idAcc == localStorage.getItem('idAcc'))
                            .filter((val) => {
                              if (search == "") {
                                return val
                              } else if (val.day.toLowerCase().includes(search.toLowerCase())) {
                                return val
                              } else if (val.yard.stadium.nameStadium.toLowerCase().includes(search.toLowerCase())) {
                                return val
                              } else if (val.time.period.toLowerCase().includes(search.toLowerCase())) {
                                return val
                              } 
                            }).map(record => (
                              <tr>
                                <td className="text-truncate" style={{ maxWidth: '30px' }} >OD{record.idOrd}</td>
                                <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.day}</td>
                                <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.time.period}</td>
                                <td className="text-truncate" style={{ maxWidth: '50px' }} >{record.account.nameAcc}</td>
                                <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.yard.nameYard} </td>
                                <td className="text-truncate" style={{ maxWidth: '150px' }} >S{record.yard.stadium.idSta}-{record.yard.idYa}</td>
                                <td className="text-truncate" style={{ maxWidth: '100px' }} >Mã giảm {record.coupon.percentDiscount}%</td>
                                <td className="text-truncate" style={{ maxWidth: '100px' }} >{(((record.cost) * (100 - record.coupon.percentDiscount)) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</td>
                                <input className="text-truncate" style={{ maxWidth: '140px', marginTop: '10px' }} onChange={(e) => setDetail(e.target.value)}></input>
                                <button style={{ backgroundColor: 'red', maxWidth: '110px', marginLeft: '15px' }} onClick={() => {
                                                addReport(record.account.idAcc);
                                                getDateexx();
                                            }} type="button" class="btn btn-danger"> Báo cáo</button>
                              </tr>
                            )) : (<div></div>)
                            :
                            localStorage.getItem('day') !== null ?
                              data
                                ? data.filter(data => data.yard.stadium.account.idAcc == localStorage.getItem('idAcc'))
                                  .filter(data => data.day === localStorage.getItem('day'))
                                  .filter((val) => {
                                    if (search == "") {
                                      return val
                                    } else if (val.day.toLowerCase().includes(search.toLowerCase())) {
                                      return val
                                    } else if (val.yard.stadium.nameStadium.toLowerCase().includes(search.toLowerCase())) {
                                      return val
                                    } else if (val.time.period.toLowerCase().includes(search.toLowerCase())) {
                                      return val
                                    }
                                  }).map(record => (
                                    <tr>
                                      <td className="text-truncate" style={{ maxWidth: '30px' }} >OD{record.idOrd}</td>
                                      <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.day}</td>
                                      <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.time.period}</td>
                                      <td className="text-truncate" style={{ maxWidth: '50px' }} >{record.account.nameAcc}</td>
                                      <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.yard.nameYard} </td>
                                      <td className="text-truncate" style={{ maxWidth: '150px' }} >S{record.yard.stadium.idSta}-{record.yard.idYa}</td>
                                      <td className="text-truncate" style={{ maxWidth: '100px' }} >Mã giảm {record.coupon.percentDiscount}%</td>
                                      <td className="text-truncate" style={{ maxWidth: '100px' }} >{(((record.cost) * (100 - record.coupon.percentDiscount)) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</td>
                                      <input className="text-truncate" style={{ maxWidth: '140px', marginTop: '10px' }} onChange={(e) => setDetail(e.target.value)}></input>
                                     <button style={{ backgroundColor: 'red', maxWidth: '110px', marginLeft: '15px' }}  onClick={() => {
                                                addReport(record.account.idAcc);
                                                getDateexx();
                                            }} type="button" class="btn btn-danger"> Báo cáo</button>
                                    </tr>
                                  )) : (<div></div>) : (<div></div>)}
                        </tbody>
                      </table>
                      {localStorage.getItem('day') === '' || localStorage.getItem('day') === null ?
                        <tr>

                          <th>Tổng doanh thu là  :   </th>
                          <input
                            type="email"
                            className="form-control"
                            disabled
                            placeholder={(res1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"
                            }
                            style={{ marginLeft: '20px' }}

                          />
                        </tr>
                        : <tr className="datDoanhthu">

                          <th>Tổng doanh thu là  :   </th>
                          <input
                            type="email"
                            className="form-control"
                            disabled
                            placeholder={(res).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"
                            }
                            style={{ marginLeft: '20px' }}

                          />
                        </tr>}
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
    </div>
  )

}
export default ReveHost