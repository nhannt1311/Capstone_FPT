import React from 'react';
import { useState } from 'react';

function StadiumNew() {
    const [nameStadium, setNameStadium] = useState("");
    const [sports, setSports] = useState('Bóng Đá');
    const [priceMin, setPriceMin] = useState("");
    const [priceMax, setPriceMax] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDecription] = useState("");
    const [imgSta, setImgSta] = useState("");

    async function logout() {
        localStorage.clear()
        window.location.reload()
    }

    async function addStadium() {
        if (window.confirm('Xác nhận tạo sân?')) {
            console.warn(nameStadium, address, description, imgSta, sports, priceMin, priceMax)
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXQiLCJpYXQiOjE2MjYyMzUyNTYsImV4cCI6MTYyNjMyMTY1Nn0._9jZh2lM3HLSIP8ESVxYsAHHv2xvr8Fve6tKwOlZaqWvYs7zq14OWleXQ4WbFADe9bo5xDQQKhqi-n73QXrW-Q");


            var formdata = new FormData();
            formdata.append("nameStadium", nameStadium);
            formdata.append("address", address);
            formdata.append("description", description);
            formdata.append("image", imgSta);
            formdata.append("sports", sports);
            formdata.append("priceMin", priceMin);
            formdata.append("priceMax", priceMax);


            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("http://192.168.1.10:8084/api/stadiums/" + localStorage.getItem('idAcc') + "/cre-stadiums", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    alert("Tạo sân thành công !")
                })
                .catch(error => {
                    console.log('error', error)
                    alert("Tạo sân thành công !")
                });
        }

    }
    return (
        <div>
            <div className="main-panel">
            <title>
                    Đăng Ký Sân - SPORENA
                </title>
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
                                    <h5 className="card-title">Đăng kí sân</h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div className="form-group">
                                                    <label>Người đăng kí (Không thay đổi)</label>
                                                    <input type="text" className="form-control" disabled placeholder={localStorage.getItem('nameAcc')} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div className="form-group">
                                                    <label>Tên của sân</label>
                                                    <input type="text" className="form-control" placeholder="Tên của sân" onChange={(e) => setNameStadium(e.target.value)} name="nameStadium" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 pl-1">
                                                <div className="form-group">
                                                    <label>Thể loại sân</label>
                                                    <select type="text" className="form-control" placeholder="Last Name" name="sports" value={sports} onChange={(e) => setSports(e.target.value)}>
                                                        <option value="Bóng Đá">Bóng Đá</option>
                                                        <option value="Cầu Lông">Cầu Lông</option>
                                                        <option value="Bóng Rổ">Bóng Rổ</option>
                                                        <option value="Tennis">Tennis</option>
                                                        <option value="Bóng Chuyền">Bóng Chuyền</option>
                                                        <option value="Bóng Bàn">Bóng Bàn</option>
                                                        <option value="Bơi Lội">Bơi Lội</option>
                                                        <option value="Khác...">Khác...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div className="form-group">
                                                    <label>Mô tả giá ( Từ VND )</label>
                                                    <input type="text" className="form-control" placeholder="VND" onChange={(e) => setPriceMin(e.target.value)} name="priceMin" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 pl-1">
                                                <div className="form-group">
                                                    <label>Mô tả giá ( đến VND )</label>
                                                    <input type="text" className="form-control" placeholder="VND" onChange={(e) => setPriceMax(e.target.value)} name="priceMax" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Địa chỉ sân</label>
                                                    <input type="text" className="form-control" placeholder="Địa chỉ" onChange={(e) => setAddress(e.target.value)} name="address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 ">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Thêm Ảnh Về Sân</label>
                                                    <input type="file" className="form-group" onChange={(e) => setImgSta(e.target.files[0])} name="imgSta" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Mô tả về sân</label>
                                                    <textarea className="form-control textarea" onChange={(e) => setDecription(e.target.value)} name="description" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="update ml-auto mr-auto">
                                                <button type="submit" id="addStadium" onClick={addStadium} className="btn btn-primary btn-round">Đăng Kí Ngay</button>
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
export default StadiumNew