/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Picker,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-community/async-storage';
const RegisterMatch = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Bóng Đá');
  const [date, setDate] = useState('');
  const [comments, setComments] = useState('');
  const [text, onChangeText] = React.useState(null);
  const [titleMatch, setTitleMatch] = useState('');

  async function addBaiDang() {
    const idAcc = await AsyncStorage.getItem('idAcc');
    console.warn(selectedValue, date, titleMatch);
    var formdata = new FormData();
    formdata.append('sport', selectedValue);
    formdata.append('datetime', date);
    formdata.append('titleMatch', titleMatch);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      'http://192.168.1.10:8084/api/matchs/creMatch/' + idAcc,
      requestOptions,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then(result => {
        console.log(result);
        navigation.navigate('Find Match');
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 15,
            borderBottomWidth: 10,
            borderColor: '#F3F3F3',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left-circle"
              size={25}
              color={'#2E3A59'}
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#454545',
              fontWeight: 'bold',
              fontSize: 20,
              paddingLeft: 50,
            }}>
            Đăng ký tìm đội giao hữu
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: 10,
            borderBottomWidth: 10,
            borderColor: '#F3F3F3',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#454545',
                fontWeight: '600',
                fontSize: 16,
                marginLeft: 20,
                paddingTop: 10,
              }}>
              Môn thể thao
            </Text>
            <Picker
              selectedValue={selectedValue}
              style={{height: 50, width: 200, marginLeft: 30}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Bóng Đá" value="Bóng Đá" />
              <Picker.Item label="Bóng Rổ" value="Bóng Rổ" />
              <Picker.Item label="Bóng Bàn" value="Bóng Bàn" />
              <Picker.Item label="Bơi Lội" value="Bơi Lội" />
              <Picker.Item label="Cầu Lông" value="Cầu Lông" />
              <Picker.Item label="Tennis" value="Tennis" />
              <Picker.Item label="Bóng Chuyền" value="Bóng Chuyền" />
            </Picker>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Text
              style={{
                color: '#454545',
                fontWeight: '600',
                fontSize: 16,
                marginLeft: 20,
                paddingTop: 10,
              }}>
              Thời gian
            </Text>
            <DatePicker
              style={styles.datePickerStyle}
              date={date} // Initial date from state
              mode="date" // The enum of date, datetime and time
              placeholder={date}
              format="DD/MM/YYYY"
              minDate="25-08-2021"
              maxDate="31-12-2099"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                
                dateInput: {
                  marginLeft: 15,
                },
              }}
              onDateChange={date => {
                setDate(date);
              }}
            />
          </View>
          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <Text
              style={{
                color: '#454545',
                fontWeight: '600',
                fontSize: 16,
                marginLeft: 20,
              }}>
              Khu vực
            </Text>
            <Text
              style={{
                color: '#454545',
                fontWeight: '600',
                fontSize: 16,
                marginLeft: 70,
              }}>
              Đà Nẵng
            </Text>
          </View>
        </View>
        <View style={{flex: 1, alignContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: '#454545',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Montserrat-Regular',
              paddingTop: 10,
            }}>
            Nội dung
          </Text>
          <TextInput
            style={{
              width: 330,
              height: 140,
              borderWidth: 1,
              borderColor: '#6D6D6D',
              marginTop: 10,
              borderRadius: 7,
              justifyContent: 'flex-start',
              textAlignVertical: 'top',
              fontSize: 15,
            }}
            onChangeText={e => {
              setTitleMatch(e);
            }}
            value={text}
            multiline={true}
          />
          {/* <TouchableOpacity
            style={styles.button}
            onPress={
              () => addComment()
              //   nextScreen(item.idYa, item.nameYard, item.price, item.capacity)
            }> */}
          <TouchableOpacity style={styles.button} onPress={() => addBaiDang()}>
            <Text style={styles.buttonText}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterMatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 5,
    marginLeft: 50,
  },
  button: {
    backgroundColor: '#00B14F',
    width: 330,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
