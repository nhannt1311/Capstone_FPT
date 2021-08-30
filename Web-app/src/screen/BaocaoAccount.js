import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function BaocaoAccount() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const [search, setSearch] = useState("");


  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const api = `http://192.168.1.10:8084/api/accountReports/`;
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
  async function getError() {
    let path = `/BaocaoAccountError`;
    history.push(path);
  }

  async function getWait() {
    let path = `/BaocaoAccountWait`;
    history.push(path);
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
                    <h4 className="card-title">Quản Lý Vi Phạm Tài Khoản</h4>
                  </div>
                  <div className="card-body">
                    <tr>
                      <th>Tìm kiếm thông tin  :   </th>
                      <input
                       type="email"
                        className="form-control" 
                        placeholder="Tìm kiếm..."
                        style={{ maxWidth: '200px',marginLeft: '20px' }}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                         />
                                            
                    </tr>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className=" text-primary">
                          <tr>
                            <th>Mã báo cáo </th>
                            <th>Ngày báo cáo</th>
                            <th>Người báo cáo</th>
                            <th>Người bị báo cáo</th>
                            <th>Nội dung báo cáo</th>
                            <th>Trạng Thái</th>
                          </tr>
                        </thead>

                        <tbody className="dulieu">
                          {data ? data.filter((val) => {
                            if (search == ""){
                              return val
                            }else if (val.dateTime.toLowerCase().includes(search.toLowerCase())){
                              return val
                            }else if (val.account1.nameAcc.toLowerCase().includes(search.toLowerCase())){
                              return val
                            }
                          }).map(record => (
                            <tr>
                              <td className="text-truncate" style={{ maxWidth: '30px',verticalAlign: 'top'  }} >RP{record.idAccRep}</td>
                              <td className="text-truncate" style={{ maxWidth: '50px',verticalAlign: 'top'  }} >{record.dateTime.split('T')[0]}</td>
                              <td className="text-truncate" style={{ maxWidth: '150px',verticalAlign: 'top'  }} >{record.account1.nameAcc}</td>
                              <td className="text-truncate" style={{ maxWidth: '150px',verticalAlign: 'top'  }} >{record.account2.nameAcc}</td>
                              <td className="text-truncate" style={{ maxWidth: '200px',verticalAlign: 'top' ,whiteSpace: 'wrap' }} >{record.detail}</td>
                              {record.statusReport === "No" ?
                                <td className="text-truncate" style={{ maxWidth: '150px', color: '#C60021' }} >Chưa xử lý</td> :
                                record.statusReport === "Wait" ?
                                  <td className="text-truncate" style={{ maxWidth: '150px', color: 'orange' }} >Đang chờ xử lý</td> :
                                  <td className="text-truncate" style={{ maxWidth: '150px', color: 'green' }} >Đã hoàn tất</td>
                              }
                              {record.statusReport === "No" ?
                                <td>
                                  <button style={{ backgroundColor: '#red', maxWidth: '210px' }} type="button" class="btn btn-danger" onClick={() => {
                                    getError();
                                  }}>Xác nhận báo cáo</button>
                                </td>
                                : record.statusReport === "Wait" ?
                                  <td>
                                    <button style={{ backgroundColor: '#yellow', maxWidth: '210px' }} type="button" class="btn btn-primary" onClick={() => {
                                      getWait();
                                    }}> Xử lý báo cáo</button>
                                  </td> : <td></td>
                              }
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
    </div>
  )

}
export default BaocaoAccount