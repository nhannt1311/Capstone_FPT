/* eslint-disable react-native/no-inline-styles */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DatePicker from 'react-native-datepicker';
import Fontisto from 'react-native-vector-icons/Fontisto';
const ChangeInformationUser = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Nam');
  const [date, setDate] = useState('');
  const [text, onChangeText] = React.useState(null);
  const [nameuser, setNameAcc] = useState('');
  const [gender, setGender] = useState(1);
  const [phoneuser, setPhone] = useState();
  const [emailuser, setEmail] = useState();
  const [love, setLove] = useState(0);
  const [dob, setDob] = useState();
  const [data, setData] = useState({
    nameuser: '',
    emailuser: '',
    phoneuser: '',
    dob: '',
    gender: '',
  });

  useEffect(() => {
    getData();
  }, []);

  async function updateAcc() {
    const idAcc = await AsyncStorage.getItem('idAcc');
    console.warn(nameuser, selectedValue, phoneuser, emailuser, date);
    var formdata = new FormData();
    formdata.append('nameAcc', nameuser);
    formdata.append('gender', 1);
    formdata.append('phone', phoneuser);
    formdata.append('email', emailuser);
    formdata.append('dob', date);
    var requestOptions = {
      method: 'PUT',
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'http://192.168.1.10:8084/api/accounts/appInfor/' + idAcc,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log(result);
        // navigation.navigate('Settings');
        navigation.navigate('Settings');
        AsyncStorage.setItem('nameAcc', nameuser);
        AsyncStorage.setItem('email', emailuser);
        AsyncStorage.setItem('phone', phoneuser);
      })
      .catch(error => console.log('error', error));
  }

  async function getData() {
    const nameuser = await AsyncStorage.getItem('nameAcc');
    const emailuser = await AsyncStorage.getItem('email');
    const phoneuser = await AsyncStorage.getItem('phone');
    const dob = await AsyncStorage.getItem('dob');
    const gender = await AsyncStorage.getItem('gender');
    setNameAcc(nameuser);
    setEmail(emailuser);
    setPhone(phoneuser);
    setDob(dob);
    setGender(gender);
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
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#F3F3F3',
          }}>
          <Text style={styles.label}>Họ & tên</Text>
          <TextInput
            style={{
              textAlignVertical: 'top',
              height: 40,
              width: 200,
              justifyContent: 'flex-start',
              color: '#000000',
              fontWeight: '600',
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
              marginRight: 20,
            }}
            onChangeText={text => setNameAcc(text)}
            defaultValue={nameuser}
            placeholder={nameuser}
          />
          {/* <Text style={styles.infor}>{data.nameuser}</Text> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#F3F3F3',
          }}>
          <Text style={styles.label}>Số điện thoại</Text>
          <TextInput
            style={{
              textAlignVertical: 'top',
              height: 40,
              width: 200,
              justifyContent: 'flex-start',
              color: '#000000',
              fontWeight: '600',
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
              marginRight: 20,
            }}
            onChangeText={e => setPhone(e)}
            defaultValue={phoneuser}
            placeholder={phoneuser}
          />
          {/* <Text style={styles.infor}>{data.nameuser}</Text> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#F3F3F3',
          }}>
          <Text style={{
            color: '#000000',
            fontWeight: '600',
            fontSize: 14,
            fontFamily: 'Montserrat-SemiBold',
            paddingTop: 15,
          }}>Ngày sinh</Text>
          <DatePicker
              style={styles.datePickerStyle}
              date={date} // Initial date from state
              mode="date" // The enum of date, datetime and time
              placeholder={date}
              format="DD/MM/YYYY"
              minDate="01-01-1999"
              maxDate="31-12-2021"
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#F3F3F3',
          }}>
          <Text style={{
          color: '#000000',
          fontWeight: '600',
          fontSize: 14,
          fontFamily: 'Montserrat-SemiBold',
          paddingTop: 20}}>Giới tính</Text>
          {love === 0 || love === null ? (
          <TouchableOpacity onPress={() => setLove(1)}>
          <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingLeft: 70,
            borderBottomWidth: 1,
            borderColor: '#F3F3F3',
          }}>
            <Fontisto name="male"
             size={20} color={'#000000'} 
             style={{marginTop: 5, marginRight: 5, marginLeft: -20}}/>
            <Text style={{
              color: '#000000',
              fontWeight: '600',
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
              paddingTop: 10,
            }}>Nam</Text>
          </View>
          </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setLove(0)}>
          <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingLeft: 70,
            borderBottomWidth: 1,
            borderColor: '#F3F3F3',
          }}>
            <Fontisto name="male"
             size={20} color={'#656565'} 
             style={{marginTop: 5, marginRight: 5, marginLeft: -20}}/>
            <Text style={{
              color: '#656565',
              fontWeight: '600',
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
              paddingTop: 10,
            }}>Nam</Text>
          </View>
          </TouchableOpacity>
           )}
           {love === 0 || love === null ? (
          <TouchableOpacity onPress={() => setLove(1)}>
          <View
          style={{
            flexDirection: 'row',
            paddingRight: 100,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: '#F3F3F3',
          }}>
            <Fontisto name="female" size={20}
             color={'#656565'} 
             style={{marginTop: 5, marginRight: 5}}/>
            <Text style={{
              color: '#656565',
              fontWeight: '600',
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
              paddingTop: 10,
            }}>Nữ</Text>
          </View>
          </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setLove(0)}>
          <View
          style={{
            flexDirection: 'row',
            paddingRight: 100,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: '#F3F3F3',
          }}>
            <Fontisto name="female" size={20}
             color={'#000000'} 
             style={{marginTop: 5, marginRight: 5}}/>
            <Text style={{
              color: '#000000',
              fontWeight: '600',
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
              paddingTop: 10,
            }}>Nữ</Text>
          </View>
          </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={{
              textAlignVertical: 'top',
              height: 40,
              width: 200,
              justifyContent: 'flex-start',
              color: '#000000',
              fontWeight: '600',
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
              marginRight: 20,
            }}
            onChangeText={e => setEmail(e)}
            defaultValue={emailuser}
            placeholder={emailuser}
          />
          {/* <Text style={styles.infor}>{data.nameuser}</Text> */}
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => updateAcc()}>
        <Text style={styles.buttonText}>Cập nhật thông tin</Text>
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
    color: '#000000',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    paddingTop: 10,
  },
  infor: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  button: {
    backgroundColor: '#00B14F',
    width: 270,
    height: 45,
    borderRadius: 50,
    marginTop: 70,
    marginLeft: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  datePickerStyle: {
    width: 200,
    marginTop: 5,
    marginRight: 20,
  },
});
export default ChangeInformationUser;
