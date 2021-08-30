import React from 'react';

class Quanlybaidang extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      "user": {}
    }
  }
  componentDidMount() {
    let url = "http://192.168.1.10:8084/api/new";
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp })
      })
    })
    this.loadDataProfile()
    
  }
    logout = () => {
      localStorage.clear()
      window.location.reload()
    }

  getIdStadium = () => {
    localStorage.setItem('id')
  }

  loadDataProfile = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXQiLCJpYXQiOjE2MjYyMzUyNTYsImV4cCI6MTYyNjMyMTY1Nn0._9jZh2lM3HLSIP8ESVxYsAHHv2xvr8Fve6tKwOlZaqWvYs7zq14OWleXQ4WbFADe9bo5xDQQKhqi-n73QXrW-Q");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": "dat",
      "password": "dat123"
    });

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://192.168.1.10:8084/api/new", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  deleteBaidang(id) {
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
  render() {
    return (
      <div>
        {
          this.state.data ?
            <div className="wrapper ">
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
                          <input type="text" defaultValue className="form-control" placeholder="Search..." />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <i className="nc-icon nc-zoom-split" />
                            </div>
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
                            <button  type="button" className="dropdown-item" onClick={this.logout} >Đăng xuất</button>
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
                          <h4 className="card-title">Quản Lý Bài Đăng</h4>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table">
                              <thead className=" text-primary">
                                <tr><th>STT </th>
                                  <th>Ngày đăng bài</th>
                                  <th>Tên bài đăng</th>
                                  <th>Nội dung bài đăng</th>
                                  <th>Hình ảnh</th>
                                  <th>Trạng Thái</th>
                                </tr></thead>

                              <tbody className="dulieu">
                                {this.state.data.map(data =>
                                  <tr>
                                    <td className="text-truncate" style={{ maxWidth: '100px' }} >{data.idNe}</td>
                                    <td className="text-truncate" style={{ maxWidth: '50px' }} >{data.timeNewCreate}</td>
                                    <td className="text-truncate" style={{ maxWidth: '100px' }} >{data.shortDescription}</td>
                                    <td className="text-truncate" style={{ maxWidth: '200px' }} >{data.content}</td>
                                    <td>
                                      <a tabIndex='0' className="simple-text logo-mini">
                                        <div className="logo-image-small">
                                          <img src={`../assets/${data.imgNew}`} style={{ width: '130px', height: '70px',objectFit:'cover' }} alt="logo_app" />
                                        </div>
                                      </a>
                                    </td><td>
                                      <button style={{backgroundColor:'#E62525'}} type="button" class="btn btn-danger" onClick={() => this.deleteBaidang(data.idNe)}>Xóa</button>
                                    </td>
                                  </tr>
                                )}
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
            : <p>wait...</p>
        }
      </div>
    )
  }
}
export default Quanlybaidang