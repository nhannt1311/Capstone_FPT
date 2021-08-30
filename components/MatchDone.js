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
} from 'react-native';
const MatchDone = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Favo();
  }, []);


  async function Favo() {
    const idNa = await AsyncStorage.getItem('idAcc');
    const api = 'http://192.168.1.10:8084/api/matchs/viewAllMatchConfirm';
    const result = await fetch(api).then(response => {
      return response
        .json()
        .then(data => {
          console.log(data);
          return data;
        })
        .catch(err => {
          console.log(err);
        });
    });
    setData(result.filter(data => data.account.idAcc == idNa));
    console.log('abca', result);
  }
  async function deleteFavo(laySo) {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };
    
    fetch("http://192.168.1.10:8084/api/matchs/"+ laySo, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        Favo();
      })
      .catch(error => console.log('error', error));
  }
  async function getNames(id,name,title,img,time) {
    AsyncStorage.setItem('idMat',JSON.stringify(id));
    AsyncStorage.setItem('nameChuSan',name);
    AsyncStorage.setItem('titleMat',title);
    AsyncStorage.setItem('imgChuSan',img);
    AsyncStorage.setItem('timezz',time);
    navigation.navigate('Match Info')
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
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
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}>
              {item.account.imgAcc === 'No Image' ? (
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                  }}
                  source={require('../assets/image/avatar_1.png')}
                />
              ) : (
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                  }}
                  source={{
                    uri: `http://192.168.1.10:8084/${item.match.account.imgAcc}`,
                  }}
                />
              )}
              
              <View style={{flex: 1, paddingLeft: 15}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#454545',
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  {item.match.account.nameAcc}
                </Text>

                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                    color: 'black',
                    fontFamily: 'Montserrat-SemiBold',
                    paddingTop: 2,
                  }}>Ngày hẹn:{' '}
                  {`${item.match.dateTime}`}
                </Text>

                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '500',
                    color: 'black',
                    fontFamily: 'Montserrat-SemiBold',
                    paddingTop: 2,
                  }}>Số điện thoại:{' '}
                  {`${item.match.account.phone}`}
                </Text>
              </View>

              <View style={{flex: 1, position: 'absolute', right: 20, top: 10}}>
              {item.statusMatch === "noConfirm" ?
                <TouchableOpacity onPress={() => deleteFavo(item.idMat)}>
                <Image
                source={require('../assets/icon/icon_delete.png')}
                style={{width: 25, height: 25, borderRadius: 25}}
                />
              </TouchableOpacity> 
            :   <TouchableOpacity onPress={() => getNames(item.idMat, item.account.nameAcc,item.titleMatch,item.account.imgAcc,item.dateTime)  }>
            <Image
            source={require('../assets/icon/icon_checked.png')}
            style={{width: 25, height: 25, borderRadius: 25}}
            />
          </TouchableOpacity> }
                
              </View>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: 'black',
                fontFamily: 'Montserrat-SemiBold',
                paddingTop: 5,
                paddingHorizontal: 20,
              }}>
              {`${item.match.titleMatch}`}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MatchDone;
