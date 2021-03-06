import React from 'react';
import './Quanlybaidang';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            isLogin: localStorage.getItem("accessToken") != null
        }
    }

    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    login = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            username: this.state.username,
            password: this.state.password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://192.168.1.10:8084/api/v1/signin", requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw Error(response.status)
            })
            .then(result => {
                console.log(result)
                localStorage.setItem("lock", result.lock)
                localStorage.setItem("accessToken", result.accessToken)
                localStorage.setItem("username", result.username)
                localStorage.setItem("phone", result.phone)
                localStorage.setItem("idAcc", result.idAcc)
                localStorage.setItem("nameAcc", result.nameAcc)
                localStorage.setItem("roles", result.roles)
                localStorage.setItem('email', result.email)
                this.setState({ isLogin: true })
                if (localStorage.getItem("lock") === '0') {
                    if (localStorage.getItem("roles") === 'ROLE_ADMIN') {
                        this.props.history.push('/AccountAll')
                        window.location.reload()
                    }
                    else
                        this.props.history.push('/Home1')
                    window.location.reload()
                } else alert("T??i kho???n c???a b???n t???m th???i b??? kh??a. Li??n h??? SPORENA ????? bi???t th??m th??ng tin !")


            })
            .catch(error => {
                console.log('error', error)
                alert("Sai t??i kho???n ho???c m???t kh???u")
            });
    }
    onLogoutSuccess = () => {
        this.setState({ isLogin: false })
    }

    render() {
        return (
            <div>

                {/* <div className="sidenav">
                    <div className="login-main-text">
                        <img src="../assets/img/logo.png" alt="logo" width="320px" height="265px" />
                        <p className="title">Welcome to</p><br />
                        <p className="sub-title">SPORENA</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form>
                                <p className="title" style={{ marginLeft: '130px' }}>LOGIN</p><br />
                                <div className="form-group">
                                    <label>T??n t??i kho???n</label>
                                    <input className="form-input" value={this.state.username} type="text" placeholder="  T??n t??i kho???n" name="username" onChange={this.setParams} />
                                </div>
                                <div className="form-group">
                                    <label>M???t kh???u</label>
                                    <input className="form-input" value={this.state.password} type="password" placeholder="  M???t kh???u" name="password" onChange={this.setParams} />
                                </div>
                                <button type="submit" className="btn-login" onClick={this.login}>Log In</button>
                            </form>
                        </div>
                    </div>
                </div> */}

                <div className="container d-flex justify-content-center my-5">
                    <title>
                        ????ng Nh???p  - SPORENA
                    </title>
                    <div className="row my-2 mx-2 main">
                        <div className="col-md-6 d-flex justify-content-center">
                            {/*left-column*/}
                            <form className="formone">
                                <img className="logi" src="/assets/img/logo.png" alt="" />
                                <h3 className="header"  > Ch??o m???ng ?????n v???i</h3>
                                <h1 className="headerr">SPORENA</h1>
                                {/*right-column*/}
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h2 className="title pt-5 pb-3">????ng nh???p t??i kho???n</h2>
                            <form className="formtwo">
                                <small className="password text-muted">T??n t??i kho???n</small>
                                <div className="row rtwo">
                                    <div className="form-group col-md-12 fthree">
                                        <input type="text" className="form-control" placeholder="T??n t??i kho???n" value={this.state.username} name="username" onChange={this.setParams} />
                                    </div>
                                </div> <small className="password text-muted">Nh???p m???t kh???u</small>
                                <div className="row rthree">
                                    <div className="form-group col-md-12 ffour">
                                        <input type="password" className="form-control secure" placeholder="************" name="password" value={this.state.password} onChange={this.setParams} />
                                        <i className="image2"><img src="https://img.icons8.com/ios-glyphs/64/000000/invisible.png" alt="" />
                                        </i>
                                    </div>
                                </div>
                                <div className="row rfour">
                                    <div className="form-group col-md-12">
                                        <button type="submit" className="btn1 btn-primary mt-3 ca" onClick={this.login}>
                                            <span>????ng Nh???p</span></button>
                                    </div>
                                    <small className="dangki">B???n ch??a c?? t??i kho???n ?</small><a href="/Register" className="dangkii">????ng k?? ngay</a>
                                </div>
                            </form>
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


        )
    }
}

