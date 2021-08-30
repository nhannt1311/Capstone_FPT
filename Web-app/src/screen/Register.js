import React from 'react';
import './Quanlybaidang';
import { useState } from 'react';

function Register() {
    const [nameAcc, setNameAcc] = useState("");
    const [isValid1, setIsValid1] = useState(false);
    const [message1, setMessage1] = useState('');

    const [username, setUsername] = useState("");
    const [isValid2, setIsValid2] = useState(false);
    const [message2, setMessage2] = useState('');

    const [phone, setPhone] = useState("");
    const [isValid3, setIsValid3] = useState(false);
    const [message3, setMessage3] = useState('');

    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const [password, setPassword] = useState("");
    const [isValid4, setIsValid4] = useState(false);
    const [message4, setMessage4] = useState('');
    const [role] = useState("host");

    const emailRegex = /\S+@\S+\.\S+/;
    const regExp = /^(0[0-9][0-9]{8}|1[89]00[0-9]{4})$/;
    const passExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;


    async function checkMail(value){
    setEmail(value)
    if (emailRegex.test(value)) {
        setIsValid(true);
        setMessage('Email bạn nhìn trông rất đẹp!');
      } else {
        setIsValid(false);
        setMessage('Vui lòng nhập đúng định dạng của Email!');
      }

    }
    async function checkPass(value){
        setPassword(value)
        if (passExp.test(value)) {
            setIsValid4(true);
            setMessage4('Mật khẩu an toàn!');
          } else {
            setIsValid4(false);
            setMessage4('Mật khẩu nên chứa ít nhất 6 kí tự, bao gồm chữ và số!');
          }
    
        }
    async function checkPhone(value){
        setPhone(value)
        if (regExp.test(value)) {
            setIsValid3(true);
            setMessage3('Số điện thoại bạn nhìn trông rất đẹp!');
          } else {
            setIsValid3(false);
            setMessage3('Vui lòng nhập đúng định dạng của Số điện thoại!');
          }
    
        }
    async function checkName(value){
        setNameAcc(value)
        if (value === null || value === '') {
            setIsValid1(false);
            setMessage1('Bạn không được bỏ trống ở đây!');
          } else {
            setIsValid1(true);
            setMessage1('Rất tốt!');
          }
    
        }
        async function checkNameAcc(value){
            setUsername(value)
            if (value === null || value === '') {
                setIsValid2(false);
                setMessage2('Bạn không được bỏ trống ở đây!');
              } else {
                setIsValid2(true);
                setMessage2('Rất tốt!');
              }
        
            }



    async function registAcc() {
        console.warn(nameAcc, username, phone, email, password, role)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "nameAcc": nameAcc,
            "username": username,
            "phone": phone,
            "email": email,
            "password": password,
            "role": ["host"]
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://192.168.1.10:8084/api/v1/signup", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                alert("Cảm ơn bạn đã tạo tài khoản tại Sporena. Mời bạn đăng nhập để trải nghiệm!")
            }
            )
            .catch(error => {
                console.log('error', error)
                alert("Cảm ơn bạn đã tạo tài khoản tại Sporena. Mời bạn đăng nhập để trải nghiệm!")
            });
    }

    return (
        <div>
            <div className="container d-flex justify-content-center my-5">
                <title>
                    Đăng Ký  - SPORENA
                </title>
                <div className="row my-2 mx-2 main">
                    <div className="col-md-6 d-flex justify-content-center">
                        {/*left-column*/}
                        <form className="formone">
                            <img className="logi" src="/assets/img/logo.png" alt="" />
                            <h3 className="header"  > Chào mừng đến với</h3>
                            <h1 className="headerr">SPORENA</h1>
                            {/*right-column*/}
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h2 className="title pt-5 pb-3">Đăng ký tài khoản</h2>
                        <form className="formtwo">
                            <small className="password text-muted">Họ và tên</small>
                            <div className="row rtwo">
                                <div className="form-group col-md-12 fthree">
                                    <input type="text" className="form-control" placeholder="Họ và Tên" onChange={(e) => checkName(e.target.value)} name="nameAcc" required />
                                    <div className={`message ${isValid1 ? 'success' : 'error'}`}>{message1}</div>
                                </div>
                            </div>
                            <small className="password text-muted">E-mail</small>
                            <div className="row rtwo">
                                <div className="form-group col-md-12 fthree">
                                    <input type="email" className="form-control" placeholder="E-mail" onChange={(e) => checkMail(e.target.value)} name="email" required />
                                    <div className={`message ${isValid ? 'success' : 'error'}`}>{message}</div>
                                </div>
                            </div>
                            <small className="password text-muted">Tên tài khoản</small>
                            <div className="row rtwo">
                                <div className="form-group col-md-12 fthree">
                                    <input type="text" className="form-control" placeholder="Tên tài khoản" onChange={(e) => checkNameAcc(e.target.value)} name="username" required />
                                    <div className={`message ${isValid2 ? 'success' : 'error'}`}>{message2}</div>
                                </div>
                            </div>
                            <small className="password text-muted">Số điện thoại</small>
                            <div className="row rtwo">
                                <div className="form-group col-md-12 fthree">
                                    <input type="text" className="form-control" placeholder="Số điện thoại" onChange={(e) => checkPhone(e.target.value)} name="phone" required />
                                    <div className={`message ${isValid3 ? 'success' : 'error'}`}>{message3}</div>
                                </div>
                            </div>
                            <small className="password text-muted">Nhập mật khẩu</small>
                            <div className="row rthree">
                                <div className="form-group col-md-12 ffour">
                                    <input type="password" className="form-control secure" placeholder="************" name="password" onChange={(e) => checkPass(e.target.value)} required /> 
                                    <div className={`message ${isValid4 ? 'success' : 'error'}`}>{message4}</div>
                                </div>
                            </div>
                            <div className="row rfour">
                                <div className="form-group col-md-12">
                                    <button type="submit" className="btn1 btn-primary mt-3 ca" onClick={registAcc}>
                                        <span>Đăng Ký Ngay</span></button>
                                </div>
                                <small className="dangki">Đã có tài khoản ?</small><a href="/Login" className="dangkii">Đăng Nhập Ngay</a>
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

export default Register