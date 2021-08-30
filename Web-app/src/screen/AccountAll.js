import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function AccountAll() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const history = useHistory();

    useEffect(() => {
        getData();
    }, [JSON.stringify(data)]);
    async function getData() {
        const api = `http://192.168.1.10:8084/api/accounts`;
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
    async function getThongtin(imgAcc, email, gender, phone, nameAcc, lock, userName, role, dob, idAcc1) {
        localStorage.setItem('imgAcc1', imgAcc)
        localStorage.setItem('email1', email)
        localStorage.setItem('gender1', gender)
        localStorage.setItem('phone1', phone)
        localStorage.setItem('nameAcc1', nameAcc)
        localStorage.setItem('lock1', lock)
        localStorage.setItem('userName1', userName)
        localStorage.setItem('role1', role)
        localStorage.setItem('dob', dob)
        localStorage.setItem('idAcc1', idAcc1)
        let path = `/AccountInfo`;
        history.push(path);
    }
    async function logout() {
        localStorage.clear()
        window.location.reload()
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

            fetch("http://192.168.1.10:8084/api/accounts/" + id, requestOptions)
                .then(response => response.text())
            window.location.reload()
        }
    }


    return (
        <div>
            <div className="main-panel">
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
                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title"> Quản lý tài khoản</h4>
                                </div>
                                <div className="card-body">
                                    <tr>
                                        <th>Tìm kiếm thông tin  :   </th>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Tìm kiếm..."
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
                                                    <th>ID</th>
                                                    <th>Họ và tên </th>
                                                    <th>E-mail</th>
                                                    <th>Tên tài khoản</th>
                                                    <th>Số điện thoại</th>
                                                    <th>Quyền tài khoản</th>
                                                    <th>Trạng thái</th>
                                                    <th>Xử lý</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data ? data.filter(data => data.roles.map(role => role.name) != "ROLE_ADMIN")
                                                    .filter((val) => {
                                                        if (search == "") {
                                                            return val
                                                        } else if (val.email.toLowerCase().includes(search.toLowerCase())) {
                                                            return val
                                                        } else if (val.nameAcc.toLowerCase().includes(search.toLowerCase())) {
                                                            return val
                                                        }
                                                        else if (val.phone.toLowerCase().includes(search.toLowerCase())) {
                                                            return val
                                                        }
                                                    }).map(record => (
                                                        <tr>
                                                            <td className="text-truncate" style={{ maxWidth: '50px' }} >A{record.idAcc}</td>
                                                            <td className="text-truncate" style={{ maxWidth: '200px' }} >{record.nameAcc}</td>
                                                            <td className="text-truncate" style={{ maxWidth: '200px' }} >{record.email}</td>
                                                            <td className="text-truncate" style={{ maxWidth: '120px' }} >{record.username}</td>
                                                            <td className="text-truncate" style={{ maxWidth: '100px' }} >{record.phone}</td>
                                                            <td className="text-truncate" style={{ maxWidth: '50px' }}>
                                                                {record.roles.map(role => role.name === "ROLE_HOST" ? <div>Chủ Sân</div>
                                                                    : <div>Người Dùng</div>)}
                                                            </td>
                                                            {record.lock === 1 ?
                                                                <td className="text-truncate" style={{ maxWidth: '150px', color: 'red' }} >Đang bị khóa</td>
                                                                : <td className="text-truncate" style={{ maxWidth: '150px', color: 'green' }} >Đang hoạt động</td>
                                                            } <td>
                                                                <button style={{ backgroundColor: '#55B158', maxWidth: '110px' }} type="button" class="btn btn-primary" onClick={() => getThongtin(record.imgAcc, record.email, record.gender, record.phone, record.nameAcc, record.lock, record.username, record.roles.map(role => role.name), record.dob, record.idAcc)}>Kiểm tra</button>
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
    )
}

export default AccountAll