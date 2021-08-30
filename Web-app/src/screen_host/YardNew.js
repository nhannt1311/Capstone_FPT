import React from 'react';
import { useState } from 'react';

function YardNew() {
    const [nameYard, setNameyard] = useState("");
    const [price, setPrice] = useState("");
    const [capcity, setCapcity] = useState("");
    const [statusYard, setStatusYard] = useState("yes");

    async function addYard() {
        if (window.confirm('Xác nhận tạo sân nhỏ?')) {
            console.warn(nameYard, price, capcity, statusYard)
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXQiLCJpYXQiOjE2MjYyMzUyNTYsImV4cCI6MTYyNjMyMTY1Nn0._9jZh2lM3HLSIP8ESVxYsAHHv2xvr8Fve6tKwOlZaqWvYs7zq14OWleXQ4WbFADe9bo5xDQQKhqi-n73QXrW-Q");

            var formdata = new FormData();
            formdata.append("nameYard", nameYard);
            formdata.append("price", price);
            formdata.append("capcity", capcity);
            formdata.append("statusYard", statusYard);


            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("http://192.168.1.10:8084/api/yards/" + localStorage.getItem('idSta') + "/cre-yards", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    alert("Tạo sân thành công !")
                })
                .catch(error => { console.log('error', error)
                alert("Tạo sân thành công !")
             });
        }

    }


    async function logout() {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
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
                        <div className="col-md-8">
                            <div className="card card-user">
                                <div className="card-header">
                                    <h5 className="card-title">Thêm các sân nhỏ</h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div className="form-group">
                                                    <label>Sân đăng kí (Không thay đổi)</label>
                                                    <input type="text" className="form-control" disabled placeholder={localStorage.getItem('nameStadium')} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 pl-1">
                                                <div className="form-group">
                                                    <label>Mã sân</label>
                                                    <input type="text" className="form-control" disabled placeholder={'S' + localStorage.getItem('idSta')} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div className="form-group">
                                                    <label>Tên của sân</label>
                                                    <input type="text" className="form-control" placeholder="Nhập tên sân" onChange={(e) => setNameyard(e.target.value)} name="nameYard" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 pl-1">
                                                <div className="form-group">
                                                    <label>Trạng thái sân</label>
                                                    <select type="text" className="form-control" placeholder="Last Name" name="statusYard" value={statusYard} onChange={(e) => setStatusYard(e.target.value)} >
                                                        <option value="yes">Đang còn trống</option>
                                                        <option value="no">Đang được đặt</option>
                                                        <option value="ohno">Đang tạm đóng</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div className="form-group">
                                                    <label>Sức chứa của sân </label>
                                                    <input type="text" className="form-control" placeholder="Số lượng" onChange={(e) => setCapcity(e.target.value)} name="capcity" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 pl-1">
                                                <div className="form-group">
                                                    <label>Giá của sân theo giờ (VND) </label>
                                                    <input type="text" className="form-control" placeholder="Giá tiền" onChange={(e) => setPrice(e.target.value)} name="price" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="update ml-auto mr-auto">
                                                <button type="submit" onClick={addYard} className="btn btn-primary btn-round">Thêm Sân</button>
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

        </div>
    )
}

export default YardNew