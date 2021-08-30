/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Favorite = ({navigation}) => {
  const [favorite, setFavorite] = useState([]);
  

  useEffect(() => {
    Favo();
  }, []);

  
  async function Favo() {
    const idAcc = await AsyncStorage.getItem('idAcc');
    const api =
      'http://192.168.1.10:8084/api/favorites/accounts/' + idAcc + '/favorites';
    const result = await fetch(api).then(response => {
      return response
        .json()
        .then(data => {
          console.log(data.content);
          return data.content;
        })
        .catch(err => {
          console.log(err);
        });
    });
    setFavorite(result.filter(favorite => favorite.love !== 0));
    console.log('abca', result);
  }

  async function unFavou(idmn) {
    const idAcc = await AsyncStorage.getItem('idAcc');
    const idSta = await AsyncStorage.getItem('idstadium');
    var requestOptions = {
      method: 'PUT',
      redirect: 'follow',
    };

    fetch(
      'http://192.168.1.10:8084/api/favorites/changeUnFavotite/' +
        idAcc +
        '/' +
        idSta +
        '/' +
        idmn,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log('CheckClickLove', result);
        Favo();
      })
      .catch(error => console.log('error', error));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList 
        data={favorite}
        showsVerticalScrollIndicator={false}
        keyExtractor={(x, i) => i}
        renderItem={({item}) => (
      <View style={{flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 3, borderColor: '#F3F3F3'}}>
            <Image
              style={{
                width: 130,
                height: 100,
                resizeMode: 'stretch', 
                borderRadius: 5,
                marginLeft: 20,
              }}
              source={{
                uri: `http://192.168.1.10:8084/${item.stadium.imgSta}`,
              }}
            />
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#454545',
                  fontFamily: 'Montserrat-Bold',
                }}>
                {item.stadium.nameStadium}
              </Text>
              <View style={{flexDirection: 'row'}}>
              <EvilIcons
              name="location"
              size={15}
              color={'#2E3A59'}
              style={{paddingTop: 5, paddingRight: 5}}
            />
              <Text
                style={{
                  color: '#535353',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 5,
                }}>
                {item.stadium.address}
              </Text>
              </View>
              <Text
                style={{
                  color: '#00B14F',
                  fontSize: 13,
                  fontWeight: '500',
                  fontFamily: 'Montserrat-SemiBold',
                  borderWidth: 1,
                  borderRadius: 5,
                  justifyContent: 'center',
                  textAlign: 'center',
                  width: 110,
                  height: 30,
                  padding: 5,
                  marginTop: 5,
                  borderColor: '#00B14F'
                }}>
                {item.stadium.sports}
              </Text>
              <Text
                style={{
                  color: '#00B14F',
                  fontSize: 12,
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat-Bold',
                  paddingTop: 10,
                }}>
                {'Giá sân :'}{' '}
                {item.stadium.priceMin
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                {'đ'}{' ~ '}
                {item.stadium.priceMax
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                {'đ'}
              </Text>
            </View>
            <TouchableOpacity onPress={() => unFavou(item.idFav)}>
              <FontAwesome
                name="heart"
                size={25}
                color={'#FF0303'}
                style={{paddingRight: 20}}
              />
            </TouchableOpacity>
          </View>
        )}
        />
    </SafeAreaView>
  );
};

export default Favorite;
