import React from "react";
import { useState } from 'react';

function QuanlycouponAdd() {

  const [titleCoupon, setTitleCoupon] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [codeCoupon, setCodeCoupon] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [percentDiscount, setPercentDiscount] = useState("");
  const [imgCoupon, setImgCoupon] = useState("");


  async function logout() {
    localStorage.clear()
    window.location.reload()
  }

  async function addCoupon() {
    console.warn(titleCoupon, shortDescription, codeCoupon, timeEnd, percentDiscount, imgCoupon)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXQiLCJpYXQiOjE2MjYyMzUyNTYsImV4cCI6MTYyNjMyMTY1Nn0._9jZh2lM3HLSIP8ESVxYsAHHv2xvr8Fve6tKwOlZaqWvYs7zq14OWleXQ4WbFADe9bo5xDQQKhqi-n73QXrW-Q");

    var formdata = new FormData();
    formdata.append("titleCoupon", titleCoupon);
    formdata.append("shortDescription", shortDescription);
    formdata.append("codeCoupon", codeCoupon);
    formdata.append("timeEnd", timeEnd);
    formdata.append("percentDiscount", percentDiscount);
    formdata.append("image", imgCoupon);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };


    fetch("http://192.168.1.10:8084/api/coupon/addCoupon", requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw Error(response.status)
      })
      .then(result => {
        console.log(result)
        alert("Tạo coupon thành công !")
      })
      .catch(error => {
        console.log('error', error)
        alert("Tạo coupon thành công !")
      });


  }
  return (
    <div>
      <div className="main-panel">
        <title>
          Tạo Coupon  - SPORENA
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
                  <h5 className="card-title">Tạo Coupon sự kiện</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Tên coupon</label>
                          <input type="text" className="form-control" placeholder="Tên của coupon" onChange={(e) => setTitleCoupon(e.target.value)} name="titleCoupon" />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Mã sử dụng</label>
                          <input type="text" className="form-control" onChange={(e) => setCodeCoupon(e.target.value)} name="codeCoupon" />
                        </div>
                      </div>
                    </div>
                    <div className="row">

                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Ngày kết thúc</label>
                          <input type="date" className="form-control" onChange={(e) => setTimeEnd(e.target.value)} name="timeEnd" />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>% giảm giá</label>
                          <input type="text" className="form-control" onChange={(e) => setPercentDiscount(e.target.value)} name="percentDiscount" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Mô tả về coupon</label>
                          <textarea className="form-control textarea" onChange={(e) => setShortDescription(e.target.value)} name="shortDescription" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 ">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Thêm Ảnh Về Coupon</label>
                          <input type="file" className="form-group" onChange={(e) => setImgCoupon(e.target.files[0])} name="imgCoupon" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="update ml-auto mr-auto">
                        <button type="submit" id="addCoupon" onClick={addCoupon} className="btn btn-primary btn-round">Tạo Coupon</button>
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
export default QuanlycouponAdd
