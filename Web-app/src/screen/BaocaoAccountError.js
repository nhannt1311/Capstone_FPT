import React, { useState, useEffect } from 'react';

function BaocaoAccountError() {
  const [data, setData] = useState([]);


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
  async function getReport(idAcc1, idAcc2, idAccRep) {
    localStorage.setItem('idAcc1', idAcc1)
    localStorage.setItem('idAcc2', idAcc2)
    localStorage.setItem('idAccRep', idAccRep)

    window.location.reload()
  }

  async function updateStatus() {
    var requestOptions = {
      method: 'PUT',
      redirect: 'follow'
    };

    fetch("http://192.168.1.10:8084/api/accountReports/updateStatus1/" + localStorage.getItem('idAcc1') + "/" + localStorage.getItem('idAcc2') + "/" + localStorage.getItem('idAccRep'), requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)

      })
      .catch(error => console.log('error', error));


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
          Vi Phạm Chưa Xử Lý - SPORENA
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
                    <h4 className="card-title"> Vi Phạm Chưa Xử Lý</h4>
                  </div>
                  <div className="card-body">
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
                          {data ? data.filter(data => data.statusReport === "No").map(record => (
                            <tr>
                              <td className="text-truncate" style={{ maxWidth: '30px',verticalAlign: 'top'  }} >RP{record.idAccRep}</td>
                              <td className="text-truncate" style={{ maxWidth: '100px',verticalAlign: 'top'  }} >{record.dateTime.split('T')[0]}</td>
                              <td className="text-truncate" style={{ maxWidth: '150px',verticalAlign: 'top'  }} >{record.account1.nameAcc}</td>
                              <td className="text-truncate" style={{ maxWidth: '150px',verticalAlign: 'top'  }} >{record.account2.nameAcc}</td>
                              <td className="text-truncate" style={{ maxWidth: '200px' ,verticalAlign: 'top' }} >{record.detail}</td>
                              {record.statusReport === "No" ?
                                <td className="text-truncate" style={{ maxWidth: '150px', color: '#C60021' }} >Chưa xử lý</td> :
                                record.statusReport === "Wait" ?
                                <td className="text-truncate" style={{ maxWidth: '150px', color: 'orange' }} >Đang chờ xử lý</td> :
                                <td className="text-truncate" style={{ maxWidth: '150px', color: 'green' }} >Đã hoàn tất</td> 
                              }
                              <td>
                                <button style={{ backgroundColor: '#red', maxWidth: '210px' }} type="button" class="btn btn-danger" onClick={() => {
                                  updateStatus();
                                  getReport(record.account1.idAcc, record.account2.idAcc, record.idAccRep);
                                }}>Xác nhận báo cáo</button>
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
    </div>
  )

}
export default BaocaoAccountError