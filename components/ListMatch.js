/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ListMatch = ({navigation}) => {
  const [data, setData] = useState([]);

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
    setData(result.filter(data => data.account.idAcc != idNa));
    console.log('abca', result);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(x, i) => i}
        renderItem={({item}) => (
          <View
            style={{
                flex: 1,
                backgroundColor: '#FFFFFF',
                margin: 10,
                borderRadius: 5,
                width: Dimensions.get('screen').width - 20,
                height: 170,
                shadowColor: '#000000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.7,
                shadowRadius: 1,
                elevation: 5,
                padding: 5,
            }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Find Match')}> */}
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}>
                {item.account.imgAcc === 'No Image' ? (
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                    }}
                    source={require('../assets/image/avatar_1.png')}
                  />
                ) : (
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
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

                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: 'black',
                      fontFamily: 'Montserrat-SemiBold',
                      paddingTop: 2,
                    }}>
                    {`${item.dateTime}`}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#00B14F',
                    fontFamily: 'Montserrat-Regular',
                    position: 'relative',
                    right: -20,
                    top: 3,
                  }}>
                  {`${item.sport}`}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#000000',
                  fontFamily: 'Montserrat-SemiBold',
                  paddingTop: 5,
                  paddingHorizontal: 20,
                }}
                numberOfLines={4}
                ellipsizeMode={'tail'}>
                {`${item.titleMatch}`}
              </Text>
            {/* </TouchableOpacity> */}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ListMatch;
