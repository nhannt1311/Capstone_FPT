import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <View style={styles.header}>
        <Image
          source={require('../assets/image/login_waiting.png')}
          style={styles.logo}
        />
      </View>
      <View style={[styles.footer]}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={['#00B14F', '#00B14F']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Bắt đầu ngay</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 30,
  },
  logo: {
    marginTop: 150,
    width: 472,
    height: 472,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 40,
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textSign: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: -3,
    fontFamily: 'Montserrat-Bold',
  },
});
