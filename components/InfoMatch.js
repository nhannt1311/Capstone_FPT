/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import InfoConfirmUser from './InfoConfirmUser';
const InfoMatch = ({navigation}) => {
  const [data, setData] = useState({
      idMat: '',
      nameChuSan: '',
      titleMat: '',
      imgChuSan: '',
      timezz: '',
  });
  const [infoMz, setInfoMz] = useState([]);
  useEffect(() => {
    getInfoMaz();
    getData();
  }, []);

  async function getInfoMaz() {
    const idMat = await AsyncStorage.getItem('idMat');
    const api = 'http://192.168.1.10:8084/api/matchs/viewConfirmId/' + idMat;
    const result = await fetch(api);
    const getResult = await result.json();
    setInfoMz(getResult);
  }

  async function getData() {
    const idMat = await AsyncStorage.getItem('idMat');
    const nameChuSan = await AsyncStorage.getItem('nameChuSan');
    const titleMat = await AsyncStorage.getItem('titleMat');
    const imgChuSan = await AsyncStorage.getItem('imgChuSan');
    const timezz = await AsyncStorage.getItem('timezz');
    setData({
      idMat,
      nameChuSan,
      titleMat,
      imgChuSan,
      timezz,
    });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={25} color={'#2E3A59'} />
        </TouchableOpacity>
        <Text style={styles.title}>Thông tin thách đấu</Text>
      </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 10,
            borderColor: '#F3F3F3',
            paddingHorizontal: 20,
            paddingBottom: 10,
          }}>
          <Image
            source={require('../assets/image/avatar_1.png')}
            style={{width: 60, height: 60, borderRadius: 60}}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text style={{color: '#454545', fontWeight: '500', fontSize: 14, fontFamily: 'Montserrat-Regular',}}> Họ và tên : {data.nameChuSan}  </Text>
            <Text style={{color: '#454545', fontWeight: '500', fontSize: 14, fontFamily: 'Montserrat-Regular', paddingTop: 5}}>Ngày tìm đội : {data.timezz} </Text>
            
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderBottomWidth: 10,
            borderColor: '#F3F3F3',
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <Text
            style={{
              color: '#454545',
              fontSize: 18,
              fontWeight: '700',
              fontFamily: 'Montserrat-Bold',
              paddingLeft: 0,
            }}>
            Nội dung:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'Montserrat-Regular',
              paddingHorizontal: 0,
              paddingVertical: 10,
            }}>
              {data.titleMat}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            borderBottomWidth: 10,
            borderColor: '#F3F3F3',
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: 20,
          }}>
            {infoMz.map(i => (
          <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assets/image/avatar_1.png')}
            style={{width: 60, height: 60, borderRadius: 60}}
          />
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <Text style={{color: '#454545', fontWeight: '500', fontSize: 14, fontFamily: 'Montserrat-Regular',}}> Người xác nhận: {i.account.nameAcc}  </Text>
            <Text style={{color: '#454545', fontWeight: '500', fontSize: 14, fontFamily: 'Montserrat-Regular', paddingTop: 5}}>Số điện thoại : {i.account.phone} </Text> 
          </View>
        </View>
        ))}
        </View>
        <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'Montserrat-Regular',
              paddingHorizontal: 0,
              paddingVertical: 10,
            }}>
            Vui lòng liên hệ người xác nhận để trao đổi thêm về thời gian cũng như hoat động để sự gặp mặt được suôn sẻ hơn. Xin cảm ơn
          </Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderBottomWidth: 15,
    borderColor: '#F3F3F3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
    marginLeft: 80,
  },
  button: {
    backgroundColor: '#00B14F',
    width: 350,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },
});
export default InfoMatch;
