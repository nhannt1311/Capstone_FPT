/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const NewPassScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Reset Password</Text>
        <Text style={styles.text_header}>Successfully</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignInScreen')}
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
                Sign In Now
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default NewPassScreen;

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
    textAlign: 'center',
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
});
