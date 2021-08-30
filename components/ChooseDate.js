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
import DatePicker from 'react-native-datepicker';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ChooseDate = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [timeId, setTimeId] = useState({timeId: '', nameId: ''});
  const [viewNe, setViewNe] = useState();
  const [date, setDate] = useState('');
  const [isValid, setIsValid] = useState([]);
  const [data, setData] = useState({
    nameyard: '',
    priceyard: '',
    capacityyard: '',
    idyard: '',
    imgstadium: '',
    namestadium: '',
  });

  useEffect(() => {
    getData();
    Favo();
  }, []);

  
  async function dateYard() {
      console.warn(date)
    AsyncStorage.setItem('dayXX',date);
    }

  async function Favo() {
    const idYas = await AsyncStorage.getItem('idyard');
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
    setIsValid(result.filter(favorite => favorite.yard.idYa == idYas));
  }

  async function getData() {
    const nameyard = await AsyncStorage.getItem('nameyard');
    const priceyard = await AsyncStorage.getItem('priceyard');
    const capacityyard = await AsyncStorage.getItem('capacityyard');
    const idyard = await AsyncStorage.getItem('idyard');
    const namestadium = await AsyncStorage.getItem('namestadium');
    const imgstadium = await AsyncStorage.getItem('imgstadium');
    setData({
      nameyard,
      priceyard,
      capacityyard,
      idyard,
      imgstadium,
      namestadium,
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
                width: 80,
                height: 80,
                resizeMode: 'stretch', 
                borderRadius: 2,
                marginLeft: 20,
              }}
              source={{
                uri: `http://192.168.1.10:8084/${data.imgstadium}`,
              }}
            />

            <View style={styles.textView}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flex:2}}>
            <Text
                style={{
                  color: '#454545',
                  fontWeight: '600',
                  fontSize: 16,
                  fontFamily: 'Montserrat-SemiBold',
                  paddingBottom: 5,
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
              <View style={{flex:1}}>
              <Text
                style={{
                  color: '#00B14F',
                  fontWeight: '500',
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 3,
                  
                }}>
                Hoạt động
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: '500',
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 30,
                  
                }}>
                Sức chứa: {data.capacityyard}
              </Text>
              <Text
                style={{
                  color: '#00B14F',
                  fontWeight: '600',
                  fontSize: 15,
                  fontFamily: 'Montserrat-SemiBold',
                  paddingTop: 3,
                  
                }}>
                {data.priceyard.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ
              </Text>
              </View>
              </View>
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
            <Text
              style={{
                color: '#454545',
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Chọn thời gian
            </Text>
            <DatePicker
              style={styles.datePickerStyle}
              date={date} // Initial date from state
              mode="date" // The enum of date, datetime and time
              placeholder={date}
              format="DD/MM/YYYY"
              minDate="25-08-2021"
              maxDate="25-09-2021"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  width:0,
                  height:0,
                  },
                dateInput: {
                  borderColor: '#ffffff',
                  marginLeft: -110,
                },
                dateText: {
                  color: '#000000',
                  fontWeight: '600',
                  fontSize: 14,
                  fontFamily: 'Montserrat-SemiBold',
                }
              }}
              onDateChange={date => {
                setDate(date);
              }}
            />
          </View>
          
          </View>
        <View
          style={{
            flex: 1,
            paddingBottom: 10,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                navigation.navigate('YardDetails');
                dateYard();
                }}>
            <Text style={styles.buttonText}>Tiếp tục ngay</Text>
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
  datePickerStyle: {
    marginTop: -10,
  },
});
export default ChooseDate;
