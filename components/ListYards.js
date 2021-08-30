/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
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
import Icon from 'react-native-vector-icons/Ionicons';
const ListYards = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const id_stadium = await AsyncStorage.getItem('idstadium');
    console.log('datchekc', id_stadium);
    const api =
      'http://192.168.1.10:8084/api/stadiums/' + id_stadium + '/yards';
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

  async function nextScreen(idYa, nameYard, price, capacity) {
    // navigation.navigate('YardDetails');
    navigation.navigate('ChooseDate');
    AsyncStorage.setItem('idyard', JSON.stringify(idYa));
    AsyncStorage.setItem('nameyard', nameYard);
    AsyncStorage.setItem('priceyard', JSON.stringify(price));
    AsyncStorage.setItem('capacityyard', JSON.stringify(capacity));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left-circle"
            size={25}
            color={'#2E3A59'}
            style={{marginLeft: 20}}
          />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Chọn sân</Text>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 20,
              color: '#454545',
              marginLeft: 80,
            }}>
            Sân chuyên việt
          </Text>
        </View>
      </View>
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
                borderBottomWidth: 8,
                borderColor: '#F3F3F3',
              }}>
              <View style={styles.cardView}>
              <Image
                  style={{
                    width: 70,
                    height: 70,
                    resizeMode: 'stretch', 
                    borderRadius: 2,
                  }}
                  source={{
                    uri: `http://192.168.1.10:8084/${item.stadium.imgSta}`,
                  }}
                />
                <View style={styles.textView}>
                  <Text
                    style={{
                      color: '#454545',
                      fontSize: 16,
                      fontWeight: '600',
                      fontFamily: 'Montserrat-SemiBold',
                    }}>{`${item.nameYard}`}</Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '500',
                      fontFamily: 'Montserrat-Regular',
                      paddingTop: 5,
                    }}>
                    Mã sân : A{`${item.idYa}`}
                  </Text>
                </View>
                <View style={{flex: 1}}>
                <Text
                    style={{
                      color: '#00B14F',
                      fontSize: 12,
                      fontWeight: '500',
                      fontFamily: 'Montserrat-SemiBold',
                      position: 'absolute',
                      right: 0,
                      top: 5
                    }}>Hoạt động
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '500',
                      fontFamily: 'Montserrat-Regular',
                      position: 'absolute',
                      right: 0,
                      top: 30
                    }}>
                    Sức chứa: {`${item.capacity}`} người
                  </Text>
                  <Text
                    style={{
                      color: '#00B14F',
                      fontSize: 14,
                      fontWeight: '600',
                      fontFamily: 'Montserrat-SemiBold',
                      position: 'absolute',
                      right: 0,
                      top: 50
                    }}>
                    {`${item.price}`
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    đ
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between', paddingHorizontal: 20}}>
                <View style={{flexDirection: 'row'}}>
                <FontAwesome name="dot-circle-o" color={'#2E3A59'} size={15} style={{paddingTop: 5}}/>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                fontFamily: 'Montserrat-Regular',
                paddingTop: 5,
                paddingHorizontal: 5
              }}>
              Có wifi miễn phí, bãi đỗ xe, quầy bán nước{`\n`}Không cần thanh toán trước
            </Text>
                </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  nextScreen(
                    item.idYa,
                    item.nameYard,
                    item.price,
                    item.capacity,
                  )
                }>
                <Text style={styles.buttonText}>Chọn sân</Text>
              </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
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
    borderBottomWidth: 3,
    borderColor: '#F3F3F3'
  },
  textView: {
    flex: 1,
    paddingLeft: 10
  },
  button: {
    borderWidth: 1,
    borderColor: '#00B14F',
    borderRadius: 3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00B14F',
  },
});
export default ListYards;
