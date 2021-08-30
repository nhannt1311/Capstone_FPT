/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

import Fontisto from 'react-native-vector-icons/Fontisto';
import ListMatch from '../components/ListMatch';
import NewHomeMain from '../components/NewHomeMain';
import ShowMatch from '../components/ShowMatch';
import Sports from '../components/Sports';
import StadiumHomeMain from '../components/StadiumHomeMain';

const HomeScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <TouchableOpacity>
          <Pressable style={styles.searchButton}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Tên sân, Tên môn thao"
            />
          </Pressable>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate('Search')}>
          <Fontisto name="search" size={25} color={'#D0D0D0'} />
          <Text style={styles.input}>Tên sân, Tên môn thao</Text>
          {/* style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Tên sân, Tên môn thao"
            /> */}
        </TouchableOpacity>
        <View style={styles.newContainer}>
          <NewHomeMain navigation={navigation} />
        </View>
        <View style={styles.sportContainer}>
          <Sports navigation={navigation} />
        </View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
          <Text
            style={{
              color: '#454545',
              fontWeight: '600',
              fontSize: 17,
              fontFamily: 'Montserrat-SemiBold',
              paddingTop: 15,
            }}>
            TÌM ĐỐI THỦ
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Find Match')}>
          <Text
            style={{
              color: '#00B14F',
              fontWeight: '600',
              fontSize: 13,
              fontFamily: 'Montserrat-SemiBold',
              paddingTop: 15,
            }}>
            TÌM TRẬN
          </Text>
          </TouchableOpacity>
          </View>
          <ListMatch navigation={navigation} />
        </View>
        <View style={styles.stadiumContainer}>
          <Text
            style={{
              color: '#454545',
              fontWeight: '600',
              fontSize: 17,
              fontFamily: 'Montserrat-SemiBold',
              paddingLeft: 25,
              paddingTop: 20,
            }}>
            TOP SÂN YÊU THÍCH
          </Text>
          <StadiumHomeMain navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchButton: {
    backgroundColor: '#F5F6FB',
    width: Dimensions.get('screen').width - 30,
    marginLeft: 15,
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 20,
    borderRadius: 20,
    color: '#A0A0A0',
  },
  newContainer: {
    flex: 1,
   
  },
  sportContainer: {
    flex: 1,
    
  },
  stadiumContainer: {
    flex: 1,
  },
});
