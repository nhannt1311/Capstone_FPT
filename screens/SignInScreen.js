/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';

import {useTheme} from 'react-native-paper';

import {ScrollView} from 'react-native-gesture-handler';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const [passNe, setPassNe] = React.useState('');
  const login = () => {
    console.log(
      JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    );
    fetch('http://192.168.1.10:8084/api/v1/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then(res => res.json())
      .then(async data => {
        console.log(data);
        const token = data.accessToken;
        const idAcc = data.idAcc;
        const nameAcc = data.nameAcc;
        const email = data.email;
        const phone = data.phone;
        const lock = data.lock;

        if (token) {
          // storing token in async storage
          try {
            await AsyncStorage.setItem('accessToken', token);
            await AsyncStorage.setItem('idAcc', JSON.stringify(idAcc));
            await AsyncStorage.setItem('nameAcc', nameAcc);
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('phone', phone);
            await AsyncStorage.setItem('lock', JSON.stringify(lock));
            await AsyncStorage.setItem('passNe', passNe);
            if( lock == '0'){
            navigation.navigate('MainTabScreen');
          }else {
            Alert.alert(
              'Tài khoản đã bị khóa.',
              'Vui lòng liên hệ Sporena để biết thêm chi tiết.',
            );
          }
          
        }catch (error) {
            console.log('Token not saved in async storage properly');
            console.log(error);
          }
        }else {
          Alert.alert(
            'Tài khoản hoặc mật khẩu sai.',
            'Vui lòng kiểm tra lại.',
          );
          
        }
      } 
      
    )
      .catch(err => console.log(err));
  };

  const {colors} = useTheme();

  const textInputChange = val => {
    if (val.trim().length >= 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 0) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#fff" barStyle="light-content" />
          <Image
            source={require('../assets/image/logo.png')}
            style={styles.logo}
          />
          <View style={styles.header}>
            <Text style={styles.text_header}>Đăng nhập vào</Text>
            <Text
              style={{
                color: '#00B14F',
                fontWeight: 'bold',
                fontSize: 34,
                marginTop: -3,
              }}>
              SPORENA
            </Text>
          </View>
          <View
            style={[
              styles.footer,
              {
                backgroundColor: colors.background,
              },
            ]}>
            <Text
              style={[
                styles.text_footer,
                {
                  color: '#454545',
                },
              ]}>
              Tài khoản
            </Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color={'#454545'} size={20} />
              <TextInput
                placeholder="Tài khoản của bạn"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => textInputChange(val)}
                onEndEditing={e => handleValidUser(e.nativeEvent.text)}
              />
              {/* {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null} */}
            </View>
            {data.isValidUser ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Tài khoản không được để trống.
                </Text>
              </Animatable.View>
            )}

            <Text
              style={[
                styles.text_footer,
                {
                  color: '#454545',
                  marginTop: 35,
                },
              ]}>
              Mật khẩu
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color={'#454545'} size={20} />
              <TextInput
                placeholder="Mật khẩu của bạn"
                placeholderTextColor="#666666"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={val => {handlePasswordChange(val);
                setPassNe(val);}}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Mật khẩu không được để trống.
                </Text>
              </Animatable.View>
            )}

            {/* <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
          <Text style={{color: '#fff', marginTop: 15, marginLeft: 235}}>
            Quên mật khẩu?
          </Text>
        </TouchableOpacity> */}
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  login();
                }}>
                <LinearGradient
                  colors={['#00B14F', '#00B14F']}
                  style={styles.signIn}>
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: '#fff',
                      },
                    ]}>
                    Đăng nhập
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}
                style={[
                  styles.signIn,
                  {
                    borderColor: '#00B14F',
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#00B14F',
                    },
                  ]}>
                  Đăng kí
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
    marginTop: -30,
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'stretch', 
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    // paddingVertical: 30,
  },
  text_header: {
    color: '#454545',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    paddingBottom: 10,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '500',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  // actionError: {
  //   flexDirection: 'row',
  //   marginTop: 10,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#FF0000',
  //   paddingBottom: 5,
  // },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '500',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
});
