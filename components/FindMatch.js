/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ShowMatch from './ShowMatch';
const FindMatch = ({navigation}) => {
  
  return (
    
    <KeyboardAvoidingView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 15,
            borderBottomWidth: 10,
            borderColor: '#F3F3F3',
          }}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('MainTabScreen')}>
            <Feather
              name="arrow-left-circle"
              size={25}
              color={'#2E3A59'}
              style={{marginLeft: 20}}
            />
          </Pressable>

          <Text
            style={{
              color: '#454545',
              fontWeight: 'bold',
              fontSize: 20,
              paddingLeft: 70,
            }}>
            Tìm đội giao hữu
          </Text>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <FontAwesome5
                name="plus"
                size={20}
                color={'#454545'}
                style={{paddingLeft: 80}}
              />
              <Text
                style={{
                  color: '#454545',
                  fontWeight: 'bold',
                  fontSize: 14,
                  marginLeft: 60,
                }}>
                Đăng ký
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 50}}>
          <ShowMatch navigation={navigation} />
        </View>
        </KeyboardAvoidingView>
        
  );
};

export default FindMatch;

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
