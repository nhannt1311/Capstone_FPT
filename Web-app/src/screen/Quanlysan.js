import React, { useState, useEffect } from 'react';

function Quanlysan() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    getData();
  }, [JSON.stringify(data)]);

  async function getData() {
    const api = `http://192.168.1.10:8084/api/stadiums`;
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
  async function logout() {
    localStorage.clear()
    window.location.reload()
    this.props.history.push('/')
  }
  async function deleteBaidang(id) {
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

      fetch("http://192.168.1.10:8084/api/new/" + id, requestOptions)
        .then(response => response.text())
      window.location.reload()
    }
  }
  return (
    <div>
      <div className="wrapper ">
        <title>
          Paper Dashboard 2 by Creative Tim
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
                      <a className="dropdown-item" href="">Xin ch??o {localStorage.getItem('nameAcc')}</a>
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
                      <a className="dropdown-item" href="">Xin ch??o {localStorage.getItem('nameAcc')}</a>
                      <button type="button" className="dropdown-item" onClick={logout}>????ng xu???t</button>
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
                    <h4 className="card-title">Qu???n L?? S??n B??i</h4>
                  </div>
                  <div className="card-body">
                    <tr>
                      <th>T??m ki???m th??ng tin  :   </th>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="T??m ki???m..."
                        style={{ maxWidth: '200px', marginLeft: '20px' }}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />

                    </tr>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className=" text-primary">
                          <tr>
                            <th>M?? S??n</th>
                            <th>T??n s??n</th>
                            <th>Ch??? s??? h???u</th>
                            <th>Gi?? s??n</th>
                            <th>Lo???i s??n</th>
                            <th>?????a ch???</th>
                            <th>???nh v??? s??n</th>
                            <th>Tr???ng th??i</th>
                          </tr>
                        </thead>

                        <tbody className="dulieu">
                          {data ? data
                            .filter((val) => {
                              if (search == "") {
                                return val
                              } else if (val.nameStadium.toLowerCase().includes(search.toLowerCase())) {
                                return val
                              } else if (val.sports.toLowerCase().includes(search.toLowerCase())) {
                                return val
                              }
                              else if (val.address.toLowerCase().includes(search.toLowerCase())) {
                                return val
                              }
                            }).map(record => (
                              <tr>
                                <td className="text-truncate" style={{ maxWidth: '30px' }} >S{record.idSta}</td>
                                <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.nameStadium}</td>
                                <td className="text-truncate" style={{ maxWidth: '100px' }} >{record.account.nameAcc}</td>
                                <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.priceMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}?? ~ {record.priceMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}??</td>
                                <td className="text-truncate" style={{ maxWidth: '60px' }} >{record.sports}</td>
                                <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.address}</td>
                                <td>
                                  <a tabIndex='0' className="simple-text logo-mini">
                                    <div className="logo-image-small">
                                      <img src={`http://192.168.1.10:8084/${record.imgSta}`} style={{ width: '130px', height: '70px',objectFit:'cover' }} alt="logo_app" />
                                    </div>
                                  </a>
                                </td>
                                {record.account.lock === 0 ?
                                  <td className="text-truncate" style={{ maxWidth: '150px', color: 'green' }} >S??n ??ang ho???t ?????ng</td>
                                  : <td className="text-truncate" style={{ maxWidth: '150px', color: '#C60021' }} >S??n ???? B??? Kh??a</td>
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
                    <li><a>SPORENA - ????? ??N T???T NGHI???P</a></li>
                  </ul>
                </nav>
                <div class="credits ml-auto">
                  <span class="copyright">
                    S??ng t???o b???i c??c th??nh vi??n nh??m <i class="fa fa-heart heart"></i> Titanic 2.0
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
export default Quanlysan