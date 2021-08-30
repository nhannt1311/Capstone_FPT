/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const ListHistory = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const idAcc = await AsyncStorage.getItem('idAcc');
    console.log('datchekc', idAcc);
    const api =
      'http://192.168.1.10:8084/api/orders/accounts/' + idAcc + '/orders';
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
    setData(result);
  }

  async function Report(
    namSta,
    iddSta,
    iddYa,
    dayy,
    periodd,
    sportss,
    picNe,
    costNe,
    namYard
  ) {
    navigation.navigate('Report');
    AsyncStorage.setItem('iddSta', JSON.stringify(iddSta));
    AsyncStorage.setItem('iddYa', JSON.stringify(iddYa));
    AsyncStorage.setItem('namSta', namSta);
    AsyncStorage.setItem('namYard', namYard);
    AsyncStorage.setItem('dayy', dayy);
    AsyncStorage.setItem('periodd', periodd);
    AsyncStorage.setItem('sportss', sportss);
    AsyncStorage.setItem('picNe', picNe);
    AsyncStorage.setItem('costNe', JSON.stringify(costNe));
  }
  async function Review(
    namSta,
    iddSta,
    iddYa,
    dayy,
    periodd,
    sportss,
    picNe,
    costNe,
    namYard
  ) {
    navigation.navigate('Review');
    AsyncStorage.setItem('iddSta', JSON.stringify(iddSta));
    AsyncStorage.setItem('iddYa', JSON.stringify(iddYa));
    AsyncStorage.setItem('namSta', namSta);
    AsyncStorage.setItem('namYard', namYard);
    AsyncStorage.setItem('dayy', dayy);
    AsyncStorage.setItem('periodd', periodd);
    AsyncStorage.setItem('sportss', sportss);
    AsyncStorage.setItem('picNe', picNe);
    AsyncStorage.setItem('costNe', JSON.stringify(costNe));
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
              paddingBottom: 10,
              borderBottomWidth: 15,
              borderColor: '#F3F3F3',
            }}>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 5,
              borderColor: '#F3F3F3',
            }}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Yêu thích</Text>
                </TouchableOpacity>
                <Text style={{color:'#454545', fontWeight:'500',fontSize:12, paddingLeft:5, paddingTop: 2}}>{`${item.yard.stadium.nameStadium}`}</Text>
                </View>
                <Text style={{fontWeight:'500',color:'#00B14F',fontSize:12, paddingTop: 2}}>Hoàn thành</Text>
              </View>
              <View style={styles.cardView}>
              <Image
                style={{width: 75, height: 75, resizeMode: 'stretch'}}
                source={{
                  uri: `http://192.168.1.10:8084/${item.yard.stadium.imgSta}`,
                }}
              />
                <View style={styles.textView}>
                  <Text
                    style={{
                      color: '#454545',
                      fontSize: 18,
                      fontWeight: '600',
                      fontFamily: 'Montserrat-SemiBold',
                    }}>{`${item.yard.nameYard}`}</Text>
                  {/* <Text
                    style={{
                      fontSize: 12,
                      color: '#454545',
                      fontWeight: '600',
                      fontFamily: 'Montserrat-Regular',
                      paddingTop: 5,
                    }}>
                    Mã sân : S{`${item.yard.stadium.idSta}`}-
                    {`${item.yard.idYa}`}
                  </Text> */}
                  <Text
                    style={{
                      color: '#000000',
                      fontSize: 12,
                      fontWeight: '500',
                      fontFamily: 'Montserrat-SemiBold',
                      paddingTop: 5,
                    }}>
                    {`${item.day}`} {`${item.time.period}`}
                  </Text>
                </View>
                {item.cost === null ? (
                  <View style={{flex: 1}}>
                    {/* <Text
                      style={{
                        color: '#454545',
                        fontSize: 12,
                        fontWeight: '500',
                        fontFamily: 'Montserrat-SemiBold',
                        paddingTop: 7,
                        paddingLeft: 120,
                      }}>{`${item.yard.stadium.sports}`}</Text> */}
                    <Text
                      style={{
                        color: '#00B14F',
                        fontWeight: '600',
                        fontSize: 14,
                        fontFamily: 'Montserrat-SemiBold',
                        paddingTop: 65,
                        paddingLeft: 20,
                      }}>{`${item.cost
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}đ
                    </Text>
                  </View>
                ) : (
                  <View style={{flex: 1}}>
                    {/* <Text
                      style={{
                        color: '#454545',
                        fontSize: 12,
                        fontWeight: '500',
                        fontFamily: 'Montserrat-SemiBold',
                        paddingTop: 7,
                        paddingLeft: 120,
                      }}>{`${item.yard.stadium.sports}`}</Text> */}
                    <Text
                      style={{
                        color: '#00B14F',
                        fontWeight: '600',
                        fontSize: 14,
                        fontFamily: 'Montserrat-SemiBold',
                        paddingTop: 65,
                        paddingLeft: 20,
                      }}>
                      
                      {`${item.cost
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                      đ
                    </Text>
                  </View>
                )}
              </View>
            
          </View>
          <View style={{flexDirection:'row',paddingHorizontal:20,justifyContent:'space-between',paddingTop:10}}>
            
            <Text style={{color:'#3C3C3C',fontSize:12,fontWeight:'500'}}>Hãy cho sân xin 1 đánh giá để{'\n'}sân cải thiện tốt hơn nhé</Text>
            
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => 
            Report(
              item.yard.stadium.nameStadium,
              item.yard.stadium.idSta,
              item.yard.idYa,
              item.day,
              item.time.period,
              item.yard.stadium.sports,
              item.yard.stadium.imgSta,
              item.cost,
              item.yard.nameYard
            )
          }>
                <Text style={{
                  color:'#FF0000',
                  fontSize: 13,
                  fontWeight: '500',
                  paddingTop: 5,
                  paddingRight: 10}}>Báo cáo</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{
                  width:100,
                  height:30,
                  backgroundColor: '#00B14F',
                  borderRadius: 5,
                  justifyContent: 'center',}}
                  onPress={() =>
                    Review(
                      item.yard.stadium.nameStadium,
                      item.yard.stadium.idSta,
                      item.yard.idYa,
                      item.day,
                      item.time.period,
                      item.yard.stadium.sports,
                      item.yard.stadium.imgSta,
                      item.cost,
                      item.yard.nameYard
                    )
                  }>
                <Text style={{
                  fontSize: 13,
                  fontWeight: '500',
                  color: '#FFFFFF',
                  paddingLeft: 25,
                }}>Đánh giá</Text>
                </TouchableOpacity>
                </View>
          </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 10,
    borderColor: '#F3F3F3',
  },
  newContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#454545',
    marginLeft: 100,
  },
  cardView: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  textView: {
    flex: 2,
    paddingLeft: 10
  },
  button: {
    width: 50,
    height: 20,
    backgroundColor: '#00B14F',
    borderRadius: 2,
    justifyContent: 'center',

  },
  buttonText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#FFFFFF',
    paddingLeft: 5
  },
});
export default ListHistory;
