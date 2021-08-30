import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function InfoUserUpdate() {
    const [nameAcc, setNameAcc] = useState(localStorage.getItem('nameAcc'));
    const [gender, setGender] = useState(localStorage.getItem('gender'));
    const [phone, setPhone] = useState(localStorage.getItem('phone'));
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [dob, setDob] = useState();
    const [imgAcc, setImgAcc] = useState(localStorage.getItem('image'));
    const history = useHistory();


    async function updateAcc() {
        console.warn(nameAcc, gender, phone, email, dob, imgAcc)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXQiLCJpYXQiOjE2MjYyMzUyNTYsImV4cCI6MTYyNjMyMTY1Nn0._9jZh2lM3HLSIP8ESVxYsAHHv2xvr8Fve6tKwOlZaqWvYs7zq14OWleXQ4WbFADe9bo5xDQQKhqi-n73QXrW-Q");

        var formdata = new FormData();
        formdata.append("nameAcc", nameAcc);
        formdata.append("gender", gender);
        formdata.append("phone", phone);
        formdata.append("email", email);
        formdata.append("dob", dob);
        formdata.append("image", imgAcc);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://192.168.1.10:8084/api/accounts/" + localStorage.getItem('idAcc'), requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                localStorage.setItem('dob', dob)
                localStorage.setItem('gender', gender)
                localStorage.setItem('email', email)
                localStorage.setItem('nameAcc', nameAcc)
                localStorage.setItem('phone', phone)
            })
            .catch(error => console.log('error', error));


    }
    async function ChuyenTrang() {
        let path = `/InfoUser`;
        history.push(path)
    }

    async function logout() {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="main-panel">
            <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                <title>
                    Cập Nhật Thông Tin - SPORENA
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
                                    <img className="avatar border-gray" src={`http://192.168.1.10:8084/${localStorage.getItem('image')}`} alt="" />
                                    <h5 className="titlee">{localStorage.getItem('nameAcc')}</h5>
                                    <h5 className="titleee">Đang hoạt động</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card card-user">
                            <div className="card-header">
                                <h5 className="card-title">Cập nhật thông tin</h5>
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
                                                <input type="email" className="form-control" placeholder={localStorage.getItem('email')} onChange={(e) => setEmail(e.target.value)} name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>Số điện thoại</label>
                                                <input type="text" className="form-control" placeholder={localStorage.getItem('phone')} onChange={(e) => setPhone(e.target.value)} name="phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label>Họ và tên</label>
                                                <input type="text" className="form-control" placeholder={localStorage.getItem('nameAcc')} onChange={(e) => setNameAcc(e.target.value)} name="nameAcc" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>Ngày sinh</label>
                                                <input type="date" className="form-control" placeholder={localStorage.getItem('dob')} onChange={(e) => setDob(e.target.value)} name="dob" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label>Giới Tính</label>
                                                <select type="text" className="form-control" placeholder="Giới tính" name="sports" value={gender} onChange={(e) => setGender(e.target.value)}>
                                                    <option >Giới Tính</option>
                                                    <option value="1">Nam</option>
                                                    <option value="0">Nữ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Thêm Ảnh Về Sân</label>
                                                <input type="file" className="form-group" onChange={(e) => setImgAcc(e.target.files[0])} name="imgAcc" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="update ml-auto mr-auto">
                                            <button type="submit" className="btn btn-primary btn-round" onClick={() => {
                                                updateAcc();
                                                ChuyenTrang();
                                            }}>Cập nhật thông tin</button>
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

export default InfoUserUpdate