import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function InfoUser() {
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
        const api = `http://192.168.1.10:8084/api/accounts/` + localStorage.getItem('idAcc');
        const result = await fetch(api).then((response) => {
            return response.json().then((data) => {
              console.log(data);
              return data;
            }).catch((err) => {
              console.log(err);
            })
          });
          setData(result)
          console.log("data.",setData(result));
        }

        async function getIdAccount(dob, gender,imgAcc,email,nameAcc) {
            localStorage.setItem('dob', dob)
            localStorage.setItem('gender', gender)
            localStorage.setItem('image', imgAcc)
            localStorage.setItem('email', email)
            localStorage.setItem('nameAcc', nameAcc)
            let path = `/InfoUserUpdate`;
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
                    <div className="col-md-4">
                        <div className="card card-user">
                            <div className="image">
                                <img src="../assets/img/damir-bosnjak.jpg" alt="" />
                            </div>
                            <div className="card-body">
                                <div className="author">
                                    <img className="avatar border-gray" src={`http://192.168.1.10:8084/${data.imgAcc}`} alt="" />
                                    <h5 className="titlee">{localStorage.getItem('nameAcc')}</h5>
                                    <h5 className="titleee">Đang hoạt động</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card card-user">
                            <div className="card-header">
                                <h5 className="card-title">Thông tin cá nhân</h5>
                            </div>
                            <div className="card-body">
                                <form>
                                            <div className="row">
                                                <div className="col-md-5 pr-1">
                                                    <div className="form-group">
                                                        <label>Quyền Đăng Nhập (Không thay đổi)</label>
                                                        <input type="text" className="form-control" disabled placeholder={localStorage.getItem('roles') === "ROLE_HOST" ? 'Chủ Sân' : null} />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 px-1">
                                                    <div className="form-group">
                                                        <label>Tên tài khoản</label>
                                                        <input type="text" className="form-control" disabled placeholder={localStorage.getItem('username')} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 pl-1">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">E-mail</label>
                                                        <input type="email" className="form-control" readOnly placeholder={localStorage.getItem('email')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 pr-1">
                                                    <div className="form-group">
                                                        <label>Số điện thoại</label>
                                                        <input type="text" className="form-control" readOnly placeholder={localStorage.getItem('phone')} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 pl-1">
                                                    <div className="form-group">
                                                        <label>Họ và tên</label>
                                                        <input type="text" className="form-control" readOnly placeholder={localStorage.getItem('nameAcc')} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 pr-1">
                                                    <div className="form-group">
                                                        <label>Ngày sinh</label>
                                                        <input type="text" className="form-control" readOnly placeholder={localStorage.getItem('dob')} />
                                                    </div>
                                                </div>
                                                {data.gender!=="true" ?
                                                <div className="col-md-6 pl-1">
                                                <div className="form-group">
                                                    <label>Giới Tính</label>
                                                    <input type="text" className="form-control" readOnly placeholder={localStorage.getItem('gender')} value="Nam" />
                                                </div>
                                            </div> : 
                                            <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label>Giới Tính</label>
                                                <input type="text" className="form-control" readOnly placeholder={localStorage.getItem('gender')} value="Nữ" />
                                            </div>
                                        </div>
                                                }
                                                
                                            </div>
                                            <div className="row">
                                            <div className="update ml-auto mr-auto">
                                                <button type="submit" className="btn btn-primary btn-round"  onClick={() => getIdAccount(data.dob,data.gender,data.imgAcc,data.email,data.nameAcc)} >Cập nhật thông tin</button>
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

export default InfoUser