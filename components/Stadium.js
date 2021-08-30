/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Comment from './Comment';
const Stadium = ({navigation}) => {
  const [active, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [love, setLove] = useState(0);
  console.log('Check like', love);
  const [timeId, setTimeId] = useState({timeId: '', nameId: ''});
  const [data, setData] = useState({
    idstadium: '',
    namestadium: '',
    addressstadium: '',
    descriptionstadium: '',
    sportsstadium: '',
    minprice: '',
    maxprice: '',
    imgstadium: '',
  });

  useEffect(() => {
    getData();
  }, []);
  async function addFavo() {
    const idAcc = await AsyncStorage.getItem('idAcc');
    const idSta = await AsyncStorage.getItem('idstadium');
    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };

    fetch(
      'http://192.168.1.10:8084/api/favorites/addFavotite/' +
        idAcc +
        '/' +
        idSta,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log(result);
      })
      .catch(error => console.log('error', error));
  }

  async function getData() {
    const idstadium = await AsyncStorage.getItem('idstadium');
    const namestadium = await AsyncStorage.getItem('namestadium');
    const addressstadium = await AsyncStorage.getItem('addressstadium');
    const descriptionstadium = await AsyncStorage.getItem('descriptionstadium');
    const sportsstadium = await AsyncStorage.getItem('sportsstadium');
    const minprice = await AsyncStorage.getItem('minprice');
    const maxprice = await AsyncStorage.getItem('maxprice');
    const imgstadium = await AsyncStorage.getItem('imgstadium');
    setData({
      idstadium,
      namestadium,
      addressstadium,
      descriptionstadium,
      sportsstadium,
      minprice,
      maxprice,
      imgstadium,
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left-circle"
              size={25}
              color={'#2E3A59'}
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Chi tiết sân</Text>
          {love === 0 || love === null ? (
            <TouchableOpacity
              onPress={() => {
                setLove(1);
                addFavo();
              }}>
              <FontAwesome
                name="heart-o"
                size={30}
                color={'#2E3A59'}
                style={{paddingRight: 20}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setLove(0)}>
              <FontAwesome
                name="heart"
                size={30}
                color={'#FF0303'}
                style={{paddingRight: 20}}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.newContainer}>
          <Image
            style={{
              width: 395,
              height: 250,
              resizeMode: 'stretch', 
              borderRadius: 10}}
            source={{uri: `http://192.168.1.10:8084/${data.imgstadium}`}}
          />
        </View>
        <View style={styles.titlenew}>
        <View style={{flexDirection: 'row'}}>
        <FontAwesome
                name="flag"
                size={15}
                color={'#FFDF00'}
                style={{paddingRight: 10}}
              />
            <Text
              style={{
                color: '#454545',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',

              }}>
              Sân được đánh giá tốt
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                padding: 10,
                color: '#454545',
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Montserrat-Bold',
                paddingLeft: 0,
              }}>
              {data.namestadium}
            </Text>
            <Text
              style={{
                padding: 10,
                color: '#454545',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
                paddingRight: 0,
                paddingTop: 15,
              }}>
              {data.sportsstadium}
            </Text>
          </View>
          <View style={{flexDirection: 'row', paddingLeft: 0}}>
            <EvilIcons
              name="location"
              size={25}
              color={'#2E3A59'}
            />
            <Text
              style={{
                color: '#454545',
                fontSize: 12,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
                paddingTop: 5,
              }}>
              {data.addressstadium}
            </Text>
          </View>
          
        </View>
        <View style={styles.titlenew}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '500',
              fontFamily: 'Montserrat-Regular',
              paddingLeft: 0,
              color: '#454545',
              paddingBottom: 5,
            }}>
            Giá thuê sân
          </Text>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
            <FontAwesome
                name="tag"
                size={15}
                color={'#000000'}
                style={{paddingRight: 10}}
              />
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              fontFamily: 'Montserrat-Bold',
              color: '#000000',
            }}>
            {data.minprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ -{' '}
            {data.maxprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ
          </Text>
          </View>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '500',
              fontFamily: 'Montserrat-Regular',
              paddingTop: 5,
              color: '#000000'
            }}>
            Giờ hoạt động : 6:00AM - 9:00PM
          </Text>
        </View>
        <View style={styles.titlenew}>
          <Text
            style={{
              color: '#454545',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Montserrat-Regular',
              paddingLeft: 0,
            }}>
            Mô tả về sân
          </Text>
          <Text
            style={{
              color: '#535353',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Montserrat-Regular',
              paddingHorizontal: 0,
              paddingVertical: 10,
            }}>
            {data.descriptionstadium}
          </Text>
        </View>
        <View style={styles.titlenew}>
          <Text
            style={{
              color: '#454545',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Montserrat-Regular',
              paddingLeft: 0,
            }}>
            Tiện nghi tại sân
          </Text>
          <Text
            style={{
              color: '#535353',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Montserrat-Regular',
              paddingHorizontal: 0,
              paddingVertical: 10,
            }}>
            -Chỗ để xe rộng rãi{'\n'}-Phục vụ wifi miễn phí{'\n'}-Dịch vụ thuê
            giày, giày, thuê thuê bóng, các đồ tập thể thao{'\n'}-Đầu tư xây
            dựng các công trình phụ trợ khác như: Căng tin, nhà vệ sinh, hệ điều
            hành
          </Text>
        </View>
        <View style={styles.comment}>
          <Comment />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ChooseYard')}>
          <Text style={styles.buttonText}>Chọn sân</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  newContainer: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
    marginLeft: 0,
    fontFamily: 'Montserrat-Bold',
  },
  titlenew: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 10,
    borderColor: '#F3F3F3',
  },
  comment: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
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
export default Stadium;