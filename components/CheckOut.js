/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Picker,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Animatable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const CheckOut = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [data, setData] = useState({
    nameyard: '',
    priceyard: '',
    capacityyard: '',
    idyard: '',
    imgstadium: '',
    namestadium: '',
    nameTime: '',
    idcoupon: '',
    perDit: '',
  });
  const [dayOrder, setDayOrder] = useState('2021-08-08');
  const [currentDate, setCurrentDate] = useState('');
  const [currentDate1, setCurrentDate1] = useState(currentDate);
  const [coupon1, setCoupon1] = useState([]);
  const [costOrder, setCostOrder] = useState('');
  console.log('testorder', data);
  console.log('testordercoupon', coupon1);
  console.log('xemCost', costOrder);

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    );
    setCurrentDate1(
      date + '/' + month + '/' + year,
    );
    getData();
    getCoupon1();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getCoupon1() {
    const nameyard = await AsyncStorage.getItem('nameyard');
    const priceyard = await AsyncStorage.getItem('priceyard');
    const capacityyard = await AsyncStorage.getItem('capacityyard');
    const idyard = await AsyncStorage.getItem('idyard');
    const namestadium = await AsyncStorage.getItem('namestadium');
    const imgstadium = await AsyncStorage.getItem('imgstadium');
    const nameTime = await AsyncStorage.getItem('nameTime');
    const idcoupon = await AsyncStorage.getItem('idcoupon');
    setData({
      nameyard,
      priceyard,
      capacityyard,
      idyard,
      imgstadium,
      namestadium,
      nameTime,
      idcoupon,
    });
    setCostOrder(priceyard);
    const id_stadium = await AsyncStorage.getItem('idcoupon');
    console.log('datchesskc', id_stadium);
    const api = 'http://192.168.1.10:8084/api/coupon/coupon/' + id_stadium;
    const result = await fetch(api).then(response => {
      return response
        .json()
        .then(data => {
          console.log('checkData', data.data);
          return data.data;
        })
        .catch(err => {
          console.log(err);
        });
    });
    setCoupon1(result);
  }

  async function addStadium() {
    const dateYard = await AsyncStorage.getItem('dayXX');
    const idAcc = await AsyncStorage.getItem('idAcc');
    const id_coupon = await AsyncStorage.getItem('idcoupon');
    const id_time = await AsyncStorage.getItem('idTime');
    console.log('id_time', id_time);
    const id_yard = await AsyncStorage.getItem('idyard');
    console.warn(costOrder, dateYard);

    var formdata = new FormData();
    formdata.append('cost', parseInt(costOrder));
    formdata.append('day', dateYard);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'http://192.168.1.10:8084/api/orders/addOrder/' +
        idAcc +
        '/' +
        id_yard +
        '/' +
        id_coupon +
        '/' +
        id_time +
        '/Order',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log(result);
        navigation.navigate('CheckOutSuccess');
      })
      .catch(error => console.log('error', error));
  }

  async function getData() {
    const nameyard = await AsyncStorage.getItem('nameyard');
    const priceyard = await AsyncStorage.getItem('priceyard');
    const capacityyard = await AsyncStorage.getItem('capacityyard');
    const idyard = await AsyncStorage.getItem('idyard');
    const namestadium = await AsyncStorage.getItem('namestadium');
    const imgstadium = await AsyncStorage.getItem('imgstadium');
    const nameTime = await AsyncStorage.getItem('nameTime');
    const idcoupon = await AsyncStorage.getItem('idcoupon');
    const perDit = await AsyncStorage.getItem('percentcp');
    setCostOrder((priceyard * (100 - perDit)) / 100);
    setData({
      nameyard,
      priceyard,
      capacityyard,
      idyard,
      imgstadium,
      namestadium,
      nameTime,
      idcoupon,
      perDit,
    });
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
          <Text style={styles.title}>Xác nhận thanh toán</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 20,
            borderBottomWidth: 8,
            borderColor: '#F3F3F3',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: '#454545',
                fontWeight: '600',
                fontSize: 18,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              {data.nameyard}
            </Text>
            <Text
              style={{
                color: '#000000',
                fontWeight: '500',
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
                paddingTop: 5,
              }}>
              {currentDate}
            </Text>
          </View>
          <Text
            style={{
              color: '#454545',
              fontSize: 16,
              fontWeight: '500',
              paddingTop: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            Mã sân : A{data.idyard}
          </Text>
          <Text
            style={{
              color: '#454545',
              fontSize: 16,
              fontWeight: '500',
              paddingTop: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            Đặt vào lúc {data.nameTime}
          </Text>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Text
              style={{
                color: '#454545',
                fontSize: 16,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
                paddingBottom: 10,
              }}>
              Giảm giá coupon:
            </Text>
            <Text
              style={{
                color: '#454545',
                fontSize: 16,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
                paddingLeft: 15,
              }}>
              {data.perDit}%
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: 20,
            borderBottomWidth: 8,
            borderColor: '#F3F3F3',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#454545',
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'Montserrat-SemiBold',
                paddingTop: 5,
                paddingBottom: 10,
              }}>
              Tổng tiền :
            </Text>
            <Text
              style={{
                color: '#454545',
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Montserrat-Bold',
                paddingLeft: 135,
                paddingTop: 3,
              }}>
              {data.priceyard.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#454545',
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'Montserrat-SemiBold',
                paddingTop: 5,
                paddingBottom: 10,
              }}>
              Giảm giá :
            </Text>
            <Text
              style={{
                color: '#454545',
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Montserrat-Bold',
                paddingLeft: 140,
                paddingTop: 3,
              }}>
              {((data.priceyard * data.perDit) / 100)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              đ
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#454545',
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'Montserrat-SemiBold',
                paddingTop: 5,
                paddingBottom: 10,
              }}>
              Tổng tiền thanh toán :
            </Text>
            <Text
              style={{
                color: '#454545',
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Montserrat-Bold',
                paddingLeft: 38,
                paddingTop: 3,
              }}>
              {((data.priceyard * (100 - data.perDit)) / 100)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              đ
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addStadium()}
            // onPress={() =>
            //   nextScreen(item.idYa, item.nameYard, item.price, item.capacity)
            // }>
          >
            <Text style={styles.buttonText}>Đặt ngay</Text>
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
    paddingLeft: 60,
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
    width: 330,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#535353',
    borderRadius: 3,
    width: 100,
    padding: 5,
  },
  action: {
    width: 330,
    height: 60,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#454545',
    backgroundColor: '#F5F6FB',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  input: {
    fontSize: 14,
    fontWeight: '500',
    borderRadius: 20,
    color: '#454545',
    paddingLeft: 45,
  },
});
export default CheckOut;
