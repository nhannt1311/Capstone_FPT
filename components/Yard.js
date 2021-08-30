/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Yard = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [timeId, setTimeId] = useState({timeId: '', nameId: ''});
  const [viewNe, setViewNe] = useState();
  const [isValid, setIsValid] = useState([]);
  const [dateXX, setDateXX] = useState('');
  const [data, setData] = useState({
    nameyard: '',
    priceyard: '',
    capacityyard: '',
    idyard: '',
    imgstadium: '',
    namestadium: '',
    dateYard: '',
  });

  useEffect(() => {
    getData();
    Favo();
  }, []);
  
  async function Favo() {
    const idYas = await AsyncStorage.getItem('idyard');
    const dateYard = await AsyncStorage.getItem('dayXX');
    const api = 'http://192.168.1.10:8084/api/orders/';
    const result = await fetch(api).then(response => {
      return response
        .json()
        .then(data => {
          console.log(data.content.filter(favorite => favorite.yard.idYa == idYas));
          return data.content;
        })
        .catch(err => {
          console.log(err);
        });
    });
    setIsValid(result.filter(favorite => favorite.yard.idYa ));
    setDateXX(dateYard);
  }

  async function getData() {
    const nameyard = await AsyncStorage.getItem('nameyard');
    const priceyard = await AsyncStorage.getItem('priceyard');
    const capacityyard = await AsyncStorage.getItem('capacityyard');
    const idyard = await AsyncStorage.getItem('idyard');
    const namestadium = await AsyncStorage.getItem('namestadium');
    const imgstadium = await AsyncStorage.getItem('imgstadium');
    const dateYard = await AsyncStorage.getItem('dayXX');
    setData({
      nameyard,
      priceyard,
      capacityyard,
      idyard,
      imgstadium,
      namestadium,dateYard,
    });
  }

  async function saveTime(idTime, nameTime) {
    AsyncStorage.setItem('idTime', JSON.stringify(idTime));
    AsyncStorage.setItem('nameTime', nameTime);
    const mbn = await AsyncStorage.getItem('idTime');
    const mbns = await AsyncStorage.getItem('nameTime');
    console.log('datID', mbn + mbns);
    setTimeId({idTime, nameTime});
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicatorScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left-circle"
              size={25}
              color={'#2E3A59'}
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
          <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Chọn sân</Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 20,
                color: '#454545',
              }}>
              {data.namestadium}
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            borderBottomWidth: 8,
            borderColor: '#F3F3F3',
            paddingBottom: 10,
          }}>
          <View style={styles.cardView}>
            <Image
              style={{
                width: 155,
                height: 155,
                resizeMode: 'stretch', 
                borderRadius: 2,
                marginLeft: 20,
              }}
              source={{
                uri: `http://192.168.1.10:8084/${data.imgstadium}`,
              }}
            />

            <View style={styles.textView}>
              <Text
                style={{
                  color: '#00B14F',
                  fontWeight: '500',
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                  paddingBottom: 10,
                }}>
                Đang hoạt động
              </Text>
              <Text
                style={{
                  color: '#454545',
                  fontWeight: '600',
                  fontSize: 16,
                  fontFamily: 'Montserrat-SemiBold',
                  paddingBottom: 10,
                }}>
                {data.nameyard}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Mã sân : A{data.idyard}
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 20, paddingLeft: 20}}>
          <FontAwesome name="dot-circle-o" color={'#2E3A59'} size={26} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
                paddingTop: 5,
                paddingLeft: 5,
              }}>
              Có wifi miễn phí, bãi đỗ xe, quầy bán nước
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 10,
            paddingLeft: 20,
            paddingRight: 20,
            borderBottomWidth: 10,
            borderColor: '#F3F3F3',
            paddingBottom: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#454545',
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Chọn thời gian
            </Text>
            <View style={{flexDirection: 'row', paddingLeft:10}}>
            <FontAwesome name="square-o" size={20} style={{paddingTop:3}} />
            <Text style={{fontSize:10,fontWeight:'500',color:'#454545',fontFamily: 'Montserrat-Regular', paddingLeft:5,paddingTop:5}}>Còn trống</Text>
            </View>
            <View style={{flexDirection: 'row', paddingLeft:10}}>
            <FontAwesome name="square" size={20} color={'#00B14F'} style={{paddingTop:3}} />
            <Text style={{fontSize:10,fontWeight:'500',color:'#454545',fontFamily: 'Montserrat-Regular', paddingLeft:5,paddingTop:5}}>Đang chọn</Text>
            </View>
            <View style={{flexDirection: 'row', paddingLeft:10}}>
            <FontAwesome name="square" size={20} color={'#FF0303'} style={{paddingTop:3}} />
            <Text style={{fontSize:10,fontWeight:'500',color:'#454545',fontFamily: 'Montserrat-Regular', paddingLeft:5,paddingTop:5}}>Đã đặt</Text>
            </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 10}}>
              {isValid.filter(data => data.day == dateXX && data.time.idTim == '1').map(dat => (dat.time.idTim)) == '1' ? 
              <TouchableOpacity
                  style={styles.btn4}
                  value="1">
                  <Text style={styles.btnText}> 6:00 - 7:00 </Text>
                </TouchableOpacity> :
              viewNe === 1 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(1, '6:00 đến 7:00');
                    setViewNe(1);
                  }}>
                  <Text style={styles.btnText}> 6:00 - 7:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(1, '6:00 đến 7:00');
                    setViewNe(1);
                  }}>
                  <Text style={styles.btnText2}> 6:00 - 7:00 </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '2').map(dat => (dat.time.idTim)) == '2' ? 
            <TouchableOpacity
            style={styles.btn4}
            value="1">
            <Text style={styles.btnText}> 7:00 - 8:00 </Text>
          </TouchableOpacity> :
              viewNe === 2 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(2, '7:00 đến 8:00');
                    setViewNe(2);
                  }}>
                  <Text style={styles.btnText}> 7:00 - 8:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(2, '7:00 đến 8:00');
                    setViewNe(2);
                  }}>
                  <Text style={styles.btnText2}> 7:00 - 8:00 </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '3').map(dat => (dat.time.idTim)) == '3' ? 
            <TouchableOpacity
            style={styles.btn4}
            value="1">
            <Text style={styles.btnText}> 8:00 - 9:00 </Text>
          </TouchableOpacity> :
            viewNe === 3 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(3, '8:00 đến 9:00');
                    setViewNe(3);
                  }}>
                  <Text style={styles.btnText}> 8:00 - 9:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(3, '8:00 đến 9:00');
                    setViewNe(3);
                  }}>
                  <Text style={styles.btnText2}> 8:00 - 9:00 </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '4').map(dat => (dat.time.idTim)) == '4'?
                <TouchableOpacity
                  style={styles.btn4}
                  value="1">
                  <Text style={styles.btnText}> 9:00 - 10:00 </Text>
                </TouchableOpacity> :
              viewNe === 4 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(4, '9:00 đến 10:00');
                    setViewNe(4);
                  }}>
                  <Text style={styles.btnText}> 9:00 - 10:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(4, '9:00 đến 10:00');
                    setViewNe(4);
                  }}>
                  <Text style={styles.btnText2}> 9:00 - 10:00 </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '5').map(dat => (dat.time.idTim)) == '5'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
            <Text style={styles.btnText}> 10:00 - 11:00 </Text>
          </TouchableOpacity> :
              viewNe === 5 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(5, '10:00 đến 11:00');
                    setViewNe(5);
                  }}>
                  <Text style={styles.btnText}> 10:00 - 11:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(5, '10:00 đến 11:00');
                    setViewNe(5);
                  }}>
                  <Text style={styles.btnText2}> 10:00 - 11:00 </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '6').map(dat => (dat.time.idTim)) == '6'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
            <Text style={styles.btnText}> 11:00 - 12:00 </Text>
          </TouchableOpacity> :
              viewNe === 6 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(6, '11:00 đến 12:00');
                    setViewNe(6);
                  }}>
                  <Text style={styles.btnText}> 11:00 - 12:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(6, '11:00 đến 12:00');
                    setViewNe(6);
                  }}>
                  <Text style={styles.btnText2}> 11:00 - 12:00 </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '7').map(dat => (dat.time.idTim)) == '7'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
            <Text style={styles.btnText}> 12:00 - 13:00 </Text>
          </TouchableOpacity> :
              viewNe === 7 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(7, '12:00 đến 13:00');
                    setViewNe(7);
                  }}>
                  <Text style={styles.btnText}> 12:00 - 13:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(7, '12:00 đến 13:00');
                    setViewNe(7);
                  }}>
                  <Text style={styles.btnText2}> 12:00 - 13:00 </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '8').map(dat => (dat.time.idTim)) == '8'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
                  <Text style={styles.btnText}> 13:00 - 14:00 </Text>
          </TouchableOpacity> :
              viewNe === 8 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(8, '13:00 đến 14:00');
                    setViewNe(8);
                  }}>
                  <Text style={styles.btnText}> 13:00 - 14:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(8, '13:00 đến 14:00');
                    setViewNe(8);
                  }}>
                  <Text style={styles.btnText2}> 13:00 - 14:00 </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '9').map(dat => (dat.time.idTim)) == '9'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
                  <Text style={styles.btnText}> 14:00 - 15:00 </Text>
          </TouchableOpacity> :
              viewNe === 9 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(9, '14:00 đến 15:00');
                    setViewNe(9);
                  }}>
                  <Text style={styles.btnText}> 14:00 - 15:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(9, '14:00 đến 15:00');
                    setViewNe(9);
                  }}>
                  <Text style={styles.btnText2}> 14:00 - 15:00 </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '10').map(dat => (dat.time.idTim)) == '10'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
                  <Text style={styles.btnText}> 15:00 - 16:00 </Text>
          </TouchableOpacity> :
              viewNe === 10 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(10, '15:00 đến 16:00');
                    setViewNe(10);
                  }}>
                  <Text style={styles.btnText}> 15:00 - 16:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(10, '15:00 đến 16:00');
                    setViewNe(10);
                  }}>
                  <Text style={styles.btnText2}> 15:00 - 16:00 </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '11').map(dat => (dat.time.idTim)) == '11'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
            <Text style={styles.btnText}> 16:00 - 17:00 </Text>
          </TouchableOpacity> :
              viewNe === 11 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(11, '16:00 đến 17:00');
                    setViewNe(11);
                  }}>
                  <Text style={styles.btnText}> 16:00 - 17:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(11, '16:00 đến 17:00');
                    setViewNe(11);
                  }}>
                  <Text style={styles.btnText2}> 16:00 - 17:00 </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '12').map(dat => (dat.time.idTim)) == '12'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
                  <Text style={styles.btnText}> 17:00 - 18:00 </Text>
          </TouchableOpacity> :
              viewNe === 12 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(12, '17:00 đến 18:00');
                    setViewNe(12);
                  }}>
                  <Text style={styles.btnText}> 17:00 - 18:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(12, '17:00 đến 18:00');
                    setViewNe(12);
                  }}>
                  <Text style={styles.btnText2}> 17:00 - 18:00 </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '13').map(dat => (dat.time.idTim)) == '13'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
                  <Text style={styles.btnText}> 18:00 - 19:00 </Text>
          </TouchableOpacity> :
              viewNe === 13 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(13, '18:00 đến 19:00');
                    setViewNe(13);
                  }}>
                  <Text style={styles.btnText}> 18:00 - 19:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(13, '18:00 đến 19:00');
                    setViewNe(13);
                  }}>
                  <Text style={styles.btnText2}> 18:00 - 19:00 </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '14').map(dat => (dat.time.idTim)) == '14'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
            <Text style={styles.btnText}> 19:00 - 20:00 </Text>
          </TouchableOpacity> :
              viewNe === 14 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(14, '19:00 đến 20:00');
                    setViewNe(14);
                  }}>
                  <Text style={styles.btnText}> 19:00 - 20:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(14, '19:00 đến 20:00');
                    setViewNe(14);
                  }}>
                  <Text style={styles.btnText2}> 19:00 - 20:00 </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={{padding: 10}}>
            {isValid.filter(data => data.day == dateXX && data.time.idTim == '15').map(dat => (dat.time.idTim)) == '15'
            && isValid.filter(data => data.day === '2021-08-08').map(dat => (dat.day)) === '2021-08-08'?
            <TouchableOpacity
            style={styles.btn4}
            value="1">
            <Text style={styles.btnText}> 20:00 - 21:00 </Text>
          </TouchableOpacity> :
              viewNe === 15 ? (
                <TouchableOpacity
                  style={styles.btn}
                  value="1"
                  onPress={e => {
                    saveTime(15, '20:00 đến 21:00');
                    setViewNe(15);
                  }}>
                  <Text style={styles.btnText}> 20:00 - 21:00 </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btn2}
                  value="1"
                  onPress={e => {
                    saveTime(15, '20:00 đến 21:00');
                    setViewNe(15);
                  }}>
                  <Text style={styles.btnText2}> 20:00 - 21:00 </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 10,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 10,
            borderBottomWidth: 10,
            borderColor: '#F3F3F3',
          }}>
          <Text
            style={{
              color: '#454545',
              fontSize: 16,
              fontWeight: '600',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Xác nhận thời gian: {timeId.nameTime}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: 10,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ListCoupon')}>
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 10,
    borderColor: '#F3F3F3',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
  },
  cardView: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  textView: {
    flex: 1,
    paddingLeft: 20,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#00B14F',
    width: 350,
    height: 40,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#00B14F',
    borderWidth: 1,
    borderColor: '#00B14F',
    borderRadius: 3,
    width: 100,
    padding: 5,
  },
  btnText: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },
  btn2: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 3,
    width: 100,
    padding: 5,
  },
  btnText2: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
  },
  btn4: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 3,
    width: 100,
    padding: 5,
  },
  btnText4: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
  },
});
export default Yard;
