import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';

import SignUpScreen from '../screens/SignUpScreen';
import AuthCodeScreen from '../screens/AuthCodeScreen';
import RegisterSuccessScreen from '../screens/RegisterSuccessScreen';

import ForgotScreen from '../screens/ForgotScreen';
import PassCodeScreen from '../screens/PassCodeScreen';
import NewPassScreen from '../screens/NewPassScreen';
import MainTabScreen from '../screens/MainTabScreen';
import NewDetailsScreen from '../screens/NewDetailsScreen';
import CouponDetailsScreen from '../screens/CouponDetailsScreen';
import StadiumDetailsScreen from '../screens/StadiumDetailsScreen';
import SupportScreen from '../screens/SupportScreen';
import YardScreen from '../screens/YardScreen';
import YardDetailsScreen from '../screens/YardDetailsScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import CheckOutSuccess from '../screens/CheckOutSuccess';
import HistoryBookScreen from '../screens/HistoryBookScreen';
import ListCouponScreen from '../screens/ListCouponScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import StadiumScreen from '../screens/StadiumScreen';
import InformationScreen from '../screens/InformationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SoccerScreen from '../screens/SoccerScreen';
import BasketballScreen from '../screens/BasketballScreen';
import BadmintonScreen from '../screens/BadmintonScreen';
import PingpongScreen from '../screens/PingpongScreen';
import TennisScreen from '../screens/TennisScreen';
import VolleyballScreen from '../screens/VolleyballScreen';
import SwimScreen from '../screens/SwimScreen';
import SearchScreen from '../screens/SearchScreen';
import ReviewScreen from '../screens/ReviewScreen';
import RegisterMatchScreen from '../screens/RegisterMatchScreen';
import {DrawerContent} from '../screens/DrawerContent';
import FindMatchScreen from '../screens/FindMatchScreen';
import ConfirmMatchScreen from '../screens/ConfirmMatchScreen';
import InfoMatch from '../components/InfoMatch';
import MoreScreen from '../screens/MoreScreen';
import MatchInfoScreen from '../screens/MatchInfoScreen';
import ReportScreen from '../screens/ReportScreen';

import MatchDoneScreen from '../screens/MatchDone';
import ChooseDateScreen from '../screens/ChooseDateScreen';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
              <RootStack.Screen name="SignInScreen" component={SignInScreen} />
              <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
              <RootStack.Screen name="AuthCodeScreen" component={AuthCodeScreen} />
              <RootStack.Screen name="RegisterSuccessScreen"component={RegisterSuccessScreen}/>
    <RootStack.Screen name="ForgotScreen" component={ForgotScreen} />
    <RootStack.Screen name="PassCodeScreen" component={PassCodeScreen} />
    <RootStack.Screen name="NewPassScreen" component={NewPassScreen} />
    <RootStack.Screen name="MainTabScreen" component={MainTabScreen} />
    <RootStack.Screen name="NewDetails" component={NewDetailsScreen} />
    <RootStack.Screen name="CouponDetails" component={CouponDetailsScreen} />
    <RootStack.Screen name="StadiumDetails" component={StadiumDetailsScreen} />
    <RootStack.Screen name="ChooseYard" component={YardScreen} />
    <RootStack.Screen name="ChooseDate" component={ChooseDateScreen} />
    <RootStack.Screen name="YardDetails" component={YardDetailsScreen} />
    <RootStack.Screen name="CheckOut" component={CheckOutScreen} />
    <RootStack.Screen name="CheckOutSuccess" component={CheckOutSuccess} />
    <RootStack.Screen name="SupportScreen" component={SupportScreen} />
    <RootStack.Screen name="HistoryBook" component={HistoryBookScreen} />
    <RootStack.Screen name="Favorite" component={FavoriteScreen} />
    <RootStack.Screen name="ListCoupon" component={ListCouponScreen} />
    <RootStack.Screen name="Soccer" component={SoccerScreen} />
    <RootStack.Screen name="Basketball" component={BasketballScreen} />
    <RootStack.Screen name="Badminton" component={BadmintonScreen} />
    <RootStack.Screen name="Pingpong" component={PingpongScreen} />
    <RootStack.Screen name="Tennis" component={TennisScreen} />
    <RootStack.Screen name="Volleyball" component={VolleyballScreen} />
    <RootStack.Screen name="Swim" component={SwimScreen} />
    <RootStack.Screen name="More" component={MoreScreen} />
    <RootStack.Screen name="Infor" component={InformationScreen} />
    <RootStack.Screen name="Search" component={SearchScreen} />
    <RootStack.Screen name="Review" component={ReviewScreen} />
    <RootStack.Screen name="Report" component={ReportScreen} />
    <RootStack.Screen name="ChangeInfor" component={ProfileScreen} />
    <RootStack.Screen name="Register" component={RegisterMatchScreen} />
    <RootStack.Screen name="Find Match" component={FindMatchScreen} />
    <RootStack.Screen name="ConfirmMatch" component={ConfirmMatchScreen} />
    <RootStack.Screen name="Match Info" component={MatchInfoScreen} />
    <RootStack.Screen name="MatchDone" component={MatchDoneScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
