/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

import {AuthContext} from '../components/context';

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const [data, setData] = useState('');
  const [info, setInfo] = useState({nInfo: '', email: '',});

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  useEffect(() => {
    getAccount();
    Info();
  }, []);

  async function getAccount() {
    const idAcc = await AsyncStorage.getItem('idAcc');
    const api = 'http://192.168.1.10:8084/api/accounts/' + idAcc;
    const result = await fetch(api).then(response => {
      return response
        .json()
        .then(data => {
          Info();
          return data;
        })
        .catch(err => {
        });
    });
    setData(result);
    // console.log('data.', result);
  }
  async function Info(){
    const nInfo = await AsyncStorage.getItem('nameAcc');
    const email = await AsyncStorage.getItem('email');
    setInfo({nInfo,email});
    getAccount();
  }
  async function logOut(){
    props.navigation.navigate('SignInScreen')
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
        <View style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          padding: 10,
          paddingHorizontal: 20,
          paddingBottom: 20,
          borderBottomWidth: 15,
          borderColor: '#F3F3F3'
        }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: '#454545'}}>Tài khoản</Text>
      </View>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Avatar.Image
                source={require('../assets/image/avatar_1.png')}
                size={80}
              />
              <View
                style={{
                  marginLeft: 15,
                  marginTop: 10,
                  flexDirection: 'column',
                }}>
                <Title style={styles.title}>{info.nInfo}</Title>
                <Caption style={styles.caption}>{info.email}</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
            style={{borderColor: '#f4f4f4', borderBottomWidth: 2}}
              icon={({color, size}) => (
                <Fontisto name="person" size={size} color={color} />
              )}
              label="Thông tin cá nhân"
              onPress={() => {
                props.navigation.navigate('Infor');
              }}
            />
            <DrawerItem
            style={{borderColor: '#f4f4f4', borderBottomWidth: 2}}
              icon={({color, size}) => (
                <Feather name="bar-chart-2" color={color} size={size} />
              )}
              label="Lịch sử giao dịch"
              onPress={() => {
                props.navigation.navigate('HistoryBook');
              }}
            />
            <DrawerItem
            style={{borderColor: '#f4f4f4', borderBottomWidth: 2}}
              icon={({color, size}) => (
                <FontAwesome name="heart" color={color} size={size} />
              )}
              label="Yêu thích"
              onPress={() => {
                props.navigation.navigate('Favorite');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="search-plus" size={size} color={color} />
              )}
              label="Lời mời của tôi"
              onPress={() => {
                props.navigation.navigate('ConfirmMatch');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
        style={{borderColor: '#f4f4f4', borderBottomWidth: 2}}
          icon={({color, size}) => (
            <Feather name="lock" color={color} size={size} />
          )}
          label="Đổi mật khẩu"
          onPress={() => {
            props.navigation.navigate('SupportScreen');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Đăng Xuất"
          onPress={() => logOut()}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    borderBottomWidth: 15,
    borderColor: '#F3F3F3',
    paddingBottom: 10
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 10,
  },
});
