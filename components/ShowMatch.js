/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
const ShowMatch = ({navigation}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [text, onChangeText] = React.useState(null);
  useEffect(() => {
    Favo();
  }, []);

  async function Favo() {
    const idNa = await AsyncStorage.getItem('idAcc');
    const api = 'http://192.168.1.10:8084/api/matchs/showMatch';
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
    setData(result.filter(data => data.account.idAcc != idNa && data.statusMatch === 'noConfirm'));
    console.log('abca', result);
  }
  async function conFirmMatch(idmn) {
    const idAcc = await AsyncStorage.getItem('idAcc');
    var requestOptions = {
      method: 'PUT',
      redirect: 'follow',
    };

    fetch('http://192.168.1.10:8084/api/matchs/'+idAcc+'/'+idmn+'/confirmMatch',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log('CheckClickLove', result);
        Favo();
      })
      .catch(error => console.log('error', error));
  }

  async function conFirmPeople(idmn) {
    const idx = await AsyncStorage.getItem('idAcc');
    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };

    fetch('http://192.168.1.10:8084/api/matchs/' + idx + '/' + idmn ,
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
      <View
          style={{
            padding: 10,
            borderBottomWidth: 10,
            borderColor: '#F3F3F3',
          }}>
          <Pressable style={styles.searchButton}>
            <Fontisto name="search" size={25} color={'#D0D0D0'} />
            <TextInput
              style={styles.input}
              value={text}
              placeholder="Tên môn thao, Ngày tìm kiếm"
              onChangeText={e => {
                setSearch(e);
              }}
            />
          </Pressable>
        </View>
      <FlatList
        data={data.filter(val => {
          if (search == '') {
            return val;
          } else if (
            val.sport.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }else if (
            val.dateTime.includes(search.toLowerCase())
          ) {
            return val;
          }
        })}
        showsVerticalScrollIndicatorScrollIndicator={false}
        keyExtractor={(x, i) => i}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              borderBottomWidth: 8,
              borderColor: '#F3F3F3',
              paddingBottom: 10,
            }}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
              <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#454545',
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  {`${item.sport}`}
                </Text>
                <Image
          source={require('../assets/icon/icon_time.png')}
          style={{height: 15, width: 15, borderRadius: 10, position: 'absolute', right: 105, top: 8}}
        />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#818181',
                      fontFamily: 'Montserrat-Regular',
                      paddingTop: 5,
                    }}>
                    {`${item.dateTime}`}
                  </Text>
                </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}>
                {item.account.imgAcc === 'No Image' ? (
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                    }}
                    source={require('../assets/image/avatar_1.png')}
                  />
                ) : (
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                    }}
                    source={{
                      uri: `http://192.168.1.10:8084/${item.account.imgAcc}`,
                    }}
                  />
                )}
                <View style={{flex: 1, paddingLeft: 10}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#454545',
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    {item.account.nameAcc}
                  </Text>
                  
                </View>
              </View>
              <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: 'black',
                  fontFamily: 'Montserrat-SemiBold',
                  paddingTop: 15,
                  paddingHorizontal: 20,
                }}>
                {`${item.titleMatch}`}
              </Text>
              <TouchableOpacity
                onPress={() => {conFirmMatch(item.idMat);
                  conFirmPeople(item.idMat);}}
                style={{backgroundColor: '#00B14F',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                width: 130,
                height: 40,
                marginTop: 25,
                marginLeft: 130,
                marginBottom: 10,}}>
                <Text style={{fontSize: 13,
                fontWeight: '600',
                fontFamily: 'Montserrat-SemiBold',
                color: '#FFFFFF',}}>
                  Nhận kèo ngay</Text>
              </TouchableOpacity>
              </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ShowMatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchButton: {
    backgroundColor: '#F5F6FB',
    width: 320,
    marginLeft: 25,
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 20,
    borderRadius: 20,
    color: '#A0A0A0',
  },
});

