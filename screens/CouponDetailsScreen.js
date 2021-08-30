/* eslint-disable react-native/no-inline-styles */
import React, {useState,useEffect} from 'react';
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
const CouponDetailsScreen = ({navigation}) => {
  const [data, setData] = useState({
    titlecp: '',
    shortcp: '',
    timecp: '',
    imgcp:'',
  });

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const titlecp = await AsyncStorage.getItem('titlecp');
      const shortcp = await AsyncStorage.getItem('shortcp');
      const timecp = await AsyncStorage.getItem('timecp');
      const imgcp = await AsyncStorage.getItem('imgcp');
    setData({
      titlecp,
      shortcp,
      timecp,
      imgcp,
    });
  }




    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather
                name="arrow-left-circle"
                size={25}
                color={'#2E3A59'}
                style={{marginLeft: 20}}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Thông tin Coupon</Text>
          </View>
          <View style={styles.newContainer}>
            <Image
              style={{width: 330, height: 200, borderRadius: 10, resizeMode: 'stretch'}}
              source={{uri: `http://192.168.1.10:8084/${data.imgcp}`}}
            />
          </View>
          <View style={styles.titlenew}>
            <Text
              style={{
                padding: 10,
                color: '#454545',
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Montserrat-Bold',
              }}>
              {data.titlecp}
            </Text>

            <Text
              style={{
                padding: 10,
                color: '#454545',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
              }}>Hạn sử dụng: {data.timecp.split('T')[0]}
            </Text>

            <Text
              style={{
                padding: 10,
                color: '#454545',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
              }}>
              {data.shortcp}
            </Text>
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
  newContainer: {
    flex: 1,
    borderColor: '#F3F3F3',
    paddingLeft: 30,
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 10,
    borderTopWidth: 10,
  },
  title: {
    color: '#454545',
    fontSize: 18,
    marginRight: 110,
    padding: 10,
    marginTop: -10,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
  },
  titlenew: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
export default CouponDetailsScreen;