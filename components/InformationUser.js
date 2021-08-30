/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Picker,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const InformationUser = ({navigation}) => {
  const [data, setData] = useState({
    nameuser: '',
    emailuser: '',
    phoneuser: '',
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const nameuser = await AsyncStorage.getItem('nameAcc');
    const emailuser = await AsyncStorage.getItem('email');
    const phoneuser = await AsyncStorage.getItem('phone');
    setData({
      nameuser,
      emailuser,
      phoneuser,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
          borderBottomWidth: 10,
          borderColor: '#F3F3F3',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10,
            paddingHorizontal: 20,
            borderBottomWidth: 2,
            borderColor: '#F3F3F3',
          }}>
          <Text style={styles.label}>Họ & tên</Text>
          <Text style={styles.infor}>{data.nameuser}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10,
            paddingHorizontal: 20,
            borderBottomWidth: 2,
            borderColor: '#F3F3F3',
            paddingTop: 10,
          }}>
          <Text style={styles.label}>Số điện thoại</Text>
          <Text style={styles.infor}>{data.phoneuser}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10,
            paddingHorizontal: 20,
            borderBottomWidth: 2,
            borderColor: '#F3F3F3',
            paddingTop: 10,
          }}>
          <Text style={styles.label}>Ngày sinh</Text>
          <Text style={styles.infor}>{data.nameuser}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10,
            paddingHorizontal: 20,
            borderBottomWidth: 2,
            borderColor: '#F3F3F3',
            paddingTop: 10,
          }}>
          <Text style={styles.label}>Giới tính</Text>
          <Text style={styles.infor}>{data.nameuser}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingTop: 10,
          }}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.infor}>{data.emailuser}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ChangeInfor')}>
        <Text style={styles.buttonText}>Thay đổi</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  label: {
    color: '#A0A0A0',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  infor: {
    color: '#454545',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  button: {
    backgroundColor: '#00B14F',
    width: 350,
    height: 40,
    borderRadius: 5,
    marginTop: 70,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
export default InformationUser;
