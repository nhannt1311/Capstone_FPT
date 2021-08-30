/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
const SplashScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Reset Password</Text>
        <Text style={styles.text_subheader}>
          Please enter your phone to request a password reset
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Phone"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PassCodeScreen')}
            style={styles.signIn}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Enter
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.signIn,
              {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#009387',
                },
              ]}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#454545',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_subheader: {
    color: '#A0A0A0',
    fontWeight: '600',
    fontSize: 15,
  },
  action: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: Dimensions.get('screen').width - 30,
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
