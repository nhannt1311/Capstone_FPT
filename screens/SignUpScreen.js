  /* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';


const SignUpScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    nameAcc: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidnameAcc: true,
    isValidUser: true,
    isValidPassword: true,
    isValidEmail: true,
    isValidPhone: true,
  });

  const register = () => {
    console.log(
      JSON.stringify({
        nameAcc: data.nameAcc,
        username: data.username,
        password: data.password,
        email: data.email,
        phone: data.phone,
        role: ['user'],
      }),
    );
    fetch('http://192.168.1.10:8084/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nameAcc: data.nameAcc,
        username: data.username,
        password: data.password,
        email: data.email,
        phone: data.phone,
        role: ['user'],
      }),
    })
      .then(res => res.json())
      .then(async data => {
        console.log(data);
        Alert.alert(
          'Đăng kí tài khoản thành công'
        );
        navigation.navigate('SignInScreen')
      })
      .catch(err => console.log(err)
      );
  };
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
    if (val.trim().length >= 6) {
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
  const handleFullnameChange = val => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        nameAcc: val,
        isValidnameAcc: true,
      });
    } else {
      setData({
        ...data,
        nameAcc: val,
        isValidnameAcc: false,
      });
    }
  };
  const handleEmail = val => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        email: val,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidEmail: false,
      });
    }
  };
  const handlePhone = val => {
    if (val.trim().length == 10) {
      setData({
        ...data,
        phone: val,
        isValidPhone: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        isValidPhone: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Đăng kí</Text>
      </View>
      <View style={styles.footer}>
        <KeyboardAvoidingView>
          <ScrollView>
            <Text style={styles.text_footer}>Tài khoản</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Tài khoản của bạn"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => textInputChange(val)}
              />
            </View>
            {data.isValidUser ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Tài khoản không được bỏ trống.
                </Text>
              </Animatable.View>
            )}
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Mật khẩu
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Mật khẩu của bạn"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => handlePasswordChange(val)}
              />
              <TouchableOpacity
                onPress={updateSecureTextEntry}
                style={{marginTop: 5, marginRight: 10}}>
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
                  Mật khẩu phải nhiều hơn 6 kí tự.
                </Text>
              </Animatable.View>
            )}
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Họ và tên
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Tên đầy đủ của bạn"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => handleFullnameChange(val)}
              />
            </View>
            {data.isValidnameAcc ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Vui lòng không được để trống.
                </Text>
              </Animatable.View>
            )}
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Email
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Tài khoản Email của bạn"
                style={styles.textInput}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={val => handleEmail(val)}
              />
            </View>
            {data.isValidEmail ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Email phải có định dạng tương tự @gmail.com.
                </Text>
              </Animatable.View>
            )}
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Số điện thoại
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Số điện thoại của bạn"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType="numeric"
                onChangeText={val => handlePhone(val)}
              />
            </View>
            {data.isValidPhone ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Số điện thoại phải là 10 số.
                </Text>
              </Animatable.View>
            )}
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => {
                  register();
                }}
                style={styles.signIn}>
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
                    Đăng kí
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}
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
                Đăng nhập
              </Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
    marginTop: -70,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  text_header: {
    color: '#454545',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    paddingTop: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#454545',
    backgroundColor: '#F5F6FB',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
    paddingBottom: 30,
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
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
