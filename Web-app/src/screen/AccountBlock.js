import React, { useState, useEffect } from 'react';

function AccountBlock() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

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
    async function Unlock(id) {
        var requestOptions = {
          method: 'PUT',
          redirect: 'follow'
        };
    
        fetch("http://192.168.1.10:8084/api/accounts/"+id+"/unlock", requestOptions)
          .then(response => response.text())
          .then(result => {
            console.log(result)
            window.location.reload()
          })
          .catch(error => console.log('error', error));
    
    
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
                                        <input type="text" className="form-control" placeholder="" />
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
                                        <h4 className="card-title"> Danh sách vi phạm</h4>
                                    </div>
                                    <div className="card-body">
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
                                                {data ? data.filter(data => data.lock === 1)
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
                                                            <td className="text-truncate" style={{ maxWidth: '100px' }} >A{record.idAcc}</td>
                                                            <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.nameAcc}</td>
                                                            <td className="text-truncate" style={{ maxWidth: '150px' }} >{record.email}</td>
                                                            <td className="text-truncate" style={{ maxWidth: '50px' }} >{record.username}</td>
                                                            <td className="text-truncate" style={{ maxWidth: '100px' }} >{record.phone}</td>
                                                            <td className="text-truncate" style={{ maxWidth: '50px' }}>
                                                                {record.roles.map(role => role.name === "ROLE_HOST" ? <div>Chủ Sân</div>
                                                                    : <div>Người Dùng</div>)}
                                                            </td>
                                                            {record.lock === 1 ?
                                                                <td className="text-truncate" style={{ maxWidth: '150px', color: '#C60021' }} >Đang bị khóa</td>
                                                                : <td className="text-truncate" style={{ maxWidth: '150px', color: 'green' }} >Đang hoạt động</td>
                                                            }
                                                            {record.lock === 1 ?
                                                                <td>
                                                                    <button style={{ backgroundColor: '#E62525', maxWidth: '110px' }} type="button" class="btn btn-danger" onClick={() => Unlock(record.idAcc)}>Mở khóa</button>
                                                                </td>
                                                                : <td>
                                                                    <button style={{ backgroundColor: '#55B158', maxWidth: '110px' }} type="button" class="btn btn-primary" onClick={() => deleteBaidang(record.idAcc)}>Kiểm tra</button>
                                                                </td>}

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
export default AccountBlock