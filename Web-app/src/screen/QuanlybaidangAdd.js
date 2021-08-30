import React from "react";
import { useState } from 'react';

function Quanlybaidang_themmoi() {
  const [titleNew, setTitleNew] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [imgNew, setImgNew] = useState("");

  async function logout() {
    localStorage.clear()
    window.location.reload()
  }

  async function addBaiDang() {
    if (window.confirm('Xác nhận tạo bài đăng?')) {
      console.warn(titleNew, shortDescription, content, imgNew)
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXQiLCJpYXQiOjE2MjYyMzUyNTYsImV4cCI6MTYyNjMyMTY1Nn0._9jZh2lM3HLSIP8ESVxYsAHHv2xvr8Fve6tKwOlZaqWvYs7zq14OWleXQ4WbFADe9bo5xDQQKhqi-n73QXrW-Q");

      var formdata = new FormData();
      formdata.append("titleNew", titleNew);
      formdata.append("shortDescription", shortDescription);
      formdata.append("content", content);
      formdata.append("image", imgNew);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };


      fetch("http://192.168.1.10:8084/api/new/addNew", requestOptions)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw Error(response.status)
        })
        .then(result => {
          console.log(result)
          alert("Tạo bài đăng thành công !")
        })
        .catch(error => {
          console.log('error', error)
          alert("Tạo bài đăng thành công !")
        });
    }

  }
  return (
    <div>
            <div className="main-panel">
            <title>
                    Tạo bài đăng - SPORENA
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
                                    <h5 className="card-title">Tạo bài đăng sự kiện</h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div className="form-group">
                                                    <label>Tên Bài Đăng</label>
                                                    <input type="text" className="form-control" placeholder="Tên của bài đăng" onChange={(e) => setTitleNew(e.target.value)} name="titleNew" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div className="form-group">
                                                    <label>Mô tả ngắn</label>
                                                    <input type="text" className="form-control" onChange={(e) => setShortDescription(e.target.value)} name="shortDecription" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Mô tả về sân</label>
                                                    <textarea className="form-control textarea" onChange={(e) => setContent(e.target.value)} name="content" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 ">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Thêm Ảnh Về Sân</label>
                                                    <input type="file" className="form-group" onChange={(e) => setImgNew(e.target.files[0])} name="imgNew" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="update ml-auto mr-auto">
                                                <button type="submit" id="addBaiDang" onClick={addBaiDang} className="btn btn-primary btn-round">Tạo bài đăng</button>
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

export default Quanlybaidang_themmoi
