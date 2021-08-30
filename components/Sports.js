/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Sports = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
              paddingLeft: 25,
              paddingTop: 25,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Soccer')}>
              <Image
                source={require('../assets/icon/icon_bongda.png')}
                style={{width: 50, height: 50, marginLeft: 5}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#454545',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 5,
                }}>
                Bóng đá
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
              paddingLeft: 10,
              paddingTop: 25,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Basketball')}>
              <Image
                source={require('../assets/icon/icon_bongro.png')}
                style={{width: 50, height: 50, marginLeft: 5}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#454545',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 5,
                }}>
                Bóng rổ
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
              paddingLeft: 10,
              paddingTop: 25,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Badminton')}>
              <Image
                source={require('../assets/icon/icon_caulong.png')}
                style={{width: 50, height: 50, marginLeft: 5}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#454545',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 5,
                }}>
                Cầu lông
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
              paddingLeft: 10,
              paddingTop: 25,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Pingpong')}>
              <Image
                source={require('../assets/icon/icon_bongban.png')}
                style={{width: 50, height: 50, marginLeft: 5}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#454545',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 5,
                }}>
                Bóng bàn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 10,
              paddingVertical: 10,
              paddingLeft: 25,
              paddingTop: 15,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Tennis')}>
              <Image
                source={require('../assets/icon/icon_tennis.png')}
                style={{width: 50, height: 50, marginLeft: 5}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#454545',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 5,
                  marginLeft: 5,
                }}>
                Tennis
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
              paddingLeft: 10,
              paddingTop: 15,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Volleyball')}>
              <Image
                source={require('../assets/icon/icon_bongchuyen.png')}
                style={{width: 50, height: 50, marginLeft: 5}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#454545',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 5,
                  width: 250,
                  marginLeft: -20,
                }}>
                Bóng chuyền
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
              paddingLeft: 10,
              paddingTop: 15,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Swim')}>
              <Image
                source={require('../assets/icon/icon_boiloi.png')}
                style={{width: 50, height: 50, marginLeft: 5}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#454545',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 5,
                  marginLeft: 7,
                }}>
                Bơi lội
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 10,
              paddingLeft: 10,
              paddingTop: 15,
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('More')}>
              <Image
                source={require('../assets/icon/icon_more.png')}
                style={{width: 50, height: 50, marginLeft: 5}}
              />
              <Text
                style={{
                  fontWeight: '500',
                  color: '#454545',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                  paddingTop: 5,
                  marginLeft: -7,
                }}>
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#454545',
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    paddingLeft: 25,
  },
});

export default Sports;
