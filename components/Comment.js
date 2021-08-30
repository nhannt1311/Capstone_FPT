/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Comment = ({navigation}) => {
const [data, setData] = useState('');

useEffect(() => {
  getData();
}, []);

async function getData() {
  const id_stadium = await AsyncStorage.getItem('idstadium');
  const api = 'http://192.168.1.10:8084/api/comments/stadiums/'+id_stadium+'/comments';
  const result = await fetch(api).then(response => {
    return response
      .json()
      .then(data => {
        console.log('checkContent', data.content);
        return data.content;
      })
      .catch(err => {
        console.log(err);
      });
  });
  setData(result);
}


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
      <Icon name="people-alt" color={'#2E3A59'} size={15} />
        <Text
          style={{
            color: '#454545',
            fontSize: 14,
            fontWeight: 'bold',
            fontFamily: 'Montserrat-Bold',
            paddingBottom: 10,
            paddingLeft: 10,
          }}>
          Đánh giá về sân
        </Text>
      </View>
      <SafeAreaView style={{flex: 1, borderBottomWidth: 5, borderColor: '#F3F3F3'}}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <View style={styles.cardView}>
            <View
              style={{
                flexDirection: 'row',
                paddingBottom: 10,
              }}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                  }}
                  // source={{
                  //   uri: `http://192.168.1.10:8084/${item.account.imgAcc}`,
                  // }}
                  source={require('../assets/image/avatar_1.png')}
                />
                <View style={{flex: 1, paddingLeft: 10}}>
                <Text
                    style={{
                      color: '#454545',
                      fontSize: 15,
                      fontWeight: '600',
                      fontFamily: 'Montserrat-SemiBold',
                    }}>{`${item.account.nameAcc}`}</Text>
                <Text
                    style={{
                      color: '#454545',
                      fontSize: 12,
                      fontWeight: '500',
                      fontFamily: 'Montserrat-Regular',
                      paddingTop: 5,
                    }}>
                    {`${item.timeCmt.replace('T','  ').split('.')[0]}`}
                  </Text>
                </View>
            </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#454545',
                      fontWeight: '500',
                      fontFamily: 'Montserrat-Regular',
                      paddingTop: 5,
                    }}
                    numberOfLines={4}
                    ellipsizeMode={'tail'}
                  >{`${item.cmt}`}
                  </Text>
            </View>
          )}
        />
      </SafeAreaView>
      {/* <View style={{flexDirection: 'row', paddingBottom: 10}}>
        <Image
          source={require('../assets/image/avatar_1.png')}
          style={{width: 50, height: 50, borderRadius: 25}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Montserrat-Regular',
            paddingBottom: 10,
            paddingLeft: 20,
          }}>
          Thanh Dat
        </Text>
      </View>
      <View style={{flex: 1}}>
      <Text>Đặt sân nhanh chóng, sân cỏ rất êm chân, sẽ ghé lại</Text>
      </View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    width: Dimensions.get('screen').width - 20,
    height: 170,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 3,
    padding: 10,
  }
});
export default Comment;
