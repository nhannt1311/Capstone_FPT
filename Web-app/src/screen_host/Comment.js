import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function Comments() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const [search, setSearch] = useState("");


  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const api = `http://192.168.1.10:8084/api/comments/`;
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
          Thông tin đánh giá - SPORENA
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
                    <h4 className="card-title">Đánh giá về Sân</h4>
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
                            <th>Mã đánh giá</th>
                            <th>Ngày đánh giá</th>
                            <th>Người đánh giá</th>
                            <th>Mã sân</th>
                            <th>Tên sân</th>
                            <th>Nội dung đánh giá</th>
                          </tr>
                        </thead>

                        <tbody className="dulieu">
                          {data ? data.filter(data => data.stadium.account.idAcc == localStorage.getItem('idAcc'))
                          .filter((val) => {
                            if (search == ""){
                              return val
                            }else if (val.timeCmt.toLowerCase().includes(search.toLowerCase())){
                              return val
                            }else if (val.account.nameAcc.toLowerCase().includes(search.toLowerCase())){
                              return val
                            }else if (val.stadium.nameStadium.toLowerCase().includes(search.toLowerCase())){
                              return val
                            }
                            
                          }).map(record => (
                            <tr>
                              <td className="text-truncate" style={{ maxWidth: '30px',verticalAlign: 'top'  }} >RP{record.idCom}</td>
                              <td className="text-truncate" style={{ maxWidth: '120px',verticalAlign: 'top'  }} >{record.timeCmt.split('T')[0]}</td>
                              <td className="text-truncate" style={{ maxWidth: '100px',verticalAlign: 'top'  }} >{record.account.nameAcc}</td>
                              <td className="text-truncate" style={{ maxWidth: '30px',verticalAlign: 'top'  }} >S{record.stadium.idSta}</td>
                              <td className="text-truncate" style={{ maxWidth: '200px',verticalAlign: 'top'  }} >{record.stadium.nameStadium}</td>
                              <td className="text-truncate" style={{ maxWidth: '300px',verticalAlign: 'top'  }} >{record.cmt}</td>
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
export default Comments