import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from './DetailsScreen';
import CouponScreen from '../screens/CouponScreen';
import {DrawerContent} from '../screens/DrawerContent';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FindMatchScreen from './FindMatchScreen';
const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#00B14F">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Trang chủ',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={'#00B14F'} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsScreen}
      options={{
        tabBarLabel: 'Thông báo',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={'#00B14F'} size={26} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Find Match"
      component={FindMatchScreen}
      options={{
        tabBarLabel: 'Tìm trận đấu',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="search-plus" size={26} color={'#00B14F'} />
        ),
      }}
    /> */}
    <Tab.Screen
      name="Coupon"
      component={CouponScreen}
      options={{
        tabBarLabel: 'Ưu đãi',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <FontAwesome name="tag" color={'#00B14F'} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={DrawerContent}
      options={{
        tabBarLabel: 'Cài đặt',
        tabBarColor: '#fff',
        tabBarIcon: ({color}) => (
          <Icon name="md-settings-outline" color={'#00B14F'} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

// const HomeStackScreen = ({navigation}) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <HomeStack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         title: '',
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#009387"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       }}
//     />
//   </HomeStack.Navigator>
// );

// const DetailsStackScreen = ({navigation}) => (
//   <DetailsStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#1f65ff',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <DetailsStack.Screen
//       name="Details"
//       component={DetailsScreen}
//       options={{
//         title: '',
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#1f65ff"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       }}
//     />
//   </DetailsStack.Navigator>
// );
