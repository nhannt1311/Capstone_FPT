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
const ConfirmInfo = ({navigation}) => {
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
  });
  const [dayOrder, setDayOrder] = useState('2021-08-04');
  const [currentDate, setCurrentDate] = useState('');
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
    const id_coupon = await AsyncStorage.getItem('idcoupon');
    const id_time = await AsyncStorage.getItem('idTime');
    const id_yard = await AsyncStorage.getItem('idyard');
    console.warn(costOrder, dayOrder);

    var formdata = new FormData();
    formdata.append('cost', costOrder);
    formdata.append('day', dayOrder);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'http://192.168.1.10:8084/api/orders/addOrder/5/' +
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
    setCostOrder(priceyard * coupon1.percentDiscount);
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
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          padding: 20,
          paddingVertical: -10,
          borderBottomWidth: 8,
          borderColor: '#F3F3F3',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
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
            color: '#000000',
            fontSize: 16,
            fontWeight: '500',
            paddingTop: 5,
            fontFamily: 'Montserrat-Regular',
          }}>
          Mã sân : A{data.idyard}
        </Text>
        <Text
          style={{
            color: '#000000',
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
              color: '#000000',
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'Montserrat-Regular',
              paddingBottom: 10,
            }}>
            Giá tiền:
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'Montserrat-Regular',
              paddingLeft: 15,
            }}>
            {data.priceyard.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ /
            1 giờ
          </Text>
        </View>
      </View>
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
export default ConfirmInfo;
