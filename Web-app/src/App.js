
import './App.css';
import Quanlybaidang1 from './screen/Quanlybaidang1';
import QuanlybaidangAdd from './screen/QuanlybaidangAdd';
import Quanlycoupon from './screen/Quanlycoupon';
import QuanlycouponAdd from './screen/QuanlycouponAdd';
import Header from './components/Header';
import AccountAll from './screen/AccountAll';
import AccountBlock from './screen/AccountBlock';
import Register from './screen/Register';
import Quanlysan from './screen/Quanlysan';
import BaocaoAccount from './screen/BaocaoAccount';
import BaocaoAccountError from './screen/BaocaoAccountError';
import BaocaoAccountWait from './screen/BaocaoAccountWait';
import BaocaoAccountDone from './screen/BaocaoAccountDone'
import BaocaoStadium from './screen/BaocaoStadium';
import BaocaoStadiumError from './screen/BaocaoStadiumError';
import BaocaoStadiumWait from './screen/BaocaoStadiumWait';
import BaocaoStadiumDone from './screen/BaocaoStadiumDone';
import ReveAdmin from './screen/ReveAdmin';
import AccountInfo from './screen/AccountInfo';


import HeaderHost from './components/HeaderHost';
import InfoUser from './screen_host/InfoUser';
import InfoUserUpdate from './screen_host/InfoUserUpdate';
import ChangePass from './screen_host/ChangePass';
import YardAll from './screen_host/YardAll';
import YardAllEdit from './screen_host/YardAllEdit';
import YardBusy from './screen_host/YardBusy';
import StadiumAll from './screen_host/StadiumAll';
import YardNew from './screen_host/YardNew';
import StadiumNew from './screen_host/StadiumNew';
import Home from './screen_host/Home';
import Comments from './screen_host/Comment';
import ReveHost from './screen_host/ReveHost'
import Gioithieu from './components/Gioithieu'


import React from 'react';
import Login from './screen/Login';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]} component={Gioithieu} />
        <Route exact path={["/login"]} component={Login} />
        <div>
          {localStorage.getItem("accessToken") === null ?
            <Route path='/Register' component={Register} />
            : localStorage.getItem("roles") === "ROLE_ADMIN" ? <Header /> : <HeaderHost />}
          <Switch>
            <Route path='/AccountAll' render={() => {
              return localStorage.getItem("accessToken") != null ? <AccountAll /> : <Redirect to="/" />
            }} />
            <Route path='/AccountBlock' render={() => {
              return localStorage.getItem("accessToken") != null ? <AccountBlock /> : <Redirect to="/" />
            }} />
            <Route path='/AccountInfo' render={() => {
              return localStorage.getItem("accessToken") != null ? <AccountInfo /> : <Redirect to="/" />
            }} />
            <Route path='/BaocaoAccount' render={() => {
              return localStorage.getItem("accessToken") != null ? <BaocaoAccount /> : <Redirect to="/" />
            }} />
            <Route path='/BaocaoAccountWait' render={() => {
              return localStorage.getItem("accessToken") != null ? <BaocaoAccountWait /> : <Redirect to="/" />
            }} />
            <Route path='/BaocaoAccountError' render={() => {
              return localStorage.getItem("accessToken") != null ? <BaocaoAccountError /> : <Redirect to="/" />
            }} />
            <Route path='/BaocaoAccountDone' render={() => {
              return localStorage.getItem("accessToken") != null ? <BaocaoAccountDone /> : <Redirect to="/" />
            }} />
            <Route path='/BaocaoStadium' render={() => {
              return localStorage.getItem("accessToken") != null ? <BaocaoStadium /> : <Redirect to="/" />
            }} />
            <Route path='/BaocaoStadiumError' render={() => {
              return localStorage.getItem("accessToken") != null ? <BaocaoStadiumError /> : <Redirect to="/" />
            }} />
            <Route path='/BaocaoStadiumWait' render={() => {
              return localStorage.getItem("accessToken") != null ? <BaocaoStadiumWait /> : <Redirect to="/" />
            }} />
            <Route path='/BaocaoStadiumDone' render={() => {
              return localStorage.getItem("accessToken") != null ? <BaocaoStadiumDone /> : <Redirect to="/" />
            }} />
            <Route path='/ReveAdmin' render={() => {
              return localStorage.getItem("accessToken") != null ? <ReveAdmin /> : <Redirect to="/" />
            }} />
            <Route path='/ReveHost' render={() => {
              return localStorage.getItem("accessToken") != null ? <ReveHost /> : <Redirect to="/" />
            }} />
            <Route path='/Quanlybaidang1' render={() => {
              return localStorage.getItem("accessToken") != null ? <Quanlybaidang1 /> : <Redirect to="/" />
            }} />
            <Route path='/QuanlybaidangAdd' render={() => {
              return localStorage.getItem("accessToken") != null ? <QuanlybaidangAdd /> : <Redirect to="/" />
            }} />
            <Route path='/YardAllEdit' render={() => {
              return localStorage.getItem("accessToken") != null ? <YardAllEdit /> : <Redirect to="/" />
            }} />
            <Route path='/Quanlysan' render={() => {
              return localStorage.getItem("accessToken") != null ? <Quanlysan /> : <Redirect to="/" />
            }} />
            <Route path='/Quanlycoupon' render={() => {
              return localStorage.getItem("accessToken") != null ? <Quanlycoupon /> : <Redirect to="/" />
            }} />
            <Route path='/QuanlycouponAdd' render={() => {
              return localStorage.getItem("accessToken") != null ? <QuanlycouponAdd /> : <Redirect to="/" />
            }} />
            <Route path='/InfoUser' render={() => {
              return localStorage.getItem("accessToken") != null ? <InfoUser /> : <Redirect to="/" />
            }} />
            <Route path='/Comments' render={() => {
              return localStorage.getItem("accessToken") != null ? <Comments /> : <Redirect to="/" />
            }} />
            <Route path='/InfoUserUpdate' render={() => {
              return localStorage.getItem("accessToken") != null ? <InfoUserUpdate /> : <Redirect to="/" />
            }} />
            <Route path='/ChangePass' render={() => {
              return localStorage.getItem("accessToken") != null ? <ChangePass /> : <Redirect to="/" />
            }} />
            <Route path='/StadiumAll' render={() => {
              return localStorage.getItem("accessToken") != null ? <StadiumAll /> : <Redirect to="/" />
            }} />
            <Route path='/YardAll' render={() => {
              return localStorage.getItem("accessToken") != null ? <YardAll /> : <Redirect to="/" />
            }} />
            <Route path='/YardBusy' render={() => {
              return localStorage.getItem("accessToken") != null ? <YardBusy /> : <Redirect to="/" />
            }} />
            <Route path='/YardNew' render={() => {
              return localStorage.getItem("accessToken") != null ? <YardNew /> : <Redirect to="/" />
            }} />
            <Route path='/StadiumNew' render={() => {
              return localStorage.getItem("accessToken") != null ? <StadiumNew /> : <Redirect to="/" />
            }} />
            <Route path='/Home1' render={() => {
              return localStorage.getItem("accessToken") != null ? <Home /> : <Redirect to="/" />
            }} />
          </Switch>
        </div>
      </Switch>
    </Router>

  );
}

export default App;
